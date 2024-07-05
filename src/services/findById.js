const data = require('../../data');

function findById(id) {
    return new Promise((resolve, reject) => {
        const index = id - 1;

        if (id <= 0) {
            reject(new Error('ID must be greater than 0'));
        } else if (index >= data.length || index < 0) {
            reject(new Error('ID is out of range'));
        } else {
            const user = data[index];
            if (!user) {
                reject(new Error('User not found'));
            } else {
                resolve(user);
            }
        }
    });
}

module.exports = findById;
