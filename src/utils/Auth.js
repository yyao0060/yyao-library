import { ref } from 'vue'

const isLoggedIn = ref(false)

export function auth() {
  const login = () => {
    isLoggedIn.value = true
  }

  const logout = () => {
    alert('log out!')
    isLoggedIn.value = false
  }

  return { isLoggedIn, login, logout }
}
