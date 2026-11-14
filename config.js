/* =====================================================================
   Configuração do envio das respostas dissertativas.

   E-mail do professor: usado no botão "Enviar por e-mail".

   Formulário Google (opcional): se preenchido, cada resposta
   dissertativa e cada parecer vão sozinhos para uma planilha assim
   que o aluno entrega. Para gerar estes códigos, rode o script
   criar_formulario.gs (instruções no próprio arquivo) e cole aqui
   o bloco que ele imprimir. Enquanto "acao" estiver vazio, o jogo
   usa só o arquivo e o e-mail.
   ===================================================================== */
var CONFIG = {
  emailProfessor: "artur.araujo@puc-campinas.edu.br",
  dataProva: "04/12",
  envio: {
    acao: "https://docs.google.com/forms/d/e/1FAIpQLSduXynRnD3QILSgVdsYp3zU-0IwI30o17c3XLx5P8Bu48yYqQ/formResponse",
    campos: { email: "entry.1408065154", tipo: "entry.1577861986", sala: "entry.635517416", pergunta: "entry.348367121", resposta: "entry.1697130611", dados: "entry.550880083" }
  }
};
