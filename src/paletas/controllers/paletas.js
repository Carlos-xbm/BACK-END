const paletasService = require("../services/paletas");

const allPaletasController = async (req, res) => {
    const allPaletas = await paletasService.allPaletasService();
    if (allPaletas.length == 0) {
        return res.status(404).send({ message: "Não existe nenhuma paleta cadastrada!" });
    }

    res.send(allPaletas);
};

const idPaletaController = async (req, res) => {
    const idParam = req.params.id;

    const chosenPaleta = await paletasService.idPaletaService(idParam);

    if (!chosenPaleta) {
        return res.status(404).send({ message: "Paleta não encontrada!" });
    }

    res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
    const paleta = req.body;

    const newPaleta = await paletasService.createPaletaService(paleta);
    res.status(201).send(newPaleta);
};

const updatePaletaController = async (req, res) => {
    const idParam = req.params.id;
    const paletaEdit = req.body;

    const updatedPaleta = await paletasService.updatePaletaService(idParam, paletaEdit);

    res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
    const idParam = req.params.id;

    await paletasService.deletePaletaService(idParam);
    res.send({ message: "Paleta deletada com sucesso !" });
};

module.exports = {
    allPaletasController,
    idPaletaController,
    createPaletaController,
    updatePaletaController,
    deletePaletaController,
};
