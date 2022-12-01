const express = require('express');
const PORT = 900;
const app = express();

// we pass 2 arguements
// 1-> route
// 2-> controller action
// app.get('/', (req, res) => {
//     return  res.send('Hello World');
// })

// app.get('/hello-world', (req, res) => {
//     return res.send("We are learning backend");
// })

// app.get('/home', (req, res) => {
//     return res.send("Home");
// })

app.use('/', require('./routes/index'));

app.listen(PORT, (err) => {
    if(err){
        console.log(`error while running server on port: ${PORT}`);
    }
    console.log(`Server is up and running on port: ${PORT}`);
})