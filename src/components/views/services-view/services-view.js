import { html } from '@polymer/lit-element';
import { PageViewElement } from '../page-view-element.js';
import '../../agave-components/service-header.js';
import './single-service.js';

class ServicesView extends PageViewElement {
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

            <service-header header="We leverage user research and cross-discipline insights to bring a solution-focused approach for startups and brands." service="Software development" class=software description="From conception and strategy to design and implementation, we can build personalized mobile apps and integrated systems. We offer free project proposals that come with a breakdown of the project, associated costs, and timelines." icon="../../images/softwareIcon.png"></service-header>

            <div class=services-container>
                <single-service service="Web development" icon="../../images/webDev.png"  description="All businesses, regardless of size, need to have a strong, online presence. This starts with having a performant website that effectively informs potential customers. We'll craft a web presence that works great on desktop and mobile devices. Our sites are easy to manage and integrate seamlessly with other online channels."></single-service>
                <single-service service="UI/UX Design" icon="../../images/ui.png"  description="A well crafted design results in clearer messages and converts more users to action. It's not just about making things look cool. We dive head first into understanding what makes your users tick, then using rapid prototyping, testing, and iteration our team works to create experiences both beautiful and user-friendly."></single-service>
                <single-service service="Native Apps" icon="../../images/mobileApps.png"  description="Sometimes the best way to get the job done is with a well designed mobile app. An app lets us utilize the best functionality from your phone improving experience, notification and experience for the user. We build apps on a wide variety of budgets using native and hybrid frameworks."></single-service>
                <single-service service="E-commerce" icon="../../images/ecommerce.png"  description="Selling your product or services online doesn't have to be scary. Our team has experience with e-commerce platforms and custom solutions. Your e-commerce store will show off your product and give your users a pleasant shopping experience."></single-service>
                <single-service service="Chat bots" icon="../../images/chatbot.png"  description="Interact with your leads and customers by leveraging the power of AI. Bots use a conversational interface that lets your customers perform tasks that would otherwise require them to open an app, go online or make a phone call. It makes sense to use a platform everyone is already using to enhance your customers’ user experience."></single-service>
            </div>

            <service-header reverse header="One of the strongest aspects of a digital campaign is how measurable it is. You'll learn what works, what doesn't and what engages your audience." service="Digital marketing" description="The primary way Agave Media engages in digital strategy is through our digital marketing retainers. These programs bring the best of our digital strategy with SEO, pay-per-click advertising, social media and content strategy. As we execute, we continue to refine strategies and execution based on analytics data." class=marketing icon="../../images/marketingIcon.png"></service-header>

            <div class=services-container>
                <single-service service="Social media strategy" icon="../../images/seo.png"  description="Meet your customers where they already are. The best way to engage with your audience and build your brand is through great content. We create digital content strategies in order to promote brand awareness and organic growth so your audience grows in numbers, engagement and conversions."></single-service>
                <single-service service="Graphic design" icon="../../images/seo.png"  description="Traditional print collateral and advertisements can be a valuable support to your digital marketing. We offer professional print designs with your brand in mind. This includes but is not limited to creative logos, marketing brochures, newsletters, direct mail pieces, and trade show displays."></single-service>
                <single-service service="SEO/SEM" icon="../../images/seo.png"  description="We improve ranking and increase visibility by reviewing your website and implementing changes that optimize it for search engines."></single-service>
                <single-service service="Influencer engagement" icon="../../images/influencer.png"  description="Gain customer trust by leveraging bloggers and social media leaders that they already trust. We research and identify key influencers within your target market and engage them in a mutually beneficial partnership."></single-service>
                <single-service service="Social media advertisement" icon="../../images/seo.png"  description="With its unparalleled reach and low cost, social media ads are a great way to market your business, attract attention and drive real conversions. We'll determine where your audience spends their time and craft effective, targeted campaigns."></single-service>
            </div>
        `;
    }
}

customElements.define('services-view', ServicesView);