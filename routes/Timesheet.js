const express = require("express");
const router = express.Router();
const { Timesheet } = require('../models');

router.post('/', async (req, res) => {
    const time = req.body;
    await Timesheet.create(time);

    res.json('success');
})

module.exports = router;