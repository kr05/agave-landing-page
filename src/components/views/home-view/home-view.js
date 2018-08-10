import { html } from '@polymer/lit-element';
import { PageViewElement } from '../page-view-element.js';
import "../../agave-components/contact-component.js";
import "../../agave-components/service-header.js";

import { localize } from '../../mixins/localize-mixin/localize-mixin.js';
import { i18next } from '../../mixins/localize-mixin/i18next.js';

class HomeView extends localize(i18next)(PageViewElement) {

static get properties() {
    return {
    }
}  
  
_render({}) {
    return html`
      <style>
        :host {
            display: block;
            box-sizing: border-box;
            font-family: 'Rubik';
        }

        contact-component {
            color: var(--light-text-color);
            background-color: var(--agave-background-gray);
            padding: 38px 38px 22px;
            height: 100%;
        }

        .intro-header {
            color: var(--dark-text-color);
            background-color: var(--light-background-color);
        }

        .software-header {
            color: var(--light-text-color);
            background-color: var(--agave-background-blue);
        }

        .marketing-header {
            color: var(--light-text-color);
            background-color: var(--agave-background-red);
        }

        .software-list, .marketing-list {
            display: flex;
            font-size: 24px;
            letter-spacing: 2.2px;
            line-height: 24px;
            color: var(--light-text-color);
            align-items: center;
            flex-wrap: wrap;
            padding-bottom: 64px;
            font-weight: 700;
        }

        .software-list span, .marketing-list span {
            flex: 1;
            text-align: center;
            margin: 16px;
        }

        .software-list {
            background-color: var(--agave-background-blue);
        }

        .marketing-list {
            background-color: var(--agave-background-red);
        }

        .main {
            height: 576px;
            background: linear-gradient(rgba(74,74,74,0.4), rgba(74,74,74,0.4)), url('../images/background.jpg');
            background-position: center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--light-text-color);
            padding-top: 128px;
        }

        .main h2 {
            font-size: 39px;
            letter-spacing: 2.85px;
            line-height: 48px;
            max-width: 784px;
            text-align: center;
        }

        @media (max-width: 1080px) {
            .software-list, .marketing-list {
                font-size: 20px;
            }
        }

        @media (max-width: 768px) {
            contact-component {
                padding: 24px 24px 8px;
            }

        }

        @media (max-width: 568px) {
            .main h2 {
                margin: 26px;
                padding: 0 24px;
                font-size: 24px;
            }
            .software-list, .marketing-list {
                font-size: 16px;
            }
        }
      </style>


      <section class="main">
        <h2>${i18next.t('main-header')}</h2>
      </section>
      
      <service-header class=intro-header reverse header="${i18next.t('intro-header')}" description="${i18next.t('intro-description')}" icon="images/introIcon.png"></service-header>
      <service-header class=software-header service="${i18next.t('software-header')}" description="${i18next.t('software-description')}" icon="images/softwareIcon.png"></service-header>
      <div class="software-list">
          <span>${i18next.t('web-dev-title')}</span>
          <span>${i18next.t('ui-title')}</span>
          <span>${i18next.t('native-title')}</span>
          <span>${i18next.t('e-commerce-title')}</span>
          <span>${i18next.t('chat-bots-title')}</span>
      </div>
      <service-header class=marketing-header reverse service="${i18next.t('marketing-header')}" description="${i18next.t('marketing-description')}" icon="images/marketingIcon.png"></service-header>
      <div class=marketing-list>
          <span>${i18next.t('sm-strategy-title')}</span>
          <span>${i18next.t('graphic-design-title')}</span>
          <span>${i18next.t('seo-title')}</span>
          <span>${i18next.t('influencer-title')}</span>
          <span>${i18next.t('sm-advertisement-title')}</span>
      </div>
      <contact-component footer></contact-component>
    `;
  }
  
}

window.customElements.define('home-view', HomeView);
