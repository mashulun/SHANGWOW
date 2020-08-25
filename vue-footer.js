Vue.component("vue-footer",{
    props:['footernavs'],
    template:`
    

    <!-- 网页尾部 -->
    <div class="index-footer bg-black pt-5 pb-3">
        <div class="container">
            <div class="text-center">
                <a href="" class="p-1 text-write index-footer-logo-img"><img src="img/logo_white.png"  alt=""></a>
                <a  class="p-1 text-write" v-for="(item,index) of footernavs" :href="item.url" :key="index">{{item.title}}</a>            
            </div>
           
            <p class="text-light text-center mt-3">沪ICP备11004807号-6 Copyright&copy;2006shanghaiwww.com,Allrights Reserved.Made In Shanghai.</p>
        </div>
       
    </div>
    <!-- 网页尾部end -->

        <!-- 不直接显示的页面元素 -->
        <!-- 登录页面 -->
    <div class="modal fade" id="login">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="global-kill-login band" data-dismiss="modal">X</span>
                    <img src="img/signin_logo.png"  alt="logo">
                </div>
                <div class="modal-bady">
                    <form action="" id="loginform">
                        <label class="row mt-3"><span class="col-4 text-right">用户名:</span><input type="text" class=" form-control col-8 "></label>
                        <label class="row"><span class="col-4 text-right">密码:</span><input type="password" class="form-control col-8"></label>
                    </form>
                    <div class="login-radio">
                        <label><input type="radio" name="" id=""> 自动登录</label>
                        <a href="">忘记密码？</a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary">登录</button>
                    <a href="register.html" class="btn">新用户注册</a>
                </div>
            </div>
        </div>
    </div>
    `
})