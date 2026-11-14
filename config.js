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
    acao: "",
    campos: { email: "", tipo: "", sala: "", pergunta: "", resposta: "", dados: "" }
  }
};
