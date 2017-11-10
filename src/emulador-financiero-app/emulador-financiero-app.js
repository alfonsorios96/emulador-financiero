(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
    class EmuladorFinancieroApp extends ReduxMixin(Polymer.Element) {

        static get is() {
            return 'emulador-financiero-app';
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

    window.customElements.define(EmuladorFinancieroApp.is, EmuladorFinancieroApp);
})();
