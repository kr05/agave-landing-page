import {LitElement, html} from '@polymer/lit-element';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';

class AgaveLanguagePicker extends LitElement {
    static get properties() {
        return {
            language: String
        }
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    _render({language}) {
        return html`
            <style>
                :host {
                    display: block;
                }

                paper-dropdown-menu {
                    --paper-input-container-underline: {
                        display: none;
                    };
                    --paper-input-container-underline-focus: {
                        display: none;
                    };
                    --paper-input-container-input-color: var(--light-text-color);
                    border-radius: 4px;
                    width: 100px;
                    padding: 0 16px;
                    background-color: var(--agave-light-gray);
                    --paper-input-container-input: {
                        font-family: 'Rubik';
                        letter-spacing: 1px;
                    };
                    
                }
            </style>
            
            <paper-dropdown-menu dynamic-align no-label-float>
                <paper-listbox fallback-selection="en" slot="dropdown-content" selected="${language}" attr-for-selected="name" on-selected-changed="${e => this.onLanguageChange(e.detail.value)}">
                    <paper-item name="en">english</paper-item>
                    <paper-item name="es">español</paper-item>
                </paper-listbox>
            </paper-dropdown-menu>
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

    onLanguageChange(languageCode) {
        this.dispatchEvent(new CustomEvent('language-change', {detail: {languageCode: languageCode}, bubbles: true, composed: true}));
    }

}

customElements.define('agave-language-picker', AgaveLanguagePicker);