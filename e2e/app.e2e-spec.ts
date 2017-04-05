import { ReactiveAppPage } from './app.po';

describe('reactive-app App', () => {
  let page: ReactiveAppPage;

  beforeEach(() => {
    page = new ReactiveAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
