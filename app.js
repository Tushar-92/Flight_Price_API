
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());


//All routes goes here
const flyingRouteRouter = require('./routes/flyingRoute');
app.use('/getFare' , flyingRouteRouter);


//Connecting to the Server
app.listen(3000, () => {
    console.log(`Server Started at port ${3000}`);
})