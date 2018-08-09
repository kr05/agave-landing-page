/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { menuIcon } from './my-icons.js';
import './snack-bar.js';

class MyApp extends LitElement {
  _render({appTitle, _page, _drawerOpened, _snackbarOpened, _offline, _snackbarMessage, _messageSnackbarOpened}) {
    // Anything that's related to rendering should be done in here.
    return html`
    <style>
      :host {
        --app-drawer-width: 256px;
        display: block;

        --app-primary-color: #E91E63;
        --app-secondary-color: #293237;
        --app-dark-text-color: var(--app-secondary-color);
        --app-light-text-color: white;
        --app-section-even-color: #f7f7f7;
        --app-section-odd-color: white;

        --app-header-background-color: white;
        --app-header-text-color: var(--app-dark-text-color);
        --app-header-selected-color: var(--app-primary-color);

        --app-drawer-background-color: var(--app-secondary-color);
        --app-drawer-text-color: var(--app-light-text-color);
        --app-drawer-selected-color: #78909C;

        --light-text-color: #fafafa;
        --light-label-color: rgba(250, 250, 250, 0.4);
        --dark-text-color: #000000;
        --light-background-color: #fafafa;
        --agave-background-blue: #58BAEB;
        --agave-background-red: #E87575;
        --agave-background-gray: rgba(0, 0, 0, 0.8);
        --agave-light-gray: rgba(255, 255, 255, 0.24);
      }

      app-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: var(--app-header-background-color);
        color: var(--app-header-text-color);
        border-bottom: 1px solid #eee;
      }

      app-drawer {
        z-index: 1;
      }

      .toolbar-top {
        background-color: var(--app-header-background-color);
        justify-content: space-between;
      }

      .main-title {
        font-family: 'Rubik';
        text-transform: uppercase;
        /* In the narrow layout, the toolbar is offset by the width of the
        drawer button, and the text looks not centered. Add a padding to
        match that button */
        padding-right: 44px;
        line-height: 1;
        user-select: none;
        cursor: pointer;
      }

      .main-title a {
        text-decoration: none;
        color: var(--dark-text-color);
      }

      .top-title {
        font-size: 20px;
        font-weight: 700;
      }

      .bottom-title {
        font-weight: 300;
        font-size: 24px;
      }

      .toolbar-list {
        display: none;
      }

      .toolbar-list > a {
        text-transform: uppercase;
        display: inline-block;
        color: var(--app-header-text-color);
        text-decoration: none;
        line-height: 30px;
        font-family: 'Rubik';
        font-weight: 700;
        font-size: 16px;
        padding: 4px 24px;
      }

      .toolbar-list > a[selected] {
        color: var(--app-header-selected-color);
        border-bottom: 4px solid var(--app-header-selected-color);
      }

      .menu-btn {
        background: none;
        border: none;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
      }

      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 24px;
        background: var(--app-drawer-background-color);
        position: relative;
      }

      .drawer-list > a {
        display: block;
        text-decoration: none;
        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 0 24px;
      }

      .drawer-list > a[selected] {
        color: var(--app-drawer-selected-color);
      }

      /* Workaround for IE11 displaying <main> as inline */
      main {
        display: block;
      }

      .main-content {
        min-height: calc(100vh - 50px);
      }

      .contact-content {
        background-color: var(--agave-background-gray);
      }

      .page {
        display: none;
      }

      .page[active] {
        display: block;
      }

      footer {
        background: var(--agave-background-gray);
        color: var(--light-text-color);
        text-align: center;
        padding: 16px;
        font-size: 12px;
      }

      /* Wide layout: when the viewport width is bigger than 460px, layout
      changes to a wide layout. */
      @media (min-width: 620px) {
        .toolbar-list {
          display: block;
        }

        .menu-btn {
          display: none;
        }

        /* The drawer button isn't shown in the wide layout, so we don't
        need to offset the title */
        .main-title {
          padding-right: 0px;
        }
      }
    </style>

    <!-- Header -->
    <app-header condenses reveals effects="waterfall">
      <app-toolbar class="toolbar-top">
        <div class=main-title>
          <a href="/home"><div class=top-title>Agave</div></a>
          <a href="/home"><div class=bottom-title>Media</div></a>
        </div>
        <button class="menu-btn" title="Menu" on-click="${_ => this._updateDrawerState(true)}">${menuIcon}</button>
        <nav class="toolbar-list">
          <a selected?="${_page === 'home'}" href="/home">home</a>
          <a selected?="${_page === 'services'}" href="/services">services</a>
          <a selected?="${_page === 'contact'}" href="/contact">contact</a>
        </nav>
      </app-toolbar>

      <!-- This gets hidden on a small screen-->
    </app-header>

    <!-- Drawer content -->
    <app-drawer align="end" opened="${_drawerOpened}"
        on-opened-changed="${e => this._updateDrawerState(e.target.opened)}">
      <nav class="drawer-list">
        <a selected?="${_page === 'home'}" href="/home">home</a>
        <a selected?="${_page === 'services'}" href="/services">services</a>
        <a selected?="${_page === 'contact'}" href="/contact">contact</a>
      </nav>
    </app-drawer>

    <!-- Main content -->
    <main role="main" class$="${_page === 'contact' ? 'main-content contact-content' : 'main-content'}">
      <home-view on-opensnackbar="${e => this._openSnackar(e.detail)}" class="page" active?="${_page === 'home'}"></home-view>
      <services-view class="page" active?="${_page === 'services'}"></services-view>
      <contact-view on-opensnackbar="${e => this._openSnackar(e.detail)}" class="page" active?="${_page === 'contact'}"></contact-view>
      <error-view class="page" active?="${_page === 'view404'}"></error-view>
    </main>

    <footer>
      <div>All rights reserved. Agave Media 2018.</div>
    </footer>

    <snack-bar active?="${_snackbarOpened}">
        You are now ${_offline ? 'offline' : 'online'}.</snack-bar>
    <snack-bar active?="${_messageSnackbarOpened}">${_snackbarMessage}</snack-bar>
    `;
  }

  static get properties() {
    return {
      appTitle: String,
      _page: String,
      _drawerOpened: Boolean,
      _snackbarOpened: Boolean,
      _messageSnackbarOpened: Boolean,
      _snackbarMessage: String,
      _offline: Boolean
    }
  }

  constructor() {
    super();
    this._drawerOpened = false;
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  _firstRendered() {
    installRouter((location) => this._locationChanged(location));
    installOfflineWatcher((offline) => this._offlineChanged(offline));
    installMediaQueryWatcher(`(min-width: 460px)`,
        (matches) => this._layoutChanged(matches));
  }

  _didRender(properties, changeList) {
    if ('_page' in changeList) {
      const pageTitle = properties.appTitle + ' - ' + changeList._page;
      updateMetadata({
          title: pageTitle,
          description: pageTitle
          // This object also takes an image property, that points to an img src.
      });
    }
  }

  _layoutChanged(isWideLayout) {
    // The drawer doesn't make sense in a wide layout, so if it's opened, close it.
    this._updateDrawerState(false);
  }

  _openSnackar(message) {
    console.log('open snackbar event:', message);
    clearTimeout(this.__snackbarTimer);
    this._snackbarMessage = message;
    this._messageSnackbarOpened = true;
    this.__snackbarTimer = setTimeout(() => { this._messageSnackbarOpened = false }, 3000);
  }

  _offlineChanged(offline) {
    const previousOffline = this._offline;
    this._offline = offline;

    // Don't show the snackbar on the first load of the page.
    if (previousOffline === undefined) {
      return;
    }

    clearTimeout(this.__snackbarTimer);
    this._snackbarOpened = true;
    this.__snackbarTimer = setTimeout(() => { this._snackbarOpened = false }, 3000);
  }

  _locationChanged() {
    const path = window.decodeURIComponent(window.location.pathname);
    const page = path === '/' ? 'home' : path.slice(1);
    this._loadPage(page);
    // Any other info you might want to extract from the path (like page type),
    // you can do here.

    // Close the drawer - in case the *path* change came from a link in the drawer.
    this._updateDrawerState(false);
  }

  _updateDrawerState(opened) {
    if (opened !== this._drawerOpened) {
      this._drawerOpened = opened;
    }
  }

  _loadPage(page) {
    switch(page) {
      case 'home':
        import('../components/views/home-view/home-view.js').then((module) => {
          // Put code in here that you want to run every time when
          // navigating to view1 after my-view1.js is loaded.
        });
        break;
      case 'services':
        import('../components/views/services-view/services-view.js');
        break;
      case 'contact':
        import('../components/views/contact-view/contact-view.js');
        break;
      default:
        page = 'view404';
        import('../components/views/error-view/error-view.js');
    }

    this._page = page;
  }
}

window.customElements.define('my-app', MyApp);
