const { v4: uuidv4 } = require("uuid");

const createUUIDV4 = () => {
    return uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
}

module.exports = {
    createUUIDV4
}
