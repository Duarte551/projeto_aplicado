const validateBody = (req, res, next) => {
    const { body } = req;

    if(body.produto === undefined) {
        return res.status(400).json({ message: 'Produto é necessário' });
    }

    if(body.produto === ''){
        return res.status(400).json({ message: 'Produto não pode ser vazio' });
    }

    next();
};

module.exports = {
    validateBody
};