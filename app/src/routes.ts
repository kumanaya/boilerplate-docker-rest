import { Router } from "express";

import InitialController from "./controllers/initial.controller";

const router = Router();

const initialController = new InitialController();

router.get("/", initialController.handle);

export default router;
