require('dotenv').config()
require('express-async-errors')

//extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

//Swagger
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

const express = require('express')
const app = express()

const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')
const connectDB = require('./db/connection')
const authentication = require('./middleware/authentication')
//const routes = require('./routes/route') 
 
//error handler middleware
const { errorHandlerMiddleware } = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

//connect to DB
const Jobs = require('./models/Jobs')

//var mongoose = require('mongoose')
// mongoose.connect('mongodb://mongodb:27017/JobsAPI', {useNewUrlParser:true})
// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'CONNECTION ERROR'))
// db.once('open', async function(){
//     console.log('Connected')
// })

//middleware
app.set('trust proxy',1)
app.use(rateLimiter({
    windowMs: 15*60*1000, //15mins
    max: 100 //limit each ip to request 100 per windowMs
}))
app.use(express.json())
app.use(express.static('./public'))
app.use(helmet())
app.use(cors())
app.use(xss())


//routes
app.get('/',async (req,res)=>{
    res.send(await Jobs.find({}))
    //res.send('<h1>Jobs API</h1><a href="/api-docs">Documentation</a>')
})

//Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authentication, jobsRouter)

app.use(errorHandlerMiddleware)
app.use(notFound)

//connection
const port = process.env.PORT || 3000

const start = async ()=> {
    try{
        //connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=> console.log("Server 3000 is listening"))
    }catch(error){
        console.log(error)
    }
}
start()
