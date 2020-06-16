<template>
    <div class="content-left">
        <ul>
            <div><router-link to="/index/navtravel">旅拍图片管理</router-link></div>
            <div><router-link to="/index/navwedding">婚礼图片管理</router-link></div>
            <div><router-link to="/index/navhotel">酒店Logo管理</router-link></div>
            <div><router-link to="/index/navdress">婚纱图片管理</router-link></div>
            <div><router-link to="/index/navjewellery">珠宝图片管理</router-link></div>
            <div><router-link to="/index/NavService">咨询图片管理</router-link></div>
        </ul>
    </div>
</template>

<style>
a{
    text-decoration:none;
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
    /* background-image: url('http://img5.imgtn.bdimg.com/it/u=403624015,2869505422&fm=26&gp=0.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%; */
    background: rgba(255, 255, 255, 0.815);
    margin-top: 0px;
}
.router-link-exact-active{
    color: #82a3ca;
}
</style>
