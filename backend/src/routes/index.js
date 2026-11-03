import { Router } from 'express'

export const router = Router()

// GET /api
router.get('/', (_req, res) => {
  res.json({
    message: 'Sua Rota API',
    version: '1.0.0'
  })
})

// GET /api/health
router.get('/health', (_req, res) => {
  res.json({
    status: 'online',
    project: 'Rota Comum',
    message: 'API funcionando!'
  })
})
