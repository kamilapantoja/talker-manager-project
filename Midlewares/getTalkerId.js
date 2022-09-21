const fs = require('fs').promises;

const getTalkerId = async (req, res) => {
    const talkers = await fs
        .readFile('./talker.json')
        .then((data) => JSON.parse(data));

    const { id } = req.params;
    const returnTalkerId = talkers.find((talker) => talker.id === parseInt(id, 10));

    if (!returnTalkerId) {
    return res.status(404).json(
        { 
            message: 'Pessoa palestrante não encontrada', 
        },
    ); 
    } 
    return res.status(200).json(returnTalkerId);
};

module.exports = getTalkerId;