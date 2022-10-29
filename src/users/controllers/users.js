const userService = require("../services/users");
const authService = require("../../auth/service");

const createUserController = async (req, res) => {
    const { username, name, email, password, avatar } = req.body;

    if (!username || !name || !email || !password || !avatar) {
        return res.status(400).send({ message: "Preencha todos os campos!" });
    }

    const foundUser = await userService.emailUserService(email);

    if (foundUser) {
        return res.status(400).send({
            message: "Usuário já existe!",
        });
    }

    const user = await userService
        .createUserService(req.body)
        .catch((err) => console.log(err, message));
    if (!user) {
        return res.status(400).send({ message: "Erro ao criar Usuário!" });
    }

    const token = authService.generateToken(user.id);
    res.status(201).send({
        user: {
            id: user.id,
            name,
            username,
            email,
            avatar,
        },
        token,
    });
};

const allUserController = async (req, res) => {
    const users = await userService.allUserService();

    if (users.length === 0) {
        return res.status(400).send({
            message: "Não existe usuários cadastrado!",
        });
    }
    res.send(users);
};

module.exports = { createUserController, allUserController };
