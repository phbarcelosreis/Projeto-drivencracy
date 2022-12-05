import { Router } from "express";
import { pollPostValidate } from "../middlewares/pollValidate.middleware.js";
import { pollPost } from "../controllers/poll.controller.js";
import { pollGet } from "../controllers/poll.controller.js";
import { choiceValidate } from "../middlewares/choiceValidate.middleware.js";
import { choicePost } from "../controllers/choice.controller.js";
import { voteValidate } from "../middlewares/voteValidate.middleware.js";
import { vote } from "../controllers/vote.controller.js";

const router = Router();

router.post("/poll", pollPostValidate, pollPost);
router.get("/poll", pollGet);
router.post("/choice", choiceValidate, choicePost);
router.get("/poll/:id/choice", voteValidate, vote);
/* router.post("/choice/:id/vote", choiceIdValidate, choiceId);  */

export default router;