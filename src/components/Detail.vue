<template>
  <section id="detail" class="container">
    <h1>{{ props.data[$route.params.id].title }}</h1>
    <!-- {{ $route.params.id }}
    {{ props.data[$route.params.id].title }} -->
    <!-- //라우터 설정에서 정한 id라는 파라미터를 받아온다 -->
    <article class="pb-5">
      <img
        :src="`${data[$route.params.id].imgUrl}`"
        :alt="`${data[$route.params.id].title}`"
      />
      <p>{{ data[$route.params.id].desc }}</p>
      <small class="text-secondary">{{ data[$route.params.id].skills }}</small>
      <p>
        <a
          :href="`${data[$route.params.id].link}`"
          class="btn btn-primary mt-4"
          target="_blank"
          >홈페이지
        </a>
      </p>
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta
        nihil earum harum possimus quidem minus voluptatibus vitae expedita quia
        voluptatem dolorum pariatur omnis, molestias, placeat quo cumque
        deserunt at.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
        consequatur. Alias dignissimos beatae sequi corrupti atque ducimus
        expedita optio voluptatum maiores nisi, vero nobis consequatur neque ut
        soluta nemo aliquam!
      </p>
      <button @click="$router.back()" class="btn btn-secondary">
        돌아가기
      </button>
    </article>
  </section>
</template>
<script setup>
const props = defineProps({
  data: Array,
});
console.log(props.data);
</script>
<style lang="scss" scoped>
//scoped를 쓰면 해당 css스타일이 이 컴포넌트에만 적용된다
#detail h1 {
  display: flex;
  gap: 1rem;
  align-items: center;
  .badge {
    font-size: small;
  }
}

article {
  img {
    width: 100%;
    aspect-ratio: 8/3;
    object-fit: cover;
    object-position: top;
    margin-bottom: 1em;
  }
}
</style>
