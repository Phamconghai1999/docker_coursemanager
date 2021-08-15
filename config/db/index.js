const mongoose = require('mongoose');
const mongodb_uri = 'mongodb+srv://phamhai8599:phamhai8599@cluster0.2vvnb.mongodb.net/anidb?retryWrites=true&w=majority/coursemanager';
// const mongodb_uri = 'mongodb://localhost:27017/appjs_dev';
// const uri = process.env.MONGODB_URI //Config from heroku var
async function connect(){
    try {
        await mongoose.connect(mongodb_uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("Connect MongoDB Successfully");
    } catch (err) {
        console.log("Connect Fail");
    }
};




 





module.exports = { connect };