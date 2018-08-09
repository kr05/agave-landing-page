import {LitElement, html} from '@polymer/lit-element';

class SingleService extends LitElement {
    static get properties() {
        return {
            icon: String,
            service: String,
            description: String
        }
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    _render(props) {
        return html`
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    font-family: 'Rubik';
                }

                .icon {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                }


                .title {
                    text-align: center;
                    font-size: 24px;
                    font-weight: 700;
                    margin: 8px 0;
                }
                img {
                    max-width: 50%;
                }

                @media (max-width: 568px) {
                    .title {
                        font-size: 18px;
                    }

                    .text {
                        font-size: 13px;
                    }
                }
            </style>
            
            <div class=icon><img src="${props.icon}"></img></div>
            <div class=title>${props.service}</div>
            <div class=text>${props.description}</div>
        `;
    }

}

customElements.define('single-service', SingleService);