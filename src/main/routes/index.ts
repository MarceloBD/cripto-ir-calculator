import { Express } from 'express';
import * as path from 'path';
import factory from '../factory';

const routes = (app: Express): void => {
  app.post('/home', function (req, res) {
    res.send(factory.homeController.post());
  });

  app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../view/index.html'));
  });
};

export default routes;
