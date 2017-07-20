import { DecisionPage } from './app.po';

describe('decision App', () => {
  let page: DecisionPage;

  beforeEach(() => {
    page = new DecisionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
