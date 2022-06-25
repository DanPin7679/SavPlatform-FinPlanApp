export class Home extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
      <div class="nav-bar-container">
        <nav class="nav-bar-right">
          <ul class="primary-navigation underline-indicators flex">
            <li class="active">
              <a
                class="uppercase text-white letter-spacing-2"
                href="./library.html"
                ><span>00</span>Home</a
              >
            </li>
            <li>
              <a
                class="uppercase text-white letter-spacing-2"
                href="./paths.html"
                ><span>01</span>Paths</a
              >
            </li>
            <li>
              <a
                class="uppercase text-white letter-spacing-2"
                href="./library.html"
                ><span>02</span>Library</a
              >
            </li>
          </ul>
          <button class="text-accent settings-btn" href="#">Settings</button>
        </nav>
      </div>
      <div class="main-left-container">
        <div class="main-left">
          <h1
            class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1"
          >
            You want to improve your
            <span
              style="display: block"
              class="d-block fs-700 ff-serif text-white"
              >Financial Wellness</span
            >
          </h1>

          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div class="main-right-container">
        <div class="main-right">
          <a
            href="destination.html"
            class="large-button uppercase ff-serif text-dark bg-white"
            >Start your Journey</a
          >
        </div>
      </div>
    
`;
  }
}

window.customElements.define("finplan-home", Home);
