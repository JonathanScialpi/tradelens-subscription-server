import express from "express";

const router = express.Router();

router.get('/events', (req, res) => {
    res.send("hello from Ghana Events!");
});

export default router;