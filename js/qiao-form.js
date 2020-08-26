

//project name qiao-register.js
//obj   或者多个表单元素数组
//$.formel.bind(obj)

//$.formel.bind()       带单个表单元素数据包
//$.formel.testAll()    无参数 返回所有结果


var formel = {
   
    data:[],

    formData:[],


    regArr:[          //默认正则表达式条件组
        {
            reg:/^\w{6,16}$/,
            name:'userid'
        },{
            reg:/^\w[0-9]{6,16}$/,
            name:'password'
        }
    ],
    
   
    //绑定表单元素
    //返回单个检测结果
    bind:function(obj){
    //obj 参数的格式
        /*{
            el:"#id"
            regular:正则表达式,
            msg:"判断结果的提示字符串"          
            msgel:"#text"       提示错误信息的位置  选填
            notNull:false,       //是否需要判断空   true 不能为空  false 可以为空

        }*/
        
        var formItem = obj;

        start();
        
        //入口方法
        //处理obj对象 将数据添加到全局
        function start(){
            
            formItem.el = "#"+formItem.el;

            formItem.static = parsingData(formItem);    //判断数据包格式是否正确
            
            var key = formData.length;

            formData.push(formItem);     //添加到所有数据中

            if(formItem.static){    //进行正则表达式比对
                
                if(testReg(formItem) == "lack false"){      //数据不能为空提示

                    showAlert(formItem,'表单信息不能为空');

                    formData[key].testStatic = false;

                }else if(testReg(formItem) == false){       //调出错误信息

                    showAlert(formItem);

                    formData[key].testStatic = false;

                }else{                   //数据完全合法

                    formData[key].testStatic = true;

                    formData[key].value = $(formData[key]).val();   //添加数据

                }
            
            }
            return formData[key];

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
        //data  单个表单元素的整体数据
        //判断数据格式是否有错误
        function parsingData(data){
            
            if(data.regular){               //判断增则表达式存在
                
                return true;
                
            }else{                      //没有正则表达式
                //直接判定为比对错误    给一个特殊提示
                return false;
            }

        }


      

        //参数比对正则表达式
        //返回表单元素值和比对状态
        function testReg(item){

            
            var value = $(item.el).val();
               
            if(!value){        
                     //数据为空

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

            }
            
            //判断数据是否规范
            if(regular.test(value)){  //规范
                return true;
            }else{  //不规范
                return false;
            }

        }

        //显示提示框
        function showAlert(val){

        }

        //删除提示框
        function delAlert(val){

        }
    },
    //返回所有检测结构
    testAll:function(){
        var data = [];
        for(key in formData){   //遍历已经处理过的数据
            
            if(formData[key].static && formData.testStatic){
                //添加验证成功数据
                data.push({
                    el:this.formData[key].el,
                    value:this.formData[key].value,
                    static:true
                })    

            }else{
                //添加验证失败数据
                data.push({
                    el:this.formData[key].el,
                    static:true
                })   

            }
        }

        return data;

    }

}



