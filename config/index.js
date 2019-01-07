/*
    DATABASE
*/
let MongoUsername = "admin"
let MongoPassword = "abc123"
const MongoURI = `mongodb://${MongoUsername}:${MongoPassword}@ds115963.mlab.com:15963/auth-system`



/*
    ENCRYPTION
*/
const jwtSecret = 'someSecret'
const saltRounds = 12
const tokenExpiration = 3600

/*
    !!!! EXPORT !!!!
*/
export {MongoUsername, MongoPassword, MongoURI, jwtSecret, saltRounds, tokenExpiration};