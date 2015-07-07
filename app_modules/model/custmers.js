
function validator(v) {
    return v.length > 0;
}

var Custmer = new mongoose.Schema({
    code: {
        type: String,
        validate: [validator, "Empty Error"]
    },
    name_sei: {
        type: String,
        validate: [validator, "Empty Error"]
    },
    name_mei: {
        type: String,
        validate: [validator, "Empty Error"]
    },
    kananame_sei: {
        type: String,
        validate: [validator, "Empty Error"]
    },
    kananame_mei: {
        type: String,
        validate: [validator, "Empty Error"]
    },
});
exports.Custmer = mongodb.model('Custmer', Custmer);
