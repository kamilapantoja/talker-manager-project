const fs = require('fs').promises;

const getTalker = async (req, res) => {
    const talkers = await fs
        .readFile('./talker.json')
        .then((data) => JSON.parse(data));

        return res.status(200).json(talkers);
};

module.exports = getTalker;