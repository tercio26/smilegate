<template>
  <header>
    <div class="container">
      <div class="navbar">
        <RouterLink class="navbar-brand" :to="{name: 'home'}">
          <img alt="STOVE Logo"
               :title="appConfig.description"
               :aria-label="appConfig.description"
               :src="appConfig.logo"/>{{ appConfig.title }}
        </RouterLink>


        <nav class="navbar-nav">
          <RouterLink class="nav-item btn btn-outline-light" :to="{name: 'indie-game'}">Indie Game</RouterLink>
          <RouterLink class="nav-item btn btn-outline-light" :to="{name: 'entry-game'}">Entry Game</RouterLink>
          <RouterLink class="nav-item btn btn-outline-light" :to="{name: 'community'}">Community</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import {mapState, mapStores, mapActions} from "pinia";

import {useAppStore} from "@/stores/app.js";

export default {
  name: "LayoutHeader",

  mounted() {
    this.appStore.getAppConfig()
  },

  data() {
    return {

    }
  },

  computed: {
    ...mapState(useAppStore, ['appConfig']),

    ...mapStores(useAppStore),
  },

  methods: {
    ...mapActions(useAppStore, {getAppConfig: 'getAppConfig'})
  }
}
</script>