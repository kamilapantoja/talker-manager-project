const fs = require('fs').promises;

const postTalker = async (req, res) => {
    const { body } = req;
    const talkers = await fs
        .readFile('./talker.json')
        .then((data) => JSON.parse(data));
    
    const addTalker = {
        id: talkers.length + 1,
        ...body,
    };

    const arrayTalkers = [...talkers, addTalker];

    await fs.writeFile('./talker.json', JSON.stringify(arrayTalkers));

    res.status(201).json(addTalker);
};

module.exports = postTalker;