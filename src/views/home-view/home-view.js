(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
    class HomeView extends ReduxMixin(Polymer.Element) {

        static get is() {
            return 'home-view';
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
    window.customElements.define(HomeView.is, HomeView);
})();
