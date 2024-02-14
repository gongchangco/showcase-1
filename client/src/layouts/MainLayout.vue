<template>
  <q-layout view="hHh lpR lfr">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Inventory Management System
        </q-toolbar-title>

        <div>
          <q-btn-dropdown
            label="Settings"
          >
            <div class="text-h6">Settings</div>
            <q-seperator />
            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
            />
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="200"
      :breakpoint="500"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <UserRouter
          v-for="route in routes"
          :key=route.title
          v-bind="route"
        />
      </q-list>
    </q-drawer>

    

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import UserRouter from 'src/components/UserRouter.vue'

const routes = [
  {
    title: 'Home',
    icon: 'home',
    to: '/'
  },
  {
    title: 'Inventory',
    icon: 'inventory',
    to: '/inventory'
  }
]

export default defineComponent({
  name: 'MainLayout',
  components: {
    UserRouter
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      routes: routes,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
