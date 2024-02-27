<template>
    <h3>Yes</h3>
    <InventoryList />
</template>
<script>
import { defineComponent } from 'vue'
import InventoryList from 'src/components/InventoryList.vue'

export default defineComponent({
    name: 'InventoryView',
    components: {
        InventoryList
    },
    setup() {
        return {
            lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    }
})
</script>