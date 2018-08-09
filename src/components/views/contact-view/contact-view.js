import { html } from '@polymer/lit-element';
import { PageViewElement } from '../page-view-element.js';
import "../../agave-components/contact-component.js";

class ContactView extends PageViewElement {
    static get properties() {
        return {

        }
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    _render({}) {
        return html`
            <style>
                :host {
                    display: block;
                    box-sizing: border-box;
                    padding-top: 64px;
                    height: calc(100vh - 50px);
                }

                contact-component {
                    color: var(--light-text-color);
                    padding: 0 64px;
                    height: 100%;
                }

                @media (max-width: 768px) {
                    :host {
                        height: auto;
                    }

                    contact-component {
                        height: auto;
                        padding: 24px 24px 8px;
                    }
                }
            </style>
            
            <contact-component></contact-component>
        `;
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

}

customElements.define('contact-view', ContactView);