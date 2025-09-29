# NeuroMent

## Instruções para testar localmente ou web

### Sumário
1. [Testar Web](#testar-web)
2. [Baixar e testar localmente](#baixar-e-testar-localmente)

---

## Testar Web

Você pode testar o NeuroMent diretamente na web, sem precisar baixar nada. O front-end está integrado ao backend, então todas as funcionalidades funcionam de verdade.

**Passos:**

1. **Acesse o frontend:**
   - Link do Vercel: [Clique aqui para abrir o NeuroMent](https://neuroment.vercel.app)  
   - Ou acesse diretamente pelo URL: `https://neuroment.vercel.app`  
> Deixe a tradução automática desabilitada, esta versão inicial está em português e pode ter conflitos

2. **Cadastro de teste:**
   - Crie uma conta usando qualquer e-mail e senha.  
   - Ao concluir o cadastro, será gerado um **código de confirmação** na tela. **Anote esse código**, pois ele será necessário para confirmar a conta.  
   - Aguarde um pouco até que a simulação da confirmação de e-mail seja processada; isso pode levar alguns segundos.

3. **Login:**
   - Primeiro, é necessário registrar a conta. **Não é possível fazer login antes de se cadastrar.**  
   - Para testar o login, volte para a tela de login, insira o e-mail e a senha cadastrados e entre no app.

4. **Navegação pelo app:**
   - Explore todas as funcionalidades. Todas as requisições de autenticação feitas pelo front-end estão conectadas ao backend: [https://neuroment.onrender.com](https://neuroment.onrender.com) As demais estão em manutenção e em breve tudo estará integrado ao back.
   - Todos os dados inseridos via app web são armazenados no nosso banco de dados real.

> Tenha paciência durante o teste, principalmente na etapa de confirmação de e-mail. Mesmo após inserir o código correto, pode levar alguns segundos para que o acesso completo seja liberado.
> 
> Teste normalmente, mas lembre-se de que as contas e informações criadas permanecem até serem removidas.
> 
> 💡 Dica: se não conseguir logar ou ver mudanças imediatas, tente recarregar a página ou limpar cache.  

---

## Baixar e testar localmente

## Acesse o repositório
Clone o projeto do GitHub:

```bash
git clone https://github.com/JonatanMariano/neuroment.git
cd neuroment
code .
Requisitos mínimos
Node.js (recomendado ≥ 18)

npm (vem com Node.js)

Git

VSCode recomendado

Um banco Postgres local ou conta Render para o backend

Portas livres (backend padrão: 5000)

Instalação das dependências
Frontend
Na raiz do projeto:

bash
Copiar código
cd /caminho/para/neuroment
npm install
Se necessário, instale componentes estilizados:

bash
Copiar código
npm install styled-components
Backend
bash
Copiar código
cd neuroment-backend
npm install
A pasta do backend está em neuroment-backend.

Configurar o banco
Use Postgres local ou Supabase.

Crie o projeto no Supabase ou instale o Postgres local.

Forneça as credenciais de conexão ao backend no arquivo de configuração indicado dentro da pasta neuroment-backend.

Siga os arquivos de configuração do backend para garantir que tudo está correto.

Rodar a aplicação (dois terminais)
Terminal A (backend)
bash
Copiar código
cd /caminho/para/neuroment/neuroment-backend
node index.js
O backend iniciará na porta 5000.

Terminal B (frontend)
bash
Copiar código
cd /caminho/para/neuroment
npm run dev
O frontend abrirá na porta mostrada pelo Vite (ex: http://localhost:5173).

Para testes de performance, o componente <SpeedInsights /> já está incluso no frontend.

Fluxo para testar a aplicação
Abra o frontend no navegador.

Vá em “Criar conta” (cadastre-se).

Preencha todos os campos obrigatórios e marque a caixa de concordância.

Envie o formulário; na tela de cadastro aparecerá um código de confirmação de 6 dígitos.

Copie esse código e cole na tela de confirmação de e-mail.

Após confirmar, volte para a tela de login e faça login com as credenciais criadas.

O registro será persistido no banco.

Comandos úteis
Frontend
bash
Copiar código
cd neuroment
npm install
npm install styled-components
npm run dev
Backend
bash
Copiar código
cd neuroment-backend
npm install
node index.js
Problemas comuns
Erro de porta ocupado: libere a porta 5000 ou ajuste a configuração do backend.

Erro de dependência: rode npm install na pasta correta.

Frontend não carrega: verifique a URL mostrada pelo terminal (npm run dev).

Backend não conecta ao banco: confirme se Postgres/Supabase está rodando e se as credenciais estão corretas.

Testes e verificação rápida
Backend: acesse http://localhost:5000 (ou rota base) para confirmar que está ativo.

Frontend: acesse a URL do Vite e siga todo o fluxo de cadastro descrito acima.

Dúvidas e problemas
Abra uma issue no repositório com título curto e passo a passo do erro.
