(function () {
    'use strict';

    /**
     * @customElement
     * @polymer
     */
    class <%= className %> extends ReduxMixin(BaseElements.I18nElement) {

        static get is() {
            return '<%= tagName %>';
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
    window.customElements.define(<%= className %>.is, <%= className %>);
})();
