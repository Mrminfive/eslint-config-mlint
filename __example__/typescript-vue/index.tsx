import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            name: 'minfive'
        }
    },

    render() {
        interface Sss {
            name: string
        }

        return (
            <div class="container">{ this.name }</div>
        )
    }
})
