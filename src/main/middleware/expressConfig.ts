import { Express, json, static as _static } from 'express';

const expressConfig = (app: Express): void => {
  app.use(json());
  app.use(_static('express'));
};

export default expressConfig;
