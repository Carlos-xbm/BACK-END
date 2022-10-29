const User = require("../models/User");

const emailUserService = (email) => User.findOne({ email: email });

const createUserService = (body) => User.create(body);

const allUserService = () => User.find();

const idUserService = (idUser) => User.findById(idUser);

module.exports = {
    emailUserService,
    createUserService,
    allUserService,
    idUserService,
};
