module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // role: {
    //   type: Sequelize.ENUM,
    //   values: ['admin', 'member'],
    //   allowNull: false,
    //   defaultValue: 'member',
    // },
    // active: {
    //   type: Sequelize.ENUM,
    //   values: ['Y', 'N'],
    //   allowNull: false,
    //   defaultValue: 'Y',
    // },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
