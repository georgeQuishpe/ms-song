const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Song extends Model { }

Song.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Path: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Plays: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'TBL_SONG',
        modelName: 'Song',
        timestamps: false
    },
);

module.exports = Song;