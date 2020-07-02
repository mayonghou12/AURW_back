<template>
    <div class="content-right">
      <div class="content-title">
        <h3>
          <img src="http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/logo.png" />
        </h3>
        <h5>
          <img src="http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/h1.png" />
        </h5>
      </div>
      <router-view></router-view>
    </div>
</template>

<style>
.content-right{
    width: 100%;
    padding-left: 200px;
    background: #ffffff;
    color: black;
    overflow-y: auto;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.content-title{
  width: 100%;
  height: 120px;
  background: #2a2e2d;
}
.content-title h3{
  margin-left: 100px;
}
.content-title h5{
  margin-left: 600px;
}
</style>
