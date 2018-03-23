// pro1 点击图片自动替换
( function() {
    var oBox1 = document.querySelector('.pro1 img'),
        oBox2 = true;
    oBox1.onclick = function () {
        if (oBox2) {
            oBox1.src ='images/1-2.jpg';
            oBox2 = false;
        }
        else {
            oBox1.src = 'images/1-1.jpg';
            oBox2 = true;
        }
    }
} ) ();

// pro2 文字放大缩小
( function() {
    var oFontSize = document.querySelectorAll('.pro2 .box .text')[0];
    var num = 16;
    var oBox = document.querySelectorAll('.pro2 span');
    oBox[0].onclick = function () {
            num ++;
            if (num>20) {
                num = 20;
            }
            oFontSize.style.fontSize = num + 'px';
    }
    oBox[1].onclick = function () {
            num --;
            if (num<12) {
                num = 12;
            }
            oFontSize.style.fontSize = num + 'px';
    }
} ) ();

// pro3 页面添加新闻功能
( function() {
    var oBox1 = document.querySelector('.pro3 .box3');
    var oBox2 = document.querySelector('.pro3 .box2');
    var oBox3 = document.querySelector('.pro3 .box2 .box2_con');
    var oBox4 = document.querySelector('.pro3 .box2 .box2_add');
    var oBox5 = document.querySelector('.pro3 .box2 .box2_con_get');
    oBox1.onclick = function () {
        oBox2.style.display = 'block';
        oBox4.onclick = function () {
            var neirong = oBox3.value;
            oBox5.innerHTML += '<li>'+neirong+'</li>';
            oBox3.value = '';
        }
    }
} ) ();

// pro4 QQ说说发表功能
( function() {
    // left
    var oBox = document.querySelector('.pro4 .left .box');
    var oSubmit = document.querySelector('.pro4 .left .sub .submi');
    var oUl_l = document.querySelector('.pro4 .left ul');
    oSubmit.onclick = function () {
        var neiRong = oBox.value;
        oBox.value = '';
        oUl_l.innerHTML += '<li>' + neiRong + '</li>';
    }
    // right
    var oWrap_box =  document.querySelector('.pro4 .right .wrap-box');
    var oText =  document.querySelector('.pro4 .right .wrap-box .box-p');
    var oBtn =  document.querySelector('.pro4 .right .wrap-box div #btn');
    var oUl_r =  document.querySelector('.pro4 .right #box-ul');
    var oImg =  document.querySelector('.pro4 .right #box-ul img');
    var onOff = true;
    oImg.style.cssText = 'border-radius:50%;';
    oImg.onclick = function () {
            if (onOff) {oImg.src = 'images/02.jpg'; onOff = false;}
                   else{oImg.src = 'images/01.jpg'; onOff = true;}
          }
    oBtn.onclick = function () {
        var oPic = oImg.src
        var li = '<li> <img src="' +oPic+ '" alt="" width="38" height="38"><p>' +oText.value+ '</p></li>';
        oUl_r.innerHTML += li
        oText.value = '';
    }
} ) ();

// pro5 单边切换+循环切换
( function() {
    var oChg = document.querySelectorAll('.pro5 span');
    var oBox = document.querySelector('.pro5 .box');
    var oLi = document.querySelectorAll('.pro5 .box ul li ');
    var oT_B = document.querySelectorAll('.pro5 .box p');
    var arr = ['第一张图片','第二张图片','第三张图片','第四张图片','第五张图片'];
    var oL_R = document.querySelectorAll('.pro5 .box b');
    var num = 0;
    var onOff = true;
    oChg[0].style.backgroundColor = 'red';
    oLi[0].style.display = 'block';
    oT_B[0].innerHTML = 1 + '/' + oLi.length;
    oT_B[1].innerHTML = arr[0];
    // 单边切换
    oChg[0].onclick = function () {
        this.style.backgroundColor = 'red';
        oChg[1].style.backgroundColor = '#000';
        onOff = true;
    }
    // 循环切换
    oChg[1].onclick = function () {
        this.style.backgroundColor = 'red';
        oChg[0].style.backgroundColor = '#000';
        onOff = false;
    }
    // 右点击
    oL_R[1].onclick = function () {
        oLi[num].style.display = 'none';
        num++;
        if (num>4) {
            if (onOff) {
                num = 4;
                alert ('伙计，这已经是最后一张啦！');
            }
            else {
                num = 0;
            }
        }
        oLi[num].style.display = 'block';
        oT_B[0].innerHTML = num+1 + '/' + oLi.length;
        oT_B[1].innerHTML = arr[num];
    }
    // 左点击
    oL_R[0].onclick = function () {
        oLi[num].style.display = 'none';
        num--;
        if (num<0) {
            if (onOff) {
                num = 0;
                alert ('伙计，这是第一张哟！');
            }
            else {
                num = '4';
            }
        }
        oLi[num].style.display = 'block';
        oT_B[0].innerHTML = num+1 + '/' + oLi.length;
        oT_B[1].innerHTML = arr[num];
    }
} ) ();

// pro6 简单图片轮播
( function() {
    //对象
    var oWrap = document.querySelector('.pro6 .wrap');
    var oBox = document.querySelector('.pro6 .wrap .box');
    var oBo = document.querySelector('.pro6 .wrap .box b');
    var oPo = document.querySelector('.pro6 .wrap .box p');
    var oImg = document.querySelector('.pro6 .wrap .box img');
    var oUl = document.querySelector('.pro6 .wrap ul');
    var oLi = document.querySelectorAll('.pro6 .wrap ul li');
    var num = 0;
    //图片数组
    var arr_img = ['images/6-1.jpg','images/6-2.jpg','images/6-3.jpg','images/6-4.jpg'];
    //图片下方文字数组
    var arr_p = ['第一张图片','第二张图片','第三张图片','第四张图片'];
    //初始样子（打开页面呈现的样子）
    oBo.innerHTML = 1+'/'+ oLi.length;
    oPo.innerHTML = arr_p[0];
    oImg.src = arr_img[0];
    oLi[0].style.backgroundColor = '#f60';
    // 右边数字点击轮播
    for (var i=0;i<4;i++) {
        oLi[i].index = i;
        oLi[i].onclick = function () {
            oBo.innerHTML = (this.index+1)+'/'+oLi.length;//图片上方数字内容轮播
            oPo.innerHTML = arr_p[this.index];//图片下方文字内容轮播
            oImg.src = arr_img[this.index];//图片内容轮播
            //右边竖向排列li背景颜色变换
            oLi[num].style.backgroundColor = '';
            this.style.backgroundColor = '#f60';
            num = this.index;
        }
    }
} ) ();

// pro7 二级菜单下拉选项
( function() {
    var oWrap = document.querySelector('.pro7 .wrap');
    var oLi = document.querySelectorAll('.pro7 .wrap li');
    var oH3 = document.querySelectorAll('.pro7 .wrap li h3');
    var oDiv = document.querySelectorAll('.pro7 .wrap li div');
    var odiv3 = true;
    var oP = document.querySelectorAll('.pro7 .wrap li div p');
    var num_oP = 0;
    //一级标题：循环+点击事件
    for (var i=0;i<oLi.length;i++) {
        oH3[i].index = i;
        oH3[i].onclick = function () {
            if (odiv3) {
                oDiv[this.index].style.display = 'block';
                this.style.backgroundColor = '#f90';
                odiv3 = false;
            }else {
                oDiv[this.index].style.display = 'none';
                this.style.backgroundColor = '';
                odiv3 = true;
            }
        }

    }
    //二级标题：内容点击事件
    for (var a=0;a<oP.length;a++) {
        oP[a].index = a;

        oP[a].onclick = function () {
            oP[num_oP].style.backgroundColor = '';
            this.style.backgroundColor = '#ff9';
            num_oP = this.index;
        }
    }
} ) ();

//pro8  选项卡特效
( function() {
    var oWrap = document.querySelector('.pro8 .wrap');
    var oP = document.querySelectorAll('.pro8 .wrap p');
    var num_op = 0;
    var oUl = document.querySelectorAll('.pro8 .wrap div ul');
    oP[0].className = 'sty';
    oUl[0].style.display = 'block';
    for (var i=0;i<oP.length;i++) {
        oP[i].index = i;
        //一级标题：滑入事件
        oP[i].onmouseenter = function () {
            //一级标题：style变化
            oP[num_op].className = '';
            this.className = 'sty';
            //二级内容：block变化
            oUl[num_op].style.display = '';
            oUl[this.index].style.display = 'block';
            num_op = this.index;
        }
    }
} ) ();

// pro9 全选、反选、清空
( function() {
    var oWrap = document.querySelector('.pro9 .wrap');
    var oInput = document.querySelectorAll('.pro9 .wrap input');
    var oButton = document.querySelectorAll('.pro9 .wrap #but button');
    var length =  oInput.length;
    oButton[0].onclick = function () {
        for (var a=0;a<length;a++) {
            oInput[a].checked = true;
        }
    }
    oButton[1].onclick = function () {
        for (var b=0;b<length;b++) {
            oInput[b].checked = !oInput[b].checked;
        }
    }
    oButton[2].onclick = function () {
        for (var c=0;c<length;c++) {
            oInput[c].checked = false;
        }
    }
} ) ();

// pro10 全选和隔行变色
( function() {
    var oWrap = document.querySelector('.pro10 .wrap');
    var oLi = document.querySelectorAll('.pro10 .wrap ul li');
    var oP = document.querySelector('.pro10 .wrap p');
    var arr = ['#99f','#96c'];
    length = oLi.length;
    for (var i=0;i<length;i++) {
        oLi[i].index = i;
        oLi[i].li_nocheck = false;
        oLi[i].style.backgroundColor = arr[i%2];
        //隔行变色，鼠标划入
        oLi[i].onmouseenter = function () {
            this.style.backgroundColor = '#3f0';
        }
        //隔行变色，鼠标划出
        oLi[i].onmouseout = function () {
            this.style.backgroundColor = (this.index)%2?'#96c':'#99f';
        }
        //li点击
        oLi[i].onclick = function () {
            //每个li点击事件，加开关
            this.className = this.li_nocheck?'':'che';
            this.li_nocheck = !this.li_nocheck;
            //所有li都点击选中，p勾选；只要有一个或者一个以上的li没有被点击选中，p不勾选
            var all = true;
            for (var j=0;j<length;j++) {
                if (!oLi[j].li_nocheck) {
                    all = false;
                    break;
                }
            }
            oP.className = all?'che':'';
        }
    }
    oP.p_nocheck = false;
    oP.onclick = function () {
        if (this.p_nocheck) {
            this.className = '';
            for (var k=0;k<length;k++) {
                oLi[k].className = '';
                oLi[k].li_nocheck = false;
                // oLi[k].style.backgroundColor = k%2?'#96c':'#99f';
            }
        }else {
            this.className = 'che';
            for (var k=0;k<length;k++) {
                oLi[k].className = 'che';
                oLi[k].li_nocheck = true;
                // oLi[k].style.backgroundColor = k%2?'#96c':'#99f';
            }
        }
        this.p_nocheck = !this.p_nocheck;
    }
}) ();

// pro11 多层选项卡
( function() {
    var oWrap = document.querySelector('.pro11 .wrap');
    var oImg = document.querySelector('.pro11 .wrap img');
    var oLi = document.querySelectorAll('.pro11 .wrap ul li');
    var oP = document.querySelectorAll('.pro11 .wrap p');
    var arr_img=[
        ['images/11-1.jpg','images/11-2.jpg','images/11-3.jpg','images/11-4.jpg'],
        ['images/11-m1.jpg','images/11-m2.jpg','images/11-m3.jpg','images/11-m4.jpg','images/11-m5.jpg'],
        ['images/11-s1.jpg','images/11-s2.jpg'],
        ['images/11-z1.jpg','images/11-z2.jpg','images/11-z3.jpg']
     ];
     var num_li = 0;
     oLi[0].className = 'bcli';
     oImg.src = arr_img[0][0];
     oP[0].style.display = 'block';
     for (var i=0;i<oLi.length;i++) {
        oLi[i].index1 = i;
        oLi[i].onmouseenter = function () {
            oLi[num_li].className = '';
            this.className = 'bcli';
            oImg.src = arr_img[this.index1][0];
            oP[num_li].style.display = '';
            oP[this.index1].style.display = 'block';
            num_li = this.index1;
        }
     }
     for (var j=0;j<oP.length;j++) {
        oP[j].onmouseenter = function () {
            var oSpan = oP[num_li].getElementsByTagName('span');
            oP[num_li].num = 0;
            for (var k=0;k<oSpan.length;k++) {
                oSpan[k].index2 = k;
                oSpan[k].onmouseenter  = function () {
                    oSpan[oP[num_li].num].className = '';
                    this.className = 'bcspan';
                    oImg.src = arr_img[num_li][this.index2];
                    oP[num_li].num = this.index2;

                }
            }
        }
     }
}) ();

// pro12 Animation星级评论
( function() {
    var oWrap = document.querySelector('.pro12 .wrap');
    var oUl = document.querySelector('.pro12 .wrap ul');
    var oLi = document.querySelectorAll('.pro12 .wrap ul li');
    var oB = document.querySelector('.pro12 .wrap b');
    var arr_b = ['请添加评分','很差','差','一般','推荐','力荐']

    var num = -1;
    oB.innerHTML = arr_b[0];
    for (var i=0;i<oLi.length;i++){
        oLi[i].index = i;
        //鼠标滑入事件
        oLi[i].onmouseenter = function (){
            for (var j=0;j<oLi.length;j++){
                if (j<=this.index){
                    oLi[j].className = 'bgc';
                }else{
                    oLi[j].className = '';
                }
            }
            oB.innerHTML = arr_b[this.index+1];
        }
        //鼠标点击事件
        oLi[i].onclick = function () {
            num = this.index;//重点
        }
    }

    //移出
    for (var i=0;i<oLi.length;i++) {
        oLi[i].onmouseleave = function () {
            for (var k=0;k<oLi.length;k++) {
                if (k<=num) {
                    oLi[k].className = 'bgc';
                }else {
                    oLi[k].className = '';
                }
            }
            oB.innerHTML = arr_b[num+1];
        }
    }
}) ();

// pro13 Animation 购物结算
( function() {
    var oWrap = document.querySelector('.pro13 .wrap');
    var oI = document.querySelectorAll('.pro13 .wrap dl dd i');
    var oBut_add = document.querySelectorAll('.pro13 .wrap dl dd .add');
    var oP = document.querySelectorAll('.pro13 .wrap dl dd p');
    var oBut_less = document.querySelectorAll('.pro13 .wrap dl dd .less');
    var oB = document.querySelectorAll('.pro13 .wrap dl dd b');
    var oSpan = document.querySelectorAll('.pro13 .wrap ul li span');
    oSpan[0].innerHTML = 0;
    oSpan[1].innerHTML = 0;
    for (var i=0;i<oBut_add.length;i++) {
        oP[i].innerHTML = 0;
        oB[i].innerHTML = 0;
        oBut_add[i].index1 = i;
        oBut_less[i].index2 = i;
        //加按钮
        oBut_add[i].onclick = function () {
            var t_index1 = this.index1;
            oP[t_index1].innerHTML++;
            oB[t_index1].innerHTML = oP[t_index1].innerHTML*oI[t_index1].innerHTML;//两项相乘
            //合计
            var span0_con = 0 ;//数据类型：Number
            var span1_con = 0 ;//数据类型：Number
            for (var j=0;j<oP.length;j++) {
                span0_con += Number(oP[j].innerHTML);//重点:各项相加,字符串转数字(Number())
                span1_con += Number(oB[j].innerHTML);//重点:各项相加,字符串转数字(Number())
            }
            oSpan[0].innerHTML = span0_con;
            oSpan[1].innerHTML = span1_con;
        }
        //减按钮
        oBut_less[i].onclick = function () {
            var t_index2 = this.index2;
            oP[t_index2].innerHTML --;//自减
            // alert (typeof oP[t_index2].innerHTML );
            if (Number(oP[t_index2].innerHTML)<0) {oP[t_index2].innerHTML=0;}
            oB[t_index2].innerHTML = oP[t_index2].innerHTML*oI[t_index2].innerHTML;//两项相乘
            //合计
            var span0_con = 0 ;//数据类型：Number
            var span1_con = 0 ;//数据类型：Number
            for (var j=0;j<oP.length;j++) {
                span0_con += Number(oP[j].innerHTML);//重点:各项相加,字符串转数字(Number())
                span1_con += Number(oB[j].innerHTML);//重点:各项相加,字符串转数字(Number())
            }
            oSpan[0].innerHTML = span0_con;
            oSpan[1].innerHTML = span1_con;
        }
    }
}) ();

// pro14 Animation 文本替换
( function() {
    var oWrap = document.querySelector('.pro14 .wrap');
    var oInp = document.querySelectorAll('.pro14 .wrap input');//2个
    var oBut = document.querySelectorAll('.pro14 .wrap button');;//2个
    var oCon = document.querySelector('.pro14 .wrap #p_con');//数据类型：object
    var aCon = oCon.innerHTML;
    //此处必须定义，每次点击按钮的时候，oCon的内容都为页面最开始的样子
    var arr;
    //搜索
    oBut[0].onclick = function () {
        if (oInp[0].value) {//oInp[0].value的数据类型：字符串
            arr = aCon.split(oInp[0].value); //数据类型：数组
            //aCon_s数据类型:数组;   oCon.innerHTML的数据类型:字符串
            oCon.innerHTML =  arr.join('<span>'+oInp[0].value+'</span>');
            //数据类型：字符串
            //oCon.innerHTML数据类型:字符串;   aCon_s数据类型:数组
            // aCon = arr.join(oInp[0].value);//数据类型：字符串
        }
    }

    // 替换
    oBut[1].onclick = function () {
        if (oInp[1].value) {
            // arr = aCon.split(oInp[0].value);//这步可以要也可以不要
            oCon.innerHTML = arr.join(oInp[1].value);//数据类型：字符串
            aCon = oCon.innerHTML;
        }
    }
}) ();

// pro15 Animation 商品价格排序
( function() {
    var oWrap = document.querySelector('.pro15 .wrap');
    var oUl = document.querySelector('.pro15 .wrap #box');
    var oLi = document.querySelectorAll('.pro15 .wrap #box li');
    var oImg = document.querySelectorAll('.pro15 .wrap #box li img');
    var oP = document.querySelectorAll('.pro15 .wrap #box li p');
    var oSpan = document.querySelectorAll('.pro15 .wrap #box li span');
    var oEm = document.querySelectorAll('.pro15 .wrap #box li span em');
    var oBut = document.querySelectorAll('.pro15 .wrap div button');

    //内容数组
    var arr_li = [];
    for (var i=0;i<oLi.length;i++) {
        arr_li[i] = [];
        arr_li[i][0] = oImg[i].src;//字符串
        arr_li[i][1] = oP[i].innerHTML;//字符串
        arr_li[i][2] = oEm[i].innerHTML*1;//数字
    }

    for (var i=0;i<oBut.length;i++) {
        oBut[i].index = i;
        oBut[i].onclick = function () {
            //三种顺序
            if (this.index==0) {
                arr_li.sort( function (x,y) { return Math.random()*2-1;} );//重点：Math.random()*2-1可负可正，随机
            }else if (this.index==1) {
                arr_li.sort( function (x,y) { return x[2]-y[2];} );//升序
            }else {
                arr_li.sort( function (x,y) { return y[2]-x[2];} );//降序
            }
            //ul内容重新分配
            for (var i=0;i<oLi.length;i++) {
                // arr_li[i] = [];
                oImg[i].src = arr_li[i][0] ;//字符串
                oP[i].innerHTML = arr_li[i][1];//字符串
                oEm[i].innerHTML = arr_li[i][2];//数字
            }

        }
    }
}) ();

// pro16 Animation 倒计时
( function() {
    var oB = document.querySelector('.pro16 div b');
    var num = 5;

    var timer = setInterval ( fn,1000);
    function fn() {
        num--;
        oB.innerHTML = num;

        if (num<=0) {
            num=0;
            clearInterval(timer);
            // window.location.href = 'https://www.baidu.com';
        }
    }
}) ();

// pro17 Animation 向上向下滚动
( function() {
    var oWrap = document.querySelector('.pro17 .wrap');
    var oP = document.querySelectorAll('.pro17 .wrap p');//2个
    var oBox = document.querySelector('.pro17 .wrap #box');
    var num = 25 ;;
    var timer;

    for (var i=0;i<2;i++) {
        oP[i].index =i;
        //鼠标按下
        oP[i].onmousedown = function () {
            if (this.index) {
                timer = setInterval (down,30);
                function down() {
                    num++;
                    if (num>=25) {num=25;clearInterval(timer);}//
                    oBox.style.top = num + 'px';
                }
            }else {
                timer = setInterval (up,30);
                function up() {
                    num--;
                    if (num<=-456) {num=-456;clearInterval(timer);}//
                    oBox.style.top = num + 'px';
                }
            }
        }
        //鼠标抬起
        oP[i].onmouseup = function () { clearInterval(timer); }
    }
}) ();

// pro18 Animation 图片时针
( function() {
    var oImg = document.querySelectorAll('.pro18 .wrap ul li img');
    var arr=['images/18-0.png','images/18-1.png','images/18-2.png','images/18-3.png','images/18-4.png','images/18-5.png','images/18-6.png','images/18-7.png','images/18-8.png','images/18-9.png'];

    fn();
    setInterval (fn,1000);
    function fn() {
        var t_cur = new Date();
        //Fri Sep 29 2017 10:32:43 GMT+0800 (中国标准时间)

        var h = t_cur.getHours();//number
        var m = t_cur.getMinutes();//number
        var s = t_cur.getSeconds();//number

        h = two_num(h);//string,调用封装函数
        m = two_num(m);//string,调用封装函数
        s = two_num(s);//string,调用封装函数

        num = h+m+s;//string
        // console.log(typeof num.charAt(0));

        for (var i=0;i<oImg.length;i++) {
            oImg[i].src = arr[num.charAt(i)];
        }
    }

    //封装
    function two_num(x) {
         return x>=10?x.toString():'0'+x;
    }
}) ();

// pro19 上下滚动图片时针
( function() {
    var oUp = document.querySelectorAll('.pro19 .wrap #box li .up');//6个
    var oDown = document.querySelectorAll('.pro19 .wrap #box li .down');//6个
    var oTime;
    //获取本地时分秒，整合成6位数的Time变量
    function getTime() {
        var HH = new Date().getHours();
        var MM = new Date().getMinutes();
        var SS = new Date().getSeconds();
        oTime = addZero(HH) + addZero(MM) + addZero(SS);//6位数字符串
    }
    //让Time里面的时分秒都为两位数（加零）
    function addZero(num) {
       return num>=10?num.toString():'0' + num;//字符串
    }
    //获取初始时间
    getTime();
    for (var i=0;i<oUp.length;i++) {
        oDown[i].index = i;//oUp和oDown上每一位value对应的索引值(第0位,第1位,第2位,第3位,第4位,第5位)
        oDown[i].val = oTime[i];//oDown上每一位的value值
        oDown[i].src = oUp[i].src = 'images/18-' + oTime[i] + '.png';
    }

    //请求动画
    move_up();
    setInterval (move_up,1000);
    function move_up() {
        getTime();
        for (var i=0;i<oDown.length;i++) {
            if (oTime[i]!=oDown[i].val) {
                oDown[i].val = oTime[i];
                run_up( oUp[i],'top',oDown[i].index );
                run_up( oDown[i],'top',oDown[i].index );
            }
        }
    }
    function run_up(obj,attr,x) {
        var aTop = parseFloat( getStyle(obj,attr) );
        if (aTop==0) {
            animation( obj,{'top':-61},500,function() { obj.style.top = 61+'px'; } );
            //初始位置值为 top:0;   目标位置值为 top:-61px;    再回掉到 top:61px;
        }
        else if (aTop==61) {
            obj.src = 'images/18-' + oTime[x] + '.png';
            //更新oDown[i]的数值
            animation( obj,{'top':0},500);
            //更新oDown[i]的数值，初始位置值为 top:61px;  目标位置值为 top:0px;
        }
    }
}) ();

// pro20 无缝滚动+左右点击+下方对应按钮+自动轮播
( function() {
    var oWrap = document.querySelector('.pro20 .wrap');
    var oUl = document.querySelector('.pro20 .wrap ul');
    var oLi = document.querySelectorAll('.pro20 .wrap ul li');//7个
    var oLeft = document.querySelector('.pro20 .wrap .left');
    var oRight = document.querySelector('.pro20 .wrap .right');
    var oP = document.querySelectorAll('.pro20 .wrap .but p');//6个
    var num = 0;
    oP[num].className = 'bgc';
    var timer;
    oUl.style.width = oLi.length*1226+'px';
    auto ();
    function auto () {
        timer = setInterval (
            function () {
                oP[num%oP.length].className = '';
                if (num==oP.length) {
                    num = 0;
                    oUl.style.left = 0;
                }
            num++;
            oP[num%oP.length].className = 'bgc';
            animation(oUl,{'left':-num*1226},500);
            },3000);
    }
    //鼠标滑入停止动画
    oWrap.onmouseenter = function () {clearInterval(timer);}
    //鼠标滑出继续动画
    oWrap.onmouseleave = auto;
    //右点击
    oRight.onclick = function () {
        oP[num%oP.length].className = '';
        if (num==oP.length) {
            num = 0;
            oUl.style.left = 0;
        }
        num++;
        oP[num%oP.length].className = 'bgc';
        animation(oUl,{'left':-num*1226},500);
    }
    //左点击
    oLeft.onclick = function () {
        oP[num%oP.length].className = '';
        if (num==0) {
            num = oP.length;
            oUl.style.left = -oP.length*1226 +'px';
        }
        num--;
        oP[num%oP.length].className = 'bgc';
        animation(oUl,{'left':-num*1226},500);
    }
}) ();

// pro21 节点操作
( function() {
    var oWrap = document.querySelector('.pro21 .wrap');
    var oLi_l = document.querySelector('.pro21 .wrap ul .left');
    var oP = document.querySelectorAll('.pro21 .wrap ul .left p');//5个
    var oDiv = document.querySelector('.pro21 .wrap ul .left div');//
    var oLi_r = document.querySelector('.pro21 .wrap ul .right');
    for (var i=0;i<oP.length;i++) {
        oP[i].onclick = function () {
            //创建span标签：存放文字内容
            var aSpan = document.createElement('span');
            aSpan.innerHTML = this.innerHTML;
            //创建i标签：存放x，并把i标签放到span标签里面去
            var aI = document.createElement('i');
            aI.innerHTML = 'x';
            aSpan.appendChild (aI);//把i标签放到span标签里面去
            oDiv.appendChild (aSpan);//把span标签放到div标签里面去
            //创建b标签：存放右边数据
            var aB = document.createElement('b');
            aB.innerHTML = this.innerHTML
            oLi_r.appendChild (aB);
            //创建点击事件
            aI.onclick = function () {
                oDiv.removeChild(aSpan);
                oLi_r.removeChild (aB);
            }
        }
    }
}) ();

// pro22 鼠标滚动缩放图片
( function() {
    var oImg = document.querySelector('.pro22 img');
    oImg.onmousewheel = function (e) {
        e = e || window.event;
        var wid = oImg.offsetWidth;
        var heg = oImg.offsetHeight;
        var wheel = e.wheelDelta/120;
        oImg.style.width = wid + 9*wheel + 'px';
        oImg.style.height = heg + 5*wheel + 'px';
        return false;
    }
}) ();

// pro23 拖动改变盒子大小
( function() {
    var oBox = document.querySelector('.pro23 .box');
    var oSpan = document.querySelectorAll('.pro23 .box span');//8个

    //给div用js的方式进行绝对定位
    oBox.style.left = oBox.offsetLeft + 'px';
    oBox.style.top = oBox.offsetTop + 'px';
    oBox.style.position = 'absolute';
    oBox.style.margin = 0;

    for (var i=0;i<oSpan.length;i++) {
        oSpan[i].index = i;
        oSpan[i].onmousedown = function (e) {
            e = e || window.event;
            var oLeft = oBox.offsetLeft;//盒子距离浏览器左边边框的距离
            var oTop = oBox.offsetTop;//盒子距离浏览器顶部边框的距离
            var oWidth = oBox.offsetWidth;//盒子的初始占位宽
            var oHeight = oBox.offsetHeight;//盒子的初始占位高
            var str_move_left = e.clientX;//鼠标x方向的初始位置
            var str_move_top = e.clientY;//鼠标y方向的初始位置
            var this_down = this;
            document.onmousemove = function (e) {
                e = e || window.event;
                var move_left = e.clientX - str_move_left;//盒子x轴移动的位移
                var move_top = e.clientY - str_move_top;//盒子y轴移动的位移
                var aLeft,aTop,aWidth,aHeight;
                console.log(oLeft, move_left);
                if (this_down.index==0){//左，必须用两个等号
                    aLeft = oLeft + move_left;//move_left为负值
                    console.log(aLeft);
                    aWidth = oWidth - move_left;//move_left为负值
                }else if(this_down.index==1) {//上，必须用两个等号
                    aTop = oTop + move_top;//move_top为负值
                    aHeight = oHeight - move_top;//move_top为负值
                }else if(this_down.index==2) {//右，必须用两个等号
                    aWidth = oWidth + move_left;//move_left为正值
                }else if(this_down.index==3) {//下，必须用两个等号
                    aHeight = oHeight + move_top;//move_top为正值
                }else if(this_down.index==4) {//左上，必须用两个等号
                    aLeft = oLeft + move_left;//move_left为负值
                    aWidth = oWidth - move_left;//move_left为负值
                    aTop = oTop + move_top;//move_top为负值
                    aHeight = oHeight - move_top;//move_top为负值
                }else if(this_down.index==5) {//右上，必须用两个等号
                    aTop = oTop + move_top;//move_top为负值
                    aHeight = oHeight - move_top;//move_top为负值
                    aWidth = oWidth + move_left;//move_left为正值
                }else if(this_down.index==6) {//右下，必须用两个等号
                    aWidth = oWidth + move_left;//move_left为正值
                    aHeight = oHeight + move_top;//move_top为正值
                }else if(this_down.index==7) {//左下，必须用两个等号
                    aHeight = oHeight + move_top;//move_top为正值
                    aLeft = oLeft + move_left;//move_left为负值
                    aWidth = oWidth - move_left;//move_left为负值
                }
                oBox.style.left = aLeft +'px';//不要忽略单位
                oBox.style.top = aTop +'px';//不要忽略单位
                oBox.style.width = aWidth +'px';//不要忽略单位
                oBox.style.height = aHeight +'px';//不要忽略单位
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    }
}) ();

// pro24 自定义滚动条
( function() {
    var oDiv = document.querySelector('.pro24 .box');
    var oUl = document.querySelector('.pro24 .box ul');
    var oLi = document.querySelectorAll('.pro24 .box ul li');
    var oSpan = document.querySelector('.pro24 .box span');
    var oScroll = document.querySelector('.pro24 .box span i');
    var ul_h = oUl.offsetHeight - oSpan.offsetHeight;//左边鼠标滚轮移动的最大高度，为正值
    var span_h = oSpan.offsetHeight-oScroll.offsetHeight;//右边滚轮移动的最大高度，为正值
    oScroll.onmousedown = function (e) {
        e = e || window.event;
        var str_mouse_top_r = oScroll.offsetTop;//初始值为0
        var Y = e.clientY;
        document.onmousemove = function (e) {
            e = e || window.event;
            move_Y = e.clientY - Y;
            var aTop_r = str_mouse_top_r + move_Y;
            var aPx = 'px';
            aTop_r = Math.max(aTop_r,0);//防止滚动条向上滑出
            aTop_r = Math.min(aTop_r,span_h);//防止滚动条向下滑出
            var prop = aTop_r/span_h;
            var aTop_l = prop*ul_h;
            oScroll.style.top = aTop_r + aPx;
            oUl.style.top = -aTop_l + aPx;
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
        return false;
    }
    add(oUl,'mousewheel',f1,false);
    function f1(e) {
        e = e || window.event;
        var val_ul = oUl.offsetTop + e.wheelDelta/40;//e.wheelDelta：向上为正，向下为负
        console.log(val_ul);
        val_ul = Math.min(val_ul,0);
        val_ul = Math.max(val_ul,-ul_h);
        oUl.style.top = val_ul +'px';
        var prop_s = -val_ul/ul_h;
        var val_i = prop_s*span_h;
        oScroll.style.top = val_i + 'px';
    }
    //监听事件
    function add(obj,type,fn,boolean) {
        boolean = boolean || false;
        obj[type]=handle;
        if (obj.addEventListener) {
            obj.addEventListener(type,obj[type],boolean);
        }else {
            obj.attachEvent('on'+type,obj[type]);
        }
        //滚轮
        if (type=='mousewheel') {
            obj['on'+type] = handle;
            if (obj.addEventListener) {
                obj.addEventListener('DOMMouseScroll',obj[type],boolean);
            }
        }
        //函数fn
        function handle(e) {
            e = e || window.event;
            //滚轮上下滚动的幅度
            var move;
            if (e.wheelDelta) {move=e.wheelDelta;}
            else {move=e.detail;}
            fn.call(obj,e);//让attachEvent()函数的this指向obj

            //新事件阻止默认事件
            if (e.preventDefault) {e.preventDefault();}
            else {e.returnValue = false;}//ie8及以下兼容
        }
    }
    //解绑事件
    function remmove(obj,type,fn,boolean) {
        boolean = boolean || false;
        if (obj.removeEventListener) {
            obj.removeEventListener(type,obj[type],boolean);
        }else {
            obj.detachEvent('on'+type,obj[type]);
        }
        //滚轮
         if (type=='mousewheel') {
            obj['on'+type] = null;
            if (obj.removeEventListener) {
                obj.removeEventListener('DOMMouseScroll',obj[type],boolean);
            }
        }
    }
}) ();

// pro25 拖拽加限定边界弹性运动
( function() {
    var oWrap = document.querySelector('.pro25');
    var oBox = document.querySelector('.pro25 .box');
    var maxL = oWrap.clientWidth - oBox.offsetWidth;
    var maxT = oWrap.clientHeight - oBox.offsetHeight;

    var moveX,moveY;
    var timer;

    oBox.onmousedown = function (e) {
        clearInterval(timer);//这里为什么要清除定时器？
        e = e || window.event;
        var startL = oBox.offsetLeft;//类比upL
        var startT = oBox.offsetTop;//类比upT
        var X = e.clientX;
        var Y = e.clientY;
        document.onmousemove = function (e) {
            e = e || window.event;
            moveX = e.clientX - X;//onmousemove和onmouseup的时候通用
            moveY = e.clientY - Y;//onmousemove和onmouseup的时候通用
            X = e.clientX;//X更新。重点！！！
            Y = e.clientY;//Y更新。重点！！！
            startL += moveX;//oBox.offsetLeft更新。重点！！！！！！
            startL = Math.min(startL,maxL);//move时，右边界限制出界
            startL = Math.max(startL,0);//move时，左边界限制出界
            startT += moveY;//oBox.offsetTop更新。重点！！！！！！
            startT = Math.min(startT,maxT);//下边界限制出界
            startT = Math.max(startT,0);//上边界限制出界
            oBox.style.left = startL + 'px';
            oBox.style.top = startT + 'px';
        }//document.onmousemove结束
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            var upL = oBox.offsetLeft;//类比startL
            var upT = oBox.offsetTop;//类比startT
            timer = setInterval(
                function() {
                    moveY +=1;//重力(在运动的过程中，会一直有向下的重力)
                    upL += moveX;//oBox.offsetLeft更新。重点！！！！！！
                    upT += moveY;//oBox.offsetTop更新。重点！！！！！！
                    //水平方向运动的控制
                    if (upL>=maxL||upL<=0) {
                        upL = Math.min(upL,maxL);//up时，右边界限制出界
                        upL = Math.max(upL,0);//up时，左边界限制出界
                        moveX *= -0.9;//运动改变方向(改成反方向)，摩擦力
                        moveY *= 0.9;//摩擦力
                    }
                    //竖直方向运动的控制
                    if (upT>=maxT||upT<=0) {
                        upT = Math.min(upT,maxT);//up时，下边界限制出界
                        upT = Math.max(upT,0);//up时，上边界限制出界
                        moveY *= -0.9;//运动改变方向(改成反方向)，摩擦力
                        moveX *= 0.9;//摩擦力
                    }
                    //小球最后接近停止的时候，让接近为0的速度直接变成0。并清除定时器，让
                    if(Math.abs(moveX)<1){moveX=0;}
                    if(Math.abs(moveY)<1){moveY=0;}
                    if(moveX==0&&moveY==0&&upT==maxT){clearInterval(timer);}
                    oBox.style.left = upL + 'px';
                    oBox.style.top = upT + 'px';
            },15);//setInterval结束
        }//document.onmouseup结束
        return false;
    }//oBox.onmousedown结束
}) ();

// pro26 表单验证
( function() {
    var oWrap = document.querySelector('.pro25 .wrap');
    var oInp = document.querySelectorAll('.pro25 .wrap #box div input');
    var oSpa = document.querySelectorAll('.pro25 .wrap #box div span');

    var pattern = {
        'nam':/^[a-zA-Z\u4e00-\u9fa5](\w|[\u4e00-\u9fa5]){4,19}$/,
        //汉字或者字母开头，剩余可以是字符串、数字、下划线。至少5位，最多20位
        'psw':/^[a-zA-Z0-9]\w{4,9}$/,
        //字母开头，剩余可以是字符串、数字、下划线。至少5位，最多10位
        'tel':/^1[3489][0-9]{9}$/,
        'eml':/^[0-9a-zA-Z]\w{4,14}@[0-9a-zA-Z]{2,5}\.[a-zA-Z]{1,5}$/
    }
    var key = ['nam','psw','psw','tel','eml'];

    for (var i=0;i<oInp.length;i++) {
        oInp[i].index = i;
        oInp[i].onblur = function () {
            if (this.value) {
                var onoff = pattern[key[this.index]].test(this.value);
                if (onoff) {
                    oSpa[this.index].style.display = 'none';
                }else{
                    oSpa[this.index].style.display = 'block';
                }
                //用户名和密码不能重复
                if (this==oInp[1]&&this.value==oInp[0].value) {
                    oSpa[this.index].style.display = 'block';
                    oSpa[this.index].innerHTML = '用户和密码不能重复';
                }else{
                    oSpa[this.index].innerHTML = '不合法';
                }
                //再次输入密码必须与第一次密码是一致的
                if (this==oInp[2]&&this.value!=oInp[1].value) {
                    oSpa[this.index].style.display = 'block';
                    oSpa[this.index].innerHTML = '与第一次输入的密码不一致';
                }else{
                    oSpa[this.index].style.display = '不合法';
                }
            }else{
                oSpa[this.index].style.display = 'none';
            }
        }//oInp[i].onblur函数结束

        //请先输入密码
        oInp[2].onfocus = function () {
            if(!oInp[1].value) {
                oSpa[this.index].style.display = 'block';
                oSpa[this.index].innerHTML = '请先输入密码';
                setTimeout( function(){oInp[1].focus();},1000 );
            }else{
                 oSpa[this.index].style.display = 'none';
            }
        }//oInp[2].onfocus函数结束

    }//for循环结束
}) ();

// pro27 百度搜索
    var oInp = document.querySelector('.pro27 .wrap .oinp input');
    var oUlli = document.querySelector('.pro27 .wrap .ulli');
    var oLi = document.querySelectorAll('.pro27 .wrap .ulli li');
    oInp.onmouseover = function () { this.focus() };
    oInp.onkeyup = function () {
        var val = this.value;
        var d = new Date().getTime();
        if(script) {document.body.removeChild(script);}
        var script = document.createElement('script');//创建script标签
        script.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+val+'&sugmode=2&jsonp=1&p=3&sid=1431_19036_13550_21112_17001_24022_24658&req=2&bs=javascript&csor=10&cb=fn_27&_='+d;
        document.body.appendChild(script);//把script标签加到body里面去，在body的结尾处
    }
    function fn_27(data) {
        oUlli.style.display = 'block';
        //console.log(data);这一步的data为{}
        data = data.s;//百度数据
        //console.log(data);这一步的data为[]
        var length;
        length = Math.min(data.length,oLi.length);
        for(var i=0;i<length;i++) {
            oLi[i].innerText = data[i];
        }
    }
    oInp.onblur = function () { oUlli.style.display = 'none';}

// pro28 天气查询
    var oWrap = document.querySelector('.pro28 .wrap');
    var oInp = document.querySelectorAll('.pro28 .wrap .search input');//2个
    var oTli = document.querySelectorAll('.pro28 .wrap .box div');//6个

    function fn_28(data) {
        var today = data.result.today;
        for(var m=0;m<oTli.length;m++) {//今天
            oTli[m].firstElementChild.innerText = today[ oTli[m].className ];
        }
    }
    oInp[1].onclick = function () {
        var val = oInp[0].value;
        if(!val){return '';}//不输入内容的时候，点击查询按钮，没有任何的效果
        var script = document.createElement('script');
        script.src = 'http://v.juhe.cn/weather/index?cityname='+val+'&dtype=jsonp&callback=fn_28&format=&key=c4be18ef2b37480469bad902a02c12aa';
        document.body.appendChild(script);
    }
