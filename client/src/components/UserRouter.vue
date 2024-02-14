<template>
    <router-link :to="to">
        <q-item
            clickable
            tag="a"
        >
            <q-item-section
                v-if="icon"
                avatar
            >
                <q-icon :name="icon" />
            </q-item-section>

            <q-item-section>
                <q-item-label>{{ title }}</q-item-label>
            </q-item-section>
        </q-item>
    </router-link>
    
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'UserRouter',
    props: {
        title: {
            type: String,
            required: true,
            default: 'Title'
        },
        icon: {
            type: String,
            default: ''
        },
        to: {
            type: String,
            required: true,
            default: '/'
        }
    }
})
</script>