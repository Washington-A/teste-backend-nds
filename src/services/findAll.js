const data = require('../../data');

function findAll() {
    return new Promise((resolve, reject) => {
        if (data) {
            resolve(data);
        } else {
            reject(new Error('SERVER ERROR =('));
        }
    });
}

module.exports = findAll;
