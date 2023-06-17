module.exports = (sequelize, DataTypes) => {

    const Timesheet = sequelize.define("Timesheet", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        time: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        }
    }, {
        createdAt: true,
        updatedAt: false,
    });

    return Timesheet;
}