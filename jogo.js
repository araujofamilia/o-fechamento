/* O Fechamento: lógica do jogo. Sem dependências. */
(function () {
  "use strict";

  var VERSAO = "2026-11-14c";
  var PREF = "fechamento-teorias:v1:";
  var ULTIMO = "fechamento-teorias:ultimo";
  var MIN_DISS = 40, MIN_PARECER = 120;
  var N_OBJ = 4, N_CASO = 2, N_PLANTAO = 8;

  var app = document.getElementById("app");
  var barra = document.getElementById("barra");
  var toastEl = document.getElementById("toast");
  var S = null;
  var porId = {};
  TEORIAS.forEach(function (t) { porId[t.id] = t; });

  /* ---------------- utilidades ---------------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function embaralha(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function sorteia(a, n) { return embaralha(a).slice(0, n); }
  function idx(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); return a; }
  function palavras(t) { return (t.trim().match(/\S+/g) || []).length; }
  function agora() { return new Date().toISOString(); }
  function dataBR(iso) { try { var d = new Date(iso); return d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }); } catch (e) { return iso; } }
  function emailValido(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e); }
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(function () { toastEl.classList.remove("on"); }, 3200); }
  function flutua(txt, el) {
    try {
      var r = el ? el.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0 };
      var d = document.createElement("div"); d.className = "xpfloat"; d.textContent = txt;
      d.style.left = (r.left + r.width / 2 - 20) + "px"; d.style.top = (r.top - 10) + "px";
      document.body.appendChild(d); setTimeout(function () { d.remove(); }, 1200);
    } catch (e) {}
  }
  function confirma(msg, sim) {
    var fundo = document.createElement("div");
    fundo.style.cssText = "position:fixed;inset:0;background:rgba(29,27,24,.55);z-index:70;display:flex;align-items:center;justify-content:center;padding:18px";
    fundo.innerHTML = '<div class="box" style="max-width:460px"><p style="margin-top:0">' + esc(msg) + '</p><div class="acoes"><button class="btn verm" data-r="1">Sim</button><button class="btn sec" data-r="0">Não</button></div></div>';
    document.body.appendChild(fundo);
    fundo.addEventListener("click", function (e) { var b = e.target.closest("[data-r]"); if (!b && e.target !== fundo) return; fundo.remove(); if (b && b.dataset.r === "1") sim(); });
  }
  function topo() { window.scrollTo(0, 0); }
  function fraseCorrecao() { return CONFIG.correcao || "Na correção, o professor usa IA em parte e supervisiona cada devolutiva."; }

  /* ---------------- estado ---------------- */
  function novo(email) {
    return { v: 1, email: email, inicio: agora(), xp: 0, acertos: 0, erros: 0, seq: 0, melhorSeq: 0,
      salas: {}, plantao: { rodadas: 0, melhor: 0 }, pareceres: 0, respostas: [], rodada: null };
  }
  function salvar() { try { localStorage.setItem(PREF + S.email, JSON.stringify(S)); localStorage.setItem(ULTIMO, S.email); } catch (e) {} }
  function carregar(email) { try { var t = localStorage.getItem(PREF + email); return t ? JSON.parse(t) : null; } catch (e) { return null; } }
  function sala(id) { if (!S.salas[id]) S.salas[id] = { rodadas: 0, melhor: 0, concluida: false }; return S.salas[id]; }
  function concluidas() { return TEORIAS.filter(function (t) { return S.salas[t.id] && S.salas[t.id].concluida; }).length; }
  function nivel() { var n = NIVEIS[0], prox = null; for (var i = 0; i < NIVEIS.length; i++) { if (S.xp >= NIVEIS[i].xp) { n = NIVEIS[i]; prox = NIVEIS[i + 1] || null; } } return { n: n, prox: prox }; }
  function ganha(x, el) { S.xp += x; if (x > 0) flutua("+" + x, el); }

  /* ---------------- barra ---------------- */
  function desenhaBarra() {
    if (!S) { barra.hidden = true; return; }
    barra.hidden = false;
    var nv = nivel();
    var pct = nv.prox ? Math.round((S.xp - nv.n.xp) / (nv.prox.xp - nv.n.xp) * 100) : 100;
    var pend = S.respostas.filter(function (r) { return !r.enviada; }).length;
    barra.innerHTML = '<div class="in"><span class="marca" data-ir="redacao">O Fechamento</span>' +
      '<span class="chip" title="Seu cargo na redação">' + esc(nv.n.nome) + ' · ' + S.xp + ' XP<span class="xpbar"><i style="width:' + pct + '%"></i></span></span>' +
      '<span class="chip" title="Mesas fechadas">Mesas ' + concluidas() + '/8</span>' +
      '<span class="chip" title="Acertos seguidos">Sequência ' + S.seq + '</span>' +
      '<span class="esp"></span>' +
      '<button data-ir="respostas">Minhas respostas' + (pend ? ' (' + pend + ')' : '') + '</button>' +
      '<button data-ir="redacao">Redação</button></div>';
  }
  barra.addEventListener("click", function (e) {
    var b = e.target.closest("[data-ir]"); if (!b) return;
    if (b.dataset.ir === "redacao") telaRedacao(); else telaRespostas();
  });

  /* ---------------- capa ---------------- */
  function telaCapa() {
    S = null; desenhaBarra();
    var ult = ""; try { ult = localStorage.getItem(ULTIMO) || ""; } catch (e) {}
    app.innerHTML =
      '<header class="masthead"><div class="kicker">Teoria do Jornalismo · PUC-Campinas · Turma 0101</div>' +
      '<h1>O Fechamento</h1><div class="sub">o jogo das oito teorias do jornalismo</div></header>' +
      '<div class="dateline"><span>Edição de revisão · 2026/2</span><span>Prova individual em ' + esc(CONFIG.dataProva) + '</span><span>8 mesas · plantão · fechamento</span></div>' +
      '<div class="cols"><div class="c-intro">' +
      '<div class="selo">Edição extra</div>' +
      '<div class="manchete">Oito teorias, uma redação: você fecha a edição?</div>' +
      '<p class="linhafina">Você entra na redação como foca. Em cada mesa, uma teoria: leia a pauta, responda, aplique a casos reais do noticiário e escreva. Quando fechar as oito mesas, encara o Fechamento: um parecer no formato da prova.</p>' +
      '</div><div class="c-resto">' +
      '<p class="linhafina" style="font-size:18px"><b>Sem eleição nem política:</b> os casos são da cidade, da saúde, da educação, do trânsito, da polícia, da tecnologia e da cultura.</p>' +
      '<div class="aviso"><b>Não vale nota.</b> Treina para a prova de ' + esc(CONFIG.dataProva) + ': diante de um caso, escolher duas teorias concorrentes, explicar cada uma com evidência e dizer qual explica melhor. O banco de teorias vem impresso na prova.</div>' +
      '<h2 class="secao">Como funciona</h2><ul class="lista">' +
      '<li><b>Jogue quantas vezes quiser:</b> cada rodada sorteia outras questões. O Plantão mistura casos de todas as teorias, reais (jornais de novembro) e criados para o treino.</li>' +
      '<li><b>Seu progresso</b> fica salvo neste navegador.</li>' +
      '<li><b>Ao entregar</b> uma dissertativa ou um parecer, ' + (CONFIG.envio.acao ? 'o texto vai direto para o professor, com seu e-mail, a mesa e seus pontos. Nada disso vale nota.' : 'mande o texto ao professor pela tela "Minhas respostas".') + ' ' + esc(fraseCorrecao()) + '</li></ul>' +
      '</div><div class="c-entrada"><div class="box"><div class="tipo" style="--c:var(--vermelho)">Crachá de entrada</div>' +
      '<label class="l" for="email">Seu e-mail (obrigatório)</label>' +
      '<input class="campo" id="email" type="email" autocomplete="email" placeholder="seu.nome@puccampinas.edu.br" value="' + esc(ult) + '">' +
      '<div class="erro" id="erro"></div>' +
      '<div class="acoes"><button class="btn verm" id="entrar">Entrar na redação</button></div>' +
      '<p class="mini">Use sempre o mesmo e-mail: ele identifica suas respostas e guarda seu progresso.</p>' +
      '<div id="retorno"></div></div></div></div>' +
      '<div class="rodape">Casos reais citados com veículo, data e página. Situações marcadas como hipotéticas foram criadas para o treino. Citações do Traquina pela edição portuguesa (Vega, 1999). Jogo feito com apoio de IA, sob supervisão do professor. Versão ' + VERSAO + '.</div>';
    var inp = document.getElementById("email");
    function mostraRetorno() {
      var e = inp.value.trim().toLowerCase(); var s = emailValido(e) ? carregar(e) : null;
      document.getElementById("retorno").innerHTML = s ? '<p class="mini" style="color:var(--verde)">Bem-vindo de volta: ' + s.xp + ' XP, ' + TEORIAS.filter(function (t) { return s.salas[t.id] && s.salas[t.id].concluida; }).length + ' de 8 mesas fechadas.</p>' : "";
    }
    inp.addEventListener("input", mostraRetorno); mostraRetorno();
    function entrar() {
      var e = inp.value.trim().toLowerCase();
      if (!emailValido(e)) { document.getElementById("erro").textContent = "Digite um e-mail válido para entrar."; inp.focus(); return; }
      S = carregar(e) || novo(e); salvar(); telaRedacao();
    }
    document.getElementById("entrar").onclick = entrar;
    inp.addEventListener("keydown", function (ev) { if (ev.key === "Enter") entrar(); });
  }

  /* ---------------- redação ---------------- */
  function telaRedacao() {
    desenhaBarra(); topo();
    var c = concluidas();
    var html = '<div class="dateline" style="margin-top:18px"><span>' + esc(S.email) + '</span><span>' + c + ' de 8 mesas fechadas</span><span>' + S.acertos + ' acertos · melhor sequência ' + S.melhorSeq + '</span></div>';
    if (S.rodada) {
      var r = S.rodada;
      var nomeR = r.modo === "sala" ? porId[r.sala].nome : (r.modo === "plantao" ? "Plantão" : "Fechamento");
      html += '<div class="aviso" style="border-color:var(--ouro);background:#fff9ec;margin-bottom:16px"><b style="color:var(--tinta)">Rodada em andamento:</b> ' + esc(nomeR) + ', questão ' + (r.i + 1) + ' de ' + r.itens.length + '. <button class="btn" style="margin-left:8px;padding:6px 14px;font-size:14px" id="continuar">Continuar de onde parei</button></div>';
    }
    html += '<div class="manchete" style="font-size:clamp(28px,4vw,40px)">A redação</div><div class="progresso"><i style="width:' + (c / 8 * 100) + '%"></i></div>' +
      '<p class="mini">Escolha uma mesa. Cada mesa é uma teoria; feche as oito para abrir o Fechamento.</p><div class="grade">';
    TEORIAS.forEach(function (t) {
      var s = S.salas[t.id];
      var st = !s ? "Nova pauta" : (s.concluida ? "Melhor rodada: " + s.melhor + "%" : "Em andamento");
      html += '<button class="mesa" style="--c:' + t.cor + '" data-sala="' + t.id + '"><span class="simb">' + t.simbolo + '</span><div class="num">Mesa ' + t.n + '</div><div class="nome">' + esc(t.nome) + '</div><div class="st">' + st + (s && s.rodadas ? " · " + s.rodadas + " rodada(s)" : "") + '</div>' + (s && s.concluida ? '<span class="carimbo">FECHADA</span>' : '') + '</button>';
    });
    var aberto = c >= 8;
    html += '<button class="mesa especial" data-especial="plantao"><span class="simb">☎</span><div class="num">Plantão</div><div class="nome">Qual teoria explica?</div><div class="st">' + N_PLANTAO + ' casos misturados, reais e simulados · melhor: ' + (S.plantao.melhor || 0) + '/' + N_PLANTAO + '</div></button>';
    html += '<button class="mesa especial' + (aberto ? '' : ' trancada') + '" data-especial="fechamento"><span class="simb">' + (aberto ? '✎' : '🔒') + '</span><div class="num">Fechamento</div><div class="nome">O parecer da prova</div><div class="st">' + (aberto ? 'Aberto · pareceres entregues: ' + S.pareceres : 'Abre com as 8 mesas fechadas (' + c + '/8)') + '</div></button>';
    html += '</div><h2 class="secao">Crachás</h2><div>';
    TEORIAS.forEach(function (t) { var ok = S.salas[t.id] && S.salas[t.id].concluida; html += '<span class="cracha' + (ok ? '' : ' off') + '" style="--c:' + t.cor + '">' + t.simbolo + ' ' + esc(t.curto) + '</span>'; });
    html += '<span class="cracha' + (S.plantao.melhor >= N_PLANTAO ? '' : ' off') + '" style="--c:var(--ouro)">☎ Plantão perfeito</span>';
    html += '<span class="cracha' + (S.pareceres ? '' : ' off') + '" style="--c:var(--vermelho)">✎ Edição fechada</span>';
    html += '<span class="cracha' + (S.melhorSeq >= 10 ? '' : ' off') + '" style="--c:var(--verde)">⚡ 10 seguidas</span></div>';
    html += '<div class="acoes"><button class="btn sec" id="trocar">Trocar de e-mail</button><button class="btn sec" id="resp">Minhas respostas e envio</button></div>';
    html += '<div class="rodape">Prepara para a prova de ' + esc(CONFIG.dataProva) + '. Progresso salvo neste navegador.</div>';
    app.innerHTML = html;
    app.querySelectorAll("[data-sala]").forEach(function (b) { b.onclick = function () { telaPauta(b.dataset.sala); }; });
    app.querySelector('[data-especial="plantao"]').onclick = function () { confirmaTroca(novaPlantao); };
    app.querySelector('[data-especial="fechamento"]').onclick = function () { if (aberto) telaFechamentoEscolha(); else toast("Feche as oito mesas para abrir o Fechamento."); };
    document.getElementById("trocar").onclick = function () { telaCapa(); };
    document.getElementById("resp").onclick = telaRespostas;
    var cont = document.getElementById("continuar"); if (cont) cont.onclick = mostraItem;
  }

  function confirmaTroca(fn) {
    if (S.rodada) confirma("Você tem uma rodada em andamento. Começar outra apaga essa rodada (seus pontos e as respostas já entregues ficam). Continuar?", fn);
    else fn();
  }

  /* ---------------- pauta da teoria ---------------- */
  function telaPauta(id) {
    var t = porId[id]; desenhaBarra(); topo();
    var emAnd = S.rodada && S.rodada.modo === "sala" && S.rodada.sala === id;
    app.innerHTML = '<div class="dateline" style="margin-top:18px"><span>Mesa ' + t.n + '</span><span>Pauta do dia</span><span>' + (S.salas[id] ? S.salas[id].rodadas + " rodada(s) jogada(s)" : "Primeira vez") + '</span></div>' +
      '<div class="pauta" style="--c:' + t.cor + '"><div class="tipo" style="--c:' + t.cor + '">' + t.simbolo + ' ' + esc(t.nome) + '</div>' +
      '<div class="frase">' + esc(t.frase) + '</div><dl class="ficha">' +
      '<dt>Pergunta-chave</dt><dd>' + esc(t.pergunta) + '</dd>' +
      '<dt>Autores</dt><dd>' + esc(t.autores) + '</dd>' +
      '<dt>Conceitos</dt><dd>' + t.conceitos.map(esc).join(" · ") + '</dd>' +
      '<dt>Força</dt><dd>' + esc(t.forca) + '</dd>' +
      '<dt>Limite</dt><dd>' + esc(t.limite) + '</dd>' +
      '<dt>Rival principal</dt><dd>' + esc(t.rival) + '</dd>' +
      '<dt>Armadilha da prova</dt><dd><b>' + esc(t.armadilha) + '</b></dd></dl>' +
      '<div class="arquivo"><div class="tipo" style="--c:var(--cinza)">Do arquivo (Traquina, org., 1999)</div><q>' + esc(t.arquivo.txt) + '</q><div class="ref">' + esc(t.arquivo.ref) + '. ' + esc(t.arquivo.nota) + '</div></div></div>' +
      '<div class="acoes">' + (emAnd ? '<button class="btn" id="cont">Continuar a rodada</button>' : '') +
      '<button class="btn' + (emAnd ? ' sec' : ' verm') + '" id="comecar">' + (emAnd ? 'Começar outra rodada' : 'Começar a rodada') + '</button>' +
      '<button class="btn sec" id="volta">Voltar à redação</button></div>' +
      '<p class="mini">A rodada tem ' + N_OBJ + ' questões objetivas, ' + N_CASO + ' casos para aplicar e 1 resposta dissertativa. Releia a pauta quando quiser: ela também aparece no fim da rodada.</p>';
    document.getElementById("comecar").onclick = function () { if (emAnd) confirmaTroca(function () { novaSala(id); }); else confirmaTroca(function () { novaSala(id); }); };
    document.getElementById("volta").onclick = telaRedacao;
    var c = document.getElementById("cont"); if (c) c.onclick = mostraItem;
  }

  /* ---------------- montagem das rodadas ---------------- */
  function itemCaso(ci) {
    var c = CASOS[ci];
    var outras = TEORIAS.map(function (t) { return t.id; }).filter(function (x) { return x !== c.t && x !== c.alt; });
    var ops = embaralha([c.t, c.alt].concat(sorteia(outras, 2)));
    return { tipo: "caso", ci: ci, ops: ops };
  }
  function novaSala(id) {
    var obj = OBJETIVAS[id];
    var itens = sorteia(idx(obj.length), Math.min(N_OBJ, obj.length)).map(function (k) { return { tipo: "obj", sala: id, k: k, ordem: embaralha(idx(obj[k].ops.length)) }; });
    var casos = CASOS.map(function (c, i) { return c.t === id ? i : -1; }).filter(function (i) { return i >= 0; });
    var reais = casos.filter(function (i) { return CASOS[i].fonte; }), simul = casos.filter(function (i) { return !CASOS[i].fonte; });
    var esc2 = [];
    if (reais.length) esc2.push(sorteia(reais, 1)[0]);
    esc2 = esc2.concat(sorteia(simul.concat(reais).filter(function (i) { return esc2.indexOf(i) < 0; }), N_CASO - esc2.length));
    esc2.forEach(function (ci) { itens.push(itemCaso(ci)); });
    var d = Math.floor(Math.random() * DISSERTATIVAS[id].length);
    itens.push({ tipo: "diss", sala: id, d: d });
    S.rodada = { modo: "sala", sala: id, itens: itens, i: 0, res: [], inicio: agora() };
    salvar(); mostraItem();
  }
  function novaPlantao() {
    var itens = sorteia(idx(CASOS.length), N_PLANTAO).map(itemCaso);
    S.rodada = { modo: "plantao", itens: itens, i: 0, res: [], inicio: agora() };
    salvar(); mostraItem();
  }

  /* ---------------- exibição de um item ---------------- */
  function pontinhos(r) {
    return '<div class="pontos">' + r.itens.map(function (it, i) {
      var cl = i < r.res.length ? (r.res[i] === true ? "ok" : (r.res[i] === false ? "no" : "ok")) : (i === r.i ? "at" : "");
      return '<span class="' + cl + '"></span>';
    }).join("") + '</div>';
  }
  function cabecalhoItem(r) {
    var nome = r.modo === "sala" ? porId[r.sala].nome : "Plantão: qual teoria explica?";
    return '<div class="topo-rodada"><div><div class="tipo" style="--c:' + (r.modo === "sala" ? porId[r.sala].cor : "var(--ouro)") + '">' + esc(nome) + '</div><div class="mini">Questão ' + (r.i + 1) + ' de ' + r.itens.length + '</div></div>' + pontinhos(r) + '</div>';
  }
  function recorte(c) {
    return '<div class="recorte"><span class="fonte' + (c.fonte ? ' real' : '') + '">' + (c.fonte ? 'Caso real · ' + esc(c.fonte) : 'Situação hipotética, criada para o treino') + '</span>' + esc(c.txt) + '</div>';
  }

  function mostraItem() {
    var r = S.rodada; if (!r) { telaRedacao(); return; }
    if (r.i >= r.itens.length) { fimRodada(); return; }
    desenhaBarra(); topo();
    var it = r.itens[r.i];
    var html = cabecalhoItem(r) + '<div class="cartao" style="--c:' + (r.modo === "sala" ? porId[r.sala].cor : "var(--ouro)") + '">';
    if (it.tipo === "obj") {
      var q = OBJETIVAS[it.sala][it.k];
      html += '<div class="tipo">Múltipla escolha</div><div class="enun">' + esc(q.q) + '</div><div class="ops">' +
        it.ordem.map(function (o, i) { return '<button class="op" data-o="' + o + '"><span class="letra">' + "ABCD"[i] + '</span><span>' + esc(q.ops[o]) + '</span></button>'; }).join("") + '</div><div id="fb"></div>';
    } else if (it.tipo === "caso") {
      var c = CASOS[it.ci];
      html += '<div class="tipo">Aplique: qual teoria explica?</div>' + recorte(c) +
        '<div class="enun" style="font-size:19px">' + esc(c.pergunta || "Qual teoria explica melhor este caso?") + '</div><div class="ops">' +
        it.ops.map(function (tid, i) { var t = porId[tid]; return '<button class="op" data-o="' + tid + '"><span class="letra">' + "ABCD"[i] + '</span><span><b>' + esc(t.nome) + '</b><br><span class="mini">' + esc(t.frase) + '</span></span></button>'; }).join("") + '</div><div id="fb"></div>';
    } else if (it.tipo === "diss") {
      var dq = DISSERTATIVAS[it.sala][it.d];
      html += '<div class="tipo">Dissertativa · correção do professor, com apoio de IA</div><div class="enun">' + esc(dq.q) + '</div>' +
        '<textarea id="txt" placeholder="Escreva aqui. Pelo menos ' + MIN_DISS + ' palavras."></textarea><div class="contador" id="cont"></div>' +
        '<div class="acoes"><button class="btn verm" id="entregar" disabled>Entregar resposta</button><button class="btn sec" id="pular">Pular esta (sem pontos)</button></div>' +
        '<p class="mini">O texto fica salvo enquanto você escreve, mesmo se fechar o navegador.</p>';
    }
    html += '</div><div class="acoes"><button class="btn sec" id="sair">Sair e continuar depois</button></div>';
    app.innerHTML = html;
    document.getElementById("sair").onclick = function () { salvar(); telaRedacao(); };
    if (it.tipo === "diss") ligaDissertativa(it); else ligaEscolha(it);
  }

  function ligaEscolha(it) {
    var bts = app.querySelectorAll(".op");
    bts.forEach(function (b) {
      b.onclick = function () {
        var r = S.rodada, certo, exp, certaVal;
        if (it.tipo === "obj") { var q = OBJETIVAS[it.sala][it.k]; certaVal = String(q.c); certo = b.dataset.o === certaVal; exp = q.exp; }
        else { var c = CASOS[it.ci]; certaVal = c.t; certo = b.dataset.o === c.t; exp = c.exp; }
        bts.forEach(function (x) { x.disabled = true; if (x.dataset.o === certaVal) x.classList.add("certa"); });
        if (!certo) b.classList.add("errada");
        var pts = 0;
        if (certo) { S.acertos++; S.seq++; S.melhorSeq = Math.max(S.melhorSeq, S.seq); pts = it.tipo === "caso" ? 15 : 10; if (S.seq >= 3) pts += 5; }
        else { S.erros++; S.seq = 0; }
        ganha(pts, b);
        r.res.push(certo); r.i++; salvar(); desenhaBarra();
        var extra = "";
        if (!certo && it.tipo === "caso") { var c2 = CASOS[it.ci]; if (b.dataset.o === c2.alt) extra = '<br><span class="mini">Você escolheu a rival mais forte. Boa intuição: na prova, ela seria a segunda teoria do seu parecer.</span>'; }
        document.getElementById("fb").innerHTML = '<div class="feedback ' + (certo ? 'ok' : 'no') + '"><b class="v">' + (certo ? (S.seq >= 3 ? 'Certo! Sequência de ' + S.seq + '.' : 'Certo!') : 'Não foi dessa vez.') + '</b>' + esc(exp) + extra + '</div>' +
          '<div class="acoes"><button class="btn" id="prox">' + (r.i >= r.itens.length ? 'Ver resultado' : 'Próxima') + '</button></div>';
        var p = document.getElementById("prox"); p.focus(); p.onclick = mostraItem;
      };
    });
  }

  function rascunhoKey() { var r = S.rodada; return "rasc:" + r.inicio + ":" + r.i; }
  function ligaDissertativa(it) {
    var ta = document.getElementById("txt"), cont = document.getElementById("cont"), bt = document.getElementById("entregar");
    S.rascunhos = S.rascunhos || {};
    ta.value = S.rascunhos[rascunhoKey()] || "";
    function atualiza() {
      var n = palavras(ta.value);
      cont.textContent = n + " palavra(s)" + (n < MIN_DISS ? " · faltam " + (MIN_DISS - n) + " para entregar" : " · pronto para entregar");
      cont.className = "contador" + (n >= MIN_DISS ? " ok" : "");
      bt.disabled = n < MIN_DISS;
    }
    var tmr;
    ta.addEventListener("input", function () { atualiza(); clearTimeout(tmr); tmr = setTimeout(function () { S.rascunhos[rascunhoKey()] = ta.value; salvar(); }, 500); });
    atualiza();
    bt.onclick = function () {
      var dq = DISSERTATIVAS[it.sala][it.d];
      var reg = { id: Date.now().toString(36), tipo: "dissertativa", sala: it.sala, pergunta: dq.q, texto: ta.value.trim(), data: agora(), enviada: false };
      S.respostas.push(reg); delete S.rascunhos[rascunhoKey()];
      ganha(30, bt);
      enviaForm(reg);
      S.rodada.res.push(null); S.rodada.i++; salvar(); desenhaBarra();
      autoavaliacao(dq.g, reg, function () { mostraItem(); });
    };
    document.getElementById("pular").onclick = function () {
      confirma("Pular a dissertativa? Ela é o treino mais parecido com a prova, e sem ela a mesa não fecha.", function () {
        delete S.rascunhos[rascunhoKey()];
        S.rodada.res.push(false); S.rodada.i++; salvar(); mostraItem();
      });
    };
  }

  function autoavaliacao(guia, reg, depois, regua) {
    topo();
    app.innerHTML = '<div class="cartao"><div class="carimbao">ENTREGUE</div><div class="tipo">Confira sua resposta</div>' +
      '<p>' + (CONFIG.envio.acao ? 'Sua resposta foi enviada ao professor.' : 'Sua resposta foi guardada. Mande para o professor pela tela "Minhas respostas".') + ' Agora compare com o que uma boa resposta costuma ter e marque o que você fez:</p>' +
      (regua ? '<div class="regua"><div><b>Precisão conceitual</b>Usou cada teoria com seus conceitos certos?</div><div><b>Evidência do caso</b>Citou elementos concretos do caso?</div><div><b>Juízo comparativo</b>Disse qual explica melhor, e por quê?</div></div>' : '') +
      '<div class="checklist">' + guia.map(function (g, i) { return '<label><input type="checkbox" data-i="' + i + '"><span>' + esc(g) + '</span></label>'; }).join("") + '</div>' +
      '<details style="margin-top:12px"><summary class="mini" style="cursor:pointer">Ver o que eu escrevi</summary><div class="resp"><div class="t">' + esc(reg.texto) + '</div></div></details>' +
      '<div class="acoes"><button class="btn" id="seg">Seguir</button></div></div>';
    document.getElementById("seg").onclick = function () {
      var marc = []; app.querySelectorAll(".checklist input").forEach(function (c) { if (c.checked) marc.push(+c.dataset.i); });
      reg.auto = marc.length + "/" + guia.length; salvar(); depois();
    };
  }

  /* ---------------- fim de rodada ---------------- */
  function fimRodada() {
    var r = S.rodada; desenhaBarra(); topo();
    var obj = r.res.filter(function (x) { return x === true || x === false; });
    var certos = r.res.filter(function (x) { return x === true; }).length;
    var escolhas = r.itens.filter(function (it) { return it.tipo !== "diss"; }).length;
    var pct = escolhas ? Math.round(certos / escolhas * 100) : 0;
    var html = '<div class="placar">';
    if (r.modo === "sala") {
      var t = porId[r.sala], s = sala(r.sala);
      var entregou = r.res[r.res.length - 1] === null;
      s.rodadas++; s.melhor = Math.max(s.melhor, pct); s.ultima = agora();
      var fechou = !s.concluida && pct >= 50 && entregou;
      if (pct >= 50 && entregou) s.concluida = true;
      if (fechou) ganha(50);
      html += '<div class="tipo" style="--c:' + t.cor + '">' + esc(t.nome) + '</div><div class="grande">' + certos + '/' + escolhas + '</div><div class="mini">acertos nas questões de escolha · dissertativa ' + (entregou ? 'entregue' : 'não entregue') + '</div>' +
        (s.concluida ? '<div class="carimbao">' + (fechou ? 'MESA FECHADA' : 'FECHADA') + '</div>' : '<div class="carimbao verm">VOLTA PRA PAUTA</div><p>Para fechar a mesa: pelo menos metade das questões de escolha certas e a dissertativa entregue.</p>') +
        (fechou ? '<p>Crachá <span class="cracha" style="--c:' + t.cor + '">' + t.simbolo + ' ' + esc(t.curto) + '</span> conquistado. +50 XP</p>' : '') +
        '<p class="mini" style="max-width:640px;margin:10px auto"><b>Para a prova, lembre:</b> ' + esc(t.armadilha) + '</p>';
    } else {
      S.plantao.rodadas++; S.plantao.melhor = Math.max(S.plantao.melhor, certos);
      html += '<div class="tipo" style="--c:var(--ouro)">Plantão</div><div class="grande">' + certos + '/' + escolhas + '</div>' +
        (certos === escolhas ? '<div class="carimbao">PLANTÃO PERFEITO</div>' : (pct >= 60 ? '<div class="carimbao">BOM PLANTÃO</div>' : '<div class="carimbao verm">REVISE AS PAUTAS</div>')) +
        '<p class="mini">Cada plantão sorteia outros casos. Errou para a teoria rival? Na prova, ela é justamente a segunda teoria do parecer.</p>';
    }
    html += '</div><div class="acoes" style="justify-content:center"><button class="btn verm" id="denovo">Jogar de novo (novas questões)</button><button class="btn sec" id="red">Voltar à redação</button></div>';
    var modo = r.modo, id = r.sala;
    S.rodada = null; salvar(); desenhaBarra();
    app.innerHTML = html;
    document.getElementById("denovo").onclick = function () { if (modo === "sala") novaSala(id); else novaPlantao(); };
    document.getElementById("red").onclick = telaRedacao;
    if (concluidas() === 8 && !S.avisoFech) { S.avisoFech = true; salvar(); setTimeout(function () { toast("As oito mesas estão fechadas: o Fechamento abriu!"); }, 600); }
  }

  /* ---------------- fechamento (parecer) ---------------- */
  function telaFechamentoEscolha() {
    desenhaBarra(); topo();
    var html = '<div class="dateline" style="margin-top:18px"><span>Fechamento</span><span>Parecer no formato da prova</span><span>Pareceres entregues: ' + S.pareceres + '</span></div>' +
      '<div class="manchete">Feche a edição</div><p class="linhafina">Escolha um caso. Escreva um parecer com duas teorias concorrentes, evidência do caso e um juízo sobre qual explica melhor. É o treino mais próximo da prova de ' + esc(CONFIG.dataProva) + '.</p>' +
      '<div class="regua"><div><b>Precisão conceitual</b>Cada teoria com seus conceitos e autores certos.</div><div><b>Evidência do caso</b>Elementos concretos: palavras, fontes, posição na página.</div><div><b>Juízo comparativo</b>Qual explica melhor, e por quê.</div></div><div class="grade">';
    PARECERES.forEach(function (p, i) {
      var feito = S.respostas.some(function (r) { return r.tipo === "parecer" && r.pi === i; });
      html += '<button class="mesa" style="--c:' + (p.fonte ? 'var(--vermelho)' : 'var(--cinza)') + '" data-p="' + i + '"><div class="num">' + (p.fonte ? 'Caso real' : 'Situação hipotética') + '</div><div class="nome">' + esc(p.titulo) + '</div><div class="st">' + esc(p.fonte || 'Criada para o treino') + '</div>' + (feito ? '<span class="carimbo">ENTREGUE</span>' : '') + '</button>';
    });
    html += '</div><div class="acoes"><button class="btn sec" id="volta">Voltar à redação</button></div>';
    app.innerHTML = html;
    app.querySelectorAll("[data-p]").forEach(function (b) { b.onclick = function () { telaParecer(+b.dataset.p); }; });
    document.getElementById("volta").onclick = telaRedacao;
  }
  function telaParecer(i) {
    var p = PARECERES[i]; desenhaBarra(); topo();
    S.rascunhos = S.rascunhos || {}; var key = "parecer:" + i;
    app.innerHTML = '<div class="topo-rodada"><div class="tipo">Fechamento · parecer</div><div class="mini">Mínimo de ' + MIN_PARECER + ' palavras</div></div>' +
      '<div class="cartao"><div class="enun" style="font-family:var(--titulo);font-weight:900;font-size:28px;margin-top:0">' + esc(p.titulo) + '</div>' +
      '<div class="recorte"><span class="fonte' + (p.fonte ? ' real' : '') + '">' + (p.fonte ? 'Caso real · ' + esc(p.fonte) : 'Situação hipotética, criada para o treino') + '</span>' + esc(p.caso.replace(/^(Caso real|Situação hipotética)\.\s*/, "")) + '</div>' +
      '<div class="enun" style="font-size:19px"><b>Pedido:</b> ' + esc(p.pede) + '</div>' +
      '<details><summary class="mini" style="cursor:pointer">Abrir o banco de teorias (como virá na prova)</summary><ul class="lista">' + TEORIAS.map(function (t) { return '<li><b>' + esc(t.nome) + ':</b> ' + esc(t.frase) + '</li>'; }).join("") + '</ul></details>' +
      '<textarea id="txt" style="min-height:320px" placeholder="Teoria 1: ...&#10;Teoria 2: ...&#10;Juízo comparativo: ..."></textarea><div class="contador" id="cont"></div>' +
      '<div class="acoes"><button class="btn verm" id="entregar" disabled>Entregar parecer</button><button class="btn sec" id="volta">Voltar (o texto fica salvo)</button></div></div>';
    var ta = document.getElementById("txt"), cont = document.getElementById("cont"), bt = document.getElementById("entregar");
    ta.value = S.rascunhos[key] || "";
    function atualiza() { var n = palavras(ta.value); cont.textContent = n + " palavra(s)" + (n < MIN_PARECER ? " · faltam " + (MIN_PARECER - n) : " · pronto para entregar"); cont.className = "contador" + (n >= MIN_PARECER ? " ok" : ""); bt.disabled = n < MIN_PARECER; }
    var tmr; ta.addEventListener("input", function () { atualiza(); clearTimeout(tmr); tmr = setTimeout(function () { S.rascunhos[key] = ta.value; salvar(); }, 500); });
    atualiza();
    document.getElementById("volta").onclick = function () { S.rascunhos[key] = ta.value; salvar(); telaFechamentoEscolha(); };
    bt.onclick = function () {
      var reg = { id: Date.now().toString(36), tipo: "parecer", pi: i, sala: "fechamento", pergunta: p.titulo + (p.fonte ? " (" + p.fonte + ")" : " (situação hipotética)") + ". " + p.pede, texto: ta.value.trim(), data: agora(), enviada: false };
      S.respostas.push(reg); S.pareceres++; delete S.rascunhos[key];
      ganha(80, bt); enviaForm(reg); salvar(); desenhaBarra();
      autoavaliacao(["Escolhi duas teorias que de fato disputam o caso.", "Expliquei cada teoria com seus conceitos (não só com o nome).", "Citei elementos concretos do caso: palavras, fontes, títulos, posição na página.", "Separei o que a evidência prova do que ela não prova.", "Terminei dizendo qual teoria explica melhor, e por quê."], reg, telaFechamentoEscolha, true);
    };
  }

  /* ---------------- envio ---------------- */
  function enviaForm(reg) {
    var E = CONFIG.envio; if (!E || !E.acao) return;
    try {
      var c = E.campos, f = new URLSearchParams();
      f.append(c.email, S.email); f.append(c.tipo, reg.tipo); f.append(c.sala, reg.sala === "fechamento" ? "Fechamento" : porId[reg.sala].nome);
      f.append(c.pergunta, reg.pergunta); f.append(c.resposta, reg.texto);
      f.append(c.dados, JSON.stringify({ v: VERSAO, xp: S.xp, mesas: concluidas(), acertos: S.acertos, erros: S.erros, auto: reg.auto || "", data: reg.data }));
      fetch(E.acao, { method: "POST", mode: "no-cors", body: f }).then(function () { reg.enviada = true; salvar(); desenhaBarra(); }).catch(function () {});
    } catch (e) {}
  }
  function textoCompleto(soPend) {
    var lista = S.respostas.filter(function (r) { return !soPend || !r.enviada; });
    var l = ["O FECHAMENTO · respostas para correção", "Teoria do Jornalismo · PUC-Campinas · 2026/2", "E-mail: " + S.email, "Gerado em: " + dataBR(agora()),
      "Mesas fechadas: " + concluidas() + "/8 · XP: " + S.xp + " · acertos: " + S.acertos + " · erros: " + S.erros, ""];
    lista.forEach(function (r, i) {
      l.push("==== " + (i + 1) + ". " + (r.tipo === "parecer" ? "PARECER" : "DISSERTATIVA") + " · " + (r.sala === "fechamento" ? "Fechamento" : porId[r.sala].nome) + " · " + dataBR(r.data));
      l.push("Pergunta: " + r.pergunta); l.push(""); l.push(r.texto); l.push(""); if (r.auto) l.push("(Autoavaliação: " + r.auto + " itens marcados)"); l.push("");
    });
    return l.join("\n");
  }
  function telaRespostas() {
    desenhaBarra(); topo();
    var n = S.respostas.length;
    var html = '<div class="dateline" style="margin-top:18px"><span>Minhas respostas</span><span>' + n + ' entregue(s)</span><span>' + esc(S.email) + '</span></div>' +
      '<div class="manchete" style="font-size:clamp(28px,4vw,40px)">' + (CONFIG.envio.acao ? 'Suas respostas' : 'Mande para o professor') + '</div>' +
      '<p class="linhafina">' + esc(fraseCorrecao()) + ' A correção não vale nota: serve para você chegar à prova sabendo onde acerta e onde erra.</p>';
    if (CONFIG.envio.acao) html += '<div class="aviso" style="border-color:var(--verde);background:#f1faf4"><b style="color:var(--verde)">Envio automático ligado.</b> Cada resposta vai para o professor no momento em que você entrega. Os botões abaixo servem de cópia de segurança.</div>';
    else html += '<div class="aviso"><b>Como enviar:</b> clique em "Baixar arquivo" e mande o arquivo por e-mail para <b>' + esc(CONFIG.emailProfessor) + '</b>. O botão "Abrir e-mail" já prepara a mensagem; se o texto for longo, anexe o arquivo baixado.</div>';
    html += '<div class="acoes"><button class="btn verm" id="baixar"' + (n ? '' : ' disabled') + '>Baixar arquivo</button><button class="btn" id="mail"' + (n ? '' : ' disabled') + '>Abrir e-mail</button><button class="btn sec" id="copiar"' + (n ? '' : ' disabled') + '>Copiar tudo</button></div>';
    html += '<h2 class="secao">Entregues</h2>';
    if (!n) html += '<p>Nenhuma resposta ainda. Cada mesa termina com uma dissertativa, e o Fechamento pede um parecer.</p>';
    S.respostas.slice().reverse().forEach(function (r) {
      html += '<div class="resp"><div class="meta">' + (r.tipo === "parecer" ? "Parecer" : "Dissertativa") + ' · ' + esc(r.sala === "fechamento" ? "Fechamento" : porId[r.sala].nome) + ' · ' + dataBR(r.data) + (r.enviada ? '<span class="tag ok">ENVIADA</span>' : '') + '</div><div class="q">' + esc(r.pergunta) + '</div><div class="t">' + esc(r.texto) + '</div></div>';
    });
    html += '<div class="acoes"><button class="btn sec" id="volta">Voltar à redação</button></div>';
    app.innerHTML = html;
    document.getElementById("volta").onclick = telaRedacao;
    if (!n) return;
    document.getElementById("baixar").onclick = function () {
      var blob = new Blob([textoCompleto(false)], { type: "text/plain;charset=utf-8" });
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob);
      a.download = "fechamento-respostas-" + S.email.split("@")[0].replace(/[^\w.-]/g, "") + ".txt";
      document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      toast("Arquivo baixado. Agora anexe no e-mail para o professor.");
    };
    document.getElementById("mail").onclick = function () {
      var corpo = textoCompleto(false);
      if (corpo.length > 1700) corpo = "Professor, seguem minhas respostas do jogo O Fechamento em arquivo anexo (baixado na tela Minhas respostas).\n\nE-mail: " + S.email + "\nRespostas: " + n;
      location.href = "mailto:" + CONFIG.emailProfessor + "?subject=" + encodeURIComponent("O Fechamento · respostas · " + S.email) + "&body=" + encodeURIComponent(corpo);
    };
    document.getElementById("copiar").onclick = function () {
      var t = textoCompleto(false);
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { toast("Copiado. Cole no corpo do e-mail."); }, function () {
        var ta = document.createElement("textarea"); ta.value = t; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); toast("Copiado."); } catch (e) { toast("Não deu para copiar; use Baixar arquivo."); } ta.remove();
      });
    };
  }

  /* ---------------- início ---------------- */
  telaCapa();
})();
