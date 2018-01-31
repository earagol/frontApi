import { FrontApiPage } from './app.po';

describe('front-api App', function() {
  let page: FrontApiPage;

  beforeEach(() => {
    page = new FrontApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
