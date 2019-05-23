const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('@pusher/chatkit-server')

const app = express()

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:8e5347bd-63e5-479a-b75c-ccb9da6fbf49',
  key: 'e8958230-7833-4a80-b6c4-eff5b44809eb:OziKSqH1quJ/VP+BQ0/CzaE7nW3e2rMOiUlewHiz4nU='
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

const PORT = 3001
app.listen(PORT,err => {
  if(err){
    console.log(err)
  }
  else{
    console.log(`Running on port ${PORT}`)
  }
})
