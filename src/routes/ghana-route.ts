import express from "express";
import { CloudantV1 } from '@ibm-cloud/cloudant';
import { IamAuthenticator } from 'ibm-cloud-sdk-core';

const router = express.Router();

// set cloudant connection
const authenticator = new IamAuthenticator({ apikey: process.env.CLOUDANT_APIKEY });
const service = new CloudantV1({ authenticator: authenticator });
service.setServiceUrl(process.env.CLOUDANT_URL);

router.get('/test', (req, res) => {
    res.status(200).send("hello from Ghana Events!");
});

router.get('/lastTenEvents', (req, res) => {
    service.postAllDocs({
        db: 'tradelens-subscription-events',
        includeDocs: true,
        limit: 10
      }).then(response => {
        res.status(200).send(response.result);
      });
});

router.post('/events', (req, res) => {
    res.status(200).send("Event received successfully!");
    const eventDoc = {
        "type": "event",
        "userid": "abc123",
        "eventType": "addedToBasket",
        "productId": "1000042",
        "date": "2019-01-28T10:44:22.000Z"
      };
      
      service.postDocument({
        db: 'tradelens-subscription-events',
        document: eventDoc
      }).then(response => {
        console.log(response.result);
      });
})

export default router;