import Server from './main/server';

const PORT = 3000;

const main = () => {
  const server = new Server();
  server.init();

  server.instance.listen(PORT, () => {
    console.debug('Server listening on port ' + PORT);
  });
};

main();
