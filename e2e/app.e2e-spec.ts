import { AngularPruebaUnoPage } from './app.po';

describe('angular-prueba-uno App', () => {
  let page: AngularPruebaUnoPage;

  beforeEach(() => {
    page = new AngularPruebaUnoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
