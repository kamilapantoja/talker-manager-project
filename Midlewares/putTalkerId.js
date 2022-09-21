const fs = require('fs').promises;

const editTalker = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const talkers = await fs
        .readFile('./talker.json')
        .then((data) => JSON.parse(data));
    
    const talkerById = talkers.filter((talker) => talker.id === Number(id));

    const talker = {
        id: Number(id), ...body,
    };

    const talkerAtualizados = [...talkerById, talker];

    await fs.writeFile('./talker.json', JSON.stringify(talkerAtualizados));

    res.status(200).json(talker);
};

module.exports = editTalker;