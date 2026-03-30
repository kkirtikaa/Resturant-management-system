import express from 'express'
import { createReservation, getAllReservations, deteleReservation } from '../Controllers/reservationControllers.js'

const router =express.Router()

router.post('/create', createReservation)
router.get('/get', getAllReservations)
router.post('/delete/:id', deteleReservation)

export default router
