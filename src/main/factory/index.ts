import { HomeRepository } from '../../data/repositories/homeRepository';
import GoToHomeUseCase from '../../domain/useCases/home/goToHomeUseCase';
import HomeController from '../../presentation/controllers/homeController';

const getInstances = () => {
  const homeRepository = new HomeRepository();
  const goToHomeUseCase =  new GoToHomeUseCase(homeRepository)
  return {
    homeRepository,
    goToHomeUseCase,
    homeController: new HomeController(goToHomeUseCase),
  };
};

export default {
  ...getInstances(),
};
