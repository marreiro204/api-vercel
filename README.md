# ⚽ API de Jogadores - Brasileirão 2024

API simples para fornecer dados dos jogadores do Brasileirão 2024, utilizando um arquivo estático `db.json` como banco de dados. Deploy gratuito realizado na Vercel.

---


Faça o deploy do JSON Server na Vercel
Um template para fazer o deply do JSON Server na Vercel permite que você rode uma API REST fake (mock API) online!

Demonstração deste repositório:

## 🌐 URL da API

Acesse a API pública aqui:  
➡️ [https://api-vercel2.vercel.app/api/jogadores](https://api-vercel2.vercel.app/api/jogadores)

---

Como utilizar
1. clone este repositório.
2. Atualize o db.json ou utilize o padrão no repositório.
3. Crie uma conta ou faça login na Vercel.
4. A partir da dashboard da Vercel, clique "+ New Project" e então "Import" seu repositório.
5. Na tela "Configure Project", deixe tudo padrão e clique "Deploy".
6. Aguarde até que o deploy esteja terminado e o seu próprio JSON Server está pronto para uso!

db.json padrão:

Retorna um JSON com a lista completa dos jogadores e suas estatísticas, como no exemplo abaixo:

```json
[
  {
    "nome": "Jogador 1",
    "gols": 10,
    "assistencias": 5,
    "partidas": 20,
    "imagem": "imagens/jogador1.png"
  },
  {
    "nome": "Jogador 2",
    "gols": 7,
    "assistencias": 3,
    "partidas": 18,
    "imagem": "imagens/jogador2.png"
  }
]

Referências
1. https://github.com/andersonfontes/api-crud-server
2. https://github.com/kitloong/json-server-vercel
3. https://github.com/typicode/json-server
4. https://vercel.com

