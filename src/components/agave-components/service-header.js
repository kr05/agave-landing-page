import {LitElement, html} from '@polymer/lit-element';

class ServiceHeader extends LitElement {
    static get properties() {
        return {
            header: String,
            service: String,
            description: String,
            icon: String,
            reverse: {
                type: Boolean,
                value: false,
                notify: true
            }
        }
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    _render({ header, service, description, icon, reverse }) {
        return html`
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    padding: 64px;
                    font-family: 'Rubik';

                    color: var(--light-text-color);
                }

                :host([reverse]) .br {
                    flex-direction: row-reverse;
                }

                .br {
                    display: flex;
                    margin-top: 32px;
                }

                .header {
                    width: 75%;
                    font-size: 24px;
                    letter-spacing: 2.1px;
                    line-height: 28px;
                    text-align: center;
                    font-weight: 700;
                }

                .text-header {
                    margin: 24px 0;
                    font-weight: 700;
                    font-size: 28px;
                    letter-spacing: 3.1px;
                    line-height: 33px;
                    text-align: center;
                }

                .text {
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 1px;
                }

                .icon, .br-text {
                    flex: 1;
                }

                img {
                    max-width: 100%;
                }

                @media (max-width: 768px) {
                    :host {
                        padding: 32px 16px;
                    }
                    .br {
                        flex-direction: column !important;
                    }
                }

                @media (max-width: 568px) {
                    .header {
                        font-size: 16px;
                        width: 100%;
                    }

                    .text-header {
                        font-size: 18px;
                    }

                    .text {
                        font-size: 13px;
                    }
                }

                
            </style>

                <div class=header>${header}</div>  
                <div class=br>
                    <div class=icon><img src="${icon}"></img></div>
                    <div class=br-text>
                        <div class=text-header>${service}</div>
                        <div class=text>${description}</div>
                    </div>
                </div>        
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

customElements.define('service-header', ServiceHeader);