const mongoose = require('mongoose');
 
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be filled out"],
        minlength: [3, "{PATH} must be at least 3 characters"]

    },
    price: {
        type: Number,
        required: [true, "{PATH} must be filled out"],
        minlength: [1, "{PATH} must be at least 1 character"]
    },
    description: {
        type: String,
        required: [true, "{PATH} must be filled out"],
        minlength: [20, "{PATH} must be at least 20 characters"]
    }
}, {timestamps:true});
 
const Product = mongoose.model('Product', ProductSchema);
 
module.exports = Product;