import sns from "../services/email.service.js";
import 'dotenv/config';

export const sendSNS = async(req, res) => {
    const params = {
      Protocol: 'EMAIL',  
      TopicArn: process.env.SNS_ARN,
      Endpoint: req.body.email
    };
    sns.subscribe(params, (err, data) => {
      if(err) console.log(err)
      console.log(data);
      res.json(data);
    })
  }

  export const publishTopic = async(req, res) => {
    const params = {
      Subject: req.body.subject,
      Message: req.body.message,
      TopicArn: process.env.SNS_ARN,
    };
    sns.publish(params, (err, data) => {
      if(err) console.log(err)
      console.log(data);
      res.json(data);
    })
  }