<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via firebase</button></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()

const adminCredential = 'admin@test.com'
const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      if (data.user.email === adminCredential) {
        alert('welcome admin!')
        router.push('/admin')
        console.log(auth.currentUser)
      } else {
        console.log('firebase sign in successful')
        router.push('/')
        console.log(auth.currentUser)
      }
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>

<style scoped></style>
