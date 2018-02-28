<template>
  <div class="addblog">
    <h2 class="blog-title">新增博客</h2>
    <form action="" v-if="!submited" class="addForm">
        <label for="">博客标题 <input type="text" value="" placeholder="请输入博客标题" required v-model="blog.title"></label>
        <label for="">博客内容 <textarea placeholder="请输入博客内容" v-model="blog.content"></textarea></label>
        <div id="checkboxes">
          博客分类
          <label><input type="checkbox" name="" id="" value="HTML" v-model="blog.categories"> HTML</label>
          <label><input type="checkbox" name="" id="" value="CSS" v-model="blog.categories"> CSS</label> 
          <label><input type="checkbox" name="" id="" value="JavaScript" v-model="blog.categories"> JavaScript</label>
          <label><input type="checkbox" name="" id="" value="Vue.js" v-model="blog.categories"> Vue.js</label>
        </div>
        <label>作者
          <select v-model="blog.author">
            <option v-for="author in authors" :key="author.index">{{author}}</option>
          </select>
        </label>
        <div class="text-center">
          <button @click.prevent="post" class="btn">添加博客</button>
        </div>
    </form>
    <div class="sucess" v-if="submited">您的博客发布成功！</div>

    <!-- <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题：{{blog.title}}</p>
        <p>博客内容：</p>
        <p>{{blog.content}}</p>
        <p>博客分类</p>
        <ul>
            <li v-for="category in blog.categories" :key="category.index">{{category}}</li>
        </ul>
        <p>作者：{{blog.author}}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "addblog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Cassie", "Henry", "Rose", "Lily"],
      submited: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("https://wd5363823571venqpm.wilddogio.com/post.json", this.blog)
        .then(function(data) {
          this.submited = true;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addblog * {
  box-sizing: border-box;
}
label {
  display: block;
  height: auto;
  overflow: hidden;
  color: #666;
  margin-top: 15px;
}
label input[type="text"] {
  height: 30px;
  line-height: 30px;
}
label input[type="text"],
textarea {
  width: calc(100% - 65px);
  float: right;
  vertical-align: middle;
  padding: 0 10px;
}
textarea {
  padding: 10px;
}
.addblog {
  width: 85%;
  margin: 0 auto;
}
.sucess {
  height: 40px;
  line-height: 40px;
  background: #42b983;
  color: #f7f7f7;
  text-align: center;
  margin-top: 20px;
}
#checkboxes label{display: inline-block; cursor: pointer; margin-left: 15px;}
.addForm{
  background: #eee;
  padding: 20px 15px;
}
</style>