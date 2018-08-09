import { html } from '@polymer/lit-element';
import { PageViewElement } from '../page-view-element.js';
import "../../agave-components/contact-component.js";
import "../../agave-components/service-header.js";

class HomeView extends PageViewElement {

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
        <h2>We’re a full-service digital agency focused on powering business growth.</h2>
      </section>
      
      <service-header class=intro-header reverse header="We specialize in software development, digital marketing campaigns, social strategy, content creation, and everything in between." description="At Agave Media, we specialize in creating software solutions and digital marketing services for all types of organizations. We understand that finding the right tools to promote yourself can be difficult, and DIY website builders still require a certain level of proficiency. We offer the following services that aim to streamline the operation of your business and increase traffic." icon="images/introIcon.png"></service-header>
      <service-header class=software-header service="Software development" description="From conception and strategy to design and implementation, we can build personalized mobile apps and integrated systems. We offer free project proposals that come with a breakdown of the project, associated costs, and timelines." icon="images/softwareIcon.png"></service-header>
      <div class="software-list">
          <span>Web Development</span>
          <span>UI/UX Design</span>
          <span>Native apps</span>
          <span>E-commerce</span>
          <span>Chat bots</span>
      </div>
      <service-header class=marketing-header reverse service="Digital marketing" description="The primary way Agave Media engages in digital strategy is through our digital marketing retainers. These programs bring the best of our digital strategy with SEO, pay-per-click advertising, social media and content strategy. As we execute, we continue to refine strategies and execution based on analytics data." icon="images/marketingIcon.png"></service-header>
      <div class=marketing-list>
          <span>Social media strategy</span>
          <span>Graphic design</span>
          <span>SEO/SEM</span>
          <span>Influencer engagement</span>
          <span>Social media advertisement</span>
      </div>
      <contact-component footer></contact-component>
    `;
  }
  
}

window.customElements.define('home-view', HomeView);
