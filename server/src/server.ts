import * as express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  app.get("/", (req, res) => {
    return res.json("API OK!");
  });

  return app.listen(process.env.API_PORT, () => {
    console.log("Listening");
  });
});
