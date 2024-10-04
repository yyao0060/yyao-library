<template>
  <pre>{{ jsondata }}</pre>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      jsondata: null,
      error: null
    }
  },
  mounted() {
    this.getAllBookAPI()
  },
  methods: {
    async getAllBookAPI() {
      try {
        const response = await axios.get('https://getallbooks-sgv5r5k3pa-uc.a.run.app')
        this.jsondata = response.data
        this.error = null
      } catch (error) {
        console.error('error get all books: ', error)
        this.error = error
      }
    }
  }
}
</script>

<style scoped></style>
