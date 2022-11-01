const route = require("express").Router();
const controllerCarrinho = require("../controllers/carrinho");
const { validObjectBodyCarrinho } = require("../../middleware/paleta");

route.get("/all-carrinho", controllerCarrinho.allCarrinhoController);

route.post(
    "/create-carrinho",
    validObjectBodyCarrinho,
    controllerCarrinho.createCarrinhoController
);

route.delete("/finish-carrinho", controllerCarrinho.deleteAllCarrinhoController);

module.exports = route;
