const {createServer} = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const compression = require('compression')
const Chatkit = require('@pusher/chatkit-server')
const dotenv = require('dotenv') 
dotenv.config()

const normalizePort = port => parseInt(port,10)
const PORT = normalizePort(process.env.PORT || 3001)


const app = express()

const dev = app.get('env') !== 'production'

if (!dev){
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))

  app.use(express.static(path.resolve(__dirname,'build')))

  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'build','index.html'))
  })
}


const server = createServer(app)

const chatkit = new Chatkit.default({
  instanceLocator: process.env.INSTANCE_LOCATOR,
  key: process.env.CHATKIT_KEY
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())




app.post('/users', (req, res) => {
  const { username } = req.body;

  chatkit
    .createUser({
      id: username,
      name: username,
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      if (error.error === 'services/chatkit/user_already_exists') {
        res.sendStatus(200);
      } else {
        let statusCode = error.status;
        if (statusCode >= 100 && statusCode < 600) {
          res.status(statusCode);
        } else {
          res.status(500);
        }
      }
    });
});

app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({ userId: req.query.user_id })
  res.status(authData.status).send(authData.body)
  console.log(authData.body)
})


server.listen(PORT,err => {
  if(err){
    console.log(err)
  }
  else{
    console.log(`Running on port ${PORT}`)
  }
})
