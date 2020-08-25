

//project name qiao-register.js


var formel = {
   
    data:null,

    style:"",

    alertEl:"",     //显示提示内容的元素
   
    //绑定表单元素
    bind:function(obj,alertEl=false){
    //obj 参数的格式
        /*{
            regular:正则表达式,
            msg:"判断结果的提示字符串"
            notNull:false,       //是否需要判断空   true 不能为空  false 可以为空
        }*/
        var formel = this;  //获取当前对象

        formel.alertEl = alertEl;

        var msg = obj.msg;        
        

        var regular = obj.regular;  //获取正则表达式
        
        var regArr = [          //默认正则表达式条件组
            {
                reg:/^\w{6,16}$/,
                name:'userid'
            },{
                reg:/^\w[0-9]{6,16}$/,
                name:'password'
            }
        ];

        start();
        
        //入口方法
        function start(){
            
            
                //这里是异步事件

                if(isArray(obj)){//数据为数组时为多条数据同时导入

                    jquery.blur(function(){   //表单元素失去焦点时触发事件

                        for(var key in obj){    //遍历数组对象   获取单个元素对象
        
                            var res = parsingData(obj[key]);  //解析数据
                            
                            //对数据组进行打包  打包号的数据放在data里面

                        }

                     });    //获取表单元素中的参数

    
                }else if(isObject(obj)){//数据为对象时导入单条数据
    
                    var res = parsingData(obj);   //解析数据
                    
                }                                      


        }

          //判断是否为数组
        function isArray(obj) {
            return obj instanceof Array;
        }

        //判断是否为对象
        function isObject(obj) {
            return obj instanceof Object;
        }

        //解析数据
        function parsingData(data){
            
            var notNull = true;             //默认是不能为空的

            if(data.notNull!=undefined){     //表单元素中的内容不能为空

                notNull = data.notNull;
            
            }
    

            if(data.regular){               //判断增则表达式存在
                
                for(var index in regArr){               //遍历条件组
    
                    if(regArr[index].name==data.regular){    //匹配默认条件 匹配值name
                        //匹配成功 按照条件组中的值进行比对
                        return testReg(regArr[index].regular,notNull);
                    }
                }
    
            }else{                      //没有正则表达式
                //直接判定为比对错误    给一个特殊提示
                return false;
            }
        }


      

        //参数比对正则表达式
        //返回表单元素值和比对状态
        function testReg(regular,notNull){

            var value = jquery.val();
               
            if(value){      //判断数据是否不为空

            }else{

                if(notNull){       //不允许为空
                    
                    if(value.length==0){  //数据为空
                        //比对失败
                        //在这里返回结果
                        return "lack false";
                    }
                }else{      //允许为空
                    if(value.length==0){ //数据为空 
                        //比对成功
                        //在这里返回结果
                        return "lack true";
                    }
                }

                //判断数据是否规范
                if(regular.test(value)){  //规范
                    return true;
                }else{  //不规范
                    return false;
                }

            }

        }

        //显示提示框
        function showAlert(text){

        }

        //删除提示框
        function delAlert(){

        }
    }

}






$(document).ready(function(){
//点击提交按钮触发事件
    formArea([{
        id:"username",
        regular:/^\w{6,16}$/,
        error:"用户名格式错误",
        //errorPath:"this is errorpath"
    },{ 
        id:"phone",
        regular:/^1[345678]\d{9}$/,
        error:"手机号格式错误"
    },{ 
        id:"verificationcode",
        regular:/^[0-9]{6}$/,
        error:"验证码错误"
    },{ 
        id:"password",
        regular:/^\w[0-9]{6,16}$/,
        error:"密码格式错误"
    },{ 
        id:"passwordagain",
        regular:/^\w[0-9]{6,16}$/,
        error:"密码格式错误"
    },{ 
        id:"email",
        regular:/^\w[0-9]{6,32}$/,
        error:"邮箱格式错误"
    }]);
    $("#regbtn").click(function(){
        testAll();
    });
})
