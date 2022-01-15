import express from 'express'
import cors from 'cors'
import movies from './api/movies.route.js'

//Initialize the Express Server
const app  = express()


//Instantiate CORS middleware
app.use(cors())
app.use(express.json())

app.use('/api/v1/movies', movies)
app.use('*', (req, res)=>{
    res.status(404).json({
        error: "Not Found"
    })
})

//Export module
export default app