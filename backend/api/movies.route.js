import express from 'express'

//Express Router
const router = express.Router()

router.route('/').get((req,res)=>res.send("Hello World"))

export default router