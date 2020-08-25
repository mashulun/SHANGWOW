
    Vue.component("vue-header",{
        template:`
        <div class="global-top bg-black">
        <div class="container navbar navbar-expand-lg">
            <button class="navbar-toggler" data-toggle="collapse" data-target="#mymenu">
                <span class="navbar-toggler-icon iconfont icon-menu text-light"></span>
            </button>

            <div class="collapse navbar-collapse" id="mymenu">
                <div  class="global-first"> 
                    <div class="">
                        <div class="navbar-brand hidden-xs hidden-sm hidden-md">
                            <img  src="img/logo_white.png" style="width: 10rem;" alt="">
                        </div>
                        <div>
                            <ul class="navbar-nav">
                                <li class="nav-item"><a href="" class="nav-link text-light">VIP CLUB</a></li>
                                <li class="nav-item"><a href="" class="nav-link text-light">PARTY SCENE</a></li>
                            </ul>
                        </div>
                        <div class="navbar-nav ">
                            <li class="nav-item">
                                <div class="global-search">
                                    <input type="text">
                                    <span class=" text-light iconfont icon-search"></span>

                                </div>
                            </li>
                            <li class="nav-item"><span class="nav-link text-light band" data-toggle="modal" data-target="#login">登录</span></li>
                            <li class="nav-item"><a href="register.html"  class="nav-link text-light">注册</a></li>
                        </div>   
                    </div>
                    <div >
                        <ul class="navbar-nav" >
                            <li class="nav-item dropdown">
                                <a class="nav-link text-light dropdown-toggle band" data-toggle="dropdown">商户导航</a>
                                <div class="dropdown-menu bg-black">
                                    <a href="" class="dropdown-item band text-light">全部</a>
                                    <a href="" class="dropdown-item band text-light">餐厅</a>
                                    <a href="" class="dropdown-item band text-light">酒吧</a>
                                    <a href="" class="dropdown-item band text-light">茶歇</a>
                                    <a href="" class="dropdown-item band text-light">酒店</a>
                                    <a href="" class="dropdown-item band text-light">购物</a>
                                    <a href="" class="dropdown-item band text-light">旅游</a>
                                    <a href="" class="dropdown-item band text-light">娱乐</a>
                                    <a href="" class="dropdown-item band text-light">丽人</a>
                                    <a href="" class="dropdown-item band text-light">婚庆</a>
                                    <a href="" class="dropdown-item band text-light">房产</a>
                                </div>
                            </li>
                            <li class="nav-item"><a href="news.html" class="nav-link band text-light">餐厅</a></li>
                            <li class="nav-item"><a class="nav-link band text-light">酒吧</a></li>
                            <li class="nav-item"><a class="nav-link band text-light">旅游</a></li>
                            <li class="nav-item"><a href="list.html" class="nav-link band text-light">购物</a></li>
                            <li class="nav-item"><a class="nav-link band text-light">丽人</a></li>
                            <li class="nav-item"><a class="nav-link band text-light">文娱</a></li>
                        </ul>
                    </div>
                </div>
                            
               
            </div>
        </div>
    </div>
        `
    })
