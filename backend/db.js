const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017";

/*const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.export = connectToMongo;*/



/*async function connectToMongo() {
  await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}*/


const connectToMongo = async () => {
  await mongoose.connect(mongoURI)
    .then(() => console.log("Connected to Mongo Successfully"))
    .catch(err => console.log(err));
};

module.exports = connectToMongo;