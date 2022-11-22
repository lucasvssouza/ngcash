import * as express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
const cors = require("cors");

AppDataSource.initialize().then(() => {
  const app = express();
  
  app.use(cors());

  app.use(express.json());

  app.use(routes);

  app.get("/", (req, res) => {
    return res.json("API OK!");
  });

  return app.listen(process.env.API_PORT, () => {
    console.log("Listening");
  });
});
