let _i18nextInitialized = false;
/**
 * Localize mixin
 * 
 * @polymer
 * @mixinFunction
 **/
export const localize = i18next => baseElement => class extends baseElement {
  _shouldRender(props, changedProps, old) {
    /* 
    
    Also check active property used by PageViewElement
    
    Render if:
    active and i18next is initialized
    OR
    i18next is initialized
    
    */
    return changedProps && changedProps.active
      ? props.active && _i18nextInitialized
      : _i18nextInitialized;
  }

  connectedCallback() {
    if (!_i18nextInitialized) {
      i18next.on('initialized', options => {
        _i18nextInitialized = true;
        this.requestRender();
      });
    }

    i18next.on('languageChanged', () => {
      this.requestRender();
    });

    if (super.connectedCallback) {
      super.connectedCallback();
    }
  }
};