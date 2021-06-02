<template>
  <div class="center mt-12">
  <h2>Laminat Page</h2> 
  </div>
</template>

<script>

export default {
  data: () => ({
    bread_items: [
      {
        text: "Главная",
        disabled: false,
        href: "/",
      },
      {
        text: "Линолеум",
        disabled: true,
        href: "/linoleum/",
      },
    ],

  
  }),
  async mounted() {
  },
  computed: {
   
  },
  methods: {},
};
</script>

<style  scoped>
  .pointer{
    cursor:pointer
  }
  .center{
    text-align: center;
  

  }
</style>
