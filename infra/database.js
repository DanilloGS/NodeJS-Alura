const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

module.exports = () => {
  const url =
    "mongodb+srv://danillo:12345@cluster0.drkus.mongodb.net/cluster0?retryWrites=true&w=majority";
  MongoClient.connect(url, { useUnifiedTopology: true })
    .then(() => {
      console.log("DB connected");
    })
    .catch((e) => {
      console.log(e);
    });
  //   mongoose
  //     .connect(uri, {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //       useCreateIndex: true,
  //     })
  //     .then(() => {
  //       console.log("Base de dados conectada com sucesso");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
};
