NeuroMent — instruções para rodar localmente

Acesse o repositório e baixe o projeto. 
GitHub

https://github.com/JonatanMariano/neuroment
git clone https://github.com/JonatanMariano/neuroment.git
cd neuroment
code .


Requisitos mínimos

Node.js (recomendado ≥ 18).

npm (vem com Node).

Git.

VSCode recomendado.

Um banco Postgres (local) ou conta Supabase para o backend.

Portas livres (backend usa 5000).

Instalação das dependências

Na raiz do projeto (frontend):

cd /caminho/para/neuroment
npm install
# instalar styled-components caso necessário
npm install styled-components


No backend:

cd neuroment-backend
npm install


A pasta do backend está em neuroment-backend. 
GitHub

Configurar o banco

Use Postgres local ou Supabase.

Crie o projeto no Supabase ou instale Postgres local.

Forneça as credenciais de conexão ao backend no local de configuração indicado dentro da pasta neuroment-backend (siga os arquivos de configuração do backend).

Rodar a aplicação (dois terminais)

Terminal A (backend):

cd /caminho/para/neuroment/neuroment-backend
# depois de instalar as deps
node index.js


O servidor backend inicia na porta 5000.

Terminal B (frontend):

cd /caminho/para/neuroment
npm run dev


O frontend abrirá na porta mostrada pelo Vite (ex: http://localhost:5173).

Fluxo para testar a aplicação (passo a passo)

Abra o frontend no navegador.

Vá em “Criar conta” (signup).

Preencha todos os campos obrigatórios. Marque a checkbox de concordância.

Envie o formulário. Na tela de cadastro aparecerá um código de confirmação de 6 dígitos.

Copie esse código.

Cole o código na tela de confirmação de e-mail.

Após confirmar, volte à tela de login e faça login com as credenciais que você criou.

O registro será persistido no banco.

Comandos úteis (resumo)

git clone https://github.com/JonatanMariano/neuroment.git
# instalar deps frontend
cd neuroment
npm install
npm install styled-components
npm run dev        # roda frontend
# instalar deps backend
cd neuroment-backend
npm install
node index.js      # roda backend na porta 5000


Problemas comuns

Erro de porta ocupada: libere a porta 5000 ou ajuste o backend.

Erro de dependência: rode npm install na pasta correta.

Se o frontend não carregar, verifique a URL mostrada pelo terminal do npm run dev.

Se o backend acusa erro de conexão com o banco, verifique se o Postgres/Supabase está rodando e se as credenciais estão corretas na configuração do backend.

Testes e verificação rápida

Backend: acesse http://localhost:5000 (ou a rota base) para confirmar que está ativo.

Frontend: acesse a URL do Vite e faça todo o fluxo de cadastro descrito no item 6.

Dúvidas e problemas

Abra uma issue no repositório com título curto e passo a passo do erro. 
GitHub
