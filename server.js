import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import passportConfig from './config/passport.js';
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

// Morgan logger
app.use(morgan('tiny'));

// Connect body parser to express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Cookie parser
app.use(cookieParser());

// Express session init
app.use(session({
    secret: 'someSecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

// Passport config
passportConfig(app);

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