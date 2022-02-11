const mongoose = require('mongoose');

module.exports = async function connection() {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(process.env.DB_CONNECTION, connectionParams);
        console.log('Connected to database');
    } catch (error) {
        console.error(error);
        console.log('Could not conect to db')
    }
}