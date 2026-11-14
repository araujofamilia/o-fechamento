# O Fechamento

Jogo de revisão de **Teoria do Jornalismo** (PUC-Campinas, Turma 0101, 2026/2). Não vale nota: prepara para a Prova Escrita Individual de 04/12.

- **8 mesas**, uma por teoria: pauta da teoria, questões de múltipla escolha, casos para aplicar e uma dissertativa.
- **Plantão**: casos misturados (reais, do Correio Popular de novembro de 2026, e situações hipotéticas) para identificar a teoria.
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

Sem configuração, o aluno baixa um arquivo com as respostas e envia por e-mail (tela "Minhas respostas").

Para receber tudo automaticamente numa planilha, rode `criar_formulario.gs` em script.google.com e cole no `config.js` o bloco que ele imprime.

## Publicar no GitHub Pages

Settings > Pages > Source: "Deploy from a branch", branch `main`, pasta `/ (root)`.
