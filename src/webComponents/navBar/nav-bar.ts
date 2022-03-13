import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * My first own web component element
 */
@customElement('nav-bar')
export class NavBarElement extends LitElement {

    override render() {
        return html`
            <p>Im the first web component element</p>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'nav-bar': NavBarElement;
    }
}

