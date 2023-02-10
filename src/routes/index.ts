import { Router } from "express";
import auth from "./auth.routes";
import user from "./user.routes";
import ownFram from "./own.fram.routes";

const routes = Router();

routes.use("/auth", auth);
routes.use("/users", user);
routes.use("/v2/ownFram", ownFram);

export default routes;
