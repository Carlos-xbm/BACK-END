const carrinhoService = require("../services/carrinho");

const allCarrinhoController = async (req, res) => {
    const allCarrinho = await carrinhoService.allCarrinhoService();
    if (allCarrinho.length == 0) {
        return res.status(404).send({ message: "Não existe nenhum item no carrinho" });
    }
    res.send(allCarrinho);
};

const createCarrinhoController = async (req, res) => {
    const carrinho = req.body;
    const newCarrinho = await carrinnhoService.createCarrinhoService(carrinho);
    res.status(201).send(newCarrinho);
};

const deleteAllCarrinhoController = async (req, res) => {
    await carrinhoService.deleteAllCarrinhoService();
    res.send({ message: "Carrinho finalizado com sucesso!" });
};

module.exports = {
    allCarrinhoController,
    createCarrinhoController,
    deleteAllCarrinhoController,
};
