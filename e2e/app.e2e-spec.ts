import { ShellModulePage } from './app.po';

describe('shell-module App', () => {
  let page: ShellModulePage;

  beforeEach(() => {
    page = new ShellModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
