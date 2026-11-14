/**
 * O Fechamento: cria o Formulário Google que recebe as respostas
 * dissertativas e os pareceres do jogo, e imprime o bloco de
 * configuração para colar no config.js.
 *
 * Como usar:
 * 1. Abra https://script.google.com com a sua conta e crie um projeto novo.
 * 2. Apague o conteúdo do editor, cole este arquivo inteiro e salve.
 * 3. Clique em Executar (função criarFormulario) e autorize.
 * 4. Abra "Registro de execução": copie o bloco "envio: { ... }" e cole
 *    no config.js do jogo, no lugar do bloco envio que está lá.
 * 5. As respostas aparecem na aba Respostas do formulário (dá para
 *    ligar a uma planilha com um clique).
 */
function criarFormulario() {
  var form = FormApp.create("O Fechamento · respostas do jogo (Teoria do Jornalismo 2026/2)");
  form.setDescription("Recebe automaticamente as dissertativas e os pareceres do jogo O Fechamento. Não vale nota.");
  form.setCollectEmail(false);

  var nomes = ["email", "tipo", "sala", "pergunta", "resposta", "dados"];
  var titulos = {
    email: "E-mail do aluno", tipo: "Tipo (dissertativa ou parecer)", sala: "Mesa / teoria",
    pergunta: "Pergunta", resposta: "Resposta do aluno", dados: "Dados do jogo (pontos, data)"
  };
  var itens = {};
  nomes.forEach(function (n) {
    itens[n] = (n === "resposta" || n === "pergunta" || n === "dados")
      ? form.addParagraphTextItem().setTitle(titulos[n])
      : form.addTextItem().setTitle(titulos[n]);
  });

  // Descobre os códigos entry.* montando um link pré-preenchido.
  var resp = form.createResponse();
  nomes.forEach(function (n) {
    var it = itens[n];
    var r = (it.getType() === FormApp.ItemType.PARAGRAPH_TEXT)
      ? it.asParagraphTextItem().createResponse("X" + n)
      : it.asTextItem().createResponse("X" + n);
    resp.withItemResponse(r);
  });
  var url = resp.toPrefilledUrl();
  var campos = {};
  nomes.forEach(function (n) {
    var m = url.match(new RegExp("entry\\.(\\d+)=X" + n));
    campos[n] = m ? "entry." + m[1] : "";
  });
  var acao = form.getPublishedUrl().replace(/\/viewform.*$/, "/formResponse");

  var bloco = "envio: {\n    acao: \"" + acao + "\",\n    campos: { " +
    nomes.map(function (n) { return n + ": \"" + campos[n] + "\""; }).join(", ") + " }\n  }";
  Logger.log("Formulário criado: " + form.getEditUrl());
  Logger.log("Cole no config.js:\n  " + bloco);
}
