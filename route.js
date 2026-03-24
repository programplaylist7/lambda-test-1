import express from "express"
import { getUser } from "./controllers/getUser.js";
import { addUser } from "./controllers/addUser.js";
import { deleteUser } from "./controllers/deleteUser.js";
const route = express.Router();

route.get("/user", getUser);
route.post("/user", addUser);
route.delete("/user/:id", deleteUser);

export default route;