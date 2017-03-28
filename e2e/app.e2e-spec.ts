import { HurtsHurtingPage } from './app.po';

describe('hurts-hurting App', () => {
  let page: HurtsHurtingPage;

  beforeEach(() => {
    page = new HurtsHurtingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
