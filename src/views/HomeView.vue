<template>
  <h1>Photo Cards:</h1>
  <div class="card-list mt-3">
    <a v-for="card in cardData" :key="card.id" class="card" href="javascript:;">
      <div class="card-image">
        <img loading="lazy" :src="card.image" :alt="card.title">
      </div>

      <div class="card-info">
        <div class="card-title" :title="card.title">{{ card.title }}</div>
      </div>
    </a>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { mapState, mapStores } from 'pinia'

export default {
  name: "HomeView",

  mounted() {
    this.appStore.fetchCards()
  },

  computed: {
    ...mapState(useAppStore, ['cardData']),

    ...mapStores(useAppStore)
  },

  data() {
    return {

    }
  }

}
</script>
