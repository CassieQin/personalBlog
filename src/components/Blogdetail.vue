<template>
  <div class="blogdetail">
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
</template>

<script>
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
    this.$http
      .get("https://wd5363823571venqpm.wilddogio.com/post/" + this.id + ".json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blogdetail {
  width: 85%;
  margin: 20px auto 0;
  background: #eee;
  padding: 20px 15px;
}
</style>