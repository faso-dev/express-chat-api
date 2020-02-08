// express app instance
const app = require('express')();
// body parser to handle http body
const bodyParser = require('body-parser');
// mongoose instance
const mongoose = require('mongoose');
//load the cors
const cors = require('cors');
//load the message router
const messageRouter = require('./src/Routes/message');
//load env
require('dotenv/config');
// set mongoose db connection
mongoose.connect(process.env.DATA_BASE_URL, {
        useNewUrlParser: true, useUnifiedTopology: true
}, () => {
    console.log('The database connection etablished with success');
});

//set the body-parser midleware
app.use(bodyParser.json());
//set the cors midleware for our api
app.use(cors());
//Set midleware for all routes start with messages
app.use('/api/messages', messageRouter);

//listing for the home page
app.get('/', (req, res) => res.json({name: 'chat-api', version: 'v1.0', author: 'faso-dev'}));

// Set the server port
const PORT = process.env.PORT || 3000;
//start the server and listing on the port PORT
app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`)
});
