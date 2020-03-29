const crypto = require('crypto');

module.es default function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}