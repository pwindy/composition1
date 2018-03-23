
 function animation(obj,json,time,type,callback) {
    //type和callback的存在与否情况
    if (typeof type=='function'){
        callback = type;
        type = 'linear';
    }else {type = type||'linear';}

    var t_start = new Date();//获取初始时间
    var val_str_json = {};//用于存放多变量的初始值
    var val_used_json = {};//用于存放多变量的过程值
    var val_end_json = {};//用于存放多变量的最终值

    for ( var attr in json) {
        val_str_json[attr] = parseFloat( getStyle(obj,attr) );//用for in一次性遍历多变量的初始值
        val_end_json[attr] = parseFloat( json[attr] );
        //用for in一次性遍历多变量的最终值
    }

    //requestAnimationFrame运动
    function run() {
        var t_used = new Date()-t_start;//获取运动的时间

        //请求requestAnimationFrame运动
        if (t_used>=time) { t_used=time; }
        else { requestAnimationFrame(run); }
        //用for in遍历多变量的过程值
        for ( var attr in json) {
            var a = 2*(val_end_json[attr]-val_str_json[attr])/Math.pow(time,2);
            //匀加速运动：a固定不变的。//s=a*t*t/2，a=2s/(t*t);
            val_used_json[attr] = a*Math.pow(t_used,2)/2;
            //遍历多变量的过程值

            //判断各属性值是否带单位
            var unit = '';
            switch(attr){
                case 'opacity':  //当属性为透明度时
                         break;
                case 'zIndex':   //当属性为层级时
                         break;
                default :
                   unit = 'px';  //当属性为不是透明度和层级的时候
                         break;
            }

            //       t_start            t_start = new Date();               time初始值
            //     t used time          new Date() - t_start;               运动时长
            //     b beginning value    val_start ;getStyle(obj,attr);      value初始值
            //     c all value          val_end-val_start ;                 总的路程
            //     d time               time                                总时间
            var t = t_used, b = val_str_json[attr], c = val_end_json[attr]-val_str_json[attr], d = time;
            if (attr=='opacity') {
                obj.style.opacity= Tween[type](t, b, c, d);
                obj.style.filter = 'alpha(opacity='+Tween[type](t, b, c, d)+')';//ie8及以下兼容
            }
            obj.style[attr] = Tween[type](t, b, c, d) + unit;
            // obj.style[attr] = val_str_json[attr] + val_used_json[attr] + 'px';
        }

        //回调函数调用
        if (t_used>=time) {
            if (callback) {callback();}
        }
        //三目简写方法一：t_used>=time?callback&&callback():'';
        //三目简写方法二：t_used>=time?callback&&callback():false;
    }
    run();//run函数调用
}

//封装函数：获取样式(ie8及以下兼容)
function getStyle(obj,attr) {
    return window.getComputedStyle?getComputedStyle(obj)[attr]:obj.currentStyle[attr];
}


//16种运动曲线
//       c*t/d + b 匀速运动曲线公式
//       t_start            t_start = new Date();               time初始值
//     t used time          new Date() - t_start;               运动时长
//     b beginning value    val_start ;getStyle(obj,attr);      value初始值
//     c all value          val_end-val_start ;                 总的路程
//     d time               time                                总时间
var Tween = {
    linear: function (t, b, c, d){  //匀速
        return c*t/d + b;   //  t/d = prop;
    },
    easeIn: function(t, b, c, d){  //加速曲线
        return c*(t/=d)*t + b;
    },
    easeOut: function(t, b, c, d){  //减速曲线
        return -c *(t/=d)*(t-2) + b;
    },
    easeBoth: function(t, b, c, d){  //加速减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInStrong: function(t, b, c, d){  //加加速曲线
        return c*(t/=d)*t*t*t + b;
    },
    easeOutStrong: function(t, b, c, d){  //减减速曲线
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t*t*t + b;
        }
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p/4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    elasticBoth: function(t, b, c, d, a, p){     //正弦增强衰减曲线
        if (t === 0) {
            return b;
        }
        if ( (t /= d/2) == 2 ) {
            return b+c;
        }
        if (!p) {
            p = d*(0.3*1.5);
        }
        if ( !a || a < Math.abs(c) ) {
            a = c;
            var s = p/4;
        }
        else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        if (t < 1) {
            return - 0.5*(a*Math.pow(2,10*(t-=1)) *
                    Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        }
        return a*Math.pow(2,-10*(t-=1)) *
                Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
    },
    backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
        if (typeof s == 'undefined') {
           s = 1.70158;
        }
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    backOut: function(t, b, c, d, s){     //回退减速（回退渐出）
        if (typeof s == 'undefined') {
            s = 3.70158;  //回缩的距离
        }
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    backBoth: function(t, b, c, d, s){    //回退加速减速
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((t /= d/2 ) < 1) {
            return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        }
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    bounceIn: function(t, b, c, d){    //弹球减振（弹球渐入）
        return c - Tween['bounceOut'](d-t, 0, c, d) + b;
    },
    bounceOut: function(t, b, c, d){   //弹球加振（弹球渐出）
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
        }
        return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
    },
    bounceBoth: function(t, b, c, d){   //弹球减振加振
        if (t < d/2) {
            return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
        }
        return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
    }
};
