<template>
  <div class="addblog main-con">
    <h2 class="blog-title">新增博客</h2>
    <form action="" v-if="!submited" class="addForm" @submit.prevent="validateBeforeSubmit">
      <p class="input-line">
        <label for="title" class="input-label">博客标题：</label>
        <input type="text" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" placeholder="请输入博客标题" required v-model="blog.title">
      </p>
      <p class="input-textarea">
        <label for="content" class="input-label">博客内容：</label>
        <textarea placeholder="请输入博客内容" v-validate="'required|title'" :class="{'input': true, 'is-danger': errors.has('content') }" name="content" v-model="blog.content"></textarea>
        <span v-show="errors.has('content')" class="help is-danger">必填</span>
      </p>  
      <p class="input-line">
        <label class="input-label">博客分类：</label>
        <label class="checkbox"><input type="checkbox" name="" checked value="HTML" v-model="blog.categories"> HTML</label>
        <label class="checkbox"><input type="checkbox" name="" id="" value="CSS" v-model="blog.categories"> CSS</label> 
        <label class="checkbox"><input type="checkbox" name="" id="" value="JavaScript" v-model="blog.categories"> JavaScript</label>
        <label class="checkbox"><input type="checkbox" name="" id="" value="Vue.js" v-model="blog.categories"> Vue.js</label>
        <span v-show="errors.has('')" class="help is-danger">{{ errors.first('') }}</span>
      </p>
      <p>
        <label class="input-label">作者：</label>
        <select v-model="blog.author">
          <option v-for="author in authors" :key="author.index">{{author}}</option>
        </select>
      </p>
      <div class="text-center">
        <button class="btn" type="submit">发布</button>
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
import axios from "axios";
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
    // post: function() {
    //   axios.post("/post.json", this.blog).then(data => {
    //     this.submited = true;
    //   });
    // },
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          axios.post("/post.json", this.blog).then(data => {
            this.submited = true;
          });
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-line {
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.input-textarea {
  width: 100%;
  height: 70px;
  line-height: 70px;
}
.input-label {
  width: 70px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: top;
  text-align: right;
  color: #444;
}
.input-line input[type="text"] {
  width: calc(100% - 300px);
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
}
.input-textarea textarea {
  width: calc(100% - 300px);
  height: 70px;
  line-height: 70px;
  padding: 0 10px;
}
label.checkbox {
  display: inline-block;
  cursor: pointer;
  margin-right: 15px;
  color: #666;
}

.sucess {
  height: 40px;
  line-height: 40px;
  background: #42b983;
  color: #f7f7f7;
  text-align: center;
  margin-top: 20px;
}
.addForm {
  background: #eee;
  padding: 20px 15px;
  margin-top: 20px;
}
</style>