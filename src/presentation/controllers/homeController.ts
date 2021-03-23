import * as path from 'path';
import * as fs from 'fs';
import * as cheerio from 'cheerio';
import { HomeRepository } from '../../data/repositories/homeRepository';

export default class HomeController {
  constructor(private homeRepository: HomeRepository) {}
  post(): string {
    const file = fs.readFileSync(__dirname + '/post.html');
    const $ = cheerio.load(file);
    $('div').text(this.homeRepository.getHome());
    return $.html();
  }
}
