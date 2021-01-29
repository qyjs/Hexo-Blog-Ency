define("appmsg/articleReport.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_wap/utils/mmversion.js"],function(i){
"use strict";
function n(i){
i.dom&&(i.dom.style.display="",t.tap(i.dom,function(){
var n=["https://mp.weixin.qq.com/mp/infringement?url=",encodeURIComponent(i.link.htmlDecode()),"&title=",encodeURIComponent(i.title),"&__biz=",window.biz].join("");
return location.href=n+"#wechat_redirect",!1;
}));
}
i("biz_common/utils/string/html.js");
{
var t=i("biz_common/dom/event.js"),e=i("biz_wap/utils/mmversion.js");
({
not_in_mm:!e.isWp&&-1==navigator.userAgent.indexOf("MicroMessenger")
});
}
return{
init:n
};
});define("appmsg/topic_tpl.html.js",[],function(){
return'<span class="db topic_wrp">\n    <span class="topic_thumb" style="background-image:url({img_url});"></span>\n    <span class="topic_content">\n        <strong class="topic_title">{title}</strong>\n        <span class="topic_desc">{author}</span>\n        <span class="topic_info">\n            <span class="topic_info_extra"><span class="icon_topic"></span>话题</span>\n            <span class="topic_info_primary">相关文章{msg_num}篇</span>\n        </span>\n    </span>\n</span>\n';
});define("appmsg/appmsg_live_tpl.html.js",[],function(){
return'<# if (liveDeleted) { #>\n  <!--直播 已被删除-->\n  <div class="appmsg__live appmsg__live__unusual">直播间已被删除</div>\n<# } else { #>\n  <div class="appmsg__live">\n    <div class="appmsg__live__inner">\n      <div class="appmsg__live__main">\n        <div class="appmsg__live__cover__image" style="background: #FFF url(<#=cover#>) no-repeat center top / cover"></div>\n        <div class="appmsg__live__status__area">\n          <!--未开播-->\n          <div class="appmsg__live__status">\n            <div class="appmsg__live__status__tag"><#=tagStatusWord#></div><span class="appmsg__live__status__info"><#=statusInfoWord#></span>\n          </div>\n        </div>\n        <div class="appmsg__live__like-area js_live_like-area">\n          <# if (isInLive) { #>\n            <div class="appmsg__live__like-animation js_live_like-animation"></div>\n          <# } #>\n          <div class="appmsg__live__like-icon">\n            <div class="person-operation__item__inner mode-filter-black">\n              <div class="appmsg__live__like-icon__image"></div>\n            </div>\n          </div>\n          <div class="appmsg__live__like-info"><#=likeCount#></div>\n        </div>\n      </div>\n      <div class="appmsg__live__extend">\n        <div class="appmsg__live__extend__main">\n          <p class="appmsg__live__title"><#=title#></p>\n          <p class="appmsg__live__desc"><#=desc#></p>\n        </div>\n        <# if (showEntryBtn) { #>\n          <a href="javascript:;" class="appmsg__live__extend__button"><#=btnStatusWord#></a>\n        <# } #>\n      </div>\n    </div>\n  </div>\n<# } #>\n';
});define("appmsg/channel/report_live.js",["common/comm_report.js"],function(n){
"use strict";
var e=n("common/comm_report.js"),o=function(n,o,i,t){
var r=0;
try{
r=1*window.atob(window.biz);
}catch(w){}
e.report(22035,{
BizUin:r,
AppMsgID:window.parseInt(window.mid,10)||0,
ItemIndex:window.parseInt(window.idx,10)||0,
Scene:window.parseInt(window.scene,10)||0,
Enterid:window.parseInt(window.enterid,10)||0,
Action:n,
Status:t||"",
ActionTS:Math.ceil(Date.now()/1e3),
Noticeid:o||"",
Username:i||""
});
};
return{
report:o
};
});define("appmsg/channel/time_format.js",[],function(){
"use strict";
var e=function(e){
var t=e+"";
return t.length>=2?t:"0"+t;
},t=function(t){
var a=new Date(1e3*t);
return a.getFullYear()<=(new Date).getFullYear()?e(a.getMonth()+1)+"月"+e(a.getDate())+"日 "+e(a.getHours())+":"+e(a.getMinutes()):a.getFullYear()+"年"+e(a.getMonth()+1)+"月"+e(a.getDate())+"日 "+e(a.getHours())+":"+e(a.getMinutes());
},a=function(e,t){
var a=void 0;
switch(e=parseInt(e,10),t=parseInt(t,10),e){
case 0:
a=0===t?"预约":"已预约";
break;

case 1:
a="已失效";
break;

case 2:
a="观看";
break;

case 3:
a="已结束";
break;

default:
a="预约";
}
return a;
},r=function(e,a){
var r=void 0;
switch(a=parseInt(a,10)){
case 0:
r="将在"+t(e)+" 直播";
break;

case 1:
case 3:
r=t(e)+" 直播";
break;

case 2:
r="正在直播";
break;

default:
r="正在直播";
}
return r;
};
return{
getFullTime:t,
getStatusWording:a,
getStatusDesc:r
};
});define("appmsg/channel/video_snap_tpl.html.js",[],function(){
return'<# if(snapType === \'video\'){ #>\n<div class="wxw_wechannel_card appmsg_card_context js_wechannel_video_card js_wechannel_video_context">\n  <div class="wxw_wechannel_card_bd">\n    <div class="wxw_wechannel_video_context" style="background-image:url(<#=url#>)">\n      <i class="weui-play-btn_primary"></i>\n    </div>\n    <div class="wxw_wechannel_profile weui-flex">\n      <# if(headImgUrl){ #>\n      <img class="wxw_wechannel_avatar" src="<#=headImgUrl#>" data-disable-preview="1">\n      <# }else{ #>\n      <img class="wxw_wechannel_avatar" src="http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0" data-disable-preview="1">\n      <# } #>\n      <strong class="wxw_wechannel_nickname"><#=nickname#></strong>\n    </div>\n    <# if(desc){ #>\n    <div class="wxw_wechannel_desc">\n      <#=desc#>\n    </div>\n    <# } #>\n    <!-- 不可引用时show出来即可 -->\n    <# if(flag === 1){ #>\n    <div class="wxw_wechannel_msg">\n      该视频号动态已删除    </div>\n    <# } else if (flag === 2) { #>\n      <div class="wxw_wechannel_msg">\n        无法浏览该视频号动态      </div>\n    <# } #>\n  </div>\n  <div class="wxw_wechannel_card_ft weui-flex">\n    <i class="wxw_wechannel_logo"></i>视频号  </div>\n</div>\n<# } else if (snapType === \'image\'){  #>\n<div class="wxw_wechannel_card appmsg_card_context js_wechannel_img_card js_wechannel_img_context">\n  <div class="wxw_wechannel_card_bd">\n    <div class="wxw_wechannel_img_context">\n        <ul class="wxw_wechannel_img_list js_wechannel_img_list" id="js_wechannel_img_list" data-poster-src="<#=url#>" data-disable-preview="1">\n            <li class="wxw_wechannel_img js_wechannel_img" data-w="1000" data-ratio="1" style="background-image:url(<#=url#>)" data-disable-preview="1"></li>\n        </ul>\n        <ul class="wxw_wechannel_img_navs js_wechannel_img_navs">\n          <# for(var i = 0; i < imgCount; i++){ #>\n            <li class="wxw_wechannel_img_nav <# if(i === 0){ #>  wxw_wechannel_img_nav_current <# } #> "></li>\n          <# } #>\n        </ul>\n    </div>\n    <div class="wxw_wechannel_profile weui-flex">\n      <# if(headImgUrl){ #>\n        <img class="wxw_wechannel_avatar" src="<#=headImgUrl#>" data-disable-preview="1">\n        <# }else{ #>\n        <img class="wxw_wechannel_avatar" src="http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0" data-disable-preview="1">\n        <# } #>\n      <strong class="wxw_wechannel_nickname"><#=nickname#></strong>\n    </div>\n    <# if(desc){ #>\n    <div class="wxw_wechannel_desc">\n      <#=desc#>\n    </div>\n    <# } #>\n    <# if(flag === 1){ #>\n      <div class="wxw_wechannel_msg">\n        该视频号动态已删除      </div>\n    <# } else if (flag === 2) { #>\n      <div class="wxw_wechannel_msg">\n        无法浏览该视频号动态      </div>\n    <# } #>\n  </div>\n  <div class="wxw_wechannel_card_ft weui-flex">\n    <i class="wxw_wechannel_logo"></i>视频号  </div>\n</div>\n<# } else if (snapType === \'live\') { #>\n<div class="wxw_wechannel_card appmsg_card_context wxw_wechannel_card_live js_wechannel_live_card" data-noticeid="<#=noticeid#>" data-username="<#=username#>">\n  <div class="wxw_wechannel_card_bd">\n    <div class="wxw_wechannel_live_context weui-flex">\n      <div class="wxw_wechannel_live_hd">\n        <img class="wxw_wechannel_live_avatar" src="<#=headImgUrl#>" alt="">\n      </div>\n      <div class="wxw_wechannel_live_bd weui-flex__item">\n        <strong class="wxw_wechannel_live_nickname"><#=nickname#></strong>\n        <div class="wxw_wechannel_live_desc js_wechannel_live_desc"><#=desc#></div>\n      </div>\n      <div class="wxw_wechannel_live_ft js_wechannel_operation_area">\n        <button class="weui-btn weui-btn_mini wxw_wechannel_live_btn js_channel_btn_operation <# if((status !== 0 && status !== 2)|| reservation === 1){ #>weui-btn_disabled<# } #>" data-reservation="<#=reservation#>" data-noticeid="<#=noticeid#>" data-username="<#=username#>" data-status="<#=status#>" type="button">\n          <i class="icon_wxw_wechannel_live js_wechannnel_live" <#if (status !== 2){ #> style="display:none" <# } #>></i>\n          <span class="js_channel_btn_operation_wording"><#=liveWording#></span>\n        </button>\n      </div>\n    </div>\n    <# if (flag === 1) { #>\n      <div class="wxw_wechannel_msg">\n        无法浏览该视频号动态      </div>\n    <# } #>\n  </div>\n  <div class="wxw_wechannel_card_ft weui-flex">\n    <i class="wxw_wechannel_logo"></i>视频号  </div>\n</div>\n<# } #>\n';
});define("appmsg/appmsg_card.js",["biz_common/dom/event.js"],function(t){
"use strict";
function a(t,a){
var n=a?t.querySelector(a):t;
c.on(t,"touchstart",function(c){
var o=c.target;
a&&n.contains(o)||t.classList.add("appmsg_card_custom_active");
}),c.on(t,"touchend",function(c){
var o=c.target;
a&&n.contains(o)||t.classList.remove("appmsg_card_custom_active");
});
}
var c=t("biz_common/dom/event.js");
return{
addAppmsgCardTouchEvent:a
};
});define("biz_common/dom/offset.js",[],function(){
"use strict";
function f(f){
if(!f)return{};
for(var t=0,e=0,o=parseInt(document.body.style.marginTop,10)||0;f.offsetParent;)t+=f.offsetTop,
e+=f.offsetLeft,f=f.offsetParent;
return{
offsetTop:t>o?t-o:t,
offsetLeft:e
};
}
return{
getOffset:f
};
});define("appmsg/emotion/dom.js",["biz_common/dom/event.js"],function(t){
"use strict";
function e(t){
if("string"==typeof t){
document.querySelectorAll||!function(){
var t=document.createStyleSheet(),e=function(e,n){
var i,o=document.all,r=o.length,u=[];
for(t.addRule(e,"foo:bar"),i=0;r>i&&!("bar"===o[i].currentStyle.foo&&(u.push(o[i]),
u.length>n));i+=1);
return t.removeRule(0),u;
};
document.querySelectorAll=function(t){
return e(t,1/0);
};
}();
var e=document.querySelectorAll(t);
}else e=[t];
return{
el:e,
on:function(t,e){
return this.each(function(n){
i.on(n,t,e);
}),this;
},
hide:function(){
return this.each(function(t){
t.style.display="none";
}),this;
},
show:function(){
return this.each(function(t){
t.style.display="block";
}),this;
},
each:function(t){
return n(this.el,t),this;
},
width:function(){
return this.el[0].clientWidth;
},
css:function(t){
return this.each(function(e){
for(var n in t)e.style[n]=t[n];
}),this;
},
attr:function(t,e){
var n=this.el[0];
return e?(n.setAttribute(t,e),this):n.getAttribute(t);
},
append:function(t){
return t.el&&(t=t.el[0]),this.el[0].appendChild(t),this;
},
html:function(t){
this.each(function(e){
e.innerHTML=t;
});
}
};
}
function n(t,e){
for(var n=0,i=t.length;i>n;n++)e(t[n],n);
}
var i=t("biz_common/dom/event.js");
return e.el=function(t){
return document.createElement(t);
},e.later=function(t){
setTimeout(t,3);
},e.log=function(){},e.each=n,e;
});function _classCallCheck(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");
}
var _createClass=function(){
function t(t,e){
for(var i=0;i<e.length;i++){
var n=e[i];
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);
}
}
return function(e,i,n){
return i&&t(e.prototype,i),n&&t(e,n),e;
};
}();
define("appmsg/emotion/emotion.js",["appmsg/emotion/dom.js","appmsg/emotion/slide.js","appmsg/emotion/common.js","appmsg/emotion/nav.js","appmsg/emotion/textarea.js","biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js","biz_common/dom/class.js"],function(t){
"use strict";
function e(t){
var e=a(a.el("li")),i=a(a.el("i"));
e.attr("class","emotion_item del js_emotion_item"),e.attr("data-index",-1),i.attr("class","icon_emotion del");
var n=j+"px";
return e.css({
width:n,
height:n,
right:t+"px"
}),e.append(i),e;
}
function i(t){
var e=a(a.el("li")),i=a(a.el("i")),n=0;
i.attr("class","icon_emotion icon"+t),i.css({
backgroundPosition:"0px "+((1-t)*r.EMOTION_SIZE-n)+"px"
}),e.attr("class","emotion_item js_emotion_item"),e.attr("data-index",t);
var o=j+"px";
return e.css({
width:o,
height:o
}),e.append(i),e;
}
function n(t){
var e=h.filter(function(e){
for(var i=0;i<g.length;i++){
var n=g[i];
if(e[n]){
var o=new RegExp(e[n].replace("[","\\[").replace("]","\\]"),"g"),a=t.match(o);
if(a)return!0;
}
}
return!1;
});
return e&&e.length>0?e[0]:null;
}
function o(t){
for(var e=[],i=0;i<h.length;i++){
for(var o=h[i],s=0;s<g.length;s++){
var r=g[s];
if(o[r]){
var l=new RegExp(o[r].replace("[","\\[").replace("]","\\]"),"g"),c=t.match(l);
if(c){
e=e.concat(c);
continue;
}
}
}
if(o.emoji){
var l=new RegExp(o.emoji,"g"),c=t.match(l);
c&&(e=e.concat(c));
}
}
return a.each(e,function(e){
var i=void 0;
if(void 0!==v[e]){
var o=v[e],a=f[o];
i='<i class="icon_emotion_single '+a+'"></i>',t=t.replace(e,i);
}else{
var s=n(e);
s&&s.style&&(i='<i class="icon_emotion_single '+s.style+'"></i>',t=t.replace(e,i));
}
}),t;
}
for(var a=t("appmsg/emotion/dom.js"),s=t("appmsg/emotion/slide.js"),r=t("appmsg/emotion/common.js"),l=t("appmsg/emotion/nav.js"),c=t("appmsg/emotion/textarea.js"),h=t("biz_common/utils/emoji_data.js"),p=t("biz_common/utils/emoji_panel_data.js"),m=t("biz_common/dom/class.js"),u=void 0,d={},v={},f=[],g=["cn","us","hk"],_=15,w=r.EMOTIONS_COUNT,j=r.EMOTION_LI_SIZE,E=0;E<h.length;E++){
var C=h[E];
d[C.id]=C;
}
for(var E=0;E<p.length;E++){
var C=d[p[E]];
v[C.cn]=E,C.us&&(v[C.us]=E),C.hk&&(v[C.hk]=E),C.emoji&&(v[C.emoji]=E),f.push(C.style);
}
var b=function(){
function t(e){
_classCallCheck(this,t),u=0,this.opt=e,this.pannel=e.emotionPanel,this.isPannelShow=!1,
this.navs=[],this.listenTogglePannel(),this.buildEmotions(e),this.slide=new s({
emotionSlideWrapper:e.emotionSlideWrapper,
commonWidth:this.width,
pageCount:this.pageCount,
wrapperWidth:this.wrapperWidth,
navs:this.navs
}),l.activeNav(0,this.navs),this.listenClickOnEmotion(),this.textarea=new c({
inputArea:this.opt.inputArea,
submitBtn:this.opt.submitBtn
});
}
return _createClass(t,[{
key:"listenTogglePannel",
value:function(){
var t=this,e=this.opt.inputArea,i=e.el[0],n=this.opt.emotionPanelArrowWrp,o=this.opt.emotionSwitcher,s="emotion_switch_current";
this.pannel.hide();
var r=function(){
n.show(),t.pannel.show(),i.blur(),a.later(function(){
i.blur();
});
},l=function(){
n.hide(),t.pannel.hide(),i.focus(),a.later(function(){
i.focus();
});
};
o.on("tap",function(e){
e.preventDefault(),e.stopPropagation(),t.isPannelShow=!t.isPannelShow,t.isPannelShow?(r(),
o.each(function(t){
m.addClass(t,s);
})):(l(),o.each(function(t){
m.removeClass(t,s);
}));
}),e.on("tap",function(){
t.pannel.hide(),t.isPannelShow=!1;
});
}
},{
key:"setOuterDivWidth",
value:function(){
this.wrapperWidth=this.pageCount*this.width,this.opt.emotionSlideWrapper.css({
width:this.wrapperWidth+"px"
});
}
},{
key:"addEmotionsToList",
value:function(t,n,o){
for(var s=0,r=this.emotionsCountOnePage;r>s;s++){
var l=document.createElement("li");
if(u++,u>w)break;
l=i(u),a(t).append(l);
}
var c=e(o);
a(t).append(c);
}
},{
key:"generateEmotionListAndAppend",
value:function(){
for(var t=this.opt.emotionSlideWrapper.el[0],e=(this.width-this.emotionsOneLine*j)/2,i=0,n=this.pageCount;n>i;i++){
var o=document.createElement("ul");
o.setAttribute("class","emotion_list"),t.appendChild(o),a(o).css({
width:this.width+"px",
"float":"left",
paddingLeft:e+"px",
paddingRight:"0"
}),this.addEmotionsToList(o,i,e);
}
}
},{
key:"getPageCount",
value:function(){
var t=this.width-2*_;
this.emotionsOneLine=parseInt(t/j,10),this.emotionsCountOnePage=3*this.emotionsOneLine-1;
var e=parseInt(w/this.emotionsCountOnePage,10);
return w%this.emotionsCountOnePage!==0&&e++,e;
}
},{
key:"genrateNavs",
value:function(){
for(var t=0,e=this.pageCount;e>t;t++){
var i=a(a.el("li"));
i.attr("class","emotion_nav js_emotion_nav"),this.navs.push(i),this.opt.emotionNavBar.append(i);
}
}
},{
key:"buildEmotions",
value:function(){
this.width=window.innerWidth||document.body.clientWidth,this.pageCount=this.getPageCount(),
this.setOuterDivWidth(),this.generateEmotionListAndAppend(),this.genrateNavs();
}
},{
key:"hidePannel",
value:function(){
this.pannel.hide();
}
},{
key:"addEmotion",
value:function(t){
if(!this.slide.isMoved){
var e=a(t.currentTarget),i=+e.attr("data-index");
this.textarea.inputEmotion(i),this.opt.inputEmotion&&this.opt.inputEmotion();
}
}
},{
key:"listenClickOnEmotion",
value:function(){
a("li.js_emotion_item").on("click",this.addEmotion.bind(this)),a("li.js_emotion_item").on("touchend",this.addEmotion.bind(this));
}
}]),t;
}();
return{
Emotion:b,
encode:function(t){
t=o(t);
var e=/\/([\u4e00-\u9fa5\w]{1,4})/g,i=t.match(e);
return i?(a.each(i,function(e){
var i=e.replace("/",""),n=[i.slice(0,4),i.slice(0,3),i.slice(0,2),i.slice(0,1)];
a.each(n,function(e){
if(void 0!==v["["+e+"]"]){
var i=v["["+e+"]"],n=f[i],o='<i class="icon_emotion_single '+n+'"></i>';
t=t.replace("/"+e,o);
}
});
}),t):t;
}
};
});function _typeof(t){
return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t;
}
function _classCallCheck(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");
}
var _extends=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var o=arguments[e];
for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);
}
return t;
},_createClass=function(){
function t(t,e){
for(var o=0;o<e.length;o++){
var n=e[o];
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);
}
}
return function(e,o,n){
return o&&t(e.prototype,o),n&&t(e,n),e;
};
}();
define("pages/mod/bottom_modal.js",["https://res.wx.qq.com/open/libs/weui/2.4.0/weui.min.css","widget/wx-widget/wx_bottom_modal.css","pages/mod/bottom_modal.html.js","biz_common/tmpl.js","biz_common/dom/class.js","biz_common/dom/event.js","biz_wap/utils/device.js","common/navShadow.js"],function(t){
"use strict";
function e(t,e,o,n){
o=n?o+"px":o,t.style[e]=o;
}
function o(t){
return Math.ceil(t.scrollTop+t.offsetHeight)>=t.scrollHeight;
}
t("https://res.wx.qq.com/open/libs/weui/2.4.0/weui.min.css"),t("widget/wx-widget/wx_bottom_modal.css");
var n=t("pages/mod/bottom_modal.html.js"),s=t("biz_common/tmpl.js"),i=t("biz_common/dom/class.js"),l=t("biz_common/dom/event.js"),a=t("biz_wap/utils/device.js"),r=t("common/navShadow.js"),c=100,h="weui-btn_disabled",u={
top:a.os.pc?"20%":screen.height/4-(screen.height-window.innerHeight)+"px",
btnText:"提交",
hasHeader:!0,
clickMask2Hide:!0
},p=function(){
function t(e){
var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
_classCallCheck(this,t),o=_extends({},u,o);
var i=document.createElement("div");
i.innerHTML=s.tmpl(n,{
hasBtn:o.hasBtn,
btnText:o.btnText,
extClass:o.extClass||"",
hasMask:!o.removeMask,
isTopic:!!o.isTopic,
hasHeader:o.hasHeader,
btnSlot:o.btnSlot
});
var l=i.firstChild;
this.opt=o,this.rootEle=l,this.contentEle=e,this.contentAreaWrp=l.getElementsByClassName("js_bottom_modal_bd")[0],
this.contentAreaWrp.appendChild(e),this.contentArea=l.getElementsByClassName("js_bottom_modal_content")[0],
this.loading=this.rootEle.getElementsByClassName("js_modal_loading")[0],this.pullLoading=this.rootEle.getElementsByClassName("js_pull_loading")[0],
this.endLine=this.rootEle.getElementsByClassName("js_modal_end_line")[0],o.removeMask||(this.maskEle=l.getElementsByClassName("js_bottom_modal_mask")[0]),
o.hasHeader&&(this.headAreaWrp=l.getElementsByClassName("js_bottom_modal_hd")[0],
this.submitBtn=this.headAreaWrp.getElementsByClassName("js_submit_bottom_modal")[0],
this.closeBtn=this.headAreaWrp.getElementsByClassName("js_close_bottom_modal")[0],
this.setTitle(o.title)),document.body.appendChild(l),o.cb&&o.cb(),this.bindEvent();
}
return _createClass(t,[{
key:"bindEvent",
value:function(){
var t=this,e=void 0,n=void 0,s=void 0;
this.maskEle&&(this.opt.clickMask2Hide&&l.on(this.maskEle,"click",function(){
t.hide();
}),l.on(this.maskEle,"touchmove",function(t){
t.preventDefault();
})),this.headAreaWrp&&l.on(this.headAreaWrp,"touchmove",function(t){
t.preventDefault();
}),this.closeBtn&&l.on(this.closeBtn,"tap",function(){
t.hide();
}),this.submitBtn&&l.on(this.submitBtn,"tap",function(){
i.hasClass(t.submitBtn,h)||t.opt.btnClickCb&&t.opt.btnClickCb();
}),l.on(this.contentAreaWrp,"scroll",function(){
e&&0!==t.contentAreaWrp.scrollTop||(e=!0,setTimeout(function(){
e=!1;
},50),t.contentAreaWrp.scrollTop<=0&&!t.pullingDownLock&&(t.opt.onPullDownLoad&&t.opt.onPullDownLoad(),
t.pullingDownLock=!0),setTimeout(function(){
t.contentAreaWrp.scrollTop+t.contentAreaWrp.offsetHeight+c>t.contentEle.offsetHeight&&!t.pullingUpLock&&(t.opt.onPullUpLoad&&t.opt.onPullUpLoad(),
t.pullingUpLock=!0);
},100),t.opt.onScroll&&t.opt.onScroll(t.contentAreaWrp.scrollTop>s?"up":"down"),
s=t.contentAreaWrp.scrollTop);
}),this.headAreaWrp&&l.on(this.headAreaWrp.getElementsByClassName("js_bottom_modal_title")[0],"click",function(){
t.opt.titleClickCb&&t.opt.titleClickCb();
}),l.on(this.contentAreaWrp,"touchstart",function(t){
n=t.touches[0].pageY;
}),l.on(this.contentAreaWrp,"touchmove",function(e){
var s=t.contentAreaWrp,i=e.touches[0].pageY-n,l=0===s.scrollTop&&i>0,a=o(s)&&0>i;
if(l||a)if(t.opt.innerScrollList&&t.opt.innerScrollList.length){
for(var r=0;r<t.opt.innerScrollList.length;r++){
var c=t.opt.innerScrollList[r];
if(e.touches[0].target===c&&(0!==c.scrollTop&&l||!o(c)&&a))return;
}
e.preventDefault();
}else e.preventDefault(),Math.abs(i)>50&&(l&&!t.pullingDownLock?(t.opt.onPullDownLoad&&t.opt.onPullDownLoad(),
t.pullingDownLock=!0):a&&!t.pullingUpLock&&(t.opt.onPullUpLoad&&t.opt.onPullUpLoad(),
t.pullingUpLock=!0));
});
}
},{
key:"show",
value:function(t,o){
var n=this;
this.getShowStatus()||(i.addClass(this.rootEle,"wx_bottom_modal_show"),this.opt.removeMask||r.show({
callback:function(){
n.opt.onShowNavShadow&&n.opt.onShowNavShadow();
}
}),t&&(i.addClass(this.rootEle,"wx_bottom_modal_form"),e(this.contentArea,"top",o)),
setTimeout(function(){
!t&&e(n.contentArea,"top",n.opt.top);
}),t&&setTimeout(function(){
e(n.contentArea,"top","100%"),console.log(n.contentArea.offsetHeight),i.removeClass(n.rootEle,"wx_bottom_modal_form"),
setTimeout(function(){
e(n.contentArea,"top",n.opt.top);
});
},50),this.opt.onShow&&this.opt.onShow());
}
},{
key:"hide",
value:function(){
this.getShowStatus()&&(i.removeClass(this.rootEle,"wx_bottom_modal_show"),this.opt.removeMask||r.hide(),
this.contentArea.removeAttribute("style"),this.opt.onHide&&this.opt.onHide());
}
},{
key:"disableBtn",
value:function(){
this.submitBtn&&i.addClass(this.submitBtn,h);
}
},{
key:"enableBtn",
value:function(){
this.submitBtn&&i.removeClass(this.submitBtn,h);
}
},{
key:"finishPullUpLoad",
value:function(){
this.pullingUpLock=!1;
}
},{
key:"finishPullDownLoad",
value:function(){
this.pullingDownLock=!1;
}
},{
key:"setTitle",
value:function(t){
this.headAreaWrp&&("string"==typeof t?this.headAreaWrp.getElementsByClassName("js_bottom_modal_title")[0].innerHTML=t:"object"===("undefined"==typeof t?"undefined":_typeof(t))&&t.innerHTML&&(this.headAreaWrp.getElementsByClassName("js_bottom_modal_title")[0].innerHTML=t.innerHTML));
}
},{
key:"scrollTo",
value:function(){
var t;
(t=this.contentAreaWrp).scrollTo.apply(t,arguments);
}
},{
key:"getScrollEle",
value:function(){
return this.contentAreaWrp;
}
},{
key:"setCloseBtnStyle",
value:function(t){
if(this.closeBtn){
var e=this.closeBtn.getElementsByTagName("i")[0],o="weui-icon-close-thin",n="weui-icon-back-arrow-thin";
"back"===t?(i.removeClass(e,o),i.addClass(e,n)):(i.removeClass(e,n),i.addClass(e,o));
}
}
},{
key:"getShowStatus",
value:function(){
return i.hasClass(this.rootEle,"wx_bottom_modal_show");
}
},{
key:"showLoading",
value:function(){
e(this.loading,"display","block");
}
},{
key:"hideLoading",
value:function(){
e(this.loading,"display","none");
}
},{
key:"showPullUpLoading",
value:function(){
this.contentAreaWrp.appendChild(this.pullLoading),e(this.pullLoading,"display","block");
}
},{
key:"hidePullUpLoading",
value:function(){
e(this.pullLoading,"display","none");
}
},{
key:"showPullDownLoading",
value:function(){
this.contentAreaWrp.insertBefore(this.pullLoading,this.contentAreaWrp.firstChild),
e(this.pullLoading,"display","block");
}
},{
key:"hidePullDownLoading",
value:function(){
e(this.pullLoading,"display","none");
}
},{
key:"showEndLine",
value:function(){
this.contentAreaWrp.appendChild(this.endLine),e(this.endLine,"display","block");
}
}]),t;
}();
return p;
});define("question_answer/write_answer_reply.html.js",[],function(){
return'<div class="qa__modal-reply">\n  <div class="qa__modal-reply-msg js_reply_top_content"></div>\n  <div class="frm_textarea_box_wrp">\n    <span class="frm_textarea_box">\n      <textarea class="frm_textarea js_qa_input" placeholder="内容被公众号精选后，将对所有人可见。" style="height: 9.6em;"></textarea>\n      <div class="emotion_tool">\n        <span class="emotion_switch" style="display:none;"></span>\n        <span id="js_qa_emotion_switch" class="pic_emotion_switch_wrp">\n          <img class="pic_default" src="<#=window.icon_emotion_switch#>" alt="">\n          <img class="pic_active" src="<#=window.icon_emotion_switch_active#>" alt="">\n          <img class="pic_default_primary" src="<#=window.icon_emotion_switch_primary#>" alt="">\n          <img class="pic_active_primary" src="<#=window.icon_emotion_switch_active_primary#>" alt="">\n        </span>\n      </div>\n    </span>\n  </div>\n  <div class="emotion_panel" id="js_qa_emotion_panel">\n    <span class="emotion_panel_arrow_wrp" id="js_qa_emotion_panel_arrow_wrp">\n      <i class="emotion_panel_arrow arrow_out"></i>\n      <i class="emotion_panel_arrow arrow_in"></i>\n    </span>\n    <div class="emotion_list_wrp" id="js_qa_emotion_slide_wrapper"></div>\n    <ul class="emotion_navs" id="js_qa_emotion_navbar"></ul>\n  </div>\n</div>\n<div class="qa__list-wrp">\n  <div class="qa__list-hd js_qa_write_head" style="display: none;">\n    <span class="qa__list-hd-title">我的讨论内容</span>\n  </div>\n  <div class="qa__list js_qa_qna_answer_list"></div>\n</div>\n\n<div class="js_loading_toast" style="display: none;">\n  <div class="weui-mask_transparent"></div>\n  <div class="weui-toast">\n    <i class="weui-loading weui-icon_toast"></i>\n    <p class="weui-toast__content js_loading_content">正在加载</p>\n  </div>\n</div>\n\n<div class="js_sended_toast" style="display: none;">\n  <div class="weui-mask_transparent"></div>\n  <div class="weui-toast">\n    <i class="weui-icon-success-no-circle weui-icon_toast"></i>\n    <p class="weui-toast__content" id="js_toast_msg">已发送</p>\n  </div>\n</div>\n\n<div class="qa__toast-alert js_alert_toast" style="display: none;">\n  <div class="weui-mask_transparent"></div>\n  <div class="weui-toast">\n    <i class=" qa__icon-alert"></i>\n    <p class="weui-toast__content js_alert_toast_word"></p>\n  </div>\n</div>';
});define("question_answer/reply_item.html.js",[],function(){
return'<section class="qa__reply-item js_qa_reply_item<# if (is_my_reply) { #> js_qa_my_reply<# } #>">\n  <div class="qa__reply-hd">\n    <div class="qa__reply-nickname">\n      <# if (is_biz_reply) { #>\n        作者      <# } else { #>\n        <#=user_info.nickname#>\n      <# } #>\n    </div>\n    <div class="qa__item-action">\n      <# if (is_my_reply && canOp) { #>\n        <div class="qa__action js_delete_reply" data-id="<#=reply_id#>"><i class="icon_delete"></i></div>\n      <# } #>\n      <!-- 精选之后的才能点赞 -->\n      <# if (replyStatus && isLogin) { #>\n        <div class="qa__action qa__action-praise js_qa_like<# if (my_like_status) { #> praised<# } #>" data-type="2" data-id="<#=reply_id#>">\n          <i class="icon_praise_gray"></i>\n          <span class="js_like_num" data-num="<#=like_num#>">\n            <#=likeNumFormated#>\n          </span>\n        </div>\n      <# } #>\n      <# if (!replyStatus) { #>\n        <div class="qa__action qa__action_normal">未精选</div>\n      <# } #>\n    </div>\n  </div>\n  <p class="qa__reply-content js_qa_reply_content"><#=content#></p>\n</section>\n';
});define("question_answer/answer_item.html.js",[],function(){
return'<div class="qa__list-item js_qa_list_item">\n  <!-- 层主头像 -->\n  <section class="qa__item-avatar">\n    <img src="<#=user_info.headimg#>">\n  </section>\n  <section class="qa__item-bd">\n    <div class="qa__item-info">\n      <!-- 层主昵称 -->\n      <div class="qa__item-nickname">\n        <#=user_info.nickname#>\n      </div>\n      <!-- 点赞 -->\n      <div class="qa__item-action">\n        <!-- span加praised点赞 -->\n        <# if (is_my_answer && canOp) { #>\n          <div class="qa__action js_delete_answer" data-id="<#=answer_id#>"><i class="icon_delete"></i></div>\n        <# } #>\n        <!-- 精选之后的才能点赞 -->\n        <# if (answer_status && isLogin) { #>\n          <div class="qa__action qa__action-praise js_qa_like<# if (my_like_status) { #> praised<# } #>" data-type="1" data-id="<#=answer_id#>">\n            <i class="icon_praise_gray"></i>\n            <span class="js_like_num" data-num="<#=like_num#>">\n              <#=likeNumFormated#>\n            </span>\n          </div>\n        <# } #>\n        <# if (!answer_status) { #>\n          <div class="qa__action qa__action_normal">未精选</div>\n        <# } #>\n      </div>\n    </div>\n\n    <!-- 回答内容 -->\n    <p class="qa__item-content js_qa_item_content"><#=content#></p>\n    <!-- <# if (is_my_answer && canOp) { #>\n    <div class="qa__action qa__action-reply js_write_reply" data-answerid="<#=answer_id#>" data-answersn="<#=answer_sn#>" <# if (replyListHtml) { #>style="display: none;"<# } #>><span>回复</span></div>\n    <# } #> -->\n\n    <!-- 回复 -->\n    <section class="qa__reply">\n      <section class="js_qa_reply_list js_qa_reply_list_<#=answer_id#>">\n        <#=replyListHtml#>\n      </section>\n      <# if (replyListHtml && leftReplyCount) { #>\n        <p class="qa__reply-more js_get_more_reply js_get_more_reply_<#=answer_id#>" data-answerid="<#=answer_id#>" data-answersn="<#=answer_sn#>">\n          <#=leftReplyTips#>\n        </p>\n      <# } #>\n      <!-- <# if (is_my_answer && canOp) { #>\n      <div class="qa__action qa__action-reply js_write_reply" data-answerid="<#=answer_id#>" data-answersn="<#=answer_sn#>" <# if (!replyListHtml) { #>style="display: none;"<# } #>><span>回复</span></div>\n      <# } #> -->\n    </section>\n  </section>\n</div>\n';
});