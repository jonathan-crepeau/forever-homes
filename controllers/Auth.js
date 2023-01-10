const db = require('../models');
const test = (req, res) => {
    res.json({
        status: 200,
        message: "Test Auth route successful.."
    });
};
export { test };
