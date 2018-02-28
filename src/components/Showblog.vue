<template>
  <div class="showblog main-con">
    <h2 class="blog-title">博客总览</h2>
    <form class="search">
        <input id="input" ref="input" type="text" placeholder="请输入博客名称或标题" /><button  @click="formSubmit" class="btn">搜索</button>
    </form>
    <div class="data-box" ref="dataBox">
      <div v-for="blog in filterBlogs" :key="blog.index" class="single-blog">
          <router-link :to="'/blog/' + blog.id">{{blog.title | toUpperCase}}</router-link>
          <article>{{blog.content | snippet}}</article>
      </div>
    </div>
    <div class="no-blog" v-bind:class="{ show: !show }">无匹配数据！</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "showblog",
  data() {
    return {
      blogs: [],
      search: "",
      show: false
    };
  },
  methods: {
    formSubmit: function(e) {
      e.preventDefault();
      this.search = this.$refs.input.value;
    }
  },
  created() {
    axios.get("/post.json")
    .then((data) => {
      var blogsArray = [];
      for(let key in data.data){
        data.data[key].id = key;
        blogsArray.push(data.data[key]);
      }
      this.blogs = blogsArray;
    });
  },
  computed: {
    filterBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search.toLowerCase());
      });
    }
  },
  //局部过滤器
  filters: {
    toUpperCase: function(value) {
      return value.toUpperCase();
    },
    snippet: function(value) {
      return value.slice(0, 200) + "...";
    }
  },
  updated: function() {
    if (this.$refs.dataBox.children.length <= 0) {
      this.show = true;
    }else{
      this.show = false;
    }
  }
  // directives: {
  //   rainbow: {
  //     bind:function(el,binding,vnode){
  //       el.style.color = '#' + Math.random().toString(16).slice(2,8);
  //     }
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
  margin: 20px 0;
  height: 30px;
}
.search input {
  height: 26px;
  width: 50%;
  padding: 0 10px;
  vertical-align: top;
}
.single-blog {
  height: auto;
  padding: 20px 15px;
  background: #f1f1f1;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 2px;
}
.single-blog:hover{background: #eee;}
.single-blog a {
  display: inline-block;
  width: 100%;
  font-size: 16px;
  color: #444;
}
.single-blog:hover a{color: #42b983;}
.single-blog article {
  margin-top: 10px;
  color: #666;
}
.no-blog {
  height: 40px;
  line-height: 40px;
  background: #e96900;
  color: #f7f7f7;
  text-align: center;
}
.show {
  display: none;
}
</style>