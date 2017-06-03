<template>
  <div class="detail">
    <detail-header></detail-header>
    <!--<img src="../assets/img/lp_01.jpg" alt="">-->
    <h1>{{ $route.query.title }}</h1>
    <p>传播机构，崇贤馆始终致力于中华传统文化的传承和推广，以古籍线装宣纸书的形式，对浩繁的史海巨著进行经典复刻。不仅如此，崇贤馆还延请了傅璇琮、毛佩奇等诸位在国学界内享有盛誉的专家和学者担纲学术顾问，以精益求精的治学态度面对每一部崇贤馆的作品，使之成为学术史中无尚的精品。</p>
  </div>
</template>
<style scoped>
  .detail {
    padding: 0.24rem;
    font-size: 12px;
  }
  img {
    display: block;
    width: 80%;
    margin: 0 auto 0.2rem;
  }
  p {
    font-size: 14px;
    line-height: 0.5rem;
    text-align: justify;
    padding-bottom: 0.24rem;
  }
</style>
<script>
  import DetailHeader from '../components/detailHeader'
  export default {
    components: {
      DetailHeader
    },
    created(){
        console.log(this.$route.query.title);
    }
  }
</script>
