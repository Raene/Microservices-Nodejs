module.exports.development = {
  dialect: "mysql",
  senderStorage: "sequelize",
  url: ProcessingInstruction.env.DB_URI
};
