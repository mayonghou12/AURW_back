<template>
    <div class="content-left">
        <ul>
            <div class="router-link-yang"><router-link to="/index/navtravel">旅拍图片管理</router-link></div>
            <div class="router-link-yang"><router-link to="/index/navwedding">婚礼图片管理</router-link></div>
            <div class="router-link-yang"><router-link to="/index/navhotel">酒店Logo管理</router-link></div>
            <div class="router-link-yang"><router-link to="/index/navdress">婚纱图片管理</router-link></div>
            <div class="router-link-yang"><router-link to="/index/navjewellery">珠宝图片管理</router-link></div>
            <div class="router-link-yang"><router-link to="/index/NavService">咨询图片管理</router-link></div>
        </ul>
    </div>
</template>

<style>
a{
    text-decoration:none;
    color: #ffffff;
}
.content-left{
    font-size: 22px;
    position: fixed;
    width: 200px;
    height: 100%;
    left: 0;
    top: 0px;
    bottom: 0;
    z-index: 10;
    border-right: 2px solid #bbb;
    background: rgba(255, 255, 255, 0.815);
    margin-top: 0px;
}
.router-link-exact-active{
    color: rgb(162,127,48);
    background: rgb(2e,2a,2d);
}
.router-link-exact-active:hover{
    color: rgb(162,127,48);
}
.router-link-yang{
    height: 127px;
    width: 200px;
    line-height: 120px;
    margin-left: -40px;
    background: rgb(68, 68, 70);
    text-align: center;
    color: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(162,127,48);
}
.router-link-yang:hover{
    font-size: 28px;
    /* background: #bbb; */
}
.router-link-yang a:hover{
    color: rgb(162,127,48);
}
</style>
