<template>
  <div id="app">
    <div class="header">
      <router-link to="/">博客总览</router-link>
      <router-link to="/Addblog">新增博客</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="foot">CASSIE'S BLOG</div>
  </div>
</template>

<script>
import addblog from "./components/Addblog";
import showblog from "./components/Showblog";
export default {
  name: "App",
  components: {
    addblog,
    showblog
  }
};
</script>

<style>
html,body,#app{width: 100%; height: 100%;}
body {
  font-size: 14px;
  font-family: "Microsoft Yahei", "微软雅黑", "Hiragino Sans GB", "SimSun",
    "Arial", "Helvetica Neue", "Helvetica";
}
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
ol,
ul {
  margin: 0;
  padding: 0;
}
.header {
  width: 85%;
  margin: 0 auto;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  background: #42b983;
  text-align: center;
}
.header a {
  color: #ddd;
  text-decoration: none;
  margin-right: 15px;
}
a.router-link-exact-active {
  color: #fff;
}
.blog-title {
  color: #515151;
  height: 35px;
  line-height: 35px;
  border-left: 6px solid  #42b983;
  vertical-align: middle;
  padding-left: 10px;
}
.btn {
  height: 30px;
  width: 60px;
  outline: none;
  background: #42b983;
  border: 1px solid #42b983;
  color: #fff;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 2px;
}
.text-center {
  text-align: center;
  margin-top: 40px;
}
.content{
  width: 85%;
  margin: 30px auto;
  height: calc(100% - 160px);
  height: -moz-calc(100% - 160px);
  height: -webkit-calc(100% - 160px);
  overflow: auto;
}
.main-con{padding: 0 15px;}
.foot{
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #2f4050;
  color: #FFF;
  text-align: center;
}
</style>
