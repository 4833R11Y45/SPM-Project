const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
});

// Adding the findByIdAndDelete method to the schema
schema.statics.findByIdAndDelete = async function (id) {
    try {
        const result = await this.findByIdAndDelete(id);
        return result;
    } catch (error) {
        throw error;
    }
};

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
