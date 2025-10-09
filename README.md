# NeuroMent - Teste de Rotas de Autenticação (Front-End)

Este guia mostra como testar as rotas de **registro**, **login** e **perfil** do back-end do NeuroMent usando HTTP requests.

> ⚠️ Observação: O projeto está em evolução. Por enquanto, somente Jonatan e Cauã podem fazer commits. Nas próximas horas será feito um deploy e novas rotas e bancos de dados de usuário, dados pessoais e questionários serão implementados.

---

## Sumário

1. [Registro de Usuário (Register)](#1️⃣-registro-de-usuário-register)  
2. [Login (Auth)](#2️⃣-login-auth)  
3. [Perfil do Usuário (Profile)](#3️⃣-perfil-do-usuário-profile)  
4. [Sugestão de Integração com Front-End](#🔹-sugestão-de-integração-com-front-end)

---

## 1️⃣ Registro de Usuário (Register)

**POST**  
`http://127.0.0.1:8000/api/auth/register/`

**Body (JSON)**:
```json
{
  "username": "jonatan_teste2",
  "email": "jonatan_teste2@example.com",
  "password": "senha123"
}
Resposta esperada (JSON):

json
Copiar código
{
  "user": {
    "id": 3,
    "username": "jonatan_teste2",
    "email": "jonatan_teste2@example.com"
  },
  "access": "<ACCESS_TOKEN>",
  "refresh": "<REFRESH_TOKEN>"
}
2️⃣ Login (Auth)
POST
http://127.0.0.1:8000/api/auth/token/

Body (JSON):

json
Copiar código
{
  "username": "jonatan_teste2@example.com",  // ou "jonatan_teste2"
  "password": "senha123"
}
Resposta esperada (JSON):

json
Copiar código
{
  "refresh": "<REFRESH_TOKEN>",
  "access": "<ACCESS_TOKEN>"
}
3️⃣ Perfil do Usuário (Profile)
GET
http://127.0.0.1:8000/api/accounts/profile/

Header (Authorization):

makefile
Copiar código
Authorization: Bearer <ACCESS_TOKEN>
Resposta esperada (JSON):

json
Copiar código
{
  "id": 3,
  "username": "jonatan_teste2",
  "email": "jonatan_teste2@example.com"
}
🔹 Sugestão de Integração com Front-End
O front-end que precisa integrar estas rotas está no repositório:
NeuroMent

Onde e como integrar:
Chamadas HTTP

No front-end, identifique a pasta onde estão os serviços de API (ex: src/services ou src/api).

Crie funções para chamar cada endpoint: register, auth e profile.

Tokens de autenticação

Salvar os tokens (access e refresh) localmente (ex: localStorage ou state global).

Para rotas protegidas (profile), enviar header:

js
Copiar código
Authorization: `Bearer ${access_token}`
Se o access expirar, usar o refresh para gerar novo token antes de acessar rotas protegidas.

Configuração das variáveis de ambiente

Certifique-se que o front-end saiba o base URL do back-end (http://127.0.0.1:8000 ou deploy).

Guarde qualquer chave secreta ou URL de API em .env (ex: REACT_APP_API_URL).

Testes

Use o Thunder Client, Postman ou funções internas do front-end para testar os endpoints antes de integrar telas.

Comece integrando registro e login, depois profile.

⚠️ Aviso: Nas próximas horas, o deploy será feito e novas rotas e bancos de dados de usuário, dados pessoais e questionários serão implementados. Fique atento às atualizações para ajustar o front-end.

Para dúvidas ou problemas de integração, consulte o repositório do back-end:
NeuroMent-Backend
