const cloudinary = require("cloudinary").v2


cloudinary.config({ 
    cloud_name: 'dutafis38', 
    api_key: '299693194446885', 
    api_secret: process.env.API_SECRET
});

module.exports = cloudinary
