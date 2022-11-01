const Carrinho = require("../models/carrinho");

const allCarrinhoService = async () => {
    const allCarrinho = await Carrinho.find();
    return allCarrinho;
};

const createCarrinhoService = async (newCarrinho) => {
    const createdCarrinho = await Carrinho.insertMany(newCarrinho);
    return createdCarrinho;
};

const deleteAllCarrinhoService = async () => {
    return await Carrinho.delete.Many();
};

module.exports = {
    allCarrinhoService,
    createCarrinhoService,
    deleteAllCarrinhoService,
};
