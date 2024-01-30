const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const VendorSchema = new Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    branch_code:{
        type: String,
        required: true
    },
    brand_name: {
        type: String,
        required: true
    },
})

const vendor = mongoose.model('Vendor', VendorSchema);
module.exports = vendor;