export default class MyTree extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding-left: 20px;
                }
            </style>
            <slot></slot>
        `;
    }
}

customElements.define("my-tree", MyTree);