const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    role: {type: String, required: true, default: 'buyer'},
    password: {type: String, required: true},
    name: {type: String, required: true},
    gender: {type: String, required: false, default: ''},
    surname: {type: String, required: true},
    patronymic: {type: String, required: false, default: ''},
    isActivated: {type: Boolean, default: false},
    basketId: {type: Schema.Types.ObjectId, required: false, ref: 'Basket'},
    favoriteId: {type: Schema.Types.ObjectId, required: false, ref: 'Favorite'},
    activationLink: {type: String},
})

module.exports = model('User', UserSchema);