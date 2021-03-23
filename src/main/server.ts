import * as http from 'http';
import * as express from 'express';
import expressConfig from './middleware/expressconfig';
import routes from './routes';

export default class Server {
  instance: http.Server;
  
  init(): void {
    const app = express();

    expressConfig(app);
    routes(app);

    this.instance = http.createServer(app);
  }
}
