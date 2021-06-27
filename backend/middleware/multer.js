let multer = require("multer");
//Una archivo
var storage = multer.diskStorage({
    destination: "temp",
    filename: function (req, file, cb) {
        const extension = file.originalname.slice(
            file.originalname.lastIndexOf(".")
        );

        cb(null, Date.now() + extension);
    },
});


var uploadSingle = multer({ storage: storage }).single("uploads");

module.exports = {
    uploadSingle
};