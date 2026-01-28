const express = require('express');
const bodyParser = require('body-parser')


// const jsonParser = bodyParser.json()
// const urlencodedParser = bodyParser.urlencoded()


const app = express();
app.use(express.json());

const port = 3000;

let data = {};

app.get('/', (req, res) => {
  res.send('Hello, Express World!', 200);
});

app.post('/callback', (req, res) => {
    // console.log(req);
    if (req.body) {
        // insert to database
        data= req.body;
        console.log(req.body);
        res.status(201).send({
            "message": "Stored response successfully for user",
            "data": req.body
        });
    } else {
        console.log("Error retrieving callback data from the callback provider");
        res.status(400).send({
            "message": "Error retrieving any data from the callback provider",
            "data": null
        });
    }
});

app.get('/callback/fetch', (req, res) => {
    console.log("Reading from sqlite...")
    if (Object.keys(data).length !== 0) {
        res.status(200).send({
            "message": "Retrieved callback data successfully",
            "data": data // data from sqlite
        });
    } else {
        console.log("Error retrieving callback data from the callback provider");
        res.status(400).send({
            "message": "Error retrieving any data from the callback provider",
            "data": null
        });
    }
    
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});