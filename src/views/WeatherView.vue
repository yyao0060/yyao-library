<template>
  <div class="container">
    <h1>Weather App</h1>
    <div class="search-bar">
      <input type="text" v-model="city" placeholder="Enter city name" class="search-input" />
      <button @click="searchByCity" class="search-button">Search</button>
    </div>
    <main>
      <div v-if="weatherData">
        <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
        <div>
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <span>{{ weatherData.weather[0].description }}</span>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const apikey = '5cbf2db5e421e1f9f4e416cf7716bdbd'
const city = ref('')
const weatherData = ref(null)

const temperature = computed(() => {
  return weatherData.value ? Math.floor(weatherData.value.main.temp - 273) : null
})

const iconUrl = computed(() => {
  return weatherData.value
    ? `http://api.openweathermap.org/img/w/${weatherData.value.weather[0].icon}.png`
    : null
})

const fetchCurrentLocationWeather = async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`

        await fetchWeatherData(url)
      },
      (error) => {
        console.error('Error fetching location:', error.message)
        alert('Unable to retrieve your location. Please enable location services.')
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    )
  } else {
    alert('Geolocation is not supported by this browser.')
  }
}

const fetchWeatherData = async (url) => {
  try {
    const response = await axios.get(url)
    weatherData.value = response.data
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

const searchByCity = async () => {
  try {
    const responseLocation = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city.value}&appid=${apikey}`
    )
    // weatherData.value = responseLocation.data;
    console.log(responseLocation.data[0])
    const lat = responseLocation.data[0].lat
    const lon = responseLocation.data[0].lon
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
    await fetchWeatherData(url)
    console.log(lat, lon)
  } catch (error) {
    console.error('Error fetching Location data:', error)
  }
}

onMounted(() => {
  fetchCurrentLocationWeather()
})
</script>

<style scoped></style>
