<template>
  <div class="blogdetail">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
export default {
  name: "blogdetail",
  data() {
    return {
      id: this.$route.params.id,
      blog:{}
    };
  },
  methods: {
    
  },
  created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
      .then(function(data){
          this.blog = data.body;
          console.log(data);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blogdetail{
  width: 85%;
<<<<<<< HEAD
  margin: 20px auto 0;
  background: #eee;
  padding: 20px;
=======
  margin: 0 auto;
>>>>>>> 410ea1b36d97a67988c2c036860d9cfb5d865d37
}
</style>