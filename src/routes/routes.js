import { Router } from "express";
import { pollPostValidate } from "../middlewares/pollValidate.middleware.js";


const router = Router();

router.post("/poll", pollPostValidate, pollPost);
/* router.get("/poll", pollGet);
router.post("/choice", choiceIdValidate);
router.get("/poll/:id/choice");
router.post("/choice/:id/vote", choiceIdValidate, choiceId); */



export default router;