const fs = require('fs').promises;

const deleteTalkerById = async (req, res) => {
    const { id } = req.params;
    const talkers = await fs
        .readFile('./talker.json')
        .then((data) => JSON.parse(data));
    
    const talkerById = talkers.filter((talker) => talker.id !== Number(id));

    await fs.writeFile('./talker.json', JSON.stringify(talkerById));

    res.status(204).send('');
};

module.exports = deleteTalkerById;