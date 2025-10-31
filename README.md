# NeuroMent

## Instruções para testar localmente ou web

### Sumário
1. [Testar Web](#testar-web)
2. [Baixar e testar localmente](#baixar-e-testar-localmente)
3. [Testar rotas do backend](#testar-rotas-do-backend)
4. [Sugestão de integração com o backend](#sugestão-de-integração-com-o-backend)
5. [Contribuição GitHub](#contribuição-github)

---

## Testar Web

Você pode testar o **NeuroMent** diretamente na web, sem precisar baixar nada.

### 1. Acesse o frontend
- Link do Vercel: [Clique aqui para abrir o NeuroMent](https://neuroment.vercel.app)  
- Ou acesse diretamente pelo URL: `https://neuroment.vercel.app`

> **Importante:** desabilite a tradução automática.  
> O backend foi migrado para **Django (Python)** e atualmente o deploy está sendo configurado. Em breve o ambiente online será atualizado.

### 2. Cadastro de teste
- Crie uma conta usando qualquer e-mail e senha.  
- Após o cadastro, será exibido um **código de confirmação**.  
- Aguarde alguns segundos para simular a confirmação de e-mail.

### 3. Login
- Faça login com o e-mail e senha criados.  
- Seus dados são armazenados com segurança (criptografia e respeito à LGPD).

---

## Baixar e testar localmente

### 1. Acesse o repositório

Clone o projeto:

```bash
git clone https://github.com/JonatanMariano/neuroment.git
cd neuroment
code .
2. Requisitos mínimos
Node.js ≥ 18

npm (vem com Node.js)

Git

VSCode (recomendado)

Backend Django configurado localmente

Repositório do backend (privado):
👉 NeuroMent-Backend

3. Instalação das dependências
Frontend:

bash
Copiar código
cd neuroment
npm install
npm install styled-components   # se necessário
4. Rodar o backend (Django)
No diretório do backend:

bash
Copiar código
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
O backend iniciará em:

cpp
Copiar código
http://127.0.0.1:8000
5. Rodar o frontend
bash
Copiar código
npm run dev
O frontend abrirá em algo como:

arduino
Copiar código
http://localhost:5173
Testar rotas do backend
O backend atual é Django REST Framework + JWT.

🔹 Registro de Usuário (Register)
POST
http://127.0.0.1:8000/api/auth/register/

Body (JSON):

json
Copiar código
{
  "username": "usuario_teste",
  "email": "usuario_teste@example.com",
  "password": "senha123"
}
Resposta esperada:

json
Copiar código
{
  "user": {
    "id": 1,
    "username": "usuario_teste",
    "email": "usuario_teste@example.com"
  },
  "access": "<ACCESS_TOKEN>",
  "refresh": "<REFRESH_TOKEN>"
}
🔹 Login (Auth)
POST
http://127.0.0.1:8000/api/auth/token/

Body (JSON):

json
Copiar código
{
  "username": "usuario_teste@example.com",
  "password": "senha123"
}
Resposta esperada:

json
Copiar código
{
  "refresh": "<REFRESH_TOKEN>",
  "access": "<ACCESS_TOKEN>"
}
🔹 Perfil do Usuário (Profile)
GET
http://127.0.0.1:8000/api/accounts/profile/

Header:

makefile
Copiar código
Authorization: Bearer <ACCESS_TOKEN>
Resposta esperada:

json
Copiar código
{
  "id": 1,
  "username": "usuario_teste",
  "email": "usuario_teste@example.com"
}
Sugestão de integração com o backend
O front-end que precisa integrar estas rotas está neste repositório:
👉 NeuroMent Front-End

Onde e como integrar:
Localização dos serviços de API
Crie ou edite a pasta src/services/ (ou similar) para adicionar as chamadas HTTP.

Use fetch ou axios para conectar às rotas do Django backend.

Exemplo com Axios:
javascript
Copiar código
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const loginUser = async (email, password) => {
  const response = await api.post("/auth/token/", {
    username: email,
    password: password,
  });
  return response.data;
};
Tokens de autenticação
Após login, salve os tokens (access, refresh) em localStorage ou no Context API.

Envie o token no header das rotas protegidas:

js
Copiar código
Authorization: `Bearer ${access_token}`
Configuração de ambiente
No front-end, adicione o backend base URL em .env:

ini
Copiar código
VITE_API_URL=http://127.0.0.1:8000/api
Testes
Use o Thunder Client, Postman ou o próprio front-end para testar os endpoints.

Comece testando registro e login antes de implementar telas que dependam do perfil do usuário.

⚠️ Nas próximas horas será feito o deploy do backend e novas rotas serão implementadas para dados pessoais e questionários.

Contribuição GitHub
1. Configuração Git local
bash
Copiar código
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git clone https://github.com/JonatanMariano/neuroment.git
cd neuroment
2. Fluxo de trabalho
Crie uma branch para a tarefa:

bash
Copiar código
git checkout -b nome-da-feature
Faça commits claros:

bash
Copiar código
git add .
git commit -m "Descrição do que foi feito"
Envie a branch:

bash
Copiar código
git push origin nome-da-feature
3. Sincronização com a main
bash
Copiar código
git fetch origin
git rebase origin/main
# ou
git merge origin/main
Resolva conflitos se houver:

bash
Copiar código
git add .
git rebase --continue   # se usou rebase
git push origin nome-da-feature --force
4. Regras importantes
Faça commits claros e objetivos.

Sempre mantenha o repositório atualizado antes de começar uma nova feature.

Use branches separadas para cada funcionalidade.

Evite conflitos desnecessários com a branch main.