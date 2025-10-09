````md
# Integração entre o Back-end (Django REST) e o Front-end (NeuroMent React)

## Sumário
1. Estrutura de Integração
2. Conexão API → Front-end
3. Configuração de Variáveis de Ambiente
4. Testes Locais
5. Deploy e Integração Contínua

---

## 1. Estrutura de Integração
O front-end do NeuroMent (React) está no repositório:
👉 [https://github.com/JonatanMariano/neuroment](https://github.com/JonatanMariano/neuroment)

O back-end (Django REST Framework) fornece as rotas de autenticação, cadastro, planos de estudo e personalização do usuário.

- Front-end: React + Axios + Context API
- Back-end: Django REST + JWT + PostgreSQL

---

## 2. Conexão API → Front-end

**Arquivo base para configuração (exemplo):**
`/src/api/api.js`
```javascript
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
````

No ambiente local, use:

```
REACT_APP_API_URL=http://127.0.0.1:8000/api
```

Endpoints comuns:

* `/auth/login/`
* `/auth/register/`
* `/user/profile/`
* `/plans/`
* `/plans/{id}/details/`

---

## 3. Configuração de Variáveis de Ambiente

### Back-end (.env)

```
DEBUG=True
SECRET_KEY=seu_secret_key
DATABASE_URL=postgres://user:senha@localhost:5432/neuroment
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

### Front-end (.env)

```
REACT_APP_API_URL=http://127.0.0.1:8000/api
```

---

## 4. Testes Locais

No terminal, execute:

### Back-end:

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Front-end:

```bash
npm install
npm start
```

Verifique a comunicação no console de rede (`F12 → Network`) para garantir que o front esteja recebendo os dados da API corretamente.

---

## 5. Deploy e Integração Contínua

A integração pode ser feita via build automático:

* O back-end pode ser hospedado em Render, Railway, ou AWS Free Tier.
* O front-end pode ser hospedado no Vercel ou Netlify.

Apenas atualize as variáveis de ambiente de cada serviço com a URL de produção do back-end.

```
```
