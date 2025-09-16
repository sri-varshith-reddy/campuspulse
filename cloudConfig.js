
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary'); 

cloudinary.config({
  cloud_name: "dmcdfoduy",
  api_key: "956434331232872",
  api_secret: "2n_b4GmDIoJvzJL0jMKycW9ikUQ"
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'majorproj_dev',
      allowedFormats:["png","jpg","jpeg"]
    },
  });

  module.exports={
    cloudinary,storage
  }
