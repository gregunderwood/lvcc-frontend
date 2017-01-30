import { LvccPage } from './app.po';

describe('lvcc App', function() {
  let page: LvccPage;

  beforeEach(() => {
    page = new LvccPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
