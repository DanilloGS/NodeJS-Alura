const Atendimento = require("../models/atendimento");
const moment = require("moment");

module.exports = (app) => {
  app.get("/atendimentos", (request, response) => {
    response.send("Um GET foi realizado");
  });
  app.post("/atendimentos", (request, response) => {
    const data = moment(request.body.data).format('YYYY-MM-DD hh:mm')
    request.body.data = data;
    console.log(request.body.data);
    const atendimento = Atendimento(request.body);
    atendimento
      .save()
      .then(() => {
        console.log("Dados Salvos");
      })
      .catch(() => {
        console.log("CPF duplicado na base de dados");
      });
    response.send("Um POST foi realizado");
  });
};
