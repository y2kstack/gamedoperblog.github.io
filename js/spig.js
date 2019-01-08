/* spig.js */
//Right-click menu
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
        showMessage("Secret passage:<br /><a href=\"http://www.gamedoper.com/\" title=\"Leave a Message\">Home</a>    <a href=\"http://www.gamedoper.com/#blog\" title=\"Leave a Message\">Home</a>",10000);
}
});
$("#spig").bind("contextmenu", function(e) {
    return false;
});
});

//When the mouse is on the message
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//鼠标在上方时
jQuery(document).ready(function ($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function () {
       $(".mumu").fadeTo("300", 0.3);
       msgs = ["I'm stealthy，you can not see me", "I will stealth Oh! Hey hey!", "handle away！", "Take Your hand out of my Picutre！"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});

//开始
jQuery(document).ready(function ($) {
    if (isindex) { //如果是主页
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' Are you a night owl? Do not sleep，tomorrow？', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' Good morning，！', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + ' At noon，,！', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' Afternoon time really tough！Fortunately, you are there！', 6000);
        } else {
            showMessage(visitor + ' Come and play me now！', 6000);
        }
    }
    else {
        showMessage('welcome' + visitor + 'to my personal blog《' + title + '》', 6000);
    }
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 160
    },
	{
	    queue: false,
	    duration: 1000
	});
});

//鼠标在某些元素上方时
jQuery(document).ready(function ($) {
    $('h2 a').click(function () {//标题被点击时
        showMessage('we are loading《<span style="color:#0099cc;">' + $(this).text() + '</span>》Please wait');
    });
    $('h2 a').mouseover(function () {
        showMessage('To see《<span style="color:#0099cc;">' + $(this).text() + '</span>》What about this article?？');
    });
    $('#prev-page').mouseover(function(){
        showMessage('Would you like to turn to the previous page??');
    });
    $('#next-page').mouseover(function(){
        showMessage('Would you like to turn to the next page??');
    });
    $('#index-links li a').mouseover(function () {
        showMessage('go with <span style="color:#0099cc;">' + $(this).text() + '</span> Scroll around');
    });
    $('.comments').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> Go to the comment bar！');
    });
    $('#submit').mouseover(function () {
        showMessage('Are you sure to submit?？');
    });
    $('#s').mouseover(function () {
        showMessage('Enter the keywords you want to search forEnter(Enter)You can search for friends!');
    });
    $('#go-prev').mouseover(function () {
        showMessage('It can be back！');
    });
    $('#go-next').mouseover(function () {
        showMessage('It can go ahead！');
    });
    $('#refresh').mouseover(function () {
        showMessage('It can reload this page！');
    });
    $('#go-home').mouseover(function () {
        showMessage('It can go back to the home page！');
    });
    $('#addfav').mouseover(function () {
        showMessage('It can add this page to the bookmark！');
    });
    $('#nav-two a').mouseover(function () {
        showMessage('Hush, from here you can enter the control panel Oh！');
    });
    $('.post-category a').mouseover(function () {
        showMessage('Click to view all articles under this category');
    });
    $('.post-heat a').mouseover(function () {
        showMessage('Point it can jump directly to the comment list.');
    });
    $('#tho-shareto span a').mouseover(function () {
        showMessage('Do you know? It can share this article'+$(this).attr('title'));
    });
    $('#switch-to-wap').mouseover(function(){
        showMessage('Click to switch to the mobile version of the blog layout');
    });
});


//无聊讲点什么
jQuery(document).ready(function ($) {

    window.setInterval(function () {
        msgs = ["Broadcast tomorrow weather<iframe name=\"xidie\" src=\"http://heartmoving.com/skin/2020-0601.html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "Fight with me！", "<a href=\"http://messense.me/feed/\" target=\"_blank\" rel=\"external\" tip=\"Feed\"><img border=\"0\" title=\"Subscribe to chaos feeling\" alt=\"Feed\" src=\"\" width=\"80\" height=\"80\"></a>", "So boring, oh, you dont play with me！", "…@……!………", "^%#&*!@*(&#)(!)(", "I am Goku！Hee hee hee!~^_^!~~","Who is weak?~Who is weak?，Your weak!~~Your weak ashole！~~","There used to be a mountain，There is an old monk in the temple to tell the story of the little Goku，speak：“There used to be a seat……”"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    }, 35000);
});

//无聊动动
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = ["Broadcast tomorrow weather<iframe name=\"xidie\" src=\"http://heartmoving.com/skin/2020-0601.html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "Quickly subscribe to my blog！<a href=\"http://blog.ijayaprakash.in/\" target=\"_blank\" rel=\"external\" tip=\"Feed\"><img border=\"0\" title=\"Subscribe to chaos feeling\" alt=\"Feed\" src=\"\" width=\"80\" height=\"80\"></a>", "Heaven and earth big diversion！", "I drifted over！~", "I drifted over", "I am proud to float！~float！~"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
        },
			{
			    duration: 2000,
			    complete: showMessage(msgs[i])
			});
    }, 45000);
});

//评论资料
jQuery(document).ready(function ($) {
    $("#author").click(function () {
        showMessage("Leave your name ！");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#email").click(function () {
        showMessage("Leave your mailbox，Or is no avatar of the people！");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#url").click(function () {

        showMessage("Quickly tell me where your home is, so that I can visit ！");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#comment").click(function () {
        showMessage("Seriously fill in Oh! Otherwise it will be considered spam comments! My obediently~");
        $(".spig").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

var spig_top = 50;
//滚动条移动
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f +300
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

//鼠标点击时
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["You have finished it？", "You have touched me" + stat_click + "Again", "Indecent！Help！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["Somersault ~ I fly！", "I ran and ran！~~", "！", "？", "不！", "！"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetHeight/2*(1+s[i1])
            },
			{
			    duration: 500,
			    complete: showMessage(msgs[i])
			});
        } else {
            ismove = false;
        }
    });
});
//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
     });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //控件新位置
            ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});
