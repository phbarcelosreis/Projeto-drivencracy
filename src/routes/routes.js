import { Router } from "express";
import { pollPostValidate } from "../middlewares/pollValidate.middleware.js";
import { pollPost } from "../controllers/poll.controller.js";
import { pollGet } from "../controllers/poll.controller.js";
import { choiceValidate } from "../middlewares/choiceValidate.middleware.js";
import { choicePost } from "../controllers/choice.controller.js";
import { voteCheck, voteValidate } from "../middlewares/voteValidate.middleware.js";
import { registerVote, vote } from "../controllers/vote.controller.js";
import { resultValidate } from "../middlewares/resultValidate.middleware.js";
import { resultCheck } from "../controllers/result.controller.js";

const router = Router();

router.post("/poll", pollPostValidate, pollPost);
router.get("/poll", pollGet);
router.post("/choice", choiceValidate, choicePost);
router.get("/poll/:id/choice", voteValidate, vote);
router.post("/choice/:id/vote", voteCheck, registerVote); 
router.get("/poll/:id/result", resultValidate, resultCheck);

export default router;