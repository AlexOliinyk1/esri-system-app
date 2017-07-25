import { EsriSystemAppPage } from './app.po';

describe('esri-system-app App', () => {
  let page: EsriSystemAppPage;

  beforeEach(() => {
    page = new EsriSystemAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
