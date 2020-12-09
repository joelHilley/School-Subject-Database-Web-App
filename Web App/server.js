console.log('May Node be with you')

const express = require('express');
const app = express();


app.listen(3000, function() {
    console.log('listening on 3000')
  })

app.get('/',  (req, res) => {
    res.sendFile('/Users/joelh/Desktop/IT6037 Data Acess and Management/IT6037Project_92060012/School-Subject-Database-Web-App/Web App/' + 'index.html')
  })

  