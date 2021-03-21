export default class MyLeaf extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: relative;
                }

                :host::before {
                    content: '';
                    display: block;
                    position: absolute;
                    left: -20px;
                    top: 10px;
                    width: 10px;
                    height: 1px;
                    background: red;
                }
            </style>
            <slot></slot>
        `;
    }
}

customElements.define("my-leaf", MyLeaf);