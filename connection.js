const mongoose = require('mongoose');

module.exports = async function connection() {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.868sz.mongodb.net/ucc?retryWrites=true&w=majority', connectionParams);
        console.log('Connected to database');
    } catch (error) {
        console.error(error);
        console.log('Could not conect to db')
    }
}