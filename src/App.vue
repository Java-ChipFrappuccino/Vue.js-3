<script setup>
// import TitlePage from './components/TitlePage.vue';
// import Portfolio from './components/Portfolio.vue';
// import About from './components/About.vue';
import data from './assets/portfolio';
</script>

<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary fixed-top"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Doolee</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
            <!-- //라우터를 사용하면 a태그 말고 라우트 링크 쓰는게 좋다 로딩시간을 줄여준다 / 주소값은 href 에서 to로 변경-->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio"
              >Portfolio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view :data="data" />
  <!-- <TitlePage />
  <Portfolio />
  <About /> -->
</template>

<style scoped lang="scss">
// scss 문법 , 부모가 중첩된 요소들의 부모를 모아서 표기해줌
</style>
