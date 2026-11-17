/* NEXO · medição de conversões (GA4) com consentimento.
 * ESTADO: DESLIGADO. Enquanto GA_ID estiver vazio, este arquivo não carrega nenhum script
 * externo, não grava nada no navegador e não mostra aviso.
 * Para ativar: preencha GA_ID com o ID de medição da propriedade GA4 oficial da NEXO (G-XXXXXXXXXX),
 * revise o texto do aviso com o responsável pela LGPD e publique.
 * Nenhum dado digitado nos formulários é enviado: só o nome do evento e rótulos fixos.
 */
(function () {
  'use strict';
  var GA_ID = ''; // ← ID de medição GA4. Vazio = desligado.
  var CHAVE = 'nexo-consentimento-medicao'; // valores: 'sim' | 'nao'

  // Mapa de eventos (também usado nos testes, mesmo com a medição desligada).
  function classificar(alvo) {
    var a = alvo.closest && alvo.closest('a,button');
    if (!a) return null;
    var href = a.getAttribute('href') || '';
    if (a.matches('button.open')) return ['clique_demonstracao', { demonstracao: a.dataset.k || '' }];
    if (/wa\.me\//.test(href)) return ['clique_whatsapp', { local: a.classList.contains('wa') ? 'flutuante' : 'pagina' }];
    if (/#contato$/.test(href)) return ['clique_pedir_proposta', { local: a.closest('header') ? 'cabecalho' : 'pagina' }];
    var m = href.match(/^\/(criacao-de-sites|google-perfil-da-empresa|sistemas-sob-medida|automacao-de-processos|google-ads)\/$/);
    if (m) return ['clique_servico', { servico: m[1] }];
    if (/^\/?demos\//.test(href)) return ['clique_demonstracao', { demonstracao: href.split('/')[href.charAt(0) === '/' ? 2 : 1] }];
    return null;
  }
  window.NEXO_MEDICAO = { classificar: classificar, ativo: false };

  if (!GA_ID) return; // Desligado: nada além deste ponto é executado.

  function ler() { try { return localStorage.getItem(CHAVE); } catch (e) { return null; } }
  function gravar(v) { try { localStorage.setItem(CHAVE, v); } catch (e) {} }

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });

  var carregado = false;
  function carregar() {
    if (carregado) return; carregado = true;
    gtag('consent', 'update', { analytics_storage: 'granted' });
    var s = document.createElement('script'); s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
    window.NEXO_MEDICAO.ativo = true;
  }
  function evento(nome, params) { if (carregado) window.gtag('event', nome, params || {}); }

  document.addEventListener('click', function (e) { var r = classificar(e.target); if (r) evento(r[0], r[1]); }, true);
  var iniciou = false;
  document.addEventListener('focusin', function (e) {
    if (!iniciou && e.target.closest && e.target.closest('#f')) { iniciou = true; evento('inicio_formulario', { pagina: location.pathname }); }
  });
  document.addEventListener('submit', function (e) {
    if (e.target.id !== 'f') return;
    var n = (document.getElementById('n') || {}).value || '', d = (document.getElementById('d') || {}).value || '';
    if (n.trim() && d.trim().length >= 10) evento('envio_formulario_validado', { pagina: location.pathname, servico: (document.getElementById('s') || {}).value || '' });
  }, true);

  function aviso() {
    var b = document.createElement('div');
    b.setAttribute('role', 'region'); b.setAttribute('aria-label', 'Aviso de medição');
    b.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;max-width:560px;margin-inline:auto;z-index:30;background:var(--surface);color:var(--fg);border:1px solid var(--line);border-radius:16px;padding:16px 18px;box-shadow:0 12px 32px -12px #0006;font-size:15px;line-height:1.5';
    b.innerHTML = '<p style="margin:0 0 12px">Usamos medição anônima (Google Analytics) para saber quais páginas ajudam nossos visitantes. Nenhum dado dos formulários é coletado. Você aceita?</p>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap"><button type="button" class="btn" data-c="sim" style="padding:11px 20px;font-size:14px">Aceitar</button>' +
      '<button type="button" class="btn ghost" data-c="nao" style="padding:11px 20px;font-size:14px">Recusar</button></div>';
    b.addEventListener('click', function (e) { var v = e.target.getAttribute('data-c'); if (!v) return; gravar(v); b.remove(); if (v === 'sim') carregar(); });
    document.body.appendChild(b);
  }
  var c = ler();
  if (c === 'sim') carregar(); else if (c !== 'nao') aviso();
})();
