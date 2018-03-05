<template>
  <div class="blogdetail main-con">
    <div class="con-detail">
      <h1>{{blog.title}}</h1>
      <article>{{blog.content}}</article>
      <p>作者：{{blog.author}}</p>
      <p>分类：</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">
          {{category}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "blogdetail",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  methods: {},
  created() {
    axios.get("/post/" + this.id + ".json").then(data => {
      this.blog = data.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.con-detail {
  background: #eee;
  padding: 20px 15px;
}
</style>