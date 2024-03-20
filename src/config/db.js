const mongoose = require('mongoose');
let User

const connectDatabase = async () => {
    try {

        // Se comprueba si el modelo de usuario (User) ya está definido. Si no está definido, se define utilizando el método mongoose.model(). Se pasa el nombre del modelo como primer argumento y el esquema del modelo como segundo argumento
        if (!User) {
            User = mongoose.model('User', require('../models/userModel').schema);
        }

        await mongoose.connect('mongodb+srv://alexanderhdez2001:av4Fh5IvYYLNT9Kz@cluster0.8scgkak.mongodb.net/')
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));

        await initializeData();

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};




module.exports = connectDatabase;