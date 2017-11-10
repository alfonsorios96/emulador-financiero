(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
    class <%= name %> extends ReduxMixin(Polymer.Element) {

        static get is() {
            return '<%= name %>';
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
    window.customElements.define(<%= name %>.is, <%= name %>);
})();
