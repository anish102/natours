const app = require("./app");

//Starting the server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
