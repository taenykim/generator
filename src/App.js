class App {
  constructor(root, props) {
    this.root = root
    this.render()
  }

  render = () => {
    this.root.innerHTML = "웹팩"
  }
}

// new App(document.querySelector("#root"), {})
