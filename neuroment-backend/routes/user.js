const express = require('express');
const router = express.Router();
const pool = require('../db');
const authenticateToken = require('../middleware/authMiddleware');

// Buscar dados do usuário
router.get('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await pool.query('SELECT id, name, email FROM users WHERE id = $1', [id]);
    if (user.rows.length === 0) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Atualizar dados do usuário
router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email',
      [name, email, id]
    );
    res.json(updatedUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

module.exports = router;

