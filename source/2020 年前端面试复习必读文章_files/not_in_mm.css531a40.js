define("appmsg/voice.js",["biz_common/utils/string/html.js","pages/voice_tpl.html.js","appmsg/log.js","pages/voice_component.js"],function(e){
"use strict";
function i(){
var e=c("js_content");
return e?(p._oElements=e.getElementsByTagName("mpvoice")||[],p._oElements.length<=0?!1:!0):!1;
}
function o(){
p.musicLen=p._oElements.length;
}
function n(e){
for(var i=0,o=0;o<p.musicLen;o++){
var n=p._oElements[o],a={},c=n.getAttribute("voice_encode_fileid")||"";
try{
c=decodeURIComponent(c);
}catch(d){}
a.voiceid=m.encodeStr(c),a.voiceid=a.voiceid.replace(/&#61;/g,"=").replace(/^\s/,"").replace(/\s$/,""),
a.isaac=1*n.getAttribute("isaac2")||0,a.src=p.srcRoot.replace("#meidaid#",a.voiceid),
1===a.isaac&&(a.jsapi2Src=a.src+"&voice_type=1"),a.voiceid&&"undefined"!=a.voiceid&&(a.albumLink="",
e&&e.length>0&&e.forEach(function(e){
return e.voice_id===c?(e.appmsgalbuminfo&&(a.albumTitle=e.appmsgalbuminfo.title,
a.albumLink=e.appmsgalbuminfo.link.replace("#wechat_redirect","")+"#wechat_redirect",
a.albumNum=e.appmsgalbuminfo.tag_content_num||0,a.albumid=e.appmsgalbuminfo.album_id||0),
!1):void 0;
}),t(n,a,i),"undefined"!=typeof voiceid&&c&&voiceid&&c===voiceid&&!function(){
var e=n.offsetTop+122-40;
setTimeout(function(){
window.scrollTo(0,e);
},0);
}(),i++);
}
}
function t(e,i,o){
i.duration=parseInt((1*e.getAttribute("play_length")||0)/1e3,10),i.duration_str=m.formatTime(i.duration),
i.posIndex=o;
var n=e.getAttribute("name")||"";
try{
n=decodeURIComponent(n);
}catch(t){}
i.title=m.encodeStr(n).replace(/^\s/,"").replace(/\s$/,""),i.fileSize=1*e.getAttribute("high_size")||0,
i.nickname=window.nickname,m.renderPlayer(r,i,e);
var c=i.voiceid+"_"+i.posIndex,d=e.parentNode.querySelector('[data-preloadingid="'+c+'"]');
d&&d.parentNode.removeChild(d),a(i),p.musicList[i.voiceid+"_"+i.posIndex]=i;
}
function a(e){
var i=e.voiceid+"_"+e.posIndex,o="";
if(window.voice_in_appmsg&&window.voice_in_appmsg[e.voiceid]){
var n=window.voice_in_appmsg[e.voiceid],t=window.biz||"",a=window.mid||"",d=window.idx||"";
n.bizuin&&n.appmsgid&&n.idx&&(t=n.bizuin,a=n.appmsgid,d=n.idx);
var r=window.location.protocol||"https:";
o=r+"//mp.weixin.qq.com/mp/audio?_wxindex_=#_wxindex_#&scene=104&__biz=#biz#&mid=#mid#&idx=#idx#&voice_id=#voice_id#&sn=#sn##wechat_redirect".replace("#_wxindex_#",e.posIndex).replace("#biz#",t).replace("#mid#",a).replace("#idx#",d).replace("#voice_id#",e.voiceid).replace("#sn#",n.sn||"");
}
s("[Voice] init"+o);
var p=m.decodeStr(e.title);
e.player=m.init({
wxIndex:e.posIndex,
type:2,
songId:e.voiceid,
comment_id:"",
src:e.src,
jsapi2Src:e.jsapi2Src,
allowPause:!0,
duration:e.duration,
title:p,
singer:window.nickname?window.nickname+"的语音":"公众号语音",
epname:"来自文章",
coverImgUrl:window.__appmsgCgiData.hd_head_img,
playingCss:"share_audio_playing",
playCssDom:c("voice_main_"+i),
playArea:c("voice_play_"+i),
progress:c("voice_progress_"+i),
fileSize:e.fileSize,
playtimeDom:c("voice_playtime_"+i),
bufferDom:c("voice_buffer_"+i),
playdotDom:c("voice_playdot_"+i),
seekRange:c("voice_seekRange_"+i),
seekContainer:c("voice_main_"+i),
loadingDom:c("voice_loading_"+i),
detailArea:o?c("voice_main_"+i):"",
albumDom:c("voice_album_"+i),
detailUrl:o,
webUrl:o
});
}
function c(e){
return document.getElementById(e);
}
function d(e){
i()&&(o(),n(e));
}
e("biz_common/utils/string/html.js");
var r=e("pages/voice_tpl.html.js"),s=e("appmsg/log.js"),m=e("pages/voice_component.js"),p={
musicList:{},
musicLen:0,
srcRoot:location.protocol+"//res.wx.qq.com/voice/getvoice?mediaid=#meidaid#"
};
return{
init:d
};
});define("appmsg/qqmusic.js",["biz_common/utils/string/html.js","biz_common/utils/url/parse.js","appmsg/log.js","pages/qqmusic_tpl.html.js","pages/voice_component.js","pages/qqmusic_ctrl.js","pages/kugoumusic_ctrl.js"],function(e){
"use strict";
function t(){
var e=u("js_content");
return e?(p._oElements=e.getElementsByTagName("qqmusic")||[],p._oElements.length<=0?!1:!0):!1;
}
function i(){
p.musicLen=p._oElements.length;
}
function s(){
for(var e=0,t=0;t<p.musicLen;t++){
var i=p._oElements[t],s={};
s.musicid=l.encodeStr(i.getAttribute("musicid")||"").replace(/^\s/,"").replace(/\s$/,""),
s.musicid&&"undefined"!=s.musicid&&(r(i,s,e),e++);
}
}
function r(e,t,i){
if(t.media_id=l.encodeStr(e.getAttribute("mid")||"").replace(/^\s/,"").replace(/\s$/,""),
t.musictype=parseInt(e.getAttribute("musictype"))||1,t.musictype>2&&(t.musictype=2),
t.albumid=l.encodeStr(e.getAttribute("albumid")||"").replace(/^\s/,"").replace(/\s$/,""),
t.otherid=l.encodeStr(e.getAttribute("otherid")||"").replace(/^\s/,"").replace(/\s$/,""),
t.jumpurlkey=l.encodeStr(e.getAttribute("jumpurlkey")||"").replace(/^\s/,"").replace(/\s$/,""),
t.duration=parseInt(e.getAttribute("play_length")||0,10),t.posIndex=i,t.albumurl=l.encodeStr(e.getAttribute("albumurl")||"").replace(/^\s/,"").replace(/\s$/,""),
t.audiourl=l.encodeStr(e.getAttribute("audiourl")||"").replace(/^\s/,"").replace(/\s$/,""),
t.singer=l.encodeStr(e.getAttribute("singer")||"").replace(/^\s/,"").replace(/\s$/,""),
!t.singer||"undefined"==t.singer){
var s=e.getAttribute("src")||"",r=decodeURIComponent(a.getQuery("singer",s)||"");
t.singer=l.encodeStr(r).replace(/^\s/,"").replace(/\s$/,""),t.singer&&"undefined"!=t.singer||(t.singer="");
}
t.music_name=l.encodeStr(e.getAttribute("music_name")||"").replace(/^\s/,"").replace(/\s$/,""),
p.adapter[t.musictype]&&"function"==typeof p.adapter[t.musictype].initData&&(t=p.adapter[t.musictype].initData(t,{
scene:0
})),l.renderPlayer(m,t,e);
var u=t.musicid+"_"+t.posIndex,c=e.parentNode.querySelector('[data-preloadingid="'+u+'"]');
c&&c.parentNode.removeChild(c),n(t),p.musicList[t.musicid+"_"+t.posIndex]=t;
}
function n(e){
var t=e.musicid+"_"+e.posIndex;
c("[Music] init "+e.detailUrl);
var i=l.decodeStr(e.music_name);
e.player=l.init({
allowPause:e.allowPause===!0?!0:!1,
wxIndex:e.posIndex,
type:e.type||0,
comment_id:"",
mid:e.media_id,
otherid:e.otherid,
albumid:e.albumid,
songId:e.musicid,
jumpurlkey:e.jumpurlkey,
duration:e.duration,
title:i,
singer:window.nickname?window.nickname+"推荐的歌":"公众号推荐的歌",
epname:"音乐",
coverImgUrl:e.albumurl,
playingCss:"qqmusic_playing",
pauseCss:e.pauseCss||"",
playCssDom:u("qqmusic_main_"+t),
playArea:u("qqmusic_play_"+t),
detailUrl:e.detailUrl||"",
webUrl:e.webUrl||"",
detailArea:u("qqmusic_home_"+t)
});
}
function u(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var a=e("biz_common/utils/url/parse.js"),c=e("appmsg/log.js"),m=e("pages/qqmusic_tpl.html.js"),l=e("pages/voice_component.js"),p={
adapter:{
1:e("pages/qqmusic_ctrl.js"),
2:e("pages/kugoumusic_ctrl.js")
},
musicList:{},
musicLen:0
};
return t()?(i(),s(),p.musicList):void 0;
});define("appmsg/iframe.js",["biz_common/utils/string/html.js","pages/video_communicate_adaptor.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","biz_wap/utils/ajax.js","common/utils.js","appmsg/finance_communicate.js","biz_wap/utils/jsmonitor_report.js","biz_common/utils/url/parse.js","new_video/ctl.js","pages/version4video.js","biz_common/dom/attr.js","biz_common/dom/event.js"],function(e){
"use strict";
function t(e){
console.info("iframe_onload");
var t=0;
try{
e.contentDocument&&e.contentDocument.body.offsetHeight?t=e.contentDocument.body.offsetHeight:e.Document&&e.Document.body&&e.Document.body.scrollHeight?t=e.Document.body.scrollHeight:e.document&&e.document.body&&e.document.body.scrollHeight&&(t=e.document.body.scrollHeight);
var i=e.parentElement;
if(i&&(e.style.height=t+"px"),/MSIE\s(7|8)/.test(navigator.userAgent)&&e.contentWindow&&e.contentWindow.document){
var o=e.contentWindow.document.getElementsByTagName("html");
o&&o.length&&(o[0].style.overflow="hidden");
}
c&&c.postPageHeightMessage&&c.postPageHeightMessage("updatePageHeight"),console.log("financeUtils done");
}catch(n){}
}
function i(){
for(var e=window.pageYOffset||document.documentElement.scrollTop,t=_.video_top.length,n=e+s.getInnerHeight(),d=0,r=0;t>r;r++){
var c=_.video_top[r];
c.reported?d++:n>=c.start&&n<=c.end&&(c.reported=!0,setTimeout(function(e,t,i){
return function(){
var n=o.getVideoInfo(),d="",r="",s=3;
n[e]&&(n[e].hit_bizuin&&(d=n[e].hit_bizuin),n[e].hit_vid&&(r=n[e].hit_vid),n[e].ori_status&&(s=n[e].ori_status)),
p.report({
step:1,
hit_vid:r,
hit_bizuin:d,
ori_status:s,
vid:e,
screen_num:Math.ceil(t/i),
screen_height:i
});
};
}(c.vid,n,s.getInnerHeight()),1e4));
}
d==t&&(w.off(window,"scroll",i),_.video_top=_.video_iframe=i=null);
}
e("biz_common/utils/string/html.js");
{
var o=e("pages/video_communicate_adaptor.js"),n=e("biz_wap/utils/mmversion.js"),d=e("biz_wap/utils/device.js"),r=e("biz_wap/utils/ajax.js"),s=e("common/utils.js"),c=e("appmsg/finance_communicate.js"),a=e("biz_wap/utils/jsmonitor_report.js"),m=e("biz_common/utils/url/parse.js"),p=e("new_video/ctl.js"),_={
txVideoReg:/^http(s)*\:\/\/v\.qq\.com\/iframe\/(preview|player)\.html\?/,
mpVideoReg:/^http(s)*\:\/\/mp\.weixin\.qq\.com\/mp\/readtemplate\?t=pages\/video_player_tmpl/,
video_iframe:[],
video_top:[]
},l=e("pages/version4video.js"),u=e("biz_common/dom/attr.js"),w=(u.setProperty,e("biz_common/dom/event.js")),f=document.getElementsByTagName("iframe"),g=[];
/MicroMessenger/.test(navigator.userAgent);
}
window.reportVid=[];
for(var v=Math.ceil(1e4*Math.random()),h=0,x=f.length;x>h;++h)!function(e){
var i=e.getAttribute("data-src")||"",o=e.className||"",s=e.getAttribute("src")||i;
if(!i||"#"==i){
var c=e.getAttribute("data-display-src");
if(c&&(0==c.indexOf("/cgi-bin/readtemplate?t=vote/vote-new_tmpl")||0==c.indexOf("https://mp.weixin.qq.com/cgi-bin/readtemplate?t=vote/vote-new_tmpl"))){
c=c.replace(/&amp;/g,"&");
for(var p=c.split("&"),u=["/mp/newappmsgvote?action=show"],w=0;w<p.length;w++)(0==p[w].indexOf("__biz=")||0==p[w].indexOf("supervoteid="))&&u.push(p[w]);
u.length>1&&(i=u.join("&")+"#wechat_redirect");
}
}
if(s&&(_.txVideoReg.test(s)||_.mpVideoReg.test(s))){
if(l.isShowMpVideo()||_.mpVideoReg.test(s)){
var f=m.getQuery("vid",i);
if(!f)return;
var h=e.getAttribute("data-vw"),x=e.getAttribute("data-vh"),b=document.domain;
"qq.com"==b&&((new Image).src="https://badjs.weixinbridge.com/badjs?id=139&level=4&from="+window.encodeURIComponent(window.location.host)+"&msg="+window.encodeURIComponent(window.location.href),
a.setLogs({
id:27302,
key:100,
value:1,
lc:1,
log0:"[beforeD]"+window.encodeURIComponent(window.location.href)
})),window.reportVid.push(f),_.video_iframe.push({
dom:e,
vid:f
}),s=["/mp/videoplayer?video_h=",x,"&video_w=",h,"&scene=",window.source,"&random_num=",v,"&article_title=",encodeURIComponent(window.msg_title.htmlDecode()),"&source=4&vid=",f,"&mid=",appmsgid,"&idx=",itemidx||idx,"&__biz=",biz,"&nodetailbar=",window.is_temp_url?1:0,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&version=",version,"&devicetype=",window.devicetype||"","&wxtoken=",window.wxtoken||"","&sessionid=",window.sessionid||"","&preview=",window.is_temp_url?1:0,"&is_in_pay_subscribe=",window.isPaySubscribe,"&nickname="+window.nickname,"&roundHeadImg="+window.round_head_img,"&enterid="+window.enterid,"&subscene="+window.subscene].join(""),
uin||window.__addIdKeyReport&&window.__addIdKeyReport("28307",21),window.__addIdKeyReport&&window.__addIdKeyReport("28307",11),
setTimeout(function(e,t){
if(t.setAttribute("marginWidth",0),t.setAttribute("marginHeight",0),t.style.top="0",
window.__second_open__)if(n.isIOS){
var i,o,s;
!function(){
var n=function(e,t,i,o){
i&&o&&(e.contentWindow.__auto_play__=!!e.getAttribute("__sec_open_auto_play__"),
e.contentWindow.is_login=t.is_login,e.contentWindow.user_uin=t.user_uin,e.contentWindow.cgiData.ckey=t.ckey,
e.contentWindow.cgiData.ckey_ad=t.ckey_ad,e.contentWindow.seajs.use("pages/video_appmsg.js"));
},c=function(){
d.os.getNumVersion()<14?t.setAttribute("src",e):t.contentWindow.location.replace(e);
};
window.__videohook__=1,i=!1,o=!1,s={},t.onload=function(){
t.contentWindow&&t.contentWindow.cgiData?i=!0:(i=!1,c()),n(t,s,i,o);
},c(),r({
url:e,
type:"GET",
f:"json",
success:function(d){
o=!0;
try{
s=JSON.parse(d),n(t,s,i,o);
}catch(r){
n(t,s,i,o);
}
window.resp=d,t.setAttribute("data-realsrc",e),t.contentWindow.__iframe_src__=e;
}
});
}();
}else r({
url:e,
type:"GET",
f:"html",
success:function(i){
t.setAttribute("data-realsrc",e),t.contentDocument.open("text/html","replace"),t.contentDocument.write(i),
t.contentDocument.close(),t.contentWindow.__iframe_src__=e,t.contentWindow.history.replaceState(null,null,e);
}
});else t.setAttribute("src",e);
},0,s,e);
}
}else if(i&&(i.indexOf("newappmsgvote")>-1&&(o.indexOf("js_editor_vote_card")>=0||o.indexOf("vote_iframe")>=0)||0==i.indexOf("http://mp.weixin.qq.com/bizmall/appmsgcard")&&(o.indexOf("card_iframe")>=0||o.indexOf("js_editor_card")>=0)||i.indexOf("appmsgvote")>-1||i.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1)){
if(window.is_transfer_msg&&!window.reprint_ticket&&i.indexOf(window.biz)<0)return void g.push(e);
if(window.__second_open__||(i=i.replace(/^http:/,location.protocol)),o.indexOf("card_iframe")>=0||o.indexOf("js_editor_card")>=0){
-1===o.indexOf("card_iframe")&&(e.className+=" card_iframe"),-1===o.indexOf("res_iframe")&&(e.className+=" res_iframe");
var y=i.replace("#wechat_redirect",["&pass_ticket=",pass_ticket,"&scene=",source,"&msgid=",appmsgid,"&msgidx=",itemidx||idx,"&version=",version,"&devicetype=",window.devicetype||"","&child_biz=",biz,"&wxtoken=",window.wxtoken||""].join(""));
reprint_ticket&&(y+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx].join("")),
window.__second_open__?r({
url:y,
type:"GET",
f:"html",
success:function(o){
e.setAttribute("src",y),e.contentWindow.document.open("text/html","replace"),e.contentWindow.document.write(o),
e.contentWindow.document.close(),e.contentWindow.history.replaceState(null,null,y),
-1==i.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&(e.onload=function(){
t(e);
});
}
}):(e.setAttribute("src",y),-1==i.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&(e.onload=function(){
t(e);
}));
}else{
var j=i.indexOf("#wechat_redirect")>-1,k=["&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&wxtoken=",window.wxtoken||""].join("");
reprint_ticket?k+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx,"&appmsg_token=",appmsg_token].join(""):(o.indexOf("vote_iframe")>=0||o.indexOf("js_editor_vote_card")>=0)&&(k+=["&mid=",mid,"&idx=",idx,"&appmsg_token=",appmsg_token].join(""),
-1===o.indexOf("vote_iframe")&&(e.className+=" vote_iframe"));
var y=j?i.replace("#wechat_redirect",k):i+k;
window.__second_open__?r({
url:y,
type:"GET",
f:"html",
success:function(o){
e.contentWindow.Ajax=r,e.setAttribute("src",y),e.contentWindow.document.open("text/html","replace"),
e.contentWindow.document.write(o),e.contentWindow.document.close(),e.contentWindow.history.replaceState(null,null,y),
-1==i.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&(e.onload=function(){
t(e);
});
}
}):(e.setAttribute("src",y),-1==i.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&(e.onload=function(){
t(e);
}));
}
e.appmsg_idx=w;
}
if(i&&i.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1&&h>0){
var O=h,z=3*O/4;
e.width=O,e.height=z,e.style.setProperty&&(e.style.setProperty("width",O+"px","important"),
e.style.setProperty("height",z+"px","important"));
}
}(f[h]);
for(var b=0;b<g.length;b++){
var y=g[b];
y.parentNode.removeChild(y);
}
if(window.iframe_reload=function(){
for(var e=0,i=f.length;i>e;++e){
var o=f[e],n=o.getAttribute("src");
n&&(n.indexOf("newappmsgvote")>-1||n.indexOf("appmsgvote")>-1)&&t(o);
}
},"getElementsByClassName"in document)for(var j,k=document.getElementsByClassName("video_iframe"),h=0;j=k.item(h++);)j.setAttribute("scrolling","no"),
j.style.overflow="hidden";
_.video_iframe.length>0&&setTimeout(function(){
for(var e=_.video_iframe,t=document.getElementById("js_article"),o=0,n=e.length;n>o;o++){
var d=e[o];
if(!d||!d.dom)return;
for(var r=d.dom,c=r.offsetHeight,a=0;r&&t!==r;)a+=r.offsetTop,r=r.offsetParent;
_.video_top.push({
start:a+c/2,
end:a+c/2+s.getInnerHeight(),
reported:!1,
vid:d.vid
});
}
i(),w.on(window,"scroll",i);
});
});define("appmsg/page_pos.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/cookie.js","biz_common/utils/http.js","appmsg/cdn_img_lib.js","biz_wap/utils/storage.js","biz_wap/utils/hand_up_state.js","biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js","biz_wap/jsapi/leaveReport.js","biz_wap/utils/wapsdk.js","common/utils.js","appmsg/log.js","biz_common/utils/url/parse.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function o(e){
window.logs||(window.logs={}),T.js_content=e.js_content||document.getElementById("js_content");
var o=e.js_toobar3||document.getElementById("js_toobar3");
T.pageEndTop=o?o.offsetTop:0,T.imgs=T.js_content?T.js_content.getElementsByTagName("img")||[]:[],
T.media=e.media||document.getElementById("media"),T.title=e.title||(window.msg_title||"").htmlDecode(),
T.video_cnt=e.video_cnt||window.logs.video_cnt||0,T.js_cmt_area=e.js_cmt_area||document.getElementById("js_cmt_area"),
T.item_show_type=e.item_show_type||window.item_show_type||0,z=document.getElementsByTagName("html"),
z&&1==!!z.length&&l&&(z=z[0].innerHTML,x.content_length=l.htmlSize),window.logs.pageinfo=x,
function(){
if(window.localStorage&&!localStorage.getItem("clear_page_pos")){
for(var e=localStorage.length-1;e>=0;){
var o=localStorage.key(e);
o.match(/^\d+$/)?localStorage.removeItem(o):o.match(/^adinfo_/)&&localStorage.removeItem(o),
e--;
}
localStorage.setItem("clear_page_pos","true");
}
}(),window.localStorage&&(m.on(window,"load",function(){
B=1*S.get(H);
var o=""!==y.getQuery("imageIndex");
if(!window.__second_open__){
var t=location.href.indexOf("scrolltodown")>-1;
t&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),t||"undefined"!=typeof voiceid&&voiceid||(!e.disableScroll&&!o&&window.scrollTo(0,B),
f.saveSpeeds({
uin:uin,
pid:"https:"==E?462:417,
speeds:{
sid:36,
time:Math.ceil(B/v.getInnerHeight())
}
}),f.send());
}
if(window.__wxjs_is_wkwebview||window.__second_open__){
if(q)return;
var i=A.getData(),n=localStorage.getItem("hand_up_id");
for(var p in i)p!=n&&i[p]&&(s(i[p].val),j.setSum(28307,59,1),A.remove(p));
window.setInterval(function(){
var e=a();
A.set(M,e,+new Date+864e7);
},1e3);
}
var m=I.getData("spad");
m&&m.spad&&d(m.spad.val),e.hasSpAd&&window.setInterval(function(){
r();
var e=_();
I.set("spad",e,+new Date+864e7);
},1e3),window.setTimeout(function(){
w({
url:"/mp/appmsgreport?action=page_time_5s&__biz="+biz,
type:"POST",
mayAbort:!0,
data:a(),
async:!0,
timeout:2e3
});
},5e3);
}),m.on(window,"unload",function(){
if(b("[Appmsg leaveReport in page_pos 3]"),console.log("[Appmsg leaveReport in page_pos 3]"),
!window.__second_open__&&(b("[Appmsg leaveReport in page_pos 4]"),console.log("[Appmsg leaveReport in page_pos 4]"),
!window.__jsapi_report_has_done__)){
b("[Appmsg leaveReport in page_pos 5]"),console.log("[Appmsg leaveReport in page_pos 5]"),
localStorage.setItem("hand_up_id",""),window.__ajaxtest="2";
var e=a();
s(e),window.__unload_has_done__=!0;
}
}),window.logs.read_height=0,m.on(window,"scroll",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(N),N=setTimeout(function(){
B=window.pageYOffset,S.set(H,B,+new Date+864e5);
},500);
}),m.on(document,"touchmove",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(N),N=setTimeout(function(){
B=window.pageYOffset,S.set(H,B,+new Date+864e5);
},500);
})),h.addReport(function(){
if(b("[Appmsg leaveReport in page_pos 1]"),console.log("[Appmsg leaveReport in page_pos 1]"),
!window.__unload_has_done__){
b("[Appmsg leaveReport in page_pos 2]"),console.log("[Appmsg leaveReport in page_pos 2]"),
D=!0,A.remove(M);
var e=a(),o=[];
for(var t in e)e.hasOwnProperty(t)&&o.push(t+"="+encodeURIComponent(e[t]));
var i={
reportUrl:"https://mp.weixin.qq.com/mp/appmsgreport?action=page_time&__biz="+biz,
reportData:o.join("&"),
method:"POST"
};
return window.__jsapi_report_has_done__=!0,b("[Appmsg leaveReport length]: "+JSON.stringify(i).length),
console.log("[Appmsg leaveReport length]: "+JSON.stringify(i).length),i;
}
}),m.on(document,"visibilitychange",function(){
g.isHidden()?localStorage.setItem("hand_up_id",M):localStorage.setItem("hand_up_id","");
}),p();
}
function t(e,o){
if(e&&!(e.length<=0))for(var t,i,n,a=/http(s)?\:\/\/([^\/\?]*)(\?|\/)?/,s=0,r=e.length;r>s;++s)t=e[s],
t&&(i=t.getAttribute(o),i&&(n=i.match(a),n&&n[2]&&(O[n[2]]=!0)));
}
function i(e){
for(var o=0,t=k.length;t>o;++o)if(k[o]==e)return!0;
return!1;
}
function n(){
O={},t(document.getElementsByTagName("a"),"href"),t(document.getElementsByTagName("link"),"href"),
t(document.getElementsByTagName("iframe"),"src"),t(document.getElementsByTagName("script"),"src"),
t(document.getElementsByTagName("img"),"src");
var e=[];
for(var o in O)O.hasOwnProperty(o)&&(window.networkType&&"wifi"==window.networkType&&!R&&i(o)&&(R=!0),
e.push(o));
return O={},e.join(",");
}
function a(){
{
var e,o=window.pageYOffset||document.documentElement.scrollTop,t=T.js_content,i=v.getInnerHeight(),a=T.screen_width,s=T.scroll_height,r=Math.ceil(s/i),_=Math.ceil((t.scrollHeight||t.offsetHeight)/i),d=(window.logs.read_height||o)+i,p=T.pageEndTop,m=T.imgs,w=Math.ceil(d/i)||1,l=T.media,c=50,u=0,h=0,f=0,b=0,y=d+c>p?1:0;
t.offsetTop+t.scrollHeight;
}
w>r&&(w=r);
var j=function(o){
if(o)for(var t=0,i=o.length;i>t;++t){
var n=o[t];
if(n){
u++;
var a=n.getAttribute("src"),s=n.getAttribute("data-type");
a&&0==a.indexOf("http")&&(h++,a.isCDN()&&(f++,-1!=a.indexOf("tp=webp")&&b++),s&&(e["img_"+s+"_cnt"]=e["img_"+s+"_cnt"]||0,
e["img_"+s+"_cnt"]++));
}
}
e.download_cdn_webp_img_cnt=b||0,e.download_img_cnt=h||0,e.download_cdn_img_cnt=f||0,
e.img_cnt=u||0;
},S=window.appmsgstat||{},A=window.logs.img||{},I=window.logs.pagetime||{},O=A.load||{},E=A.read||{},k=[],D=[],N=0,B=0,H=0;
for(var P in E)P&&0==P.indexOf("http")&&E.hasOwnProperty(P)&&D.push(P);
for(var P in O)P&&0==P.indexOf("http")&&O.hasOwnProperty(P)&&k.push(P);
for(var M=0,q=k.length;q>M;++M){
var G=k[M];
G&&G.isCDN()&&(-1!=G.indexOf("/0")&&N++,-1!=G.indexOf("/640")&&B++,-1!=G.indexOf("/300")&&H++);
}
var e={
report_bizuin:biz,
title:T.title,
mid:mid,
idx:idx,
subscene:window.subscene||1e4,
sessionid:window.sessionid||0,
read_cnt:S.read_num||0,
old_like_cnt:S.old_like_num||0,
like_cnt:S.like_num||0,
screen_width:a,
screen_height:v.getInnerHeight(),
screen_num:_,
idkey:"",
copyright_stat:"",
ori_article_type:"",
video_cnt:T.video_cnt,
read_screen_num:w||0,
is_finished_read:y,
scene:source,
content_len:x.content_length||0,
start_time:page_begintime,
end_time:(new Date).getTime(),
handup_time:g.getHandUpTime(),
total_height:p,
exit_height:d>p?p:d,
img_640_cnt:B,
img_0_cnt:N,
img_300_cnt:H,
wtime:I.onload_time||0,
ftime:I.ftime||0,
ptime:I.ptime||0,
onload_time:I.onload_time||0,
reward_heads_total:window.logs.reward_heads_total||0,
reward_heads_fail:window.logs.reward_heads_fail||0,
outer_pic:window.logs.outer_pic||0,
publish_time:window.ct,
item_show_type:T.item_show_type,
page_req_info:JSON.stringify({
startGetAppmsgExtTime:window.startGetAppmsgExtTime,
startGetAppmsgAdTime:window.startGetAppmsgAdTime,
receiveGetAppmsgExt:window.receiveGetAppmsgExt,
receiveGetAppmsgAd:window.receiveGetAppmsgAd,
jsapiReadyTime:window.jsapiReadyTime,
domCompleteTime:window.domCompleteTime
})
};
if(window.networkType&&"wifi"==window.networkType&&(e.wifi_all_imgs_cnt=k.length,
e.wifi_read_imgs_cnt=D.length),window.logs.webplog&&4==window.logs.webplog.total){
var C=window.logs.webplog;
e.webp_total=1,e.webp_lossy=C.lossy,e.webp_lossless=C.lossless,e.webp_alpha=C.alpha,
e.webp_animation=C.animation;
}
if(e.copyright_stat=window.isCartoonCopyright?"3":window._copyright_stat||"",e.ori_article_type=window._ori_article_type||"",
window.__addIdKeyReport&&window.moon&&(moon.hit_num>0&&moon.hit_num<1e3&&window.__addIdKeyReport(27613,30,moon.hit_num),
moon.mod_num>0&&moon.mod_num<1e3&&window.__addIdKeyReport(27613,31,moon.mod_num)),
window.logs.idkeys){
var Y=window.logs.idkeys,J=[];
for(var K in Y)if(Y.hasOwnProperty(K)){
var U=Y[K];
U.val>0&&J.push(K+"_"+U.val);
}
e.idkey=J.join(";");
}
j(!!l&&l.getElementsByTagName("img")),j(m);
var L=(new Date).getDay(),V=n();
return(R||0!==user_uin&&Math.floor(user_uin/100)%7==L)&&(e.domain_list=V),R&&(e.html_content=z),
window.isSg&&(e.from="sougou"),e.source=window.friend_read_source||"",e.req_id=window.req_id||"",
e.recommend_version=window.friend_read_version||"",e.class_id=window.friend_read_class_id||"",
e.ascene=window.ascene||-1,0==e.scene&&56==e.ascene&&(e.scene=90),e.hotspotjson=JSON.stringify({
hotspotinfolist:window.hotspotInfoList||[]
}),e.is_pay_subscribe=window.isPaySubscribe,e.is_paid=window.isPaid,e.preview_percent=window.previewPercent,
e.is_finished_preview=window.is_finished_preview||0,e.fee=window.paySubscribeInfo?window.paySubscribeInfo.fee:"",
e.pay_cnt=window.paySubscribeInfo?window.paySubscribeInfo.pay_cnt:"",e.worthy_cnt=window.paySubscribeInfo?window.paySubscribeInfo.like_cnt:"",
e.exptype=window.exptype||"",e.expsessionid=window.expsessionid||"",e;
}
function s(e){
D||(D=!0,A.remove(M),e.report_time=parseInt(+new Date/1e3),w({
url:"/mp/appmsgreport?action=page_time&__biz="+biz,
type:"POST",
mayAbort:!0,
data:e,
async:!1,
timeout:2e3
}));
}
function r(){
S.set(H,B,+new Date+72e5);
}
function _(){
return window.__video_report_data;
}
function d(e){
e&&e.play_type&&(I.remove("spad"),e.report_type=1,w({
url:"/mp/ad_video_report?action=video_play_report",
type:"POST",
mayAbort:!0,
data:e,
async:!1,
timeout:2e3
}));
}
function p(){
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/geticon?__biz="+biz+"&r="+Math.random();
}
e("biz_common/utils/string/html.js");
var m=e("biz_common/dom/event.js"),w=e("biz_wap/utils/ajax.js"),l=(e("biz_common/utils/cookie.js"),
e("biz_common/utils/http.js"));
e("appmsg/cdn_img_lib.js");
var c=e("biz_wap/utils/storage.js"),g=e("biz_wap/utils/hand_up_state.js"),u=e("biz_wap/utils/mmversion.js"),h=(e("biz_wap/jsapi/core.js"),
e("biz_wap/jsapi/leaveReport.js")),f=e("biz_wap/utils/wapsdk.js"),v=e("common/utils.js"),b=e("appmsg/log.js"),y=e("biz_common/utils/url/parse.js"),j=(-1!=navigator.userAgent.indexOf("TBS/"),
e("biz_wap/utils/jsmonitor_report.js"));
window.__unload_has_done__=!1;
var z,T={
js_cmt_area:null,
js_content:null,
screen_height:v.getInnerHeight(),
screen_width:document.documentElement.clientWidth||window.innerWidth,
scroll_height:document.body.scrollHeight||document.body.offsetHeight,
pageEndTop:0,
imgs:[],
media:null,
title:"",
video_cnt:0,
item_show_type:0
},S=new c("page_pos"),A=new c("time_on_page"),I=new c("spad"),x={},O={},E=window.location.protocol,R=!1,k=["wap.zjtoolbar.10086.cn","125.88.113.247","115.239.136.61","134.224.117.240","hm.baidu.com","c.cnzz.com","w.cnzz.com","124.232.136.164","img.100msh.net","10.233.12.76","wifi.witown.com","211.137.132.89","qiao.baidu.com","baike.baidu.com"],D=!1,N=null,B=0,H=[biz,sn,mid,idx].join("_"),P=Math.random(),M=[biz,sn,mid,idx,P].join("_"),q=u.isAndroid&&u.gtVersion("7.0.4",!0)||u.isIOS&&u.gtVersion("7.0.4",!0);
return{
init:o
};
});define("appmsg/product.js",["biz_common/dom/event.js","common/utils.js"],function(e){
"use strict";
function t(){
for(var e=window.pageYOffset||document.documentElement.scrollTop,t=0;t<i.length;++t){
var o=i[t];
if(!o.isReport){
var n=o.offsetTop;
n>=e&&e+r.getInnerHeight()>=n&&(o.isReport=!0,(new Image).src="/mp/appmsgreport?action=appmsg_recom&type=1&__biz="+biz+"&ascene="+(window.ascene||-1)+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&product_id="+o.product_id+"&order="+o.order+"&r="+Math.random());
}
}
}
var o=e("biz_common/dom/event.js"),r=e("common/utils.js");
if(document.getElementsByClassName){
for(var n=document.getElementsByClassName("js_product_section"),d=document.getElementsByClassName("js_product_a"),i=[],s=0;s<n.length;++s){
var a=n[s];
a.dataset&&a.dataset.product_id&&a.dataset.order&&i.push({
dom:a,
offsetTop:a.offsetTop,
product_id:a.dataset.product_id||"",
order:a.dataset.order||"",
isReport:!1
});
}
i.length>0&&(o.on(window,"scroll",t),t());
for(var s=0;s<d.length;++s)!function(e){
o.on(e,"click",function(){
var t=e.dataset||{};
return(new Image).src="/mp/appmsgreport?action=appmsg_recom&type=2&__biz="+biz+"&ascene="+(window.ascene||-1)+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&product_id="+(t.product_id||"")+"&order="+(t.order||"")+"&r="+Math.random(),
t.href?(setTimeout(function(){
location.href="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(t.href)+"&action=appmsg_redirect&uin="+uin+"&biz="+biz+"&mid="+mid+"&idx="+idx+"&scene=0";
},300),!1):!1;
},!0);
}(d[s]);
}
});define("appmsg/review_image.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/utils/url/parse.js","appmsg/log.js","biz_wap/utils/ajax.js","biz_wap/utils/mmversion.js","appmsg/cdn_img_lib.js"],function(e){
"use strict";
function t(e,t,a,o){
var i={
current:e,
urls:t,
currentInfo:{
url:e,
data:a,
pos:o
},
forbidForward:window.isPaySubscribe?1:0
};
console.log("imagePreview request",i),console.log("previewFlag",g),g||(g=!0,r.invoke("imagePreview",i,function(e){
console.log("imagePreview response",e),window.__addIdKeyReport&&window.__addIdKeyReport("28307","2");
}),setTimeout(function(){
g=!1;
},500),d("[Appmsg] click image, src: "+e));
}
function a(e,t){
s({
url:"/mp/rewardappmsgreport",
data:{
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
oper:t||"",
cdn_url:e||"",
ascene:window.ascene||-1
},
type:"POST",
dataType:"json",
async:!0
});
}
function o(e){
var o=[],r=e.container,d=e.imgs||[];
if(r)for(var s=r.getElementsByTagName("img")||[],g=0,l=s.length;l>g;g++)d.push(s.item(g));
for(var c=p.isIOS&&1==window._copyright_stat&&1==window.is_need_reward,w=0,g=0,l=d.length;l>g;g++){
var m=d[g],u=m.getAttribute("data-src")||m.getAttribute("src"),h=m.getAttribute("data-type"),f=m.getAttribute("data-disable-preview");
if("1"!==f&&u&&0!=u.indexOf("data:")){
for(;-1!=u.indexOf("?tp=webp");)u=u.replace("?tp=webp","");
m.dataset&&m.dataset.s&&u.isCDN()&&(u=u.replace(/\/640$/,"/0"),u=u.replace(/\/640\?/,"/0?")),
u.isCDN()&&(u=n.addParam(u,"wxfrom","3",!0)),u=e.is_https_res?u.http2https():u.https2http(),
h&&(u=n.addParam(u,"wxtype",h,!0)),o.push(u),"1"!=m.getAttribute("data-nopreviewclick")&&!function(e){
p.isAndroid&&m.setAttribute("data-wxsrc",e),i.on(m,"click",function(i){
if(i.stopPropagation(),!(i&&i.target&&i.target.className&&i.target.className.indexOf("img_loadederror")>-1)){
if("function"==typeof window.__addIdKeyReport&&window.__addIdKeyReport("110644",2),
window.getComputedStyle){
for(var r=i.target,n=r.getBoundingClientRect(),d=.15*n.width,s=.15*n.height,g=!0;r&&"body"!=r.nodeName.toLowerCase();){
var l=window.getComputedStyle(r,null),m=parseInt(l.getPropertyValue("opacity")),u=l.getPropertyValue("filter"),h=l.getPropertyValue("visibility"),f=l.mixBlendMode;
if(1!=m||"visible"!=h||u.indexOf("opacity")>=0||u.indexOf("blur")>=0||f&&"normal"!=f){
g=!1;
break;
}
var b=r.getBoundingClientRect();
if(("hidden"==l.overflow||"hidden"==l.overflowX||"hidden"==l.overflowY)&&(b.left-n.left>d||b.right-n.right<-1*d||b.top-n.top>s||b.bottom-n.bottom<-1*s)){
g=!1;
break;
}
r=r.parentElement;
}
if(!g){
if(console.log("don't try this again"),"function"==typeof window.__addIdKeyReport){
window.__addIdKeyReport("110644",3);
var y=new Image,v="https://badjs.weixinbridge.com/badjs?id=168&level=4&from="+encodeURIComponent(location.href)+"&msg="+encodeURIComponent(e);
y.src=v.slice(0,1024);
}
return!1;
}
}
"undefined"==typeof getComputedStyle&&(window.getComputedStyle=document.body.currentStyle?function(e){
return e.currentStyle;
}:{});
var _=i.target,j=window.getComputedStyle(_),F=_.getBoundingClientRect(),x=document.createElement("canvas");
x.style.width=j.width,x.style.height=j.height,x.width=parseFloat(j.width),x.height=parseFloat(j.height);
var C=x.getContext("2d"),I="";
C.drawImage(_,0,0,parseFloat(j.width),parseFloat(j.height));
try{
I=x.toDataURL();
}catch(i){}
p.isAndroid&&(I=""),t(e,o,I,{
x:F.left-parseFloat(j.paddingLeft)-parseFloat(j.borderLeftWidth),
y:F.top-parseFloat(j.paddingTop)-parseFloat(j.borderTopWidth),
width:F.width-parseFloat(j.paddingLeft)-parseFloat(j.paddingRight)-parseFloat(j.borderLeftWidth)-parseFloat(j.borderRightWidth),
height:F.height-parseFloat(j.paddingTop)-parseFloat(j.paddingBottom)-parseFloat(j.borderTopWidth)-parseFloat(j.borderBottomWidth)
}),c&&0==w&&a(i.target.src,2);
}
});
}(u),m.removeAttribute("data-nopreviewclick");
}
}
if(c){
var b=document.getElementById("js_content"),y=0,v=0;
i.on(b,"touchstart",function(e){
return e&&e.target&&e.target.tagName&&"string"==typeof e.target.tagName&&"IMG"==e.target.tagName.toString().toUpperCase()?(w=+new Date,
y=e.touches[0].pageX,void(v=e.touches[0].pageY)):void(w=0);
}),i.on(b,"touchmove",function(e){
var t=e.touches[0].pageX,a=e.touches[0].pageY;
Math.abs(t-y)>10&&Math.abs(a-v)>10&&(w=0);
}),i.on(b,"touchend",function(e){
0!=w&&(+new Date-w>800&&+new Date-w<6e3?a(e.target.src,1):w=0);
});
}
}
var i=e("biz_common/dom/event.js"),r=e("biz_wap/jsapi/core.js"),n=e("biz_common/utils/url/parse.js"),d=e("appmsg/log.js"),s=e("biz_wap/utils/ajax.js"),p=e("biz_wap/utils/mmversion.js"),g=!1;
return e("appmsg/cdn_img_lib.js"),o;
});define("appmsg/outer_link.js",["biz_common/dom/event.js","appmsg/open_url_with_webview.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","biz_wap/utils/ajax.js","appmsg/popup_report.js","biz_wap/utils/jsmonitor_report.js"],function(e){
"use strict";
function t(e){
e.preventDefault();
}
function i(e){
var t=e.innerHTML,i=/<img.*src=[\'\"]/,n=/background-image:(\s*)url\(/,o=/background:[^;"']+url\(/;
return i.test(t)||n.test(t)||o.test(t)?!0:!1;
}
function n(e){
var t=e.innerHTML,i=e.style.fontSize;
return 0===t.trim().length||0===parseFloat(i)?!0:!1;
}
function o(e,t){
var i=e.getElementsByClassName("weui-dialog__bd")[0],n=e.getElementsByClassName("weui-dialog")[0];
if(e.getElementsByClassName("weui-dialog__hd")&&e.getElementsByClassName("weui-dialog__hd").length>0&&n.removeChild(e.getElementsByClassName("weui-dialog__hd")[0]),
t.title&&t.desc){
var o=document.createElement("div");
o.setAttribute("class","weui-dialog__hd");
var r='<strong class="weui-dialog__title">'+t.title+"</strong>";
o.innerHTML=r,i.innerText=t.desc,n.insertBefore(o,i);
}else i.innerText=t.desc;
}
function r(e){
var r=e.container;
if(!r)return!1;
for(var _=r.getElementsByTagName("a")||[],j=0,v=_.length;v>j;++j)!function(r){
var j=_[r],v=j.getAttribute("href");
if(!v)return!1;
var b=0,h=j.innerHTML;
/^[^<>]+$/.test(h)?b=1:/^<img[^>]*>$/.test(h)&&(b=2);
var k=j.getAttribute("data-linktype"),E=j.getAttribute("href");
s.on(j,"tap",function(r){
var s=j.getAttribute("href");
if(!s)return!1;
!!e.changeHref&&!/^https?:\/\/mp\.weixin\.qq\.com\/cgi-bin\//.test(s)&&(s=e.changeHref(s,b)),
r.preventDefault();
var _="";
c[j.getAttribute("data-itemshowtype")]&&(_=c[j.getAttribute("data-itemshowtype")]);
document.getElementById("js_link_dialog_name");
return y&&(d[E]&&d[E].subject_name&&"0"===d[E].item_show_type&&d[E].title?o(y,{
title:'即将打开公众号 "'+d[E].subject_name+'" 的'+c[d[E].item_show_type],
desc:w.innerText="《"+d[E].title+"》"
}):d[E]&&d[E].subject_name&&d[E].item_show_type>=0?o(y,{
desc:'即将打开公众号 "'+d[E].subject_name+'" 的'+c[d[E].item_show_type]
}):o(y,{
desc:"即将打开新的页面"
})),r.stopPropagation(),"undefined"==typeof g[E]&&(E.indexOf("mp.weixin.qq.com/s/")>-1||E.indexOf("mp.weixin.qq.com/s?")>-1)?p.setSum(110809,6,1):"undefined"==typeof g[E]&&p.setSum(110809,7,1),
g=function(){
return d[E]&&d[E].item_show_type>=0&&s.indexOf("mp.weixin.qq.com")>-1&&(l.isIOS||l.isAndroid)&&!l.isInMiniProgram&&l.isWechat?1==j.getAttribute("clicked")?!1:(u.invoke("openWebViewUseFastLoad",{
url:s,
item_show_type:d[E].item_show_type,
openType:0,
scene:1
},function(e){
console.log("openWebViewUseFastLoad res: ",e),e&&e.err_msg&&-1==e.err_msg.indexOf("ok")?u.invoke("openUrlWithExtraWebview",{
url:s,
openType:1
},function(e){
j.setAttribute("clicked",0),e&&e.err_msg&&-1==e.err_msg.indexOf("ok")&&(window.location.href=url);
}):(j.setAttribute("clicked",0),p.setSum(28839,37,1));
}),!1):void(l.isInMiniProgram?location.href=s:(l.isAndroid||l.isIOS)&&l.isWechat?a(s,{
sample:1,
reject:function(){
location.href=s;
}
}):location.href=s);
},("1"===k||i(j)||n(j))&&m.report([2,m.getRedirectType(E),"",f?1:0,window.source,m.getUrlData(E)]),
("1"===k||i(j)||n(j))&&f?(console.log("tap img link"),y.style.display="block",y._url=E,
(i(j)||n(j))&&(p.setSum(110809,8,1),y._type="OTHER"),document.querySelector("body").addEventListener("touchmove",t,{
passive:!1
})):g(),!1;
},!0),s.on(j,"click",function(e){
("1"===k||"2"===k||i(j)||n(j))&&f&&(e.preventDefault(),e.stopPropagation());
},!0);
}(j);
}
var s=e("biz_common/dom/event.js"),a=e("appmsg/open_url_with_webview.js"),u=e("biz_wap/jsapi/core.js"),l=e("biz_wap/utils/mmversion.js"),m=(e("biz_wap/utils/ajax.js"),
e("appmsg/popup_report.js")),p=e("biz_wap/utils/jsmonitor_report.js"),c={
0:"文章",
11:"文章",
8:"图片",
7:"语音",
5:"视频"
},d={};
if("undefined"!=typeof jumpInfo)for(var _=0;_<jumpInfo.length;_++)d[jumpInfo[_].url]={
title:jumpInfo[_].title,
item_show_type:jumpInfo[_].item_show_type,
subject_name:jumpInfo[_].subject_name,
link_type:jumpInfo[_].link_type
};
var g=function(){},f=window.img_popup,y=document.getElementById("js_link_dialog"),w=(document.getElementById("js_link_dialog_head"),
document.getElementById("js_link_dialog_body"));
return s.on(document.getElementById("js_link_dialog_ok"),"tap",function(e){
e.stopPropagation(),e.preventDefault(),"OTHER"===y._type&&p.setSum(110809,10,1),
m.report([4,m.getRedirectType(y._url),"",f?1:0,window.source,m.getUrlData(y._url)]),
document.querySelector("body").removeEventListener("touchmove",t),g&&g(),y.style.display="none";
}),s.on(document.getElementById("js_link_dialog_cancel"),"tap",function(e){
e.stopPropagation(),e.preventDefault(),document.querySelector("body").removeEventListener("touchmove",t),
"OTHER"===y._type&&p.setSum(110809,9,1),y.style.display="none",m.report([3,m.getRedirectType(y._url),"",f?1:0,window.source,m.getUrlData(y._url)]);
}),r;
});define("appmsg/copyright_report.js",["common/utils.js","biz_common/dom/event.js"],function(o){
"use strict";
function i(o){
var i=["/mp/copyrightreport?action=report&biz=",biz,"&scene=",o.scene,"&user_uin=",user_uin,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&mid=",window.mid,"&idx=",window.idx,"&source_biz=",window.source_biz,"&source_mid=",window.source_mid,"&source_idx=",window.source_idx,"&card_version=2","&show_appmsg_scene=",window.source,"&session_id=",window.sessionid,"&has_recommend_msg=",window.hasRecommendMsg,"&t=",Math.random()].join("");
window.isSg&&(i+="&from=sougou");
var e=new Image;
e.src=i.substr(0,1024);
}
function e(){
var o=__appmsgCgiData;
if("2"==o.copyright_stat){
for(var i=r("copyright_info"),e=r("js_article");i&&e!==i;)c.copyright_top+=i.offsetTop,
i=i.offsetParent;
t.on(window,"scroll",n),n();
}
}
function n(){
var o=window.pageYOffset||document.documentElement.scrollTop;
o+s.getInnerHeight()>c.copyright_top&&(i({
scene:"1",
card_pos:"0"
}),t.off(window,"scroll",n),n=c.copyright_top=null);
}
function r(o){
return document.getElementById(o);
}
var s=o("common/utils.js"),t=o("biz_common/dom/event.js"),c={
copyright_top:0
};
return{
card_click_report:i,
card_pv_report:e
};
});var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var i=arguments[t];
for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);
}
return e;
};
define("appmsg/async.js",["biz_wap/ui/weui.js","biz_common/utils/string/html.js","appmsg/reward_utils.js","appmsg/pay_read_utils.js","appmsg/pay_report_utils.js","pages/create_txv.js","pages/video_ctrl.js","biz_common/utils/url/parse.js","appmsg/img_copyright_tpl.html.js","appmsg/appmsgext.js","appmsg/share_tpl.html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","complain/localstorage.js","appmsg/log.js","rt/appmsg/getappmsgext.rt.js","a/a_utils.js","appmsg/related_article.js","appmsg/set_font_size.js","biz_wap/utils/device.js","biz_wap/utils/mmversion.js","pages/version4video.js","appmsg/read.js","appmsg/like.js","appmsg/like_and_share.js","appmsg/set_article_read.js","appmsg/comment.js","appmsg/iframe.js","redpackage/redpacketcover.js","appmsg/more_read.js","appmsg/album_keep_read.js"],function(e){
"use strict";
function t(){
for(var t=document.getElementsByTagName("iframe"),a=[],r=0,o=t.length;o>r;++r)a.push(t[r]);
t=null;
var n=document.getElementById("js_content"),s=n.offsetWidth,_=s/p.getRatio();
window.logs.video_cnt=0;
for(var r=0,o=a.length;o>r;++r){
var d=a[r],m=d.getAttribute("data-src")||"",l=d.getAttribute("src")||m;
if(l){
var c=e("pages/version4video.js");
if(0==l.indexOf("http://z.weishi.com/weixin/player.html"))l=l.replace(/width=\d+/g,"width="+s),
l=l.replace(/height=\d+/g,"height="+_),d.width=s,d.height=_,d.style.setProperty&&(d.style.setProperty("width",s+"px","important"),
d.style.setProperty("height",_+"px","important")),d.setAttribute("src",l),window.__addIdKeyReport&&window.__addIdKeyReport("28307",10),
window.logs.video_cnt++;else{
if(/http(s)*\:\/\/v\.qq\.com\/iframe\/(preview|player)\.html\?/.test(l)){
if(!c.isShowMpVideo()){
var w;
w=i(u?d:d),w&&j.push(w),"function"==typeof window.__addIdKeyReport&&(window.__addIdKeyReport("28307",10),
c.device.inWechat&&c.device.inWindowWechat?window.__addIdKeyReport("110644",0):c.device.inWechat&&c.device.inMacWechat&&window.__addIdKeyReport("110644",1));
}
window.logs.video_cnt++;
continue;
}
/^http(s)*\:\/\/mp\.weixin\.qq\.com\/mp\/readtemplate\?t=pages\/video_player_tmpl/.test(l)&&window.logs.video_cnt++;
}
}
}
j.length>0&&"function"==typeof window.__getVideoWh&&h.on(window,"resize",function(){
try{
for(var e=0,t=j.length;t>e;e++){
var i=j[e],a=i.playerObj;
if(a){
var r=window.__getVideoWh(i);
i.style.width=r.w+"px",i.style.height=r.h+"px",a.resize({
width:r.vw,
height:r.vh
});
}
}
}catch(o){}
},!1);
}
function i(e){
var t=e.getAttribute("data-src")||e.getAttribute("src"),i=l.getQuery("vid",t),r=e.getAttribute("data-vw"),o=e.getAttribute("data-vh"),n=e.getAttribute("data-ratio"),s=document.createElement("span");
s.setAttribute("data-ratio",n),s.id="js_tx_video_container_"+Math.random(),s.className="js_tx_video_container",
s.style.cssText=e.style.cssText,s.style.display="none";
var _=e.parentNode;
return _?(_.lastChild===e?_.appendChild(s):_.insertBefore(s,e.nextSibling),m.createTxVideo({
containerId:s.id,
vid:i,
width:r,
height:o,
autoplay:!1,
allowFullScreen:!0,
onSuccess:function(e){
s.playerObj=e.player,a(s,i),s.style.display="block";
},
onError:function(){}
}),_.removeChild(e),s):void 0;
}
function a(e,t){
if(t&&e){
var i=e.parentNode;
if(i){
for(var a=[],r=0,o=i.children.length;o>r;r++){
var n=i.children[r];
n.className.indexOf("img_loading")>=0&&n.getAttribute("data-vid")==t&&a.push(n);
}
for(var r=0,o=a.length;o>r;r++)i.removeChild(a[r]);
e.style.display="block";
}
}
}
function r(e){
if(e&&e.img_copy_info&&e.img_copy_info.list){
for(var t={},i=e.img_copy_info.list,a=window.__appmsgCgiData.copyright_stat,r=window.__appmsgCgiData.source_biz,o=0,n=i.length;n>o;o++){
var s=i[o];
if(2==s.type){
if(2==a&&r==s.source_uin)continue;
t[s.img_url]={
source_nickname:s.source_nickname,
source_uin:s.source_uin,
source_encode_biz:s.source_encode_biz||""
};
}
}
for(var _=document.getElementsByTagName("img"),o=0,n=_.length;n>o;o++){
var s=_[o],d=s.getAttribute("data-src")||s.getAttribute("data-backsrc")||"";
if(t[d]){
var m=document.createElement("div");
m.innerHTML=y.tmpl(c,t[d],!1);
{
var p=m.children[0],l=s.parentNode,w=l.insertBefore(p,s),g=w.children[0];
(function(e,t){
h.on(t,"click",function(){
var t="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene=112#wechat_redirect";
return-1!=navigator.userAgent.indexOf("WindowsWechat")||-1!=navigator.userAgent.indexOf("Mac OS")?(location.href=t,
!1):(f.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
}),!1);
});
})(t[d],g);
}
w.insertBefore(s,g);
}
}
}
}
function o(t){
var i=t.appmsgstat||{},a=t.appmsgact||{},r=t.paySubscribeInfo||{};
if(window.paySubscribeInfo=r,window.isFans=t.is_fans,window.appmsgstat||(window.appmsgstat=i),
i.show_read){
var o=document.getElementById("js_read_area3"),n=document.getElementById("readNum3");
if(!o||!n)return;
var d=e("appmsg/read.js");
d.showReadNum({
show:!0,
readAreaDom:o,
readNumDom:n,
readAreaDisplayValue:window.isPaySubscribe?"none":"block",
readNum:window.is_temp_url?window.read_num:i.read_num
});
}
if(f.invoke("handleHaokanAction",{
imgUrl:ori_head_img_url?ori_head_img_url:"",
link:msg_link.html(!1),
desc:msg_desc?msg_desc:"",
title:msg_title?msg_title.htmlDecode():"",
action:"update_recommend_status",
permission:window.is_temp_url||i.show_like_gray||!i.show_like||2!==appmsg_like_type?0:1,
recommend:i.liked?1:0
},function(){}),i.show_like){
var m=e("appmsg/like.js"),p=document.getElementById("like3"),l=document.getElementById("likeNum3");
if(!p||!l)return;
i.liked=window.is_temp_url?window.liked:i.liked;
var c=1===appmsg_like_type?"praised":"like_btn_liked";
m.showLikeNum({
show:!0,
likeAreaDom:p,
likeNumDom:l,
liked:i.liked,
className:c,
likeAreaDisplayValue:"inline",
likeNum:window.is_temp_url?window.like_num:i.like_num,
likeGray:!!i.show_like_gray
}),m.initLikeEvent({
likeAreaDom:p,
likeNumDom:l,
className:c,
prompted:i.prompted,
biz:window.biz,
mid:window.mid,
idx:window.idx,
appmsgid:window.appmsgid,
itemidx:window.itemidx,
is_temp_url:window.is_temp_url,
showType:i.style
});
}
var w=e("appmsg/like_and_share.js");
w.initLikeShareDom({
shareShow:t.share_flag&&!!t.share_flag.show&&!I.isInMiniProgram,
shareGray:t.share_flag&&!!t.share_flag.show_gray,
likeShow:!!i.show_old_like,
likeGray:!!i.show_old_like_gray,
likeNum:i.old_like_num?i.old_like_num:0,
isLike:i.old_liked?1:0,
isZaikan:i.show_like?1:0
});
var g=e("appmsg/set_article_read.js"),u=g.bindArticleReadEvent;
u();
var y=t.share_flag&&t.share_flag.show;
if(i&&!i.show_like&&!i.show_old_like&&!y){
var v=document.getElementById("js_bottom_opr_right");
v&&(v.style.display="none"),document.getElementById("js_bottom_opr_right")&&(document.getElementById("js_bottom_opr_right").style.display="none");
}
if(1===t.comment_enabled){
var j=e("appmsg/comment.js");
j.initComment(t);
}
b.setBackgroundClass(),s.init(_extends({
isFans:t.is_fans
},t.reward),{
reward_entrance_enable_for_preview:t.reward_entrance_enable_for_preview,
reward_wording:t.reward_wording,
reward_author_head:t.reward_author_head
}),window.isPaySubscribe&&_.init(r,{
rewardTotal:t.reward.reward_total||0,
rewardTotalCut:t.reward.is_reward_total_count_cut
});
var E=document.getElementById("js_cmt_container");
if(1==t.comment_entrance_enable_for_preview&&window.is_temp_url&&E&&(E.style.display="block"),
t.comment_entrance_enable_for_preview&&(document.getElementById("js_preview_cmt")&&(document.getElementById("js_preview_cmt").style.display="block"),
h.on(document.getElementById("js_preview_cmt_write"),"tap",function(e){
e.preventDefault(),window.weui.alert("预览状态下无法操作");
})),t.comment_enabled&&E&&(E.style.display="block"),I.isIOS&&"block"===E.style.display&&location.href.match(/fontScale=\d+/)&&z.os.ipad&&z.os.getNumVersion()>=13){
var S=location.href.match(/fontScale=(\d+)/);
x(E,parseFloat(S[1])/100);
}
k&&(i.old_liked||a.old_liked_before?k.render("praise",!0):i.liked||a.seen_before?k.render("like",!0):a.favorite_before?k.render("favorite",!0):a.share_before?k.render("share",!0):(k.isFromRecommend||!window.is_login)&&k.render("other",!0));
}
function n(){
var t=0,i="27613",a="50";
w.getData({
biz:biz,
appmsg_type:appmsg_type,
mid:mid,
sn:sn,
idx:idx,
scene:source,
title:msg_title,
ct:ct,
abtest_cookie:abtest_cookie,
devicetype:devicetype,
version:window.clientversion,
is_need_ticket:j&&j.length>0?1:0,
is_need_ad:0,
comment_id:comment_id,
is_need_reward:is_need_reward,
both_ad:0,
reward_uin_count:is_need_reward?3*s.getCountPerLine({
can_reward:!0
})-1:0,
send_time:window.send_time||"",
msg_daily_idx:msg_daily_idx,
item_show_type:window.item_show_type,
is_original:t,
is_only_read:is_only_read,
req_id:window.req_id||"",
pass_ticket:pass_ticket,
is_temp_url:window.is_temp_url||0,
more_read_type:more_read_type||0,
rtId:i,
rtKey:a,
appmsg_like_type:window.appmsg_like_type,
is_pay_subscribe:window.isPaySubscribe,
pay_subscribe_uin_count:window.isPaySubscribe?3*_.getCountPerLine():0,
has_red_packet_cover:window.__appmsgCgiData.has_red_packet_cover,
onSuccess:function(t){
if(t)try{
if(window.__second_open__&&t.pay_subscribe_info&&1*t.pay_subscribe_info.is_paid!=isPaid)return d.report110809(11),
(new Image).src="https://badjs.weixinbridge.com/badjs?id=244&level=4&from="+window.encodeURIComponent(window.location.host)+"&msg="+window.encodeURIComponent(window.location.href),
void f.invoke("handleMPPageAction",{
action:"paySuccess",
fullUrl:window.location.href,
itemShowType:window.item_show_type
},function(e){
d.report110809(e.err_msg.indexOf("ok")>-1?19:20),window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem("isPaid-"+window.biz+"-"+window.mid+"-"+window.idx,"1"),
window.location.href=window.location.href+"&r="+Math.random()+"#wechat_redirect";
});
if(t&&t.base_resp&&t.base_resp.wxtoken&&(window.wxtoken=t.base_resp.wxtoken),window.fromWeixinCached&&e("appmsg/iframe.js"),
r(t),t.ret)return;
if(t.red_packet_cover_data&&t.red_packet_cover_data.cover_uri_data&&t.red_packet_cover_data.cover_uri_data.length>0){
var n=e("redpackage/redpacketcover.js");
n.render({
list:t.red_packet_cover_data.cover_uri_data
});
}
var s=document.getElementById("js_more_read_area");
if(s&&t&&t.more_read_list&&t.more_read_list.length&&e("appmsg/more_read.js")(s,t.more_read_list),
window.isFans=t.is_fans,o({
appmsgstat:t.appmsgstat,
appmsgact:t.appmsgact,
comment_enabled:t.comment_enabled,
comment_count:t.comment_count,
friend_comment_enabled:t.friend_comment_enabled,
only_fans_can_comment:t.only_fans_can_comment,
only_fans_days_can_comment:t.only_fans_days_can_comment,
is_fans_days:t.is_fans_days,
reward:{
reward_total:t.reward_total_count,
is_reward_total_count_cut:t.is_reward_total_count_cut,
reward_head_imgs:t.reward_head_imgs||[],
can_reward:t.can_reward,
user_can_reward:t.user_can_reward,
reward_qrcode_ticket:t.reward_qrcode_ticket,
timestamp:t.timestamp,
reward_author_head:t.reward_author_head,
rewardsn:t.rewardsn,
scene:source,
is_need_reward:is_need_reward,
title:msg_title,
author_id:author_id,
appmsgextRtId:i,
appmsgextRtKey:a,
can_whisper:t.can_whisper
},
reward_entrance_enable_for_preview:t.reward_entrance_enable_for_preview,
reward_wording:t.reward_wording,
reward_author_head:t.reward_author_head,
comment_entrance_enable_for_preview:t.comment_entrance_enable_for_preview,
share_redirect_url:t.share_redirect_url||"",
logo_url:t.logo_url,
nick_name:t.nick_name,
is_fans:t.is_fans,
paySubscribeInfo:t.pay_subscribe_info,
share_flag:t.share_flag
}),t.appmsg_album_extinfo){
var _=e("appmsg/album_keep_read.js");
_.init(t.appmsg_album_extinfo);
}
}catch(m){
v("[Appmsg] error parse async data, biz="+biz+", mid="+mid);
var p=new Image;
return p.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=1&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(m.toString())+"&r="+Math.random()).substr(0,1024),
console&&console.error(m),void("undefined"!=typeof window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.onError(m));
}
},
onError:function(){
var e=new Image;
e.src="http://mp.weixin.qq.com/mp/jsreport?1=1&key=2&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key2]ajax_err&r="+Math.random();
}
});
}
e("biz_wap/ui/weui.js"),e("biz_common/utils/string/html.js");
var s=e("appmsg/reward_utils.js"),_=e("appmsg/pay_read_utils.js"),d=e("appmsg/pay_report_utils.js"),m=e("pages/create_txv.js"),p=e("pages/video_ctrl.js"),l=e("biz_common/utils/url/parse.js"),c=e("appmsg/img_copyright_tpl.html.js"),w=e("appmsg/appmsgext.js"),g=(e("appmsg/share_tpl.html.js"),
navigator.userAgent),u=-1!=g.indexOf("MicroMessenger"),h=(-1!=navigator.userAgent.indexOf("WindowsWechat"),
e("biz_common/dom/event.js")),f=(e("biz_wap/utils/ajax.js"),e("biz_wap/jsapi/core.js")),y=e("biz_common/tmpl.js"),v=(e("complain/localstorage.js"),
e("appmsg/log.js")),b=(e("rt/appmsg/getappmsgext.rt.js"),e("a/a_utils.js")),k=e("appmsg/related_article.js"),j=[],x=e("appmsg/set_font_size.js").setFontSize,z=e("biz_wap/utils/device.js"),I=e("biz_wap/utils/mmversion.js");
t(),n();
});define("biz_wap/ui/lazyload_img.js",["biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_common/dom/attr.js","biz_common/ui/imgonepx.js"],function(t){
"use strict";
function i(){
var t=this.images;
if(!t||t.length<=0)return!1;
var i=window.pageYOffset||document.documentElement.scrollTop,e=window.innerHeight||document.documentElement.clientHeight,o=this.offset||60,n=0;
if("wifi"==window.networkType){
var s={
bottom:1,
top:1
};
this.lazyloadHeightWhenWifi&&(s=this.lazyloadHeightWhenWifi()),o=Math.max(s.bottom*e,o),
n=Math.max(s.top*e,n);
}
for(var r=+new Date,c=[],d=this.sw,f=this,g=-1,u=0,p=t.length;p>u;u++)!function(t,i){
var s=t.el.getBoundingClientRect(),r=t.src;
if(r){
(r.match(/\:\/\/[^\/]+\/mmbiz\//)&&r.indexOf("wx_fmt=gif")>-1||r.match(/\:\/\/[^\/]+\/mmbiz_gif\//))&&g++;
var f=n,u=o;
(r.match(/\:\/\/[^\/]+\/mmbiz\//)&&r.indexOf("wx_fmt=gif")>-1||r.match(/\:\/\/[^\/]+\/mmbiz_gif\//))&&l&&(f=0,
u=60),!t.show&&(s.top<=0&&s.top+s.height+f>=0||s.top>0&&s.top<e+u)&&(i.inImgRead&&(s.top<=0&&s.top+s.height>=0||s.top>0&&s.top<e)&&i.inImgRead(r,networkType),
i.changeSrc&&(r=i.changeSrc(t.el,r,g)),t.el.onerror=function(){
var e=this;
!!i.onerror&&i.onerror(t.el.src,e);
},t.el.onload=function(){
var e=this;
if("data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="!=e.src){
var o=e.getAttribute("data-forceheight");
o?(e.removeAttribute("data-forceheight"),h(e,"height",o,"important")):h(e,"height","auto","important"),
e.getAttribute("_width")?h(e,"width",e.getAttribute("_width"),"important"):h(e,"width","auto","important"),
!!i.onload&&i.onload(t.el.src,e);
}
},m(t.el,"src",r),c.push(r),t.show=!0,h(t.el,"visibility","visible","important")),
a.isWp&&1*t.el.width>d&&(t.el.width=d);
}
}(t[u],f);
c.length>0&&this.detect&&this.detect({
time:r,
loadList:c,
scrollTop:i
});
}
function e(){
var t=document.getElementsByTagName("img"),e=[],o=this.container,n=this.attrKey||"data-src",a=o.offsetWidth,s=0,r=this.imgOccupied||!1,l=this.crossOrigin||!1;
o.currentStyle?s=o.currentStyle.width:"undefined"!=typeof getComputedStyle&&(s=getComputedStyle(o).width),
this.sw=1*s.replace("px","");
for(var d=0,f=t.length;f>d;d++){
var g=t.item(d),u=m(g,n),p=m(g,"src");
if(u&&!(p&&p.indexOf("data:image/gif;base64")<0)){
var w=100;
if(g.dataset&&g.dataset.ratio){
var A=1*g.dataset.ratio,b=1*g.dataset.w||a;
"number"==typeof A&&A>0?(b=a>=b?b:a,w=b*A,r||(g.style.width&&g.setAttribute("_width",g.style.width),
h(g,"width",b+"px","important"),h(g,"visibility","visible","important"),g.setAttribute("src",c))):h(g,"visibility","hidden","important");
}else h(g,"visibility","hidden","important");
r||h(g,"height",w+"px","important"),l&&-1==u.indexOf("mmsns.qpic.cn")&&!(u.match(/\:\/\/[^\/]+\/mmbiz\//)&&u.indexOf("wx_fmt=gif")>-1||u.match(/\:\/\/[^\/]+\/mmbiz_gif\//))&&(g.crossOrigin="anonymous"),
e.push({
el:g,
src:u,
height:w,
show:!1
});
}
}
this.images=e,i.call(this);
}
function o(t){
if(this.__called_first_time)i.call(this,t),this.__called_first_time=!1;else if(!this.debounce){
this.debounce=!0;
var e=this;
setTimeout(function(){
i.call(e,t),e.debounce=!1;
},500);
}
}
function n(t){
s.on(window,"scroll",function(i){
o.call(t,i);
}),setTimeout(function(){
e.call(t,{});
},0),s.on(document,"touchmove",function(i){
o.call(t,i);
}),t.__called_first_time=!0,o.call(t,{});
}
var a=t("biz_wap/utils/mmversion.js"),s=t("biz_common/dom/event.js"),r=t("biz_common/dom/attr.js"),m=r.attr,h=r.setProperty,c=t("biz_common/ui/imgonepx.js"),l=!0;
return n;
});define("biz_common/log/jserr.js",[],function(){
function e(e,n){
return e?(r.replaceStr&&(e=e.replace(r.replaceStr,"")),n&&(e=e.substr(0,n)),encodeURIComponent(e.replace("\n",","))):"";
}
var r={};
return window.onerror=function(n,o,t,c,i){
return"Script error."==n||o?"undefined"==typeof r.key||"undefined"==typeof r.reporturl?!0:void setTimeout(function(){
c=c||window.event&&window.event.errorCharacter||0;
var l=[];
if(l.push("msg:"+e(n,100)),o&&(o=o.replace(/[^\,]*\/js\//g,"")),l.push("url:"+e(o,200)),
l.push("line:"+t),l.push("col:"+c),i&&i.stack)l.push("info:"+e(i.stack.toString(),200));else if(arguments.callee){
for(var s=[],u=arguments.callee.caller,a=3;u&&--a>0&&(s.push(u.toString()),u!==u.caller);)u=u.caller;
s=s.join(","),l.push("info:"+e(s,200));
}
var p=new Image;
if(p.src=(r.reporturl+"&key="+r.key+"&content="+l.join("||")).substr(0,1024),window.console&&window.console.log){
var f=l.join("\n");
try{
f=decodeURIComponent(f);
}catch(d){}
console.log(f);
}
},0):!0;
},function(e){
r=e;
};
});define("appmsg/share.js",["biz_common/utils/string/html.js","appmsg/cdn_img_lib.js","biz_common/jquery.md5.js","biz_common/utils/url/parse.js","biz_wap/utils/mmversion.js","appmsg/appmsg_report.js","appmsg/malicious_wording.js","biz_wap/utils/jsmonitor_report.js","appmsg/related_article.js","biz_wap/jsapi/core.js"],function(e){
"use strict";
function i(e,i,n){
var t="",s="";
try{
""!=tid&&(s="tid="+tid+"&aid=54");
var a=e.split("?")[1]||"";
if(a=a.split("#")[0],""==a);else{
var r=[a,"mpshare=1","scene="+i,"srcid="+srcid,"sharer_sharetime="+n,"sharer_shareid="+l];
""!=s&&r.push(s),a=r.join("&"),t=e.split("?")[0]+"?"+a+"#"+(e.split("#")[1]||"");
}
}catch(o){
t="";
}
return t||(t=location.href+"#wechat_redirect",m.setLogs({
id:28307,
key:47,
value:1,
lc:1,
log0:"[share_link]["+encodeURIComponent(location.href)+"]["+encodeURIComponent(e)+"]["+encodeURIComponent(msg_link)+"]"
})),t;
}
function n(e,i,n,t){
var s=arguments.length<=4||void 0===arguments[4]?0:arguments[4];
r.shareReport({
link:e,
action_type:n,
sharer_sharetime:t,
sharer_shareid:l,
share_source:0===s?1:2
});
}
function t(e,i){
return e.isCDN()&&(e=s.addParam(e,"wxfrom",i,!0)),e;
}
e("biz_common/utils/string/html.js"),e("appmsg/cdn_img_lib.js"),e("biz_common/jquery.md5.js");
var s=e("biz_common/utils/url/parse.js"),a=e("biz_wap/utils/mmversion.js"),r=e("appmsg/appmsg_report.js"),o=e("appmsg/malicious_wording.js"),m=e("biz_wap/utils/jsmonitor_report.js"),c=e("appmsg/related_article.js"),l=window.md5(window.user_uin),_=e("biz_wap/jsapi/core.js");
_.call("hideToolbar"),_.call("showOptionMenu");
var u=msg_title.htmlDecode(),h=(msg_source_url.htmlDecode(),""),p=cdn_url_1_1||msg_cdn_url||ori_head_img_url||round_head_img,d=p,g=msg_link.htmlDecode(),u=msg_title.htmlDecode(),f=msg_desc.htmlDecode();
f=f||"",f=f.replace(/<br\/>/g,"\n"),idx>1&&document.getElementById("js_content")&&1446652800>ct&&(f=document.getElementById("js_content").innerHTML.replace(/<\/?[^>]*\/?>/g,"").htmlDecode().replace(/^(\s*)|(\s*)$/g,"").substr(0,54)),
p.isCDN()&&(p=p.replace(/\/0$/,"/300"),p=p.replace(/\/0\?/,"/300?")),d.isCDN()&&(d=d.replace(/\/0$/,"/640"),
d=d.replace(/\/0\?/,"/640?")),malicious_title_reason_id&&(u=o.maliciousTitleMap[malicious_content_type][malicious_title_reason_id]||u,
f=o.maliciousDescMap[malicious_content_type][malicious_title_reason_id]||f,1!=malicious_content_type&&(p="https://mmbiz.qlogo.cn/mmbiz_png/cVgP5bCElFiayFgbgEB9iaDt7hLicfz9RrXGM0LpaQ0TUic2gP7lbbqU3jCD8ibonicgIa3p99yjx1f1P26HChraeRUg/0?wx_fmt=png")),
"1"==is_limit_user&&_.call("hideOptionMenu"),window.is_temp_url&&_.invoke("hideMenuItems",{
menuList:["menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:qzone","menuitem:share:weibo","menuItem:share:WeiboApp","menuItem:share:QZone","menuitem:facebook","menuItem:copyUrl","menuItem:share:email","menuitem:copy_url","menuitem:share:haokan"]
},function(){});
var w="https://res.wx.qq.com/op_res/Fwh9olR917lxUMxpJVM5sCCyrQOJSm68IEt-HfL7vpc5-_etzmyuLg1kPdU6RNRX";
_.on("menu:share:appmessage",function(e){
if(window.is_wash){
var s=Date.now();
_.invoke("sendAppMessage",{
img_url:w,
img_width:"640",
img_height:"640",
link:i(g,a,s),
desc:"你可以阅读以下原创作者的内容",
title:"原文存在洗稿行为"
},function(){
n(g,fakeid,a,s,e.shareScene);
});
}else{
var a=1,r=t(p,"1");
e&&"favorite"==e.scene&&(a=24,r=t(p,"4"),c&&c.render&&c.render("share")),1==malicious_content_type&&(r="https://mmbiz.qlogo.cn/mmbiz_png/cVgP5bCElFiayFgbgEB9iaDt7hLicfz9RrXGM0LpaQ0TUic2gP7lbbqU3jCD8ibonicgIa3p99yjx1f1P26HChraeRUg/0?wx_fmt=png");
var s=Date.now();
_.invoke("sendAppMessage",{
appid:h,
img_url:r,
img_width:"640",
img_height:"640",
link:i(g,a,s),
desc:f,
title:u
},function(){
n(g,fakeid,a,s,e.shareScene),c&&c.render&&c.render("share");
});
}
}),_.on("menu:share:timeline",function(e){
if(window.is_wash){
var s=Date.now();
_.invoke("shareTimeline",{
img_url:w,
img_width:"640",
img_height:"640",
link:i(g,2,s),
desc:"",
title:"原文存在洗稿行为，你可以阅读以下原创作者的内容"
},function(){
n(g,fakeid,2,s,e.shareScene);
});
}else{
var r=p;
a.isIOS||(r=t(p,"2"));
var s=Date.now();
_.invoke("shareTimeline",{
img_url:r,
img_width:"640",
img_height:"640",
link:i(g,2,s),
desc:f,
title:u
},function(){
n(g,fakeid,2,s,e.shareScene),c&&c.render&&c.render("share");
});
}
});
_.on("menu:share:weiboApp",function(){
var e=Date.now();
_.invoke("shareWeiboApp",{
img_url:p,
link:i(g,3,e),
title:u
},function(){
n(g,fakeid,3,e);
});
}),_.on("menu:share:facebook",function(){
var e=Date.now();
n(g,fakeid,7,e),_.invoke("shareFB",{
img_url:d,
img_width:"640",
img_height:"640",
link:i(g,43,e),
desc:f,
title:u
},function(){});
}),_.on("menu:share:QZone",function(){
var e=t(p,"6"),s=Date.now();
n(g,fakeid,5,s),_.invoke("shareQZone",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(g,22,s),
desc:f,
title:u
},function(){});
}),_.on("menu:share:qq",function(){
var e=t(p,"7"),s=Date.now();
n(g,fakeid,5,s),_.invoke("shareQQ",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(g,23,s),
desc:f,
title:u
},function(){});
}),_.on("menu:share:email",function(){
var e=Date.now();
n(g,fakeid,5,e),_.invoke("sendEmail",{
content:i(g,5,e),
title:u
},function(){});
}),_.on("sys:record",function(){
_.invoke("recordHistory",{
link:g,
title:u,
source:nickname,
img_url:p
},function(){});
});
});define("appmsg/cdn_img_lib.js",[],function(){
"use strict";
function t(t){
return!!(t.match(/\:\/\/[^\/]+\/mmbiz\//)&&t.indexOf("wx_fmt=gif")>-1)||!!t.match(/\:\/\/[^\/]+\/mmbiz_gif\//)&&-1==t.indexOf("/s640");
}
function i(t){
return!!(t.match(/\:\/\/[^\/]+\/mmbiz\//)&&t.indexOf("wx_fmt=png")>-1)||!!t.match(/\:\/\/[^\/]+\/mmbiz_png\//);
}
function n(t){
return!!(t.match(/\:\/\/[^\/]+\/mmbiz\//)&&t.indexOf("wx_fmt=jpg")>-1)||!!t.match(/\:\/\/[^\/]+\/mmbiz_jpg\//);
}
function r(t){
return t.indexOf("tp=webp")>-1;
}
function e(t){
return t.indexOf("tp=wxpic")>-1;
}
String.prototype.http2https=function(){
return this.replace(/http:\/\/mmbiz\.qpic\.cn\//g,"https://mmbiz.qpic.cn/");
},String.prototype.https2http=function(){
var t=this.replace(/https:\/\/mmbiz\.qlogo\.cn\//g,"http://mmbiz.qpic.cn/");
return t=t.replace(/https:\/\/mmbiz\.qpic\.cn\//g,"http://mmbiz.qpic.cn/");
},String.prototype.isCDN=function(){
return 0==this.indexOf("http://mmbiz.qpic.cn/")||0==this.indexOf("https://mmbiz.qpic.cn/")||0==this.indexOf("https://mmbiz.qlogo.cn/")||0==this.indexOf("http://res.wx.qq.com/")||0==this.indexOf("https://res.wx.qq.com/");
},String.prototype.nogif=function(){
var i=this.toString();
return t(i)?i.replace(/\/\d+\?/g,"/s640?").replace(/\/\d+\//g,"/s640/").replace(/\/\d+\./g,"/s640.").replace("wx_fmt=gif",""):i;
},String.prototype.isGif=function(){
var i=this.toString();
return t(i);
},String.prototype.isWxpic=function(){
var t=this.toString();
return e(t);
},String.prototype.isWebp=function(){
var t=this.toString();
return r(t);
},String.prototype.canHevc=function(){
var r=this.toString();
return n(r)||i(r)||t(r);
},String.prototype.getImgType=function(){
var p=this.toString();
return t(p)?"gif":r(p)?"webp":e(p)?"wxpic":i(p)?"png":n(p)?"jpg":"unknow";
},String.prototype.getOriginImgType=function(){
var r=this.toString();
return t(r)?"gif":i(r)?"png":n(r)?"jpg":"unknow";
},String.prototype.imgChange640=function(){
var t=this.toString();
t=t.replace(/(\?tp=webp)|(\?tp=wxpic)|(&tp=webp)|(&tp=wxpic)/g,"");
var i=new Date;
return i.setFullYear(2014,9,1),t.isCDN()&&1e3*ct>=i.getTime()&&!t.isGif()&&(t=t.replace(/\/0$/,"/640"),
t=t.replace(/\/0\?/,"/640?"),t=t.replace(/\/0\./,"/640.")),t;
};
});function _toConsumableArray(e){
if(Array.isArray(e)){
for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];
return r;
}
return Array.from(e);
}
function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var r=arguments[t];
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);
}
return e;
},_slicedToArray=function(){
function e(e,t){
var r=[],n=!0,a=!1,i=void 0;
try{
for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);
}catch(s){
a=!0,i=s;
}finally{
try{
!n&&l["return"]&&l["return"]();
}finally{
if(a)throw i;
}
}
return r;
}
return function(t,r){
if(Array.isArray(t))return t;
if(Symbol.iterator in Object(t))return e(t,r);
throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
}();
define("complain/utils/userpainter.js",["complain/utils/dom.js","complain/utils/const.js"],function(e,t,r){
"use strict";
function n(e,t){
return e.reduce(function(e,r){
return"undefined"==typeof r[t]?e:(e[r[t]]||(e[r[t]]=[]),e[r[t]].push(r),e);
},{});
}
function a(){
return'以下内容存在争议 <a style="color: var(--weui-LINK);" target="_blank" href="https://mp.weixin.qq.com/s/_2kC-fXw7UjneZSrsC9CVQ">了解更多</a>';
}
function i(e,t){
var r="object"===("undefined"==typeof e?"undefined":_typeof(e))?e:R[e];
if(!r.dataset.hasBanner){
var n=document.createElement("div");
n.dataset.hasBanner=1,n.style="background-color: var(--weui-BG-1);font-size: 14px;color: var(--weui-FG-2);text-align: left;margin-top: 20px;margin-bottom: 4px;padding: 4px 8px 6px 8px;border-radius:4px;";
var a=document.createElement("span");
a.style="color: var(--weui-FG-0);padding: 2px;display: inline-block;vertical-align: middle; width: 20px;height: 20px;margin-right: 4px; background-size: cover;background-position: center center;-webkit-mask: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E  %3Cpath fill-opacity='.3' fill-rule='evenodd' d='M10 1.667a8.333 8.333 0 1 1 0 16.666 8.333 8.333 0 0 1 0-16.666zm-.004 11.115a.732.732 0 0 0-.746.735c0 .416.33.735.746.735a.73.73 0 0 0 .752-.735.73.73 0 0 0-.752-.735zm.638-7.669h-1.27l.091 6.33h1.088l.091-6.33z'/%3E%3C/svg%3E\") no-repeat 50% 50%;mask: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E  %3Cpath fill-opacity='.3' fill-rule='evenodd' d='M10 1.667a8.333 8.333 0 1 1 0 16.666 8.333 8.333 0 0 1 0-16.666zm-.004 11.115a.732.732 0 0 0-.746.735c0 .416.33.735.746.735a.73.73 0 0 0 .752-.735.73.73 0 0 0-.752-.735zm.638-7.669h-1.27l.091 6.33h1.088l.091-6.33z'/%3E%3C/svg%3E\") no-repeat 50% 50%;background-color: currentColor;";
var i=document.createElement("span");
i.style="display: inline-block;line-height: 14px;vertical-align: middle;",i.innerHTML=t,
n.appendChild(a),n.appendChild(i),r.parentNode.insertBefore(n,r,null),r.dataset.hasBanner=1;
}
}
function o(e,t,r){
for(var n=e.length,a=[].concat(_toConsumableArray(Array(n))).map(function(){
return"〇";
}).join(""),i=t.childNodes,o=r,l=0;l<i.length;l++){
var s=i[l];
3===s.nodeType?o>s.data.length?o-=s.data.length:s.data=s.data.slice(0,o).concat(a).concat(s.data.slice(o+n)):1===s.nodeText&&(o-=s.innerText&&s.innerText.length||0);
}
}
function l(e,t,r){
var n=e.length,a=w.findChildIndex(t,r),i=a.$node,o=a.realOffset;
try{
i.splitText(o);
}catch(l){
"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.report("ArticleMask:Error","splitText Error",{
mid:"mmbizwap:articlemask_Monitor",
view:"wap_business",
_info:{
type:"disputeText textNode",
data:e,
cursor:r
}
});
}
var s=i.nextSibling;
try{
s.splitText(n);
}catch(l){
"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.report("ArticleMask:Error","splitText Error",{
mid:"mmbizwap:articlemask_Monitor",
view:"wap_business",
_info:{
type:"disputeText nextSibling",
data:e,
cursor:r
}
});
}
var d=document.createElement("span");
d.style="background-color: rgba(0,0,0,0.10);",d.appendChild(s.cloneNode(!0)),s.parentNode.replaceChild(d,s);
}
function s(e,t){
var r=document.createElement("span");
r.style="position:relative;display: inline-block;";
var n=document.createElement("span");
n.style="\n            position: absolute;\n            top: 4px;\n            left: 4px;\n            display: inline-block;\n            vertical-align: middle;\n            width: 24px;\n            height: 24px;\n            background-size: cover;\n            background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E  %3Cpath fill='%23FFF' fill-rule='evenodd' d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-.004 13.339a.878.878 0 0 0-.896.882c0 .499.396.882.896.882.512 0 .902-.383.902-.882 0-.5-.39-.882-.902-.882zm.765-9.203h-1.524l.11 7.596h1.305l.11-7.596z'/%3E%3C/svg%3E\");\n    ";
var a=t.parentNode;
r.appendChild(t.cloneNode(!1)),a.replaceChild(r,t),r.appendChild(n);
}
function d(e,t){
t.style.filter="blur(10px)",t.style["-webkit-filter"]="blur(10px)";
}
function c(e,t){
var r=e.data,n=e.meta,a=e.index,i=e.idx,o=t.data,l=(n||"")+r;
if(-1===o.indexOf(l))return{
hit:!1
};
var s=w.getNodeByIndex(R[i],a);
s?k++:"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.report("ArticleMask:Error","text node cannot find",{
mid:"mmbizwap:articlemask_Monitor",
view:"wap_business",
_info:{
anchor:e,
wholeText:o
}
});
var d=s&&s.innerText.indexOf(l)+(n||"").length;
return{
hit:!!s,
$hitDom:s,
cursor:d
};
}
function u(e,t){
var r=e.index,n=e.idx,a=e.data,i=R[n],o=i.querySelectorAll("img"),l=o[r],s=l&&(l.getAttribute("data-src")||l.getAttribute("src"));
return s===a?(k++,{
hit:!0,
$hitDom:t,
cursor:0
}):{
hit:!1
};
}
function p(e,t){
return function(r,n,a){
var i=r(e,t),o=i.hit,l=i.$hitDom,s=i.cursor;
o&&(n(e.data,l,s),a());
};
}
function f(e,t){
var r=[],n=[].concat(_toConsumableArray(e));
r.push(t);
var a=null,i=function(){
a=n.shift();
};
for(i();r.length>0&&n.length>=0&&a;){
var f=r.pop();
if(f&&a){
var h=f.nodeType,m=f.tagName,g=p(a,f);
if(3!==h)if(1!==h||m!==T)for(var v=f.childNodes,x=v.length-1;x>=0;x--)r.push(v[x]);else a.type===B.img&&g(u,a.status===J.ban?d:s,i);else a.type===B.text&&g(c,a.status===J.ban?o:l,i);
}
}
}
function h(e){
if(!e)return{};
var t=e.split("|"),r=_slicedToArray(t,2),n=r[0],a=r[1],i=a.split(" "),o=_slicedToArray(i,2),l=o[0],s=o[1];
return{
selector:n.replace(/&gt;/g,">"),
total:1*l,
index:1*s
};
}
function m(e,t){
if(!e)return null;
var r=t.type,n=t.data,a=t.meta;
if(r===B.text){
var i=e.innerText||"",o=(a||"")+n;
if(-1!==i.indexOf(o)){
var l=i.indexOf(o)+(a||"").length;
return{
cursor:l,
node:e
};
}
}
if(r===B.img){
var s=e&&(e.getAttribute("data-src")||e.getAttribute("src"));
if(s===n)return{
cursor:0,
node:e
};
}
return null;
}
function g(e,t,r){
var n=e.type,a=e.data,i=e.status;
i===J.ban&&(n===B.text&&o(a,t,r),n===B.img&&d(a,t));
}
function v(e,t){
R=w.getParaList(e,{
getNestedStructure:!0,
removeIgoreEle:!1
});
var r=n(t,"idx");
R&&((R||[]).forEach(function(e,t){
var n=r[t];
n&&n.length>0&&(i(t,a(n[0])),f(n,e));
}),t&&t.length!==k&&"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.report("ArticleMask:Error","totalHit",{
mid:"mmbizwap:articlemask_Monitor",
view:"wap_business",
_info:{
totalHit:k,
anchors:t
}
}));
}
function x(e,t){
var r=w.getPureBlockNode(e);
r&&i(r,a(t));
}
function _(e,t){
var r=[],n=[],a=[],i={};
t.forEach(function(t,o){
var l=h(t.selector),s=l.selector,d=l.index,c=l.total,u=i[s];
u||(u=e.querySelectorAll(s),i[s]=u);
var p=d,f=d,g=[],v=null,_=0,y=0;
for(g.push(u[d]);g.length;){
var b=g.pop(),w=m(b,t);
if(y++,w&&w.node){
v=w.node,_=w.cursor;
break;
}
p-1>=0&&u[p-1]&&(g.push(u[p-1]),p-=1),f+1<u.length&&u[f+1]&&(g.push(u[f+1]),f+=1);
}
v?(a.push({
anchor:t,
node:v,
cursor:_
}),x(v,t)):s&&-1!==s.lastIndexOf(">")&&r.push(_extends({},t,{
selector:s&&s.slice(0,s.lastIndexOf(">"))+("|"+c+" "+d)
})),n[o]=y;
}),a.forEach(function(e){
g(e.anchor,e.node,e.cursor);
}),r.length&&(_(e,r),"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.report("ArticleMask:Error","missNodes",{
mid:"mmbizwap:articlemask_Monitor",
view:"wap_business",
_info:{
missNodes:r
}
})),"undefined"!=typeof WX_BJ_REPORT&&WX_BJ_REPORT.BadJs&&WX_BJ_REPORT.BadJs.report("ArticleMask:Info","querycount",{
mid:"mmbizwap:articlemask_Monitor",
view:"wap_business",
_info:{
countList:n
}
});
}
function y(e,t){
_(e,t);
}
function b(e,t){
var r=[],n=[];
t.forEach(function(e){
e.selector?n.push(e):r.push(e);
}),y(e,n),r.length>0&&v(e,r);
}
var w=e("complain/utils/dom.js"),E=e("complain/utils/const.js"),B=E.NODE_TYPE,T=E.IMG_TAG,R=[],k=0,J={
auditing:1,
ban:2
};
r.exports={
init:b
};
});define("appmsg/subscribe/subscribe.js",["appmsg/subscribe/subscribe_btn_tpl.html.js","biz_common/tmpl.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","appmsg/set_font_size.js","pages/utils.js"],function(e){
"use strict";
function t(e){
_=e.fontScale,setTimeout(function(){
for(var e=document.getElementsByTagName("wx-open-subscribe")||[],t=0;t<e.length;t++)e[t].setAttribute("size",g),
e[t].setAttribute("scale",_),g++;
},50);
}
function n(){
for(var e=document.getElementsByClassName("js_subsc_btn")||[],t=0;t<e.length;t++){
var n=e[t];
c.on(n,"click",function(){
window.uin&&window.key&&/micromessenger/i.test(window.navigator.userAgent)&&!/WindowsWechat/i.test(window.navigator.userAgent)?document.getElementById("js_update_dialog").style.display="block":window.weui.alert("请在手机微信内操作");
});
}
c.on(document.getElementById("js_update_cancel"),"click",function(){
document.getElementById("js_update_dialog").style.display="none";
}),c.on(document.getElementById("js_update_confirm"),"click",function(){
d.jumpUrl(r,!0);
});
}
function s(){
var e=document.getElementById("js_content");
if(e){
p=document.getElementsByTagName("mpsubscribe")||[];
for(var s=0;s<p.length;s++){
var i=p[s],c=i.getAttribute("data-templateidlist")||[],a=i.getAttribute("data-index")||0,u=document.createElement("div");
u.innerHTML=m.tmpl(o,{
templateIdList:c,
username:window.user_name,
scene:window.is_temp_url?3:2,
scale:_,
supportWxOpen:window.__is_support_wxOpen,
appmsgIndex:a
}),u.firstElementChild&&i.appendChild(u.firstElementChild);
}
l(t),n();
}
}
function i(){
s();
}
var o=e("appmsg/subscribe/subscribe_btn_tpl.html.js"),m=e("biz_common/tmpl.js"),c=e("biz_common/dom/event.js"),a=e("biz_common/utils/url/parse.js"),u=e("appmsg/set_font_size.js"),l=u.onFontScaleChange,r=window.location.protocol+"//support.weixin.qq.com/update/",d=e("pages/utils.js"),p=[],g=1,_=a.getQuery("fontScale");
i();
});;define('page/appmsg_new/not_in_mm.css', [], function(require, exports, module) {
	return ".not_in_mm .rich_media_meta_list{position:relative;z-index:1}.not_in_mm .rich_media_content{position:relative}.not_in_mm .profile_container{width:535px;position:absolute;top:100%;left:0;margin-top:10px;font-size:14px;*margin-top:10px}.not_in_mm .profile_inner{position:relative;padding:30px 22px 36px 144px;background-color:#fff;border:1px solid #d9dadc;*zoom:1}.not_in_mm .profile_arrow_wrp{position:absolute;left:22px;top:-8px}.not_in_mm .profile_arrow{display:inline-block;width:0;height:0;border-width:8px;border-style:dashed;border-color:transparent;border-top-width:0;border-bottom-color:#d9dadc;border-bottom-style:solid;position:absolute;top:0}.not_in_mm .profile_arrow.arrow_in{margin-top:1px;border-bottom-color:#fff}.not_in_mm .profile_avatar{position:absolute;width:100px;left:24px;top:24px;height:100px!important}.not_in_mm .profile_nickname{font-size:16px;font-weight:400}.not_in_mm .profile_meta{margin-top:5px;overflow:hidden;*zoom:1}.not_in_mm .profile_meta_label{float:left;width:4.3em;margin-right:1em}.not_in_mm .profile_meta_value{display:block;overflow:hidden;*zoom:1;color:#adadad}.not_in_mm .icon_verify{width:16px;height:16px;vertical-align:middle;display:inline-block;line-height:9em;overflow:hidden}.not_in_mm .icon_verify.success{background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/wxverify\/icon_verify_success531a3f.png) no-repeat 0 0}@media(prefers-color-scheme:dark){.not_in_mm .profile_inner{background-color:#2c2c2c;border-color:rgba(255,255,255,0.05)}.not_in_mm .profile_arrow{border-bottom-color:rgba(255,255,255,0.05)}.not_in_mm .profile_arrow.arrow_in{border-bottom-color:#2c2c2c}.not_in_mm .profile_meta_value{color:rgba(255,255,255,0.5)}}.not_in_mm .rich_media_inner{position:relative}.not_in_mm .qr_code_pc_outer{display:none!important;position:fixed;left:0;right:0;top:20px;color:#717375;text-align:center}.not_in_mm .qr_code_pc_inner{position:relative;width:740px;margin-left:auto;margin-right:auto}.not_in_mm .qr_code_pc{position:absolute;right:-140px;top:0;width:140px;padding:16px;border:1px solid #d9dadc;background-color:#fff;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.not_in_mm .qr_code_pc p{font-size:14px;line-height:20px}.not_in_mm .qr_code_pc_img{width:102px;height:102px}@media screen and (min-width:1024px){.not_in_mm .qr_code_pc_outer{display:block!important;top:32px}}@media(prefers-color-scheme:dark){.not_in_mm .qr_code_pc_outer{color:rgba(255,255,255,0.5)}.not_in_mm .qr_code_pc{background-color:#2c2c2c;border-color:rgba(255,255,255,0.05)}}.not_in_mm .qr_code_pc{box-sizing:border-box}";
});