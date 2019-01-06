import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';

import router from './routes/user';
import {
    MongoURI
} from './config';

const app = express();

// Port variable
const PORT = 5000;

// Database connection
mongoose.connect(MongoURI, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connection to MongoDB has been successfully established");
}).catch(error => {
    console.log(`Database connection failed: ${error.errmsg}`);
})


// Connect body parser to express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport.js')(passport);
// Routes connection
app.use('/user', router);

// Initial GET method
app.get('/', (req, res) => {
    res.status(200).json({
        "message": "Expressjs has started successfully"
    });
});

app.listen(PORT, () => {
    console.log("\u001b[1;35m", `Started listening to port ${PORT}`);
});