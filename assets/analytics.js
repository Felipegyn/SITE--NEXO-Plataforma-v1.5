/* NEXO · medição de oportunidades comerciais (GA4) com consentimento.
 *
 * ESTADO: DESLIGADO. Com GA_ID vazio este arquivo não carrega script externo, não grava nada
 * no navegador, não mostra aviso e não escuta eventos. Só expõe NEXO_MEDICAO.classificar (testes).
 *
 * Para ativar (ver NEXO_Contrato_Eventos_e_CRM.md, fora do repositório público):
 *   1. GA_ID = ID de medição da propriedade GA4 oficial da NEXO (G-XXXXXXXXXX). Não criar propriedade duplicada.
 *   2. Publicar a política de privacidade e preencher URL_PRIVACIDADE.
 *   3. Revisar o texto do aviso com o responsável pela LGPD.
 *
 * Contrato de evento (igual para GA4 e para a futura integração com o NEXO CRM):
 *   event_name, page_path, service, placement, demo, source, campaign, event_id, timestamp
 * Nunca entram: nome, telefone, texto do formulário ou da mensagem de WhatsApp, IP ou identificador de pessoa.
 * Clique ou envio de formulário é OPORTUNIDADE, não venda.
 */
(function () {
  'use strict';
  var GA_ID = '';            // ← ID de medição GA4. Vazio = desligado.
  var URL_PRIVACIDADE = '';  // ← endereço da política de privacidade (obrigatório antes de ativar).
  var CHAVE = 'nexo-consentimento-medicao'; // 'sim' | 'nao'

  var SERVICOS = {
    'criacao-de-sites': 'criacao_de_sites', 'google-perfil-da-empresa': 'google_perfil_da_empresa',
    'sistemas-sob-medida': 'sistemas_sob_medida', 'automacao-de-processos': 'automacao_de_processos', 'google-ads': 'google_ads'
  };
  function servicoDaPagina() { var m = location.pathname.match(/^\/([^/]+)\//); return (m && SERVICOS[m[1]]) || 'geral'; }

  // Regras de classificação de cliques (sem dados pessoais). Retorna [event_name, params] ou null.
  function classificar(alvo) {
    var a = alvo && alvo.closest && alvo.closest('a,button');
    if (!a) return null;
    var href = a.getAttribute('href') || '';
    var placement = a.closest('header') ? 'cabecalho' : a.closest('footer') ? 'rodape' : a.classList.contains('wa') ? 'flutuante' : 'pagina';
    if (a.matches('button.open')) return ['clique_demonstracao', { demo: a.dataset.k || '', placement: placement }];
    if (/^\/?demos\//.test(href)) return ['clique_demonstracao', { demo: href.replace(/^\//, '').split('/')[1] || '', placement: placement }];
    if (/wa\.me\//.test(href)) return ['clique_whatsapp', { service: servicoDaPagina(), placement: placement }];
    if (/#contato$/.test(href)) return ['clique_pedir_proposta', { service: servicoDaPagina(), placement: placement }];
    var m = href.match(/^\/([a-z-]+)\/$/);
    if (m && SERVICOS[m[1]]) return ['clique_servico', { service: SERVICOS[m[1]], placement: placement }];
    return null;
  }
  window.NEXO_MEDICAO = { classificar: classificar, ativo: false, eventos: [] };

  if (!GA_ID) return; // Desligado: nada além deste ponto é executado.

  function ler(k, area) { try { return (area || localStorage).getItem(k); } catch (e) { return null; } }
  function gravar(k, v, area) { try { (area || localStorage).setItem(k, v); } catch (e) {} }
  function idEvento() { try { return crypto.randomUUID(); } catch (e) { return Date.now().toString(36) + Math.random().toString(36).slice(2, 10); } }

  // Origem da visita (só campos de campanha e domínio de referência; nada da pessoa).
  function origem() {
    var salvo = ler('nexo-origem', sessionStorage); if (salvo) { try { return JSON.parse(salvo); } catch (e) {} }
    var q = new URLSearchParams(location.search), ref = '';
    try { ref = document.referrer ? new URL(document.referrer).hostname : ''; } catch (e) {}
    var o = { source: q.get('utm_source') || (q.get('gclid') ? 'google_ads' : ref && ref !== location.hostname ? ref : 'direto'), campaign: q.get('utm_campaign') || '' };
    gravar('nexo-origem', JSON.stringify(o), sessionStorage); return o;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });

  var carregado = false, org = null;
  function carregar() {
    if (carregado) return; carregado = true; org = origem();
    gtag('consent', 'update', { analytics_storage: 'granted' });
    var s = document.createElement('script'); s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
    window.NEXO_MEDICAO.ativo = true;
  }
  function evento(nome, extra) {
    if (!carregado) return;
    var p = { page_path: location.pathname, service: servicoDaPagina(), source: org.source, campaign: org.campaign, event_id: idEvento(), timestamp: new Date().toISOString() };
    for (var k in extra) if (extra[k] !== undefined && extra[k] !== '') p[k] = extra[k];
    window.gtag('event', nome, p);
    window.NEXO_MEDICAO.eventos.push({ event_name: nome, params: p }); // ponte para o futuro NEXO CRM (memória da página, não é enviada)
  }

  document.addEventListener('click', function (e) { var r = classificar(e.target); if (r) evento(r[0], r[1]); }, true);
  var iniciou = false;
  document.addEventListener('focusin', function (e) {
    if (!iniciou && e.target.closest && e.target.closest('#f')) { iniciou = true; evento('inicio_formulario', {}); }
  });
  document.addEventListener('submit', function (e) {
    if (e.target.id !== 'f') return;
    var n = (document.getElementById('n') || {}).value || '', d = (document.getElementById('d') || {}).value || '';
    var escolha = ((document.getElementById('s') || {}).value || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '_');
    if (n.trim() && d.trim().length >= 10) evento('envio_formulario_validado', { service_selected: escolha });
  }, true);

  function aviso() {
    if (document.getElementById('nexo-aviso-medicao')) return;
    var b = document.createElement('div');
    b.id = 'nexo-aviso-medicao'; b.setAttribute('role', 'region'); b.setAttribute('aria-label', 'Aviso de medição');
    b.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;max-width:560px;margin-inline:auto;z-index:30;background:var(--surface);color:var(--fg);border:1px solid var(--line);border-radius:16px;padding:16px 18px;box-shadow:0 12px 32px -12px #0006;font-size:15px;line-height:1.5';
    b.innerHTML = '<p style="margin:0 0 12px">Usamos medição (Google Analytics) para saber quais páginas ajudam nossos visitantes. Nenhum dado dos formulários é coletado.' +
      (URL_PRIVACIDADE ? ' <a href="' + URL_PRIVACIDADE + '" style="color:var(--amber)">Política de privacidade</a>.' : '') + ' Você aceita?</p>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap"><button type="button" class="btn" data-c="sim" style="padding:11px 20px;font-size:14px">Aceitar</button>' +
      '<button type="button" class="btn ghost" data-c="nao" style="padding:11px 20px;font-size:14px">Recusar</button></div>';
    b.addEventListener('click', function (e) {
      var v = e.target.getAttribute('data-c'); if (!v) return; gravar(CHAVE, v); b.remove();
      if (v === 'sim') carregar(); else if (carregado) location.reload(); // revogação: recarrega sem medição
    });
    document.body.appendChild(b);
  }
  // Revogação a qualquer momento: link no rodapé.
  function linkPreferencias() {
    var f = document.querySelector('footer .wrap'); if (!f) return;
    var l = document.createElement('button'); l.type = 'button'; l.textContent = 'Preferências de medição';
    l.style.cssText = 'background:none;border:0;padding:0;font:inherit;color:inherit;text-decoration:underline;cursor:pointer';
    l.addEventListener('click', aviso); f.appendChild(l);
  }
  linkPreferencias();
  var c = ler(CHAVE);
  if (c === 'sim') carregar(); else if (c !== 'nao') aviso();
})();
