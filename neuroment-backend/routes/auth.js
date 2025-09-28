const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');
require('dotenv').config();

// === Cadastro com código de confirmação ===
router.post('/register', async (req, res) => {
  const { name, sobrenome, email, password, termos_aceitos } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Gera código aleatório de 6 dígitos
    const codigoConfirmacao = Math.floor(100000 + Math.random() * 900000);

    const newUser = await pool.query(
      `INSERT INTO users 
       (name, sobrenome, email, password, termos_aceitos, codigo_confirmacao) 
       VALUES ($1, $2, $3, $4, $5, $6) 
       RETURNING id, name, sobrenome, email, termos_aceitos, codigo_confirmacao`,
      [name, sobrenome, email, hashedPassword, termos_aceitos, codigoConfirmacao]
    );

    // Retorna os dados do usuário + código para o front (simulação)
    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// === Login ===
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0)
      return res.status(400).json({ message: 'Usuário não encontrado' });

    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) return res.status(400).json({ message: 'Senha incorreta' });

    const token = jwt.sign(
      { id: user.rows[0].id, email: user.rows[0].email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// === Confirmar e-mail (simulação) ===
router.post('/confirm-email', async (req, res) => {
  const { userId, code } = req.body;
  try {
    // Busca usuário
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    if (user.rows.length === 0) return res.status(400).json({ message: 'Usuário não encontrado' });

    // Verifica código
    if (user.rows[0].codigo_confirmacao != code)
      return res.status(400).json({ message: 'Código inválido' });

    // Atualiza email_confirmado
    await pool.query('UPDATE users SET email_confirmado = true WHERE id = $1', [userId]);

    res.json({ message: 'E-mail confirmado com sucesso!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

module.exports = router;


