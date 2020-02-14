const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const causeSchema = new Schema({

    cause: {
        type: String,
        required: true,
    },

    neededAmount: {
        type: Number,
        required: true
    },

    collectedAmount: {
        type: Number,
        default: 0
    },

    description: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true,
    },

    author: {
        type: ObjectId,
        ref: 'User'
    }

});

module.exports = new Model('Cause', causeSchema);