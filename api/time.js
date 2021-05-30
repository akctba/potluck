const moment = require("moment");

module.exports = (req, res) => {
    var time = moment().format("LLL");
    res.send({time, origin: req.query.from});
};

