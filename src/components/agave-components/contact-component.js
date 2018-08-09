import {LitElement, html} from '@polymer/lit-element';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-input/paper-textarea.js';
import "@material/mwc-button"
import { facebook, instagram, twitter } from '../my-icons.js';

class ContactComponent extends LitElement {
    static get properties() {
        return {
            clientName: String,
            clientEmail: String,
            clientMessage: String,
            clientService: String,
            footer: {
                type: Boolean,
                value: false
            },
            waiting: {
                type: Boolean,
                value: false
            },
        }
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    _render({clientName, clientEmail, clientMessage, clientService, waiting}) {
        return html`
            <style>
                :host {
                    display: flex;
                }

                mwc-button {
                    --mdc-theme-primary: var(--light-text-color);
                    --mdc-theme-on-primary: var(--dark-text-color);
                    font-weight: 700;
                    letter-spacing: 1px;
                    width: 160px;
                    height: 36px;
                    place-self: center;
                    margin: 8px;
                }

                paper-input, paper-textarea, paper-dropdown-menu {
                    padding: 8px 16px;
                    background-color: var(--agave-light-gray);
                    --paper-input-container-input: {
                        font-family: 'Rubik';
                        letter-spacing: 1px;
                    };
                    --paper-input-container-label: {
                        font-family: 'Rubik';
                        letter-spacing: 1px;
                        color: var(--light-label-color);
                    };
                    --paper-input-container-underline: {
                        display: none;
                    };
                    --paper-input-container-underline-focus: {
                        display: none;
                    };
                    --paper-input-container-input-color: var(--light-text-color);
                    border-radius: 4px;
                }

                .lc, .rc {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .lc {
                    align-items: center;
                    justify-content: center;
                }

                .lc > * {
                    margin: 12px;
                }

                .rc {
                    justify-content: center;
                }

                .rc > * {
                    margin: 4px;
                }

                .header {
                    font-size: 72px;
                    letter-spacing: 3px;
                    font-weight: 700;
                    line-height: 72px;
                }

                :host([footer]) .header {
                    letter-spacing: 3px;
                    font-weight: 700;
                    line-height: 48px;
                    font-size: 48px;
                }

                .text {
                    font-size: 20px;
                }

                button {
                    font-size: inherit;
                    vertical-align: middle;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                }

                button:hover #Pixel {
                    fill: var(--app-primary-color);
                }

                @media (max-width: 1024px) {
                    .header {
                        font-size: 48px;
                        line-height: 48px;
                    }

                    :host([footer]) .header {
                        font-size: 40px;
                        line-height: 40px;
                    }
                    
                }

                @media (max-width: 768px) {
                    .header {
                        font-size: 44px;
                        line-height: 44px;
                    }
                    
                    .text {
                        font-size: 16px;
                    }

                    :host {
                        flex-direction: column;
                    }
                }
            </style>

            <div class=lc>
                <div class="header">Send us a message.</div>
                <div class="text">We are experts at creating solutions, but it all starts with a conversation. Let’s have a talk to discuss how we can bring your idea to life.</div>
                <div class="social-icons">
                    <a target="_blank" href="https://www.facebook.com/AgaveMedia" tabindex="-1"><button>${facebook}</button></a>
                    <a target="_blank" href="https://www.facebook.com/AgaveMedia" tabindex="-1"><button>${instagram}</button></a>
                    <a target="_blank" href="https://www.facebook.com/AgaveMedia" tabindex="-1"><button>${twitter}</button></a>
                </div>
            </div>
            <div class=rc>
                <paper-input no-label-float label="Name" value="${clientName}" on-value-changed="${e => this.onInputChanged('clientName', e)}"></paper-input>
                <paper-input no-label-float label="Email" value="${clientEmail}" on-value-changed="${e => this.onInputChanged('clientEmail', e)}"></paper-input>
                <paper-dropdown-menu class=service dynamic-align no-label-float label="Services">
                    <paper-listbox slot="dropdown-content" selected="${clientService}" attr-for-selected="name" on-selected-changed="${e => this.onInputChanged('clientService', e)}">
                        <paper-item name="landing page">landing page</paper-item>
                        <paper-item name="apps and PWAs">apps and PWAs</paper-item>
                        <paper-item name="SEO">SEO</paper-item>
                        <paper-item name="chat bots">chat bots</paper-item>
                        <paper-item name="graphic design">graphic design</paper-item>
                        <paper-item name="social media">social media</paper-item>
                        <paper-item name="other">other</paper-item>
                    </paper-listbox>
                </paper-dropdown-menu>
                <paper-textarea class="message" no-label-float label="How can we help?" value="${clientMessage}" on-value-changed="${e => this.onInputChanged('clientMessage', e)}"></paper-textarea>
                <mwc-button on-click="${e => this._sendMessage(e)}" raised>${waiting ? 'Sending...' : 'Send request'}</mwc-button>
            </div>
        `;
    }

    onInputChanged(t, e) {
        this[`${t}`] = e.detail.value;
    }

    _sendMessage(e) {
        if (this.waiting) return;
        this.waiting = true;
        
        if (this.nullInputs()) {
            console.log('null inputs!');
            this.waiting = false;
            return;
        }

        const messageData = {
            name: this.clientName,
            email: this.clientEmail,
            service: this.clientService,
            message: this.clientMessage
        }

        var sendMessage = firebase.functions().httpsCallable('sendMessage');
        sendMessage({messageData: messageData}).then(result => {
            // Read result of the Cloud Function.
            this.dispatchEvent(new CustomEvent('opensnackbar', {detail: 'Thank you! Your message has been sent.', bubbles: true, composed: true}));
            this.clearValues();
        }).catch(err => {
            console.log('ERR:', err);
            this.dispatchEvent(new CustomEvent('opensnackbar', {detail: 'Please try again...', bubbles: true, composed: true}));
        }).then(() => {
            this.waiting = false;
        });
    }

    nullInputs() {
        switch (true) {
            case (!this.clientName):
                this.dispatchEvent(new CustomEvent('opensnackbar', {detail: 'Please enter a name.', bubbles: true, composed: true}));
                return true;
            case (!this.clientEmail):
                this.dispatchEvent(new CustomEvent('opensnackbar', {detail: 'Please enter an email.', bubbles: true, composed: true}));
                return true;
            case (!this.clientService):
                this.dispatchEvent(new CustomEvent('opensnackbar', {detail: 'Please select a service.', bubbles: true, composed: true}));
                return true;
            case (!this.clientMessage):
                this.dispatchEvent(new CustomEvent('opensnackbar', {detail: 'Please enter a brief description.', bubbles: true, composed: true}));
                return true;
        }
        return false;
    }

    clearValues() {
        this.clientName = null;
        this.clientEmail = null;
        this.clientService = null;
        this.clientMessage = null;
    }

}

customElements.define('contact-component', ContactComponent);