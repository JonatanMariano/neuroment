const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json()); // Para ler JSON no body

app.use('/auth', authRoutes); // /auth/login, /auth/register
app.use('/user', userRoutes); // /user/:id

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

