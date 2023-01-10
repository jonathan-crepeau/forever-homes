import mongoose from 'mongoose';
const mongoDB_URI = "mongodb+srv://jonathan-crepeau:mypassword@forevercluster0.dcn31ga.mongodb.net/fhusers?retryWrites=true&w=majority";
mongoose.connect(mongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Initial DB connection successful..'))
    .catch((error) => console.log(error));
module.exports = {
    User: require('./User')
};
