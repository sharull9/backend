import * as express from "express";
import * as path from "path";
import { userRouter } from "./routes/user";

const app = express();
const port = process.argv[3] || 3000;

app
  .use(express.static(path.join(__dirname, "public")))
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Home" });
});

app.get("/api", (req, res) => {
  res.json({ msg: "api" });
});

app.use("/user", userRouter);

app.listen(port);
