<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
    <BookList />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import db from '../firebase/init.js'
import BookList from '../components/BookList.vue'
import axios from 'axios'
// Define reactive variables
const isbn = ref('')
const name = ref('')
const error = ref(null)

// Function to add a book
// const addBook = async () => {
//   try {
//     const isbnNumber = Number(isbn.value)
//     if (isNaN(isbnNumber)) {
//       alert('ISBN must be a valid number')
//       return
//     }

//     // Add document to Firestore
//     await addDoc(collection(db, 'books'), {
//       isbn: isbnNumber,
//       name: name.value
//     })

//     // Reset form fields
//     isbn.value = ''
//     name.value = ''

//     alert('Book added successfully!')
//   } catch (error) {
//     console.error('Error adding book:', error)
//   }
// }

const addBook = async () => {
  try {
    const response = await axios.post('https://addbook-sgv5r5k3pa-uc.a.run.app', {
      isbn: Number(isbn.value),
      name: name.value
    })
    alert('Add Book Success')
    // count.value = response.data.count
    console.log('response', response.data)
    error.value = null
  } catch (err) {
    console.error('Error adding book:', err)
  }
}
</script>
