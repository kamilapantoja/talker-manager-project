const fs = require('fs').promises;

const searchTermoTalker = async (req, res) => {
    const { q } = req.query;
    const talkers = await fs
        .readFile('./talker.json')
        .then((data) => JSON.parse(data));

    const termo = q.toLowerCase();
    const filterTermoName = talkers
        .filter(({ name }) => (name.toLowerCase()).includes(termo));

    if (!filterTermoName) return res.status(200).json([]);
    
    if (!q) return res.status(200).json(talkers);

    return res.status(200).json(filterTermoName);
};

module.exports = searchTermoTalker;