export default class App {
  root: HTMLElement;
  constructor(root: HTMLElement, props: unknown) {
    this.root = root;
    this.render();
  }

  render = () => {
    this.root.innerHTML = "웹팩";
  };
}

const root = document.querySelector<HTMLElement>("#root");

root && new App(root, {});
