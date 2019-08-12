import Vue from 'vue'

export default Vue.extend({
    functional: true,

    data() {
        return {
            name: 'minfive'
        }
    },

    render() {
        return (
            <div class="container">{ this.name }</div>
        )
    }
})
