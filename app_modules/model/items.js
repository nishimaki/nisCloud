
function validator(v) {
    return v.length > 0;
}

var Item = new mongoose.Schema({
    code: {
        type: String,
        validate: [validator, "Empty Error"]
    },
    name: {
        type: String,
        validate: [validator, "Empty Error"]
    },
    price: {
        type: String
    },
    maker: {
        type: String
    },
    salesDate: {
        type: String
    },
});
exports.Item = mongodb.model('Item', Item);
