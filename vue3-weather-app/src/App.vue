<script setup>
  import Navbar from './components/Navbar.vue';
  import MainComp from './components/MainComp.vue';
  import { ref, onMounted } from 'vue';

  // 날씨 데이터 상태변수
  const weatherData = ref({
    icon: 'icon',
    temp: 0,
    text: 'text',
    location: 'location',
    city: 'seoul',
  });

  // 날씨 데이터 가져오기
  function getWeather() {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=540a205fe56736473298ca14c4c6f550`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        weatherData.value.icon = data.weather[0].icon;
        weatherData.value.temp = data.main.temp;
        weatherData.value.text = data.weather[0].description;
        weatherData.value.location = data.sys.country;
        weatherData.value.city = data.name;
        console.log(weatherData.value);
      })
      .catch((err) => {
        alert('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      });
  }

  // 앱이 실행되면(onMounted) 날씨 데이터 가져오기
  onMounted(() => {
    console.log('mounted');
    getWeather();
  });

  const onSearchCity = (city) => {
    // console.log(city);
    weatherData.value.city = city;
    getWeather();
  };
</script>

<template>
  <Navbar />
  <MainComp :weatherData="weatherData" @onSearchCity="onSearchCity" />
  <!-- @는 자식에게서 넘겨받은 해당이름의 이벤트를 감지 / 감지후에 뒤에 이름의 함수명을 가진 코드를 실행시킴 -->
</template>

<style scoped lang="scss"></style>
