import { RequestHandler, Router } from "express";
import { OwnFramController } from "modules/OwnFram/own.fram.controller";

const router = Router();
const ownFramController = new OwnFramController();

router.post("/", ownFramController.createOwnFram.bind(ownFramController) as RequestHandler);
router.get("/:id", ownFramController.getById.bind(ownFramController) as RequestHandler);
router.get("/list", ownFramController.GetAll.bind(ownFramController) as RequestHandler);
router.get("/delete/:id", ownFramController.deleteOwn.bind(ownFramController) as RequestHandler);

export default router;
