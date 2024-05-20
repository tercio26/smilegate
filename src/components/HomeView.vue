<template>
  <h1>Photo Cards:</h1>

  <div class="card-list mt-3">
    <a v-for="card in cardData" :key="card.id" class="card" href="javascript:;">
      <div class="card-image">
        <img loading="lazy"
             :src="card.image"
             :aria-label="card.title"
             :alt="card.title"
             @error="setAltImg">
      </div>

      <div class="card-info">
        <div class="card-title"
             :aria-label="card.title"
             :title="card.title"
        >{{ card.title }}</div>
      </div>
    </a>
  </div>
</template>

<script>
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
  },

  methods: {
    setAltImg(e) {
      e.target.src = "https://i.imgur.com/yd01iL2.jpeg"
    }
  }

}
</script>
