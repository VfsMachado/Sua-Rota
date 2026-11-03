import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router as apiRouter } from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 3001

// ── Middlewares ───────────────────────────────────────────
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? 'https://sua-rota.com' // domínio de produção (ajustar depois)
    : 'http://localhost:5173' // Vite dev server
}))

app.use(express.json())

// ── Rotas ─────────────────────────────────────────────────
app.use('/api', apiRouter)

// ── 404 Handler ───────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' })
})

// ── Error Handler ─────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Erro interno do servidor' })
})

// ── Start ─────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
  console.log(`📌 Ambiente: ${process.env.NODE_ENV}`)
})

export default app
