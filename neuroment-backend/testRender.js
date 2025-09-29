import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false } // ⚠️ Essencial para Render
});

async function teste() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Conexão OK:", res.rows);
    await pool.end();
  } catch (err) {
    console.error("Erro ao conectar:", err);
  }
}

teste();


