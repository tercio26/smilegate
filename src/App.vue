<script>
import LayoutHeader from "@/components/layouts/LayoutHeader.vue"

export default {
  components: { LayoutHeader },

  name: "App",

  data() {
    return {

    }
  }

}
</script>

<template>
  <main>
    <LayoutHeader/>

    <div class="container">
      <RouterView />
    </div>

    <footer>Copyright</footer>
  </main>
</template>
