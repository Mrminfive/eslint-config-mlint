import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            name: 'minfive'
        }
    },

    template: `
        <div class="container">{{ name }}</div>
    `
})
