````markdown
# NeuroMent

## Instruções para testar localmente ou web

### Sumário
1. [Testar Web](#testar-web)
2. [Baixar e testar localmente](#baixar-e-testar-localmente)
3. [Contribuição GitHub](#contribuição-github)

---

## Testar Web

Você pode testar o NeuroMent diretamente na web, sem precisar baixar nada. O front-end está integrado ao backend, então todas as funcionalidades funcionam de verdade.

**Passos:**

### 1. Acesse o frontend
- Link do Vercel: [Clique aqui para abrir o NeuroMent](https://neuroment.vercel.app)  
- Ou acesse diretamente pelo URL: `https://neuroment.vercel.app`

> **Importante:** Desabilite a tradução automática.  
> O server do Render reinicia as instâncias e, no plano gratuito, pode levar até 50 segundos para responder às requisições.

### 2. Cadastro de teste
- Crie uma conta usando qualquer e-mail e senha.  
- Ao concluir o cadastro, será gerado um **código de confirmação** na tela. **Anote esse código.**  
- Aguarde alguns segundos para que a simulação da confirmação de e-mail seja processada.

### 3. Login
- É necessário registrar a conta antes de fazer login.  
- Use o e-mail e a senha cadastrados para acessar o app.

> **Observação:** Seus dados ficam salvos no banco local com a senha criptografada. LGPD respeitada.

### 4. Navegação pelo app
- Explore todas as funcionalidades. O backend está em [https://neuroment.onrender.com](https://neuroment.onrender.com).  
- Todos os dados inseridos via app web são armazenados no banco real.

> **Dica:** Tenha paciência durante a confirmação de e-mail; mesmo após inserir o código, pode levar alguns segundos para o acesso completo.  
> 💡 Se não conseguir logar ou ver mudanças imediatas, recarregue a página ou limpe o cache.

---

## Baixar e testar localmente

### 1. Acesse o repositório

Clone o projeto do GitHub:

```bash
git clone https://github.com/JonatanMariano/neuroment.git
cd neuroment
code .
````
````markdown
### 2. Requisitos mínimos

* **Node.js ≥ 18**
* **npm** (vem com Node.js)
* **Git**
* **VSCode recomendado**
* **Banco PostgreSQL local** ou conta Render para o backend
* Portas livres (backend padrão: 5000)

### 3. Instalação das dependências

**Frontend:**

```bash
cd /caminho/para/neuroment
npm install
npm install styled-components   # se necessário
```

**Backend:**

```bash
cd neuroment-backend
npm install
```

> A pasta do backend está em `neuroment-backend`.

### 4. Configurar o banco

* Use Postgres local ou Supabase.
* Crie o projeto no Supabase ou configure Postgres local.
* Forneça credenciais de conexão no arquivo de configuração dentro de `neuroment-backend`.
* Siga os arquivos de configuração do backend.

### 5. Rodar a aplicação (dois terminais)

**Terminal A (backend):**

```bash
cd /caminho/para/neuroment/neuroment-backend
node index.js
```

> O backend iniciará na porta 5000.

**Terminal B (frontend):**

```bash
cd /caminho/para/neuroment
npm run dev
```

> O frontend abrirá na porta mostrada pelo Vite (ex: [http://localhost:5173](http://localhost:5173)).

### 6. Fluxo para testar a aplicação

1. Abra o frontend no navegador.
2. Vá em “Criar conta” e preencha todos os campos obrigatórios.
3. Envie o formulário; aparecerá um **código de confirmação**.
4. Cole o código na tela de confirmação de e-mail.
5. Volte para a tela de login e faça login com as credenciais criadas.
6. O registro será persistido no banco.

### 7. Comandos úteis

**Frontend:**

```bash
cd neuroment
npm install
npm install styled-components
npm run dev
```

**Backend:**

```bash
cd neuroment-backend
npm install
node index.js
```

### 8. Problemas comuns

* Porta ocupada: libere a porta 5000 ou ajuste a configuração do backend.
* Dependência faltando: rode `npm install` na pasta correta.
* Frontend não carrega: verifique a URL do terminal (`npm run dev`).
* Backend não conecta: confirme Postgres/Supabase e credenciais.

### 9. Testes rápidos

* Backend: acesse `http://localhost:5000`
* Frontend: acesse a URL do Vite e siga fluxo de cadastro.

### 10. Dúvidas e problemas

Abra uma **issue** no repositório com título curto e passo a passo do erro.

---

## Contribuição GitHub

### 1. Configuração Git local

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git clone https://github.com/JonatanMariano/neuroment.git
cd neuroment
```

### 2. Fluxo de trabalho

* Crie uma branch para a tarefa:

```bash
git checkout -b nome-da-feature
```

* Faça commits claros:

```bash
git add .
git commit -m "Descrição do que foi feito"
```

* Envie a branch:

```bash
git push origin nome-da-feature
```

* Abra um Pull Request no GitHub:

  * **Origem:** sua branch
  * **Destino:** `main`
  * Adicione descrição e comentários do que foi feito

> A branch `main` está protegida: **não é possível dar push direto**.

### 3. Sincronização com a main

```bash
git fetch origin
git rebase origin/main   # ou git merge origin/main
```

* Resolva conflitos se houver:

```bash
git add .
git rebase --continue   # se usou rebase
git push origin nome-da-feature --force
```

### 4. Regras importantes

* Sempre use pull requests.
* Resolva todas as conversas antes do merge.
* Mantenha commits claros e objetivos.
* Ninguém deve dar push direto na `main`.

