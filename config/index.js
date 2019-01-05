/*
    DATABASE
*/
let MongoUsername = "admin"
let MongoPassword = "abc123"
const MongoURI = `mongodb://${MongoUsername}:${MongoPassword}@ds115963.mlab.com:15963/auth-system`



/*
    !!!! EXPORT !!!!
*/
export {MongoUsername, MongoPassword, MongoURI};