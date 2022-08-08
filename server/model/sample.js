const sampleRepository = require('../repository/sample');

module.exports = {
    get: () => {
        return sampleRepository.get()
    }
}