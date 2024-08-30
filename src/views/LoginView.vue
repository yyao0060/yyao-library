<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Login this web</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" v-model="userInput.username" />
              <p>{{ userInput.username }}</p>
            </div>

            <div class="col-md-6 col-sm-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="userInput.password"
              />
            </div>

            <p>{{ userInput.password }}</p>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2" @click="loginWeb">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../utils/Auth.js'

const { isLoggedIn } = auth()

const userInput = ref({
  username: '',
  password: ''
})

const router = useRouter()

const correctUser = {
  username: 'user',
  password: 'user'
}
const loginWeb = () => {
  if (
    userInput.value.username === correctUser.username &&
    userInput.value.password === correctUser.password
  ) {
    isLoggedIn.value = true
    alert('Login successful')
    router.push({ name: 'About' })
  } else {
    isLoggedIn.value = false
    alert('Invalid username or password')
    router.push({ name: 'Redirection' })
  }
}
</script>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #e0bfbf; */
  border-radius: 10px;
}

/* Class selectors */
.form {
  text-align: center;
  margin-top: 50px;
}
</style>
