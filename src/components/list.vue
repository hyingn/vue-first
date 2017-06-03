<template>
<div>
  <p>产品列表</p>
  <ul>
    <li class="sec_li" v-for="item in items">
      <router-link :to="{ path: 'detail', query: { id: item.id ,title: item.banner_title }}" class="lp_li_a">
        <div class="lp_li_imgWrap">
          <img :src="item.thumb_img_url" alt="">
        </div>
        <p class="lp_li_name">{{ item.banner_title }}</p>
      </router-link>
    </li>
  </ul>
  <router-link :to="{ params: { page:page }}" @click="changPage(1)">上一页</router-link>
  <router-link :to="{ params: { page:page }}" @click="changPage(-1)">下一页</router-link>
</div>
</template>
<script>
  export default {
    data () {
      return {
        items: [],
        page: 0,
        curr:0
      }
    },
    created () {
      this.$http.get('/api/pic').then(response => {
        // get body data
        console.log(response.data.data);
        this.items = response.data.data;
      }, response => {
        // error callback
      });
      this.curr = this.$route.params.page;
      },
    methods:{
      changPage(type){
          console.log(111);
          if(type>0){
            this.page=this.curr+1;
          } else {
            this.page=this.curr-1;
          }
      }
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        this.$router.go({ params: {page: this.page}});
      }
    }
  }
</script>
<style scoped>
  p {
    font-size: 16px;
    padding-bottom: 10px;
  }
  a {
    font-size: 16px;
    color: #000;
  }
  .sec_li {
    list-style: none;
    float: left;
    width: 50%;
    margin-bottom: 0.1rem;
  }
  .lp_li_a {
    display: block;
    margin: 0 0.05rem;
    text-align: center;
    background: #fff;
    text-decoration: none;
  }
  .lp_li_imgWrap > img {
    width: 100%;
    height: auto;
  }
  .lp_li_name {
    font-size: 16px;
    color: #333;
  }
</style>
