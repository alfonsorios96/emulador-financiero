(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
    class NotesView extends ReduxMixin(Polymer.Element) {

        static get is() {
            return 'notes-view';
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
    window.customElements.define(NotesView.is, NotesView);
})();
