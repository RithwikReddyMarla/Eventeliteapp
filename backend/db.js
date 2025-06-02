const mongoose = require('mongoose');

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await mongoose.connect(process.env.DB, connectionParams);
        console.log('Connected to the database successfully');
    } catch (err) {
        console.error(`Error connecting to the database. \n${err}`);
        throw err; // Ensure the error is thrown so it can be caught in the calling code
    }
};