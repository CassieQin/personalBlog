<template>
  <div id="app">
    <div class="header">
      <router-link to="/">博客总览</router-link>
      <router-link to="/Addblog">新增博客</router-link>
    </div>
    <router-view></router-view>
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
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  background: #2f4050;
  text-align: center;
}
.header a {
  color: #a7b1c2;
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
  margin: 40px 0;
  vertical-align: middle;
  padding-left: 10px;
}
.btn {
  height: 30px;
  width: 80px;
  outline: none;
  background: #42b983;
  border: 1px solid #42b983;
  color: #fff;
  vertical-align: middle;
  cursor: pointer;
}
.text-center {
  text-align: center;
  margin-top: 40px;
}
</style>
