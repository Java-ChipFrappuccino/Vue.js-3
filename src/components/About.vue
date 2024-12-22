<template>
  <section id="about" class="container">
    <h1>About</h1>
    <div class="row gx-5">
      <figure class="col-md-6">
        <img src="../assets/images/profile.jpg" alt="profile" />
        <figcaption>About JoonSoon</figcaption>
      </figure>
      <p class="col-md-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corporis
        quasi repellat, inventore nihil beatae? Vitae libero commodi
        exercitationem ratione et quibusdam, qui deleniti cum laudantium, dolor
        facere voluptatum adipisci!
      </p>
    </div>
    <article class="row mt-5">
      <h2>Skills</h2>
      <dl>
        <div v-for="item in skills">
          <dt class="lead">{{ item.name }}</dt>
          <dd>
            <div class="progress" role="progressbar">
              <div
                class="progress-bar text-end pe-3"
                :style="{ width: item.point }"
              >
                {{ item.point }}
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </article>
  </section>
</template>
<script setup>
const skills = [
  { name: 'HTML', point: '90%' },
  { name: 'CSS', point: '80%' },
  { name: 'JAVASCRIPT', point: '50%' },
  { name: 'VUE', point: '75%' },
];
</script>
<style scoped lang="scss">
figure img {
  width: 100%;
}
</style>
