import Express from './Express';

class App {
  // Loads your Server
  public loadServer(): void {
    Express.init();
  }
}

export default new App();
