import { Router } from "express";


const router = Router();

router.post("/poll", pollPostValidate, pollPost);
router.get("/poll", pollGetValidate, pollGet);
router.post("/choice");
router.get("/poll/:id/choice");
router.post("/choice/:id/vote", choiceIdValidate, choiceId);



export default router;