<template>
  <div>
    <h1>All Books</h1>

    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }} - ISBN: {{ book.isbn }} - id: {{ book.id }}
        <button @click="getBook(book.id)">select to update/delete</button>
      </li>
    </ul>
    <button @click="orderByAscending">orderByAscending</button>
    <button @click="orderByDescending">orderByDescending</button>
    <div>
      <h1>Update/Delete Book</h1>
      <input type="text" v-model="isbn" placeholder="isbn" required />
      <input type="text" v-model="name" placeholder="name" required />
      <button @click="updateBook">Update Book</button>
      <button @click="deleteBook">Delete Book</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  orderBy,
  limit
} from 'firebase/firestore'
import db from '../firebase/init.js'

const books = ref([])
const isbn = ref('')
const name = ref('')
const selectedBookId = ref(null)

const fetchBooks = async () => {
  try {
    const q = query(collection(db, 'books'))
    const querySnapshot = await getDocs(q)
    const booksArray = []

    querySnapshot.forEach((doc) => {
      booksArray.push({ id: doc.id, ...doc.data() })
    })

    books.value = booksArray
  } catch (error) {
    console.error('Error fetching books: ', error)
  }
}

const getBook = async (id) => {
  try {
    const docRef = doc(db, 'books', id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      isbn.value = docSnap.data().isbn
      name.value = docSnap.data().name
      selectedBookId.value = id
    } else {
      console.log('No such document')
    }
  } catch (error) {
    console.error('Error getting book: ', error)
  }
}

const updateBook = async () => {
  try {
    const isbnNumber = Number(isbn.value)
    if (isNaN(isbnNumber)) {
      alert('ISBN must be a valid number')
      return
    }

    if (!selectedBookId.value) {
      alert('No book selected!')
      return
    }

    await setDoc(doc(db, 'books', selectedBookId.value), {
      isbn: isbnNumber,
      name: name.value
    })

    isbn.value = ''
    name.value = ''
    selectedBookId.value = null
    alert('Book updated successfully!')
    fetchBooks()
  } catch (error) {
    console.error('Error updating book: ', error)
  }
}

const deleteBook = async () => {
  try {
    if (!selectedBookId.value) {
      alert('No book selected!')
      return
    }

    await deleteDoc(doc(db, 'books', selectedBookId.value))
    isbn.value = ''
    name.value = ''
    selectedBookId.value = null
    alert('Book removed successfully!')
    fetchBooks()
  } catch (error) {
    console.error('Error removing book: ', error)
  }
}

const orderByAscending = async () => {
  try {
    const q = query(collection(db, 'books'), orderBy('isbn', 'asc'), limit(5))
    const querySnapshot = await getDocs(q)
    const booksArray = []
    querySnapshot.forEach((doc) => {
      booksArray.push({ id: doc.id, ...doc.data() })
    })
    books.value = booksArray
  } catch (error) {
    console.error('Error fetching books: ', error)
  }
}

const orderByDescending = async () => {
  try {
    const q = query(collection(db, 'books'), orderBy('isbn', 'desc'), limit(5))
    const querySnapshot = await getDocs(q)
    const booksArray = []
    querySnapshot.forEach((doc) => {
      booksArray.push({ id: doc.id, ...doc.data() })
    })
    books.value = booksArray
  } catch (error) {
    console.error('Error fetching books: ', error)
  }
}

onMounted(() => {
  fetchBooks()
})
</script>
