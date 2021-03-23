import * as fs from 'fs';
import * as cheerio from 'cheerio';
import { HomeRepository } from '../../../data/repositories/homeRepository';

export default class GoToHomeUseCase {
  constructor(private homeRepository: HomeRepository){}
  
  execute(): string {
    const file = fs.readFileSync(__dirname + '/../../../view/home.html');
    const $ = cheerio.load(file);
    $('div').text(this.homeRepository.getHome());
    return $.html();
  }
}
