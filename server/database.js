const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

mongoose
.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conected to MongoDB')
})
.catch(e => {
    console.log('MongoDb Error', e)
})

module.exports = mongoose

