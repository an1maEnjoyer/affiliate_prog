const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Chanels = sequelize.define(
  'Chanels',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    channel_name: {
      type: DataTypes.STRING(255),
      unique: true,
    },
    channel_link: {
      type: DataTypes.STRING(255),
      unique: true,
    },
    average_views: {
      type: DataTypes.INTEGER,
    },
    audience_age_min: {
      type: DataTypes.INTEGER,
    },
    audience_age_max: {
      type: DataTypes.INTEGER,
    },
    engagement_level: {
      type: DataTypes.ENUM('низкая', 'средне-низкая', 'средняя', 'средне-высокая', 'высокая'),
    },
    targeting_categories: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    male_audience_percent: {
      type: DataTypes.INTEGER,
    },
    female_audience_percent: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'channels_info', // Это должно быть в секции опций модели
    timestamps: false, // Это тоже
  },
);

module.exports = {
  Chanels,
};
