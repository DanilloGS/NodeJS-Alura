const { Schema, model } = require("mongoose");
const moment = require("moment");

const atendimentoSchema = new Schema({
  cliente: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    unique: true,
    required: true,
    _id: true,
  },
  email: {
    type: String,
    required: true,
  },
  pet: {
    type: String,
    required: true,
  },
  servico: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
});

module.exports = model("Atendimento", atendimentoSchema);
