import express from "express";

const router = express.Router();
let mostRecentRequests = new Array<any>(3);

router.get('/test', (req, res) => {
    res.status(200).send("hello from Ghana Events!");
});

router.get('/threeRecentEvents', (req, res) => {
    res.status(200).send(mostRecentRequests);
});

router.post('/events', (req, res) => {
    if(mostRecentRequests.length < 3){
        mostRecentRequests.push(req.body);
    }else{
        mostRecentRequests.shift()
        mostRecentRequests.push(req.body)
    }
    res.status(200).send("Event received successfully!");
})

export default router;