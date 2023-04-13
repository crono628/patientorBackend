import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('fetching diagnoses')
})

router.post('/', (_req, res) => {
  res.send('saving diagnoses')
})

export default router
