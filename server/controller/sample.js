const sampleModel = require('../model/sample');

module.exports = {
    get: (req, res) => {
        res.send(sampleModel.get());
    }
};
