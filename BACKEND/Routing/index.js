const express = require('express')
const app = express()
const port = 3000

//import items ki router file
const item = require('./routes/item');
const birds =  require('./routes/birds');

//load into applications
app.use('/item', item);
app.use('/birds', birds);



app.listen(port, () => {
    console.log('example app listening on port ${port}')
})