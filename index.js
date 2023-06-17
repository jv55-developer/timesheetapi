const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const timesheetRouter = require('./routes/Timesheet');
app.use('/timesheet', timesheetRouter);

db.sequelize.sync().then(() => {
    app.listen(3004, () => {
        console.log('Server is running on port 3004');
    });
});