import { NgStorePresentationPage } from './app.po';

describe('ng-store-presentation App', () => {
  let page: NgStorePresentationPage;

  beforeEach(() => {
    page = new NgStorePresentationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
