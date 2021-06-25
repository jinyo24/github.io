class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =
            `<footer class="footer mt-auto py-3 bg-secondary">
        <div class="container d-flex justify-content-center">
          <span class="text-light">Thank you!</span>
        </div>
      </footer>`
    }
}

customElements.define('footer-component', Footer);