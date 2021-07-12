const customExpress = require("./config/customExpress");
const database = require("./infra/database");

const app = customExpress();
app.listen(3000, () => {
  console.log("Server tá On");
  database();
});
