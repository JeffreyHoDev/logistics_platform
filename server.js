const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'db4free.net',
      port : 3306,
      user : 'base_user01',
      password : 'wS2021TNTS!@',
      database : 'base_logistics'
    }
});


const app = express()
const port = 9999


app.use(cors())
app.use(bodyParser())

app.get('/', (req, res) => {
  knex.select().table("assets")
  .then(data => res.send(JSON.stringify(data)))
  .catch(err => console.log(err))
})


app.post('/add-asset', (req, res) => {
    knex('assets').insert(req.body)
    .then(response => {
        if(response.length > 0){
            res.json({
                "status": "Success"
            })
        }
    })
    .catch(err => {
        res.json({
            "status": "error",
            "message": err
        })
    })
})

app.post('/update-asset', (req,res) => {
    const { id } = req.body
    knex('assets').where({id}).update(req.body)
    .then(response => {
        res.json(response)
    })
})

app.post('/delete-asset', (req, res) => {
    const { id } = req.body
    knex('assets').where('id', id).del()
    .then(response => {
        if(response !== 0){
            res.json({
                "status": "Success"
            })
        }
    }).catch(err => {
        res.json({
            "status": "error",
            "message": err
        })
    })
})

app.get("/get-users-data", (req, res) => {
    knex.select().table("users")
    .then(data => res.send(JSON.stringify(data)))
    .catch(err => console.log(err))
})

app.post("/add-user", (req,res) => {
    const { password } = req.body
    const saltRounds = 10
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
            req.body.password = hash
            knex('users').insert(req.body).then(response => {
                console.log(response)
                res.json({
                    "status": "success"
                })
            })
            .catch(err => {
                res.json({
                    "status": "error",
                    "message": err
                })
            })
        });
    });
})

app.post('/update-user', (req,res) => {
    const { id } = req.body
    knex('users').where({id}).update(req.body)
    .then(response => {
        res.json(response)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})