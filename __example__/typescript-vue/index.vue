<template>
    <div
        class="container"
        index="1"
    >
        <h2>Hello {{ name }}</h2>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface BaseObject<T = any> {
    [k: string]: T
}

export default Vue.extend({
    data() {
        return {
            name: 'World'
        }
    }
})
</script>
