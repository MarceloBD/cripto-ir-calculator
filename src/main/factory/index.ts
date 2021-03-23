import { HomeRepository } from '../../data/repositories/homeRepository';
import HomeController from '../../presentation/controllers/homeController';

const getInstances = () => {
  const homeRepository = new HomeRepository();
  
  return {
    homeRepository,
    homeController: new HomeController(homeRepository),
  };
};

export default {
  ...getInstances(),
};
