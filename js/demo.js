
var demo = {
    name:'this is demo name',
    fun:function(){
        console.log(this.name);
    }    
}
$.extend({demo:demo});
$.demo.fun();