import { html } from '@polymer/lit-element';
import { PageViewElement } from '../page-view-element.js';
import '../../agave-components/service-header.js';
import './single-service.js';

import { localize } from '../../mixins/localize-mixin/localize-mixin.js';
import { i18next } from '../../mixins/localize-mixin/i18next.js';

class ServicesView extends localize(i18next)(PageViewElement) {
    static get properties() {
        return {
        }
    }

    _render({}) {
        return html`
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    margin-top: 8px;
                    padding-top: 64px;
                    background-color: var(--agave-background-gray);
                }

                .software {
                    background-color: var(--agave-background-blue);
                }

                .marketing {
                    background-color: var(--agave-background-red);
                }

                .services-container {
                    display: flex;
                    justify-content: space-evenly;
                    flex-wrap: wrap;
                    padding: 40px 64px 40px;
                    background-color: var(--light-background-color);
                }

                single-service {
                    flex: 1;
                    color: var(--dark-text-color);
                    min-width: 340px;
                    max-width: 340px;
                    margin: 24px;
                }

                @media (max-width: 903px) {
                    single-service {
                        max-width: none;
                        min-width: 220px;
                    }
                    .services-container {
                        padding: 32px 16px;
                    }
                }
            </style>

            <service-header header="${i18next.t('services:software-header')}" service="${i18next.t('services:software-title')}" class=software description="${i18next.t('services:software-description')}" icon="../../images/softwareIcon.png"></service-header>

            <div class=services-container>
                <single-service service="${i18next.t('services:web-dev-title')}" icon="../../images/webDev.png"  description="${i18next.t('services:web-dev-description')}"></single-service>
                <single-service service="${i18next.t('services:ui-title')}" icon="../../images/ui.png"  description="${i18next.t('services:ui-description')}"></single-service>
                <single-service service="${i18next.t('services:native-title')}" icon="../../images/mobileApps.png"  description="${i18next.t('services:native-description')}"></single-service>
                <single-service service="${i18next.t('services:e-commerce-title')}" icon="../../images/ecommerce.png"  description="${i18next.t('services:e-commerce-description')}"></single-service>
                <single-service service="${i18next.t('services:chat-bots-title')}" icon="../../images/chatbot.png"  description="${i18next.t('services:chat-bots-description')}"></single-service>
            </div>

            <service-header reverse header="${i18next.t('services:marketing-header')}" service="${i18next.t('services:marketing-title')}" description="${i18next.t('services:marketing-description')}" class=marketing icon="../../images/marketingIcon.png"></service-header>

            <div class=services-container>
                <single-service service="${i18next.t('services:sm-strategy-title')}" icon="../../images/seo.png"  description="${i18next.t('services:sm-strategy-description')}"></single-service>
                <single-service service="${i18next.t('services:graphic-design-title')}" icon="../../images/seo.png"  description="${i18next.t('services:graphic-design-description')}"></single-service>
                <single-service service="${i18next.t('services:seo-title')}" icon="../../images/seo.png"  description="${i18next.t('services:seo-description')}"></single-service>
                <single-service service="${i18next.t('services:influencer-title')}" icon="../../images/influencer.png"  description="${i18next.t('services:influencer-description')}"></single-service>
                <single-service service="${i18next.t('services:sm-advertisement-title')}" icon="../../images/seo.png"  description="${i18next.t('services:sm-advertisement-description')}"></single-service>
            </div>
        `;
    }
}

customElements.define('services-view', ServicesView);