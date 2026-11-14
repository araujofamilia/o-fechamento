# O Fechamento

Jogo de revisão de **Teoria do Jornalismo** (PUC-Campinas, Turma 0101, 2026/2). Não vale nota: prepara para a Prova Escrita Individual de 04/12.

- **8 mesas**, uma por teoria: pauta da teoria, questões de múltipla escolha, casos para aplicar e uma dissertativa.
- **Plantão**: casos misturados para identificar a teoria: 14 reais, de jornais de novembro de 2026 (Correio Popular, O Globo, Estadão, Estado de Minas e Correio da Manhã Campinas), e 20 situações hipotéticas criadas para o treino.
- **Fechamento**: parecer no formato da prova; abre quando as 8 mesas estão fechadas.
- Cada rodada sorteia outras questões, então dá para jogar de novo.
- O progresso fica salvo no navegador do aluno, pelo e-mail que ele digita na entrada.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | página e visual |
| `jogo.js` | lógica do jogo |
| `dados.js` | todo o conteúdo: teorias, questões, casos, dissertativas e pareceres |
| `config.js` | e-mail do professor, data da prova e envio automático (opcional) |
| `criar_formulario.gs` | script para criar o Formulário Google que recebe as respostas |

## Como as respostas chegam ao professor

O envio automático está ligado. Cada dissertativa e cada parecer vão, no momento da entrega, para o Formulário Google "O Fechamento · respostas do jogo (2026/2)", que grava tudo na planilha "O Fechamento · respostas dos alunos (2026/2)". Os botões da tela "Minhas respostas" (baixar arquivo, abrir e-mail, copiar) continuam valendo como cópia de segurança.

Para trocar de formulário, rode `criar_formulario.gs` em script.google.com e cole no `config.js` o bloco que ele imprime. Se o bloco `envio` ficar com `acao` vazio, o jogo volta a usar só o arquivo e o e-mail.

## Publicar no GitHub Pages

Settings > Pages > Source: "Deploy from a branch", branch `main`, pasta `/ (root)`.

Endereço do jogo: https://araujofamilia.github.io/o-fechamento/
