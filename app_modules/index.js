// Global
__ = require('underscore');
ncmb = require('./ncmb');
util = require('./util');
PDFDocument = require('pdfkit'); 

// exports
module.exports = {
    chat: require('./chat'),
    portal: require('./portal'),
    user: require('./user'),
    custmer: require('./custmer'),
};