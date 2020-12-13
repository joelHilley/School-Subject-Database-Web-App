
const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()



//connection to mongoDB
MongoClient.connect('mongodb+srv://admin:newpass@cluster0.vxttk.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('subjects')
        const subjectsCollection = db.collection('subjects')
        
        //middleware
        app.set('view engine', 'ejs');
        app.use(bodyParser.urlencoded({ extended: true }))

        //routes
        /*app.get('/', (req, res) => {
            res.sendFile('/Users/joelh/Desktop/IT6037 Data Acess and Management/IT6037Project_92060012/School-Subject-Database-Web-App/Web App/' + 'index.html')
        })*/

        app.get('/', (req, res) => {
            res.sendFile('/Users/joelh/Desktop/IT6037 Data Acess and Management/IT6037Project_92060012/School-Subject-Database-Web-App/Web App/' + 'index.html')
            db.collection('subjects').find().toArray()
                .then(subjects => {
                    res.render('index.ejs', { subjects: subjects})
                })
                .catch(/* ... */)
        })
        
        app.post('/subjects', (req, res) => {
            subjectsCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })

        app.listen(3000, function () {
            console.log('listening on 3000')
        })
    })
    .catch(error => console.error(error))

