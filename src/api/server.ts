import * as express from 'express'
import { Router } from 'express';
import * as bodyParser from 'body-parser';
import { connect } from "mongoose";

import { eventRoutes } from './routes/events';
import { cardRoutes } from './routes/cards';
import { contactRoutes } from './routes/contacts';

import serverConfig from '../config';

// MongoDB Connection
connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  }
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router: Router = Router();
app.use('/api', router);

// Add all custom routes
eventRoutes(router);
cardRoutes(router);
contactRoutes(router);

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`Application is running on port: ${serverConfig.port}!`);
  }
});

export default app;