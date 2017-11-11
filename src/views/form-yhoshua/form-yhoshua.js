(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
    class FormYhoshua extends ReduxMixin(Polymer.Element) {

        static get is() {
            return 'form-yhoshua';
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
    window.customElements.define(FormYhoshua.is, FormYhoshua);
})();
