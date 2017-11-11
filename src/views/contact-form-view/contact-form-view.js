(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
    class ContactFormView extends ReduxMixin(Polymer.Element) {

        static get is() {
            return 'contact-form-view';
        }

        connectedCallback() {
            super.connectedCallback();
            const state = this.getState();
            console.log(state);
        }

        static get properties() {
            return {
                prop1: {
                    type: String,
                    statePath: 'title',
                },
            };
        }
    }
    window.customElements.define(ContactFormView.is, ContactFormView);
})();
