const cloudinary = require('cloudinary').v2
const multer = require('multer')

cloudinary.config({
    cloud_name:'dljgmqgop',
    api_key:"419828645712659",
    api_secret:'WSrxZzCKvQQScusoU9UnfyT0lLk'
});

const storage = new multer.memoryStorage()

async function handleImageUpload(file) {
    const result = await cloudinary.uploader.upload(file,{
        resource_type: 'auto'
    })

    return result
}

user & admin auth complete going for admin product upload 

const upload = multer({storage});
module.exports ={upload, handleImageUpload}