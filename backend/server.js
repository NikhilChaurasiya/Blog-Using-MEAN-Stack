const express= require('express')
const mongoose = require('mongoose')
const articleRouter = require('../backend/routes/articles')
bodyParser = require('body-parser')
cors = require('cors')
dbConfig = require('./database/db');

// DATABASE CONNECTION
mongoose.Promise = global.Promise
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() => {
    console.log('Database sucessfully connected')
 },
 error => {
    console.log('Database could not connected: ' + error)
 }
)

//Setting port with express js
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/articles',articleRouter)

app.listen(4000)
