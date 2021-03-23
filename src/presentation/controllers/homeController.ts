import * as path from 'path';
import GoToHomeUseCase from '../../domain/useCases/home/goToHomeUseCase';

export default class HomeController {
  constructor(private goToHomeUseCase: GoToHomeUseCase) {}
  post(): string {
    return this.goToHomeUseCase.execute();
  }
}
