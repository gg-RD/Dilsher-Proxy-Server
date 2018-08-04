const express = require('express');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));//look into __dirname doc

app.get('/description/air_force_1', function(req, res){
        
        const options = {
            url: 'http://localhost:3001/description/air_force_1'
        }
        request(options, (error, response, body) => {
           res.send(body)
        });
    })
app.get('/flyknit', function(req, res){
        // send client side data from db to http://localhost:3003/flyknit
        const options = {
            url: 'http://gallery:3003/flyknit'
        }
        request(options, (error, response, body) => {
            res.send(body);
        });
    });

app.get('/shoes/shoe', function(req, res){
    const options = {
      url: 'http://localhost:3004/shoes/shoe'
    }
    request(options, (error, response, body) => {
      res.send(body);
    });
})
app.post('/shoes/shoe', function(req, res){
    const options = {
      url: 'http://localhost:3004/shoes/shoe'
    }
    request(options, (error, response, body) => {
      res.send(body);
    });
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});



