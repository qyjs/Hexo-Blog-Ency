define("appmsg/more_read_tpl.html.js",[],function(){
return'<p class="read-more__desc">你还可以看</p>\n<div class="read-more__article__area">\n  <# list.forEach(function (item) { #>\n    <div class="read-more__article__item">\n      <a href="javascript:;" class="more_read_link"><#=item.title#></a>\n      <# if (item.fans_read_cnt > 0) { #>\n        <p class="read-more__article__extra"><#=item.fans_read_cnt#>位好友读过</p>\n      <# } #>\n    </div>\n  <# }); #>\n</div>';
});define("appmsg/friend_comment_tpl.html.js",[],function(){
return'<#if(window.new_appmsg){#>\n    <div class="discuss_container" id="js_friend_cmt_main" style="display:none">\n        <div class="mod_title_context">\n            <strong class="mod_title">朋友留言</strong>\n            <!-- 没有付费才给写留言入口 -->\n            <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n            <p class="discuss_icon_tips tr" id="js_cmt_addbtn3" style="display:none">\n                <a href="javascript:;" id="js_cmt_write3">写留言</a> <!-- 有留言的时候的写留言入口 -->\n            </p>\n            <#}#>\n        </div>\n        <!-- <ul class="discuss_list" id="js_friend_cmt_list"></ul> -->\n        <!-- _js_friend_cmt放全部留言，用来计算总高度，展开的时候赋值给js_friend_cmt  -->\n        <!-- js_friend_cmt初始的时候放前三条留言，展开的时候把总高度加上  -->\n        <ul class="friend_cmt_area hide" id="js_friend_cmt_list_hide"></ul>\n        <ul class="friend_cmt_area" id="js_friend_cmt_list"></ul>\n        <p class="friend_cmt_readmore" style="display:none;" id="js_more_friend_cmt_area">\n            <a href="javascript:void(0);" id="js_more_friend_cmt">更多朋友留言</a>\n        </p>\n    </div>\n\n    <!-- 没有付费才给写留言入口 -->\n    <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n    <div class="discuss_container" id="js_cmt_addbtn4" style="display:none">\n      <div class="mod_title_context">\n        <p class="discuss_icon_tips tc">\n          <a href="javascript:;" id="js_cmt_write4">写留言</a> <!-- 没有留言的时候的写留言入口 -->\n        </p>\n      </div>\n    </div>\n    <#}#>\n\n<#}else{#>\n    <div class="discuss_container" id="js_friend_cmt_main" style="display:none">\n        <p class="discuss_icon_tips title_bottom_tips tr" id="js_cmt_addbtn3" style="display:none">\n            <!-- 没有付费才给写留言入口 -->\n            <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n            <a href="javascript:;" id="js_cmt_write3"><img class="icon_edit" src="<#=window.comment_edit_icon#>" alt="">留言</a>\n            <#}#>\n        </p>\n        <div class="rich_tips with_line title_tips discuss_title_line">\n            <span class="tips">朋友留言</span>\n        </div>\n        <!-- <ul class="discuss_list" id="js_friend_cmt_list"></ul> -->\n        <!-- _js_friend_cmt放全部留言，用来计算总高度，展开的时候赋值给js_friend_cmt  -->\n        <!-- js_friend_cmt初始的时候放前三条留言，展开的时候把总高度加上  -->\n        <ul class="friend_cmt_area hide" id="js_friend_cmt_list_hide"></ul>\n        <ul class="friend_cmt_area" id="js_friend_cmt_list"></ul>\n        <p class="friend_cmt_readmore" style="display:none;" id="js_more_friend_cmt_area">\n            <a href="javascript:void(0);" id="js_more_friend_cmt">更多朋友留言</a>\n        </p>\n    </div>\n\n    <p class="discuss_icon_tips rich_split_tips tc" id="js_cmt_addbtn4" style="display:none">\n        <!-- 没有付费才给写留言入口 -->\n        <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n        <a href="javascript:;" id="js_cmt_write4"><img class="icon_edit" src="<#=window.comment_edit_icon#>" alt="">留言</a>\n        <#}#>\n    </p>\n\n<#}#>\n';
});define("appmsg/comment_pc_tpl.html.js",[],function(){
return' <!-- pc端文章页留言 -->\n<#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n<div class="comment_primary_area" id="js_comment_pc" style="display:none">\n    <div class="comment_primary_form" id="js_cmt_addbtn_pc">\n        <div class="comment_primary_form_hd">  \n        <img src="http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0" alt="" class="comment_primary_avatar"\n        id="js_avatar_pc">\n        </div>\n        <div class="comment_primary_form_bd" id="js_cmt_panel_pc">\n            <div class="comment_primary_input_default" id="js_cmt_input_pc" style="display: none">写下你的留言</div>\n            <div class="comment_primary_input_wrp" id="js_cmt_container_pc" style="display: none">\n                <div class="comment_primary_input" id="js_cmt_input" contenteditable="true"></div>\n                <div class="comment_primary_input_placeholder" id="js_cmt_input_holder"> \n                    留言将由公众号筛选后显示，对所有人可见                </div>\n\n                <div class="comment_primary_tool" id="js_comment_tool_pc">\n                    <div class="comment_primary_emotion_wrp" id="js_emotion_wrp_pc">\n                    <span class="icon_comment_primary_emotion">\n                    </span>\n                    </div>               \n                    <button disabled="disabled" class="reset_btn comment_primary_btn" id="js_cmt_submit">留言</button>\n                    <!-- 超出字数往comment_primary_counter加comment_primary_counter_warn  -->\n                    <span class="comment_primary_counter" id="js_length_notice_pc" style="display: none">\n                    <em id="js_word_length_pc"></em>\n                    /\n                    <span>600</span>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="comment_primary_list_wrp" id="js_cmt_myarea_pc" style="display:none">\n        <ul class="comment_primary_list" id="js_cmt_mylist_pc">\n        </ul>\n        <!-- 展开的时候js_expand_and_fold_pc加comment_primary_more_access_unfold  -->\n        <p class="comment_primary_more_access" id="js_expand_and_fold_pc" style="display: none;"></p>\n        <div class="rich_split_tips tc discuss_end_tips" style="display:block">\n        <div class="weui-loadmore weui-loadmore_line">\n            <span class="weui-loadmore__tips">以上留言被公众号精选后，将对所有人可见</span>\n        </div>\n        </div>\n    </div>\n\n    <div class="weui-toast__wrp weui-transition_opacity-hide" id="js_success_panel_pc">\n    <div class="weui-mask_transparent"></div>\n    <div class="weui-toast">\n        <i class="weui-icon-success-no-circle weui-icon_toast"></i>\n        <p class="weui-toast__content">已留言</p>\n    </div>\n    </div>\n\n    <div class="weui-toast__wrp weui-transition_opacity-hide" id="js_reply_success_pc">\n    <div class="weui-mask_transparent"></div>\n    <div class="weui-toast">\n        <i class="weui-icon-success-no-circle weui-icon_toast"></i>\n        <p class="weui-toast__content" id="js_reply_success_pc_content">已回复</p>\n    </div>\n    </div>\n</div>\n<#}#>\n';
});define("appmsg/comment_tpl.html.js",[],function(){
return'<#if(window.new_appmsg){#>\n\n    <div class="discuss_container" id="js_cmt_main" style="display:none">\n        <div class="mod_title_context">\n            <strong class="mod_title">精选留言</strong>\n            <#if(!isWxWork){#>\n            <p class="tips_global tr title_bottom_tips" id="js_cmt_nofans1" style="display:none;">作者已设置关注后才可以留言</p>\n                <!-- 没有付费才给写留言入口 -->\n                <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n                <p class="discuss_icon_tips tr" id="js_cmt_addbtn1" style="display:none">\n                    <a href="javascript:;" class="discuss_access" id="js_cmt_write1">写留言</a>\n                </p>\n                <#}#>\n            <#}#>\n        </div>\n        <div class="discuss_list_wrp">\n          <ul class="discuss_list" id="js_cmt_list"></ul>\n        </div>\n    </div>\n\n\n    <!-- 没有付费才给写留言入口 -->\n    <#if(!isWxWork && (window._copyright_stat!=1 || window.need_pay!=1)){#>\n    <div class="discuss_container" id="js_cmt_addbtn2" style="display:none">\n      <div class="mod_title_context">\n        <p class="discuss_icon_tips tc">\n          <a href="javascript:;" class="discuss_access" id="js_cmt_write2">写留言</a>\n        </p>\n      </div>\n    </div>\n    <#}#>\n    <#if(!isWxWork){#>\n    <div class="discuss_container" id="js_cmt_nofans2" style="display:none">\n      <div class="tips_global rich_split_tips tc" id="js_cmt_nofans2_inner">\n          作者已设置关注后才可以留言      </div>\n    </div>\n    <#}#>\n    <p class="rich_split_tips tc tips_global" id="js_cmt_tips" style="display:none;"></p>\n\n\n    <div class="weui-loadmore" id="js_cmt_loading">\n        <i class="weui-loading"></i>\n        <span class="weui-loadmore__tips">正在加载</span>\n    </div>\n\n    <div class="rich_split_tips tc discuss_end_tips" id="js_cmt_statement" style="display:none">\n        <div class="weui-loadmore weui-loadmore_line weui-loadmore_dot">\n            <span class="weui-loadmore__tips"></span>\n        </div>\n        <!--\n        以上留言由公众号审核产生，        <a href="http://kf.qq.com/touch/sappfaq/150211YfyMVj150313qmMbyi.html?scene_id=kf264">\n            了解留言功能详情        </a>\n        -->\n    </div>\n\n    <div class="weui-dialog__wrp weui-transition_opacity-hide" id="js_delete_panel">\n      <div class="weui-mask"></div>\n      <div class="weui-dialog">\n        <div class="weui-dialog__bd">确定删除留言吗？</div>\n        <div class="weui-dialog__ft">\n          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" id="js_delete_cancel">取消</a>\n          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" id="js_delete_confirm">删除</a>\n        </div>\n      </div>\n    </div>\n<#}else{#>\n    <div class="discuss_container" id="js_cmt_main" style="display:none">\n        <p class="discuss_icon_tips title_bottom_tips tr" id="js_cmt_addbtn1" style="display:none">\n            <!-- 没有付费才给写留言入口 -->\n            <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n            <a href="javascript:;" id="js_cmt_write1"><img class="icon_edit" src="<#=window.comment_edit_icon#>" alt="">留言</a>\n            <#}#>\n        </p>\n        <div class="rich_tips with_line title_tips discuss_title_line">\n            <span class="tips">精选留言</span>\n        </div>\n        <p class="tips_global tc title_bottom_tips" id="js_cmt_nofans1" style="display:none;">该文章作者已设置需关注才可以留言</p>\n        <ul class="discuss_list" id="js_cmt_list"></ul>\n    </div>\n\n\n    <p class="discuss_icon_tips rich_split_tips tc" id="js_cmt_addbtn2" style="display:none">\n        <!-- 没有付费才给写留言入口 -->\n        <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n        <a href="javascript:;" id="js_cmt_write2"><img class="icon_edit" src="<#=window.comment_edit_icon#>" alt="">留言</a>\n        <#}#>\n    </p>\n\n    <div class="tips_global rich_split_tips tc" id="js_cmt_nofans2" style="display:none;">\n        该文章作者已设置需关注才可以留言    </div>\n    <p class="rich_split_tips tc tips_global" id="js_cmt_tips" style="display:none;"></p>\n\n\n    <div class="rich_tips tips_global loading_tips" id="js_cmt_loading">\n        <img src="<#=window.comment_loading_img#>" class="rich_icon icon_loading_white" alt="">\n        <span class="tips">加载中</span>\n    </div>\n\n    <div class="rich_tips with_line tips_global" id="js_cmt_statement" style="display:none">\n        <span class="tips">以上留言由公众号筛选后显示</span>\n    </div>\n\n    <p class="rich_split_tips tc" id="js_cmt_qa" style="display:none;">\n        <a href="http://kf.qq.com/touch/sappfaq/150211YfyMVj150313qmMbyi.html?scene_id=kf264">\n            了解留言功能详情        </a>\n    </p>\n<#}#>\n\n';
});function _defineProperty(e,s,n){
return s in e?Object.defineProperty(e,s,{
value:n,
enumerable:!0,
configurable:!0,
writable:!0
}):e[s]=n,e;
}
var _extends=Object.assign||function(e){
for(var s=1;s<arguments.length;s++){
var n=arguments[s];
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);
}
return e;
};
define("pages_new/common_share/video/store.js",["pages_new/3rd/vue.js","pages_new/3rd/vuex.js","pages_new/modules/utils/url.js","pages_new/common_share/video/lifecycle_manager.js","pages_new/common_share/video/player/player_store.js","pages_new/common_share/video/related_video_list/related_video_list_store.js","pages_new/common_share/video/like_and_share/like_and_share_store.js","pages_new/common_share/video/topic/topic_store.js","pages_new/modules/reward/reward_store.js","pages_new/common_share/video/player/plugins/tail/tail_store.js","pages_new/common_share/video/player/plugins/danmu/danmu_store.js","pages_new/common_share/video/player/plugins/popup/popup_store.js","pages_new/common_share/video/player/plugins/mid_ad/mid_ad_store.js","pages_new/common_share/video/player/plugins/auto_next/auto_next_store.js"],function(e){
"use strict";
function s(){
return _extends({},window.cgiData,{
uin:window.uin,
biz:window.biz,
appmsgid:window.appmsgid,
idx:window.idx,
scene:window.scene,
subscene:window.subscene,
enterid:window.enterid,
sessionid:window.sessionid,
channel_session_id:window.channel_session_id,
item_show_type:window.item_show_type,
clientversion:window.clientversion,
devicetype:window.devicetype,
continueid:window.continueid,
continueseq:window.continueseq,
reloadid:window.reloadid,
exptype:window.exptype,
expsessionid:window.expsessionid,
source:window.source,
is_temp_url:window.is_temp_url,
appmsg_like_type:window.appmsg_like_type,
pass_ticket:window.pass_ticket,
passparam:window.passparam,
wxtoken:window.wxtoken,
copyright_stat:window.copyright_stat,
need_pay:window.need_pay,
is_pay_subscribe:window.is_pay_subscribe,
msg_title:window.msg_title,
msg_desc:window.msg_desc,
ct:window.ct,
ori_send_time:window.ori_send_time,
msg_link:window.msg_link,
is_login:window.is_login,
user_uin:window.user_uin,
isprofileblock:window.isprofileblock,
round_head_img:window.round_head_img,
kanyikan_video_educate_pic:window.kanyikan_video_educate_pic,
kanyikan_educate_pic:window.kanyikan_educate_pic,
appmsg_type:window.appmsg_type,
send_time:window.send_time,
isPaySubscribe:window.isPaySubscribe,
defaultAvatarUrl:window.defaultAvatarUrl
});
}
function n(){
f.commit(d.SET_CGI_DATA,s()),f.commit(d.SET_URL_PARAMS,t.getParams()),l.forEach(function(e){
return f.registerModule(e.name,e);
}),R.forEach(function(e){
return f.registerModule([p.name,e.name],e);
});
}
function i(){
f.commit(d.SET_EXT_RES,{}),f.commit(d.SET_AD_RES,{}),f.commit(d.SET_CGI_DATA,{}),
f.commit(d.SET_URL_PARAMS,{}),l.forEach(function(e){
return f.unregisterModule(e.name);
}),R.forEach(function(e){
return f.unregisterModule([p.name,e.name]);
});
}
var _,o=e("pages_new/3rd/vue.js"),a=e("pages_new/3rd/vuex.js"),t=e("pages_new/modules/utils/url.js"),r=e("pages_new/common_share/video/lifecycle_manager.js");
o.use(a);
var d={
SET_EXT_RES:"SET_EXT_RES",
SET_AD_RES:"SET_AD_RES",
SET_CGI_DATA:"SET_CGI_DATA",
SET_URL_PARAMS:"SET_URL_PARAMS",
SET_PRAISE_NUM:"SET_PRAISE_NUM",
SET_RECOMMEND_NUM:"SET_RECOMMEND_NUM",
SET_RECOMMEND_STATUS:"SET_RECOMMEND_STATUS",
SET_PRAISE_STATUS:"SET_PRAISE_STATUS",
SET_SUBSCRIBE_STATUS:"SET_SUBSCRIBE_STATUS",
SET_PUBLIC_RELATED_VIDEO:"SET_PUBLIC_RELATED_VIDEO"
},p=e("pages_new/common_share/video/player/player_store.js"),m=e("pages_new/common_share/video/related_video_list/related_video_list_store.js"),w=e("pages_new/common_share/video/like_and_share/like_and_share_store.js"),u=e("pages_new/common_share/video/topic/topic_store.js"),c=e("pages_new/modules/reward/reward_store.js"),l=[m,w,u,c],g=e("pages_new/common_share/video/player/plugins/tail/tail_store.js"),S=e("pages_new/common_share/video/player/plugins/danmu/danmu_store.js"),E=e("pages_new/common_share/video/player/plugins/popup/popup_store.js"),T=e("pages_new/common_share/video/player/plugins/mid_ad/mid_ad_store.js"),y=e("pages_new/common_share/video/player/plugins/auto_next/auto_next_store.js"),R=[g,S,E,T,y],f=new a.Store({
modules:_defineProperty({},p.name,p),
state:{
extRes:{},
adRes:{},
cgiData:{},
urlParams:{}
},
mutations:(_={},_defineProperty(_,d.SET_EXT_RES,function(e,s){
e.extRes=s;
}),_defineProperty(_,d.SET_AD_RES,function(e,s){
e.adRes=s;
}),_defineProperty(_,d.SET_CGI_DATA,function(e,s){
e.cgiData=s;
}),_defineProperty(_,d.SET_URL_PARAMS,function(e,s){
e.urlParams=s;
}),_defineProperty(_,d.SET_PRAISE_NUM,function(e,s){
e.extRes.appmsgstat&&e.extRes.appmsgstat.old_like_num&&(e.extRes.appmsgstat.old_like_num=s.praiseNum);
}),_defineProperty(_,d.SET_RECOMMEND_NUM,function(e,s){
e.extRes.appmsgstat&&e.extRes.appmsgstat.like_num&&(e.extRes.appmsgstat.like_num=s.recommendNum);
}),_defineProperty(_,d.SET_RECOMMEND_STATUS,function(e,s){
e.extRes.appmsgstat&&(e.extRes.appmsgstat.liked=s.hasRecommended?1:0);
}),_defineProperty(_,d.SET_PRAISE_STATUS,function(e,s){
e.extRes.appmsgstat&&(e.extRes.appmsgstat.old_liked=s.hasPraised?1:0);
}),_defineProperty(_,d.SET_SUBSCRIBE_STATUS,function(e,s){
e.extRes.is_fans=s.hasSubscribed?1:0;
}),_defineProperty(_,d.SET_PUBLIC_RELATED_VIDEO,function(e,s){
e.cgiData.isPublicRelatedVideo=s.isPublicRelatedVideo;
}),_)
});
return r.register({
init:n,
destroy:i
}),f;
});define("appmsg/emotion/emotion_pc.js",["biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js","biz_common/dom/event.js","appmsg/emotion/emotion.js","common/utils.js","biz_wap/utils/mmversion.js"],function(e,t,o){
"use strict";
function n(){
for(var e=[],t=0;t<p.length;t++)for(var o=0;o<r.length;o++)if(r[o].id===p[t]){
e[t]=r[o];
break;
}
for(var t=0;j>t;t++)for(var o=0;f>o;o++){
var n=t*f+o;
e[n]&&v.push({
name:e[n].style,
title:e[n].emoji?e[n].emoji:e[n].cn,
bp:"background-position: 0 -"+n*w+"px;",
id:e[n].id
});
}
for(var t=0;t<e.length;t++)b[e[t].style]=e[t].emoji||e[t].cn;
}
function i(){
var e=document.createDocumentFragment();
v.forEach(function(t,o){
var n=document.createElement("li"),i=document.createElement("span");
n.className="comment_primary_emotion_item js_emotion_item",n.setAttribute("data-index",o),
i.className="comment_primary_emotion",i.setAttribute("style",t.bp),n.appendChild(i),
e.appendChild(n);
}),y.emotionList&&y.emotionList.appendChild(e);
}
function m(e){
window.scrollTo(0,window.scrollY+e.getBoundingClientRect().height);
}
function l(e){
return e.getBoundingClientRect().top+e.getBoundingClientRect().height>=g.getInnerHeight()?!0:!1;
}
function s(){
u.on(y.emotionSwitch,"click",function(){
var e=y.emotionPanel,t=e.style.display;
if("none"===t){
var o=window.getComputedStyle(document.getElementsByClassName("rich_media_tool")[0]).zoom,n=y.tool.getBoundingClientRect();
e.style.display="",e.style.left=n.left*o+"px",h.isWindows?e.style.top=window.scrollY+n.top*o+n.height*o+"px":h.isMac&&(e.style.top=(window.scrollY+n.top+n.height)*o+"px"),
l(e)&&m(e);
}else e.style.display="none";
});
}
function c(){
var e=y.emotionPanel;
if(""===e.style.display){
var t=window.getComputedStyle(document.getElementsByClassName("rich_media_tool")[0]).zoom,o=y.tool.getBoundingClientRect();
e.style.left=o.left*t+"px",h.isWindows?e.style.top=window.scrollY+o.top*t+o.height*t+"px":h.isMac&&(e.style.top=(window.scrollY+o.top+o.height)*t+"px");
}
}
function a(e){
var t=document.createElement("div"),o="",n="",i=[],m=void 0;
t.innerHTML=e;
for(var l=0;l<t.childNodes.length;l++){
var s=t.childNodes[l];
switch(s.nodeType){
case 1:
("IMG"===s.nodeName.toUpperCase()||"I"===s.nodeName.toUpperCase())&&(n=s.getAttribute("class"),
n&&(i=n.split(" "),i.length>1&&"icon_emotion_single"===i[0]&&(o=b[i[1]],m=document.createTextNode(o),
t.replaceChild(m,s))));
}
}
var c=t.innerHTML;
return c=c.replace(/<br.*?>/gi,"\n").replace(/<.*?>/g,"");
}
function d(){
y={
emotionSwitch:document.getElementById("js_emotion_wrp_pc"),
emotionPanel:document.getElementById("js_emotion_panel_pc"),
emotionList:document.getElementById("js_emotion_list_pc"),
input:document.getElementById("js_cmt_input"),
submit:document.getElementById("js_cmt_submit"),
tool:document.getElementById("js_comment_tool_pc")
},n(),i(),s(),window.onresize=function(){
c();
};
}
var r=e("biz_common/utils/emoji_data.js"),p=e("biz_common/utils/emoji_panel_data.js"),u=e("biz_common/dom/event.js"),_=e("appmsg/emotion/emotion.js").encode,g=e("common/utils.js"),h=e("biz_wap/utils/mmversion.js"),y={},f=13,j=13,w=25.5,v=[],b={};
o.exports={
init:d,
edata:v,
encode:_,
textFilter:a,
emotionPanelMove:c
};
});define("biz_wap/utils/fakehash.js",["biz_common/dom/event.js"],function(t){
"use strict";
function s(t){
t=t||location.hash.substr(1);
var s,o,e,i,r=!1,c=[];
for(s=0;s<h.length;s++)o=h[s],e=o[0],i=o[1],e!==a?("string"==typeof e&&e===t||e instanceof RegExp&&e.test(t))&&(i(n),
r=!0):c.push(i);
if(!r)for(s=0;s<c.length;s++)c[s](n,t);
n=t;
}
var o=t("biz_common/dom/event.js"),h=[],a="__default_hash__",n=location.hash.substr(1);
return o.on(window,"popstate",function(t){
var o=a;
t.state&&t.state.hash&&(o=t.state.hash),s(o);
}),o.on(window,"hashchange",s),o.on(window,"load",function(){
history.state&&history.state.hash&&s(history.state.hash);
}),{
val:function(){
return history.state&&history.state.hash||location.hash.substr(1);
},
push:function(t){
history.pushState?(history.pushState({
hash:t
},document.title,location.href),s(t)):location.hash=t;
},
replace:function(t){
history.replaceState?(history.replaceState({
hash:t
},document.title,location.href),s(t)):this.push(t);
},
on:function(t,s){
"function"==typeof t&&(s=t,t=a),h.push([t,s]);
}
};
});define("appmsg/emotion/selection.js",[],function(e,n){
"use strict";
function t(e,n,t){
if(!t&&e===n)return!1;
if(e.compareDocumentPosition){
var o=e.compareDocumentPosition(n);
if(20===o||0===o)return!0;
}else if(e.contains(n))return!0;
return!1;
}
function o(e,n){
var o=n.commonAncestorContainer||n.parentElement&&n.parentElement()||null;
return o?t(e,o,!0):!1;
}
n.getSelection=function(){
return document.selection?document.selection:(window.getSelection||document.getSelection)();
},n.getRange=function(e){
var n=getSelection();
if(!n)return null;
var t=void 0;
return n.getRangeAt&&n.rangeCount?t=n.getRangeAt(0):n.getRangeAt||(t=n.createRange()),
t?e&&o(e,t)?t:e?null:t:null;
},n.setCursorToEnd=function(e){
if(e){
var n=getSelection();
n.extend&&(n.extend(e,e.length),n.collapseToEnd&&n.collapseToEnd());
}
},n.contains=t;
});define("appmsg/comment_report.js",["biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_wap/utils/storage.js","common/utils.js","biz_common/dom/offset.js"],function(e){
"use strict";
function t(){
if(!m){
m=!0,setTimeout(function(){
m=!1;
},20);
var e=d.getInnerHeight(),t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,i=p.querySelectorAll(".js_comment_item"),s=r.querySelectorAll(".js_comment_item");
if(o=_.getOffset(p).offsetTop,n||(n=_.getOffset(r).offsetTop),s.length)for(var a=0;a<s.length&&n+s[a].offsetTop<t+e;a++)1!=s[a].getAttribute("data-hasreport")&&(s[a].setAttribute("data-hasreport",1),
f.data.push({
content_id:s[a].dataset.content_id,
is_elected_comment:1*s[a].dataset.elected,
is_friend_comment:1,
scene:2
}));
if(i.length)for(var a=0;a<i.length&&o+i[a].offsetTop<t+e;a++)1!=i[a].getAttribute("data-hasreport")&&(i[a].setAttribute("data-hasreport",1),
f.data.push({
content_id:i[a].dataset.content_id,
is_elected_comment:1,
is_friend_comment:1*i[a].dataset.friend,
scene:1
}));
c.set("comment_expose",f,Date.now()+6048e5);
}
}
var o,n,m,i=e("biz_wap/utils/ajax.js"),s=e("biz_common/dom/event.js"),a=e("biz_wap/utils/storage.js"),d=e("common/utils.js"),c=new a("comment_expose"),_=e("biz_common/dom/offset.js"),p=document.getElementById("js_cmt_area"),r=document.getElementById("js_friend_cmt_area"),f={
data:[],
appmsgid:"",
comment_id:"",
idx:"",
item_show_type:0,
biz:""
},u=function(e){
e&&e.data&&e.data.length&&(l(e),c.remove("comment_expose"));
},l=function(e){
i({
type:"post",
url:"/mp/appmsg_comment?action=exposurecomment",
data:{
comment_id:e.comment_id,
appmsgid:e.appmsgid,
idx:e.idx,
item_show_type:e.item_show_type,
__biz:e.biz,
data:JSON.stringify(e.data)
},
async:!1,
timeout:2e3
});
};
s.on(window,"scroll",t),s.on(window,"unload",function(){
u(f);
}),s.on(window,"load",function(){
var e=c.getData("comment_expose");
e&&e.comment_expose&&e.comment_expose.val&&e.comment_expose.val.appmsgid&&u(e.comment_expose.val),
t();
});
var g=function(e){
f.comment_id=e.comment_id,f.appmsgid=e.appmsgid,f.idx=e.idx,f.item_show_type=e.item_show_type||0,
f.biz=e.biz,setTimeout(function(){
t();
});
};
return g;
});define("appmsg/retry_ajax.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(require,exports,module,alert){
"use strict";
function Retry_ajax(e){
checkAjaxDo(e),e&&(e.success=function(a){
dealWithSucceed(a,e);
},e.error=function(){
dealWithFailed(e);
}),ajax(e);
}
function checkAjaxDo(e){
var a=isContainExceptLike(e,failedQueue),i=isContainAjax(e,failedQueue);
-1===i&&a>-1&&failedQueue.splice(a,1);
}
function isContainExceptLike(e,a){
var i=-1;
for(var r in a){
var t=a[r];
if(e.url||-1!=e.url.indexOf("&like=")||-1!=t.url.indexOf("&like=")){
if(!(e.url.indexOf("&like=")>-1&&t.url.indexOf("&like=")>-1))continue;
if(removeLikeParam(e.url)!==removeLikeParam(t.url))continue;
}else if(!t.url||t.url!==e.url)continue;
if(e.data&&t.data){
var u=e.data,n=t.data;
if(!isEqualExceptLike(u,n))continue;
}
i=r;
break;
}
return i;
}
function isContainAjax(e,a){
var i=-1;
for(var r in a){
var t=a[r];
if(e.url&&t.url&&e.url==t.url){
if(e.data&&t.data){
var u=e.data,n=t.data;
if(!isEqual(u,n))continue;
}
i=r;
break;
}
}
return i;
}
function removeLikeParam(e){
var a=e.indexOf("&like="),i=e.substring(0,a)+e.substring(a+7);
return i;
}
function isEqualExceptLike(e,a){
var i=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(a);
if(i.length!=r.length)return!1;
for(var t=0;t<i.length;t++){
var u=i[t];
if("like"!==u&&e[u]!==a[u])return!1;
}
return!0;
}
function isEqual(e,a){
var i=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(a);
if(i.length!=r.length)return!1;
for(var t=0;t<i.length;t++){
var u=i[t];
if(e[u]!==a[u])return!1;
}
return!0;
}
function dealWithSucceed(res,obj){
try{
var data=eval("("+res+")");
}catch(e){
var data=!1;
}
if(data&&data.base_resp&&0===data.base_resp.ret){
var findIndex=isContainExceptLike(obj,failedQueue);
findIndex>-1&&failedQueue.splice(findIndex,1);
}else dealWithFailed(obj);
}
function dealWithFailed(e){
var a=isContainExceptLike(e,failedQueue);
if(-1===a){
if(e.failedTimes=1,failedQueue.length>=MAX_QUEUE_LEN)return;
failedQueue.push(e);
}else{
var i=isContainAjax(e,failedQueue);
if(i>-1){
if(failedQueue[a].failedTimes++,e.failedTimes=failedQueue[a].failedTimes,e.failedTimes>MAX_FAILED_TIMES)return void failedQueue.splice(i,1);
}else failedQueue.splice(i,1),e.failedTimes=1,failedQueue.push(e);
}
Retry_ajax(e);
}
var ajax=require("biz_wap/utils/ajax.js"),JSAPI=require("biz_wap/jsapi/core.js"),failedQueue=[],MAX_FAILED_TIMES=2,MAX_QUEUE_LEN=20;
return Retry_ajax;
});define("complain/tips.js",["biz_common/utils/string/html.js","biz_common/dom/event.js"],function(t){
"use strict";
t("biz_common/utils/string/html.js");
var i=t("biz_common/dom/event.js"),o={
tipsTimeoutId:null,
tipsDom:document.getElementById("tips")
},s={
showErrTips:function(t,i){
var s=i||o.tipsDom;
return t===!1?void(s.style.display="none"):(this.resetTips(),s.innerHTML=t.htmlEncode(),
s.style.display="block",clearTimeout(o.tipsTimeoutId),void(o.tipsTimeoutId=setTimeout(function(){
s.style.display="none";
},4e3)));
},
resetTips:function(t){
setTimeout(function(){
var i=t||o.tipsDom;
i&&(i.style.top=document.body.scrollTop+"px");
},0);
}
};
return i.on(window,"scroll",function(){
s.resetTips();
}),s;
});define("pages/loadscript.js",[],function(){
"use strict";
function e(t){
e.counter||(e.counter=1);
var n="number"!=typeof t.retry?1:t.retry,o=t.win||window,r=o.document,a=r.createElement("script"),i=t.type||"JSONP",d=r.head||r.getElementsByTagName("head")[0]||r.documentElement,l=t.callbackName,c="uninitialized",u="undefined"==typeof t.successCode?200:t.successCode,s="undefined"==typeof t.timeoutCode?500:t.timeoutCode,f="undefined"==typeof t.scriptErrorCode?400:t.scriptErrorCode,m=!1,p=null;
"JSONP"!=i&&"JS"!=i&&(i="JSONP");
var y="";
y="JSONP"==i?t.url+"&t="+Math.random():t.url;
var h=function(e){
a&&!m&&(m=!0,p&&(clearTimeout(p),p=null),a.onload=a.onreadystatechange=a.onerror=null,
d&&a.parentNode&&d.removeChild(a),a=null,l&&-1==l.indexOf(".")&&(window[l]=null),
"JS"==i&&e==u&&"loaded"==c&&"function"==typeof t.callback?t.callback():e!=u&&"loaded"!=c&&"function"==typeof t.onerror&&t.onerror(e));
};
if(l&&"function"==typeof t.callback&&"JSONP"==i){
var w=l;
-1==l.indexOf(".")&&(l=window[l]?l+e.counter++:l,window[l]=function(){
c="loaded",t.callback.apply(null,arguments);
}),y=y.replace("="+w,"="+l);
}
a.onload=a.onreadystatechange=function(){
var e=navigator.userAgent.toLowerCase();
(-1!=e.indexOf("opera")||-1==e.indexOf("msie")||/loaded|complete/i.test(this.readyState))&&("JS"==i&&(c="loaded"),
h("loaded"==c?u:f));
},a.onerror=function(){
return n>0?(t.retry=n-1,p&&(clearTimeout(p),p=null),void e(t)):void h(f);
},t.timeout&&(p=setTimeout(function(){
h(s);
},parseInt(t.timeout,10))),c="loading",a.charset="utf-8",setTimeout(function(){
a.src=y;
try{
d.insertBefore(a,d.lastChild);
}catch(e){}
},0);
}
return e;
});define("biz_wap/utils/ajax_load_js.js",["biz_wap/utils/ajax.js","biz_wap/utils/localstorage.js"],function(e){
"use strict";
function n(e){
var n=d(e.url,e.version),o=function(){},i=function(){};
if("function"==typeof e.onSuccess&&(o=e.onSuccess),"function"==typeof e.onError&&(i=e.onError),
c(e.win,n))return void o({
code:1,
queueIndex:0
});
if(e.useCache){
var a=u(e.url,e.version);
if(a&&t({
win:e.win,
funcStr:a,
useCache:!1,
url:e.url,
version:e.version
}),c(e.win,n))return void o({
code:2,
queueIndex:0
});
}
if(S.callbackQueue.push({
options:e,
onSuccess:o,
onError:i
}),"undefined"==typeof S.jsLoadState[n]&&(S.jsLoadState[n]=-1),-1==S.jsLoadState[n]){
var s=e.url;
s+=-1==s.indexOf("?")?"?"+S.customerParam+"="+e.version:"&"+S.customerParam+"="+e.version,
r({
originUrl:e.url,
version:e.version,
url:s,
key:n
});
}
}
function r(e){
S.jsLoadState[e.key]=1,w({
url:e.url,
notJoinUrl:!0,
timeout:1e4,
type:"POST",
dataType:"text",
noXRequestedWidthHeader:!0,
success:function(n){
if(1==S.jsLoadState[e.key]){
S.jsLoadState[e.key]=-1;
var r=!0;
r=n?t({
win:null,
funcStr:n,
useCache:!0,
url:e.originUrl,
version:e.version
}):!1,o(r?{
code:3,
type:"suc",
funcStr:n
}:{
code:51,
type:"err"
});
}
},
error:function(){
1==S.jsLoadState[e.key]&&(S.jsLoadState[e.key]=-1,o({
code:52,
type:"err"
}));
},
complete:function(){
1==S.jsLoadState[e.key]&&(S.jsLoadState[e.key]=-1,o({
code:53,
type:"err"
}));
}
});
}
function t(e){
var n=e.win||window,r=!0;
try{
n.eval(e.funcStr),r=!0;
}catch(t){
r=!1;
}
return r?(s({
url:e.url,
version:e.version,
win:n
}),e.useCache&&a(e.url,e.version,e.funcStr),!0):(l({
url:e.url,
version:e.version,
win:n
}),i(e.url),!1);
}
function o(e){
for(var n=0,r=S.callbackQueue.length;r>n;n++){
var o=S.callbackQueue[n],u=o.options,i=u.win,a=d(u.url,u.version);
"suc"==e.type?(e.funcStr&&!c(i,a)&&t({
win:i,
funcStr:e.funcStr,
useCache:!1,
url:u.url,
version:u.version
}),o.onSuccess({
code:e.code,
queueIndex:n
})):o.onError({
code:e.code,
queueIndex:n
});
}
S.callbackQueue=[];
}
function u(e,n){
var r=f(e),t=y.get(r);
if(!t)return null;
var o;
try{
o=JSON.parse(t);
}catch(u){}
if(o){
var a=+new Date,c=1*o.time;
return a-c>S.lsTimeout||o.version!=n||!o.func?(i(e),null):o.func;
}
}
function i(e){
var n=f(e);
y.remove(n);
}
function a(e,n,r){
var t={
version:n,
func:r,
time:+new Date
},o=f(e);
try{
y.set(o,JSON.stringify(t));
}catch(u){}
}
function c(e,n){
return e=e||window,e[S.winCacheKey]&&e[S.winCacheKey][n]&&e[S.winCacheKey][n].state===!0?!0:!1;
}
function s(e){
var n=d(e.url,e.version),r=e.win||window;
r[S.winCacheKey]||(r[S.winCacheKey]={}),r[S.winCacheKey][n]||(r[S.winCacheKey][n]={}),
r[S.winCacheKey][n].state=!0;
}
function l(e){
var n=d(e.url,e.version),r=e.win||window;
if(r[S.winCacheKey]&&r[S.winCacheKey][n])try{
delete r[S.winCacheKey][n];
}catch(t){}
}
function f(e){
return encodeURIComponent(e);
}
function d(e,n){
return encodeURIComponent(e)+"_"+n||"";
}
function v(e){
l(e),i(e.url);
}
var w=e("biz_wap/utils/ajax.js"),y=e("biz_wap/utils/localstorage.js"),S={
jsLoadState:{},
winCacheKey:"__loadExternalJsStates__",
lsTimeout:1728e5,
customerParam:"wxv",
callbackQueue:[]
};
return{
ClearCache:v,
Load:n
};
});function _typeof(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e;
}
var _extends=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];
for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);
}
return e;
};
define("appmsg/reward_entry.js",["biz_wap/ui/weui.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","appmsg/appmsgext.js","appmsg/open_url_with_webview.js","common/utils.js","biz_wap/utils/device.js","appmsg/loading.js","common/comm_report.js","appmsg/pay_read_utils.js"],function(e,t,n,a){
"use strict";
function r(e){
e&&(e.style.display="block");
}
function i(e){
e&&(e.style.display="none");
}
function d(e){
v.getData({
biz:biz,
appmsg_type:appmsg_type,
mid:mid,
sn:sn,
idx:idx,
pass_ticket:window.pass_ticket,
scene:T.scene,
title:T.title,
ct:ct,
devicetype:T.devicetype,
version:T.version,
is_need_reward:T.is_need_reward,
reward_uin_count:T.is_need_reward?3*p:0,
send_time:T.send_time||"",
item_show_type:window.item_show_type||"",
rtId:T.appmsgextRtId,
rtKey:T.appmsgextRtKey,
is_pay_subscribe:window.isPaySubscribe,
pay_subscribe_uin_count:window.isPaySubscribe?3*k.getCountPerLine():0,
onSuccess:function(t){
t&&(e||(E.rewardLink&&m.off(E.rewardLink,"click",W),E.authorAvatarLink&&m.off(E.authorAvatarLink,"click",C),
H=[],o({
reward_total:t.reward_total_count,
reward_head_imgs:t.reward_head_imgs||[],
can_reward:t.can_reward,
timestamp:t.timestamp,
reward_author_head:t.reward_author_head,
rewardsn:t.rewardsn,
can_whisper:t.can_whisper
})),console.log("reloadRewardData:",t,e),k.init(t.pay_subscribe_info,{
rewardTotal:t.reward_total_count,
rewardTotalCut:t.is_reward_total_count_cut
},!0));
},
onError:function(){}
});
}
function s(e,t){
var n=function(){
P.src=t+"&qrcode_timestamp="+1*new Date+"#wechat_redirect";
},r=null;
return function(t){
if("0"==T.user_can_reward)return void a("你已成为该公众号的黑名单用户，暂时无法赞赏。");
if(t.preventDefault(),T.isWindowsWechat){
var i=function(){
var e="js_author_reward_qrcode",t="reward_pop_show",a=document.getElementById(e);
if(a.classList.contains(t))return{
v:void 0
};
n(),r=setInterval(n,12e4),a.classList[E.rewardLink.getBoundingClientRect().top<222?"add":"remove"]("reward_pop_bottom"),
a.classList.add(t);
var i=function d(n){
if(a.classList.contains(t)){
for(var i=n.target;null!==i&&i.id!==e;)i=i.parentNode;
(null===i||i.id!==e)&&(a.classList.remove(t),clearInterval(r),r=null,m.off(window,"click",d));
}
};
setTimeout(function(){
m.on(window,"click",i);
},1);
}();
if("object"===("undefined"==typeof i?"undefined":_typeof(i)))return i.v;
}else-1==e.indexOf("&__tc=1")&&window.__addIdKeyReport?window.__addIdKeyReport(T.likeHeadId,T.likeHeadKey):window.__addIdKeyReport&&window.__addIdKeyReport(T.likeBtnId,T.likeBtnKey),
f.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
t.err_msg.indexOf(":ok")>-1||(location.href=e);
});
};
}
function o(e){
var t=window.innerWidth||document.documentElement.innerWidth,n=(Math.ceil((b.getInnerHeight()-188)/42)+1)*Math.floor((t-15)/42);
_="http://mp.weixin.qq.com/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&offset=0&count="+n+"&source=1#wechat_redirect";
var a="#wechat_redirect",o="";
o="https://mp.weixin.qq.com/mp/author?action=show&__biz="+biz+"&appmsgid="+mid+"&timestamp="+e.timestamp+"&author_id="+T.author_id+"&idx="+idx+"&scene="+T.authorPageScene+"&rscene="+T.authorPageRscene+"&from_scene="+window.source+"&from_subscene="+window.subscene+"&from_enterid="+window.enterid+"&from_sessionid="+window.sessionid+"&is_fans="+e.isFans,
e.rewardsn&&(o+="&rewardsn="+e.rewardsn),o+=a,-1==navigator.userAgent.indexOf("Android")||T.author_id||(o="https://mp.weixin.qq.com/bizmall/reward?act=showpage&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&timestamp="+e.timestamp+"&showwxpaytitle=1&rewardsn="+e.rewardsn+a);
var u=E.rewardLink,v=E.authorAvatarLink;
if(!F&&b.listenStateChange({
cb:function(e){
if("onResume"==e.state_change||"onResume"==e.state)if(u){
var t=(new Date).valueOf();
if(-1!=navigator.userAgent.indexOf("Android")&&localStorage.getItem("lastOnresumeTime")&&t-parseInt(localStorage.getItem("lastOnresumeTime"))<=B)return;
localStorage.setItem("lastOnresumeTime",t),g.isAndroid&&!T.author_id&&f.invoke("setNavigationBarColor",{
actionCode:"1"
}),d();
}else d(!0);
}
}),F=!0,u){
var x="/mp/authorreward?action=getqrcode&author_id="+T.author_id+"&rewardsn="+e.rewardsn+"&timestamp="+e.timestamp+"&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&size=160";
if(W=s(o.replace(a,"&__tc=1"+a),x),C=s(o,x),m.on(u,"click",W),T.author_id&&1==e.can_reward&&v&&m.on(v,"click",C),
1==e.can_reward&&T.author_id&&E.reward){
r(document.getElementById("js_reward_author")),r(E.authorAvatarLink),E.rewardAuthorHead&&E.rewardAuthorHead.setAttribute("src",e.reward_author_head),
E.reward.classList.add("reward_area_primary");
var I=E.rewardLinkText;
I&&(I.innerText="喜欢作者",Math.random()<.05?I.innerText="稀罕作者":Math.random()>.05&&Math.random()<.1&&(I.innerText="钟意作者")),
E.rewardTotalText&&(E.rewardTotalText.innerText="人喜欢"),T.isWindowsWechat&&E.reward.classList.add("reward_area_win"),
!b.isNativePage()&&e.can_whisper?N():q();
}
}
L=e.reward_head_imgs;
var j=c();
E.reward&&(T.author_id||g.isAndroid)&&1==e.can_reward?(r(E.reward),m.on(window,"load",function(){
l&&(m.off(window,"scroll",l),m.on(window,"scroll",l));
})):i(E.reward);
var k=document.getElementById("js_reward_inner");
!window.isPaySubscribe&&k&&j>0&&r(k);
var A=[].concat(L),M=document.getElementById("js_reward_total");
if(z=16*p,H=[].concat(L),M)if(M.innerText=e.reward_total,T.isWindowsWechat){
var R=M.parentNode;
R.dataset.hasEvent||!function(){
var t=document.getElementById("js_reward_pagination"),n=t.getElementsByClassName("js_reward_pagination_curpage")[0],a=Math.ceil(e.reward_total/z),d=1,s=!0,o=document.getElementById("js_reward_list"),c=function(t,n){
for(var r=(t-1)*z,i=s?3*p:0,d=document.createDocumentFragment(),c=r+i,l=t===a?e.reward_total:t*z;l>c;c++)w(d,n?window.defaultAvatarUrl:H[c]);
return!s&&(o.innerHTML=""),o.appendChild(d),s=!1,n?function(){
for(var e=o.getElementsByClassName("reward_user_avatar"),t=i,n=e.length;n>t;t++)e[t].firstElementChild.src=H[r+t];
}:!1;
};
n.innerHTML=d,t.getElementsByClassName("js_reward_pagination_totalpage")[0].innerHTML=a;
var l="/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&count="+z,u=null,_=function(t){
var n=H.length;
e.reward_total>n&&t*z>n?(u=null,u=c(t,!0),h({
url:l+"&offset="+(t-1)*z+"#wechat_redirect",
type:"GET",
success:function(e){
try{
e=JSON.parse(e),e.reward_heads=JSON.parse(e.reward_heads).reward_heads;
}catch(t){
e={};
}
e.base_resp&&0===e.base_resp.ret&&(e.reward_heads.forEach(function(e){
var t=A.indexOf(e);
t>-1?A.splice(t,1):H.push(e);
}),"function"==typeof u&&u());
}
})):c(t);
};
j<e.reward_total&&!function(){
E.reward.classList.add("reward_avatar_overflow");
for(var w=o.children[0];1!==w.nodeType;)w=reward.nextElementSibling;
var c=getComputedStyle(w),l=w.offsetHeight+parseInt(c.marginBottom)+parseInt(c.marginTop);
S=function(t){
o.style.height="fold"===t?3*l+"px":a>d?l*Math.ceil(z/p)+"px":l*Math.ceil(e.reward_total%z/p)+"px";
},S("fold"),m.on(R,"click",function(){
E.reward.classList.contains("reward_avatar_unfold")?(E.reward.classList.remove("reward_avatar_unfold"),
a>1&&i(t),S("fold")):(1===d&&s&&_(d),E.reward.classList.add("reward_avatar_unfold"),
a>1&&r(t),S("unfold"));
}),a>1&&m.on(t,"click",function(e){
var t=e.target;
if(t.classList.contains("js_reward_pagination_prev")){
if(d--,n.innerHTML=d,_(d),1===d&&(t.disabled=!0),d===a-1){
for(;t&&!t.classList.contains("js_reward_pagination_next");)t=t.nextElementSibling;
t&&(t.disabled=!1),S("unfold");
}
}else if(t.classList.contains("js_reward_pagination_next")&&(d++,n.innerHTML=d,_(d),
d===a&&(t.disabled=!0,S("unfold")),2===d)){
for(;t&&!t.classList.contains("js_reward_pagination_prev");)t=t.previousElementSibling;
t&&(t.disabled=!1);
}
});
}(),R.dataset.hasEvent=1;
}();
}else M.setAttribute("data-href",_),M.getAttribute("data-hasevent")||(m.on(M,"click",function(){
var e=M.getAttribute("data-href");
return y(e,{
sample:1,
reject:function(){
location.href=e;
}
}),!1;
}),M.setAttribute("data-hasevent",1));
}
function w(e,t){
var n=document.createElement("span");
n.className="reward_user_avatar";
var a=new Image;
return a.onload=function(){
window.logs&&window.logs.reward_heads_total++,a.onload=a.onerror=null;
},a.onerror=function(){
window.logs&&window.logs.reward_heads_total++,window.logs&&window.logs.reward_heads_fail++,
a.onload=a.onerror=null;
},a.src=t,n.appendChild(a),e.appendChild(n),n;
}
function c(e){
var t=H.length?H:L;
if(t.length){
var n=document.getElementById("js_reward_list"),a=0,r=document.createDocumentFragment();
if(n){
var i=E.reward.classList.contains("reward_avatar_unfold");
if("function"==typeof S&&S(i?"unfold":"fold"),!e){
for(var d=0,s=t.length;s>d&&(a++,w(r,t[d]),i||a!==3*p)&&a!==(z||16*p);++d);
a>p&&(n.className+=" tl"),n.innerHTML="",n.appendChild(r);
}
}
return a;
}
}
function l(){
if(E.reward){
var e=window.pageYOffset||document.documentElement.scrollTop;
if(e+b.getInnerHeight()>E.reward.offsetTop){
var t="__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&item_show_type="+item_show_type;
window.cgiData&&window.cgiData.vid&&(t+="&vid="+cgiData.vid),h({
type:"GET",
url:"/bizmall/reward?act=report&"+t,
async:!0
}),m.off(window,"scroll",l),l=null;
}
}
}
function u(e){
"undefined"!=typeof e.scene&&(T.scene=e.scene),"undefined"!=typeof e.is_need_reward&&(T.is_need_reward=e.is_need_reward),
"undefined"!=typeof e.title&&(T.title=e.title),"undefined"!=typeof e.author_id&&(T.author_id=e.author_id),
"undefined"!=typeof e.user_can_reward&&(T.user_can_reward=e.user_can_reward),"undefined"!=typeof e.appmsgextRtId&&(T.appmsgextRtId=e.appmsgextRtId),
"undefined"!=typeof e.appmsgextRtKey&&(T.appmsgextRtKey=e.appmsgextRtKey),"undefined"!=typeof e.likeHeadId&&(T.likeHeadId=e.likeHeadId),
"undefined"!=typeof e.likeHeadKey&&(T.likeHeadKey=e.likeHeadKey),"undefined"!=typeof e.likeBtnId&&(T.likeBtnId=e.likeBtnId),
"undefined"!=typeof e.likeBtnKey&&(T.likeBtnKey=e.likeBtnKey),"undefined"!=typeof e.authorPageScene&&(T.authorPageScene=e.authorPageScene),
"undefined"!=typeof e.authorPageRscene&&(T.authorPageRscene=e.authorPageRscene),
"undefined"!=typeof e.devicetype&&(T.devicetype=e.devicetype),"undefined"!=typeof e.version&&(T.version=e.version),
"undefined"!=typeof e.send_time&&(T.send_time=e.send_time);
}
e("biz_wap/ui/weui.js");
var p,_,m=e("biz_common/dom/event.js"),h=e("biz_wap/utils/ajax.js"),f=e("biz_wap/jsapi/core.js"),g=e("biz_wap/utils/mmversion.js"),v=e("appmsg/appmsgext.js"),y=e("appmsg/open_url_with_webview.js"),b=e("common/utils.js"),x=e("biz_wap/utils/device.js"),I=e("appmsg/loading.js"),j=e("common/comm_report.js"),k=e("appmsg/pay_read_utils.js"),T={
scene:window.source||"",
is_need_reward:!1,
title:window.msg_title||"",
author_id:window.author_id||"",
user_can_reward:!0,
appmsgextRtId:"",
appmsgextRtKey:"",
likeHeadId:"110809",
likeHeadKey:"2",
likeBtnId:"110809",
likeBtnKey:"3",
authorPageScene:"142",
authorPageRscene:"128",
devicetype:window.devicetype||"",
version:window.version||"",
send_time:window.send_time||"",
isWindowsWechat:-1!==window.navigator.userAgent.indexOf("WindowsWechat"),
whisperMaxLen:40,
focusTag:!1,
doubleInputChar:["“”","‘’","（）","《》","〈〉","「」","『』","〔〕","【】","［］","[]","｛｝","{}","()","<>"],
sendLock:!1
},E={
reward:document.getElementById("js_reward_area"),
rewardLink:document.getElementById("js_reward_link"),
authorAvatarLink:document.getElementById("js_reward_avatar"),
rewardAuthorHead:document.getElementById("js_reward_author_head"),
rewardLinkText:document.getElementById("js_reward_link_text"),
rewardTotalText:document.getElementById("js_reward_total_text"),
whisperWrap:document.getElementById("js_reward_whisper"),
whisperDialogShow:document.getElementById("js_show_whisper_dialog"),
whisperDialogHide:document.getElementById("js_hide_whisper_dialog"),
whisperDialogMask:document.getElementById("js_whisper_dialog_mask"),
whisperDialog:document.getElementById("js_reward_whisper_dialog"),
whisperTextarea:document.getElementById("js_whisper_text"),
whisperMsg:document.getElementById("js_whisper_msg"),
whisperCnt:document.getElementById("js_whisper_current_cnt"),
whisperSend:document.getElementById("js_whisper_send")
},L=[],B=500,S=null,z=0,H=[];
window.logs&&(window.logs.reward_heads_total=0,window.logs.reward_heads_fail=0);
var A,M=function(e){
var t=e.target;
"TEXTAREA"!==t.tagName&&"BUTTON"!==t.tagName&&(e.preventDefault(),e.stopPropagation());
},R=function(e){
var t=e.targetTouches||[];
if(t.length>0){
var n=t[0]||{};
A=n.clientY;
}
},D=function(e){
var t=!1,n=e.changedTouches,a=this.scrollTop,r=this.offsetHeight,i=this.scrollHeight;
if(n.length>0){
var d=n[0]||{},s=d.clientY;
t=s>A&&0>=a?!1:A>s&&a+r>=i?!1:!0,t||e.preventDefault();
}
},K=function(){
document.addEventListener("touchmove",M,{
passive:!1
}),E.whisperTextarea.addEventListener("touchstart",R,{
passive:!1
}),E.whisperTextarea.addEventListener("touchmove",D,!1);
},O=function(){
document.removeEventListener("touchmove",M,{
passive:!1
}),E.whisperTextarea.removeEventListener("touchstart",R,{
passive:!1
}),E.whisperTextarea.removeEventListener("touchmove",D,!1);
},W=function(){},C=function(){},P=document.getElementById("js_author_reward_qrcode_img"),N=function(){
return r(E.whisperWrap);
},q=function(){
return i(E.whisperWrap);
},F=!1,U=function(e){
var t=0;
try{
t=1*window.atob(window.biz);
}catch(n){}
var a={
BizUin:t,
BizUinStr:window.biz||"",
AppMsgId:window.parseInt(window.mid,10)||0,
ItemIdx:window.parseInt(window.idx,10)||0,
ItemShowType:window.parseInt(window.item_show_type,10)||0,
SessionIdStr:window.sessionid||"",
EnterId:window.parseInt(window.enterid,10)||0,
Scene:window.parseInt(window.source,10)||0,
SubScene:window.parseInt(window.subscene,10)||0,
IsFans:1*e||0
},d=function(e){
return weui.alert(e&&e>T.whisperMaxLen?"悄悄话不可以超过字":"网络异常，请稍后重试");
},s=function(){
if(!E.whisperSend.disabled&&!T.sendLock){
T.sendLock=!0,j.report(19048,_extends({
EventType:3
},a)),I.show("发送中");
var e=E.whisperTextarea.value.replace(/^\s+|\s+$/g,"");
h({
url:"/mp/author?action=whisper",
data:{
__biz:window.biz||window.__biz,
mid:window.mid||window.appmsgid,
idx:window.idx,
content:e,
scene:window.source,
subscene:window.subscene,
enterid:window.enterid,
sessionid:window.sessionid
},
type:"POST",
success:function(t){
try{
t=JSON.parse(t);
}catch(n){
t={};
}
T.sendLock=!1,I.hide(),t&&t.base_resp&&0===t.base_resp.ret?(o(),q(),weui.toast("已发送",1e3)):d(e.length);
},
error:function(){
T.sendLock=!1,I.hide(),d();
}
});
}
},o=function(){
i(E.whisperDialog),E.whisperTextarea.value="",E.whisperSend.disabled=!0,O();
};
m.on(E.whisperDialogShow,"click",function(){
j.report(19048,_extends({
EventType:2
},a)),r(E.whisperDialog),E.whisperTextarea.focus(),K();
}),m.on(E.whisperDialogHide,"mousedown",o),m.on(E.whisperDialogMask,"mousedown",o),
m.on(E.whisperTextarea,"input",function(e){
var t=e.target.value.replace(/^\s+|\s+$/g,"").length;
t>T.whisperMaxLen?(E.whisperSend.disabled=!0,E.whisperCnt.innerHTML=t,E.whisperMsg.style.visibility="visible"):(E.whisperSend.disabled=0===t,
E.whisperMsg.style.visibility="hidden"),x.os.ios&&e.data&&T.doubleInputChar.indexOf(e.data)>-1&&(T.focusTag=!0);
}),m.on(E.whisperTextarea,"click",function(e){
if(x.os.ios&&T.focusTag){
var t=e.target;
t.blur(),t.focus(),T.focusTag=!1;
}
}),m.on(E.whisperSend,"mousedown",s);
};
return{
handle:function(e,t){
p=t,u(e),1==e.can_reward&&T.author_id&&E.reward&&U(e.isFans),o(e);
},
render:function(e){
p=e,c(!0);
},
bindWhisperEvent:U,
showWhisperWrap:N
};
});define("appmsg/related_article_feedback.js",["biz_wap/utils/ajax.js","biz_common/dom/class.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","common/utils.js"],function(e){
"use strict";
function t(e,t){
for(;!e.parentNode.className.match(t);)e=e.parentNode;
return e.parentNode||"";
}
function i(e){
this.container=e.container,this.biz=e.biz,this.mid=e.mid,this.idx=e.idx,this.vid=e.vid,
this.isVideo=e.isVideo,this.dislikeCb=e.dislikeCb,s["top"===e.position?"addClass":"removeClass"](this.container.querySelector(".js_dialog_wrp"),"feedback_dialog_pos_top"),
this.bindEvent();
}
function a(e){
var a=e.container;
n.on(a,"touchstart",".js_feedback_btn",function(e){
e.stopPropagation();
},!0),n.on(a,"touchend",".js_feedback_btn",function(e){
e.stopPropagation();
},!0),n.on(a,"click",".js_feedback_btn",function(a){
a.stopPropagation();
var o=a.delegatedTarget,s=t(o,"js_related_item"),n=268;
l=new i({
container:s,
biz:e.biz,
mid:e.mid,
idx:e.idx,
isVideo:e.isVideo,
vid:e.vid,
position:r.getInnerHeight()-s.getBoundingClientRect().bottom<n?"top":"bottom",
dislikeCb:e.dislikeCb
}),l.show();
},!0);
}
var o=e("biz_wap/utils/ajax.js"),s=e("biz_common/dom/class.js"),n=e("biz_common/dom/event.js"),d=e("biz_common/utils/url/parse.js"),r=e("common/utils.js"),l=null;
return i.prototype.bindEvent=function(){
var e=this,i=this.container,a=this.biz,r=this.mid,l=this.idx,c=i.getAttribute("data-url"),u=new Set,_=new Set,m=i.querySelector(".js_submit");
this.tabClickEventHandler=function(e){
e.stopPropagation(),e.preventDefault();
var t=e.delegatedTarget,i=t.getAttribute("data-value");
s.hasClass(t,"js_reason")&&(i*=1),s.hasClass(t,"feedback_tag_selected")?(s.removeClass(t,"feedback_tag_selected"),
s.hasClass(t,"js_reason")?u.delete(i):_.delete(i)):(s.addClass(t,"feedback_tag_selected"),
s.hasClass(t,"js_reason")?u.add(i):_.add(i)),0===u.size&&0===_.size?s.addClass(m,"weui-btn_disabled"):s.removeClass(m,"weui-btn_disabled");
},this.submitDataHandler=function(n){
n.stopPropagation(),n.preventDefault();
var m=n.target;
if(!s.hasClass(m,"weui-btn_disabled")){
var h={
tacitly:Array.from(u),
keyword:Array.from(_)
},b={
biz_from:a,
mid_from:r,
idx_from:l,
recommended_biz:d.getQuery("__biz",c),
mid:d.getQuery("mid",c),
idx:d.getQuery("idx",c),
reason:JSON.stringify(h)
},p="/mp/relatedarticle?action=dislike";
e.isVideo&&(b.vid_from=e.vid,b.vid=i.getAttribute("data-vid"),p="/mp/video_similar?action=dislike"),
o({
type:"POST",
url:p,
dataType:"json",
data:b,
success:function(i){
if(console.log(i),i&&i.base_resp&&0===i.base_resp.ret){
e.hide(m);
var a=t(m,"js_related_item");
e.dislikeCb(a);
}else window.weui.alert("系统错误，请稍后重试");
}
});
}
},this.maskHandler=function(t){
t.stopPropagation(),t.preventDefault(),e.hide(t.target);
},this.maskTouchMoveHandler=function(e){
e.stopPropagation(),e.preventDefault();
},this.stopPropagationHandler=function(e){
e.stopPropagation();
},n.on(i,"click",".js_tag_item",this.tabClickEventHandler,!0),n.on(m,"click",this.submitDataHandler,!0),
n.on(i,"click",".js_mask",this.maskHandler,!0),n.on(i,"touchmove",".js_mask",this.maskTouchMoveHandler,!0),
n.on(i,"touchmove",".js_dialog_wrp",this.maskTouchMoveHandler,!0),n.on(i,"click",".js_dialog_wrp",this.maskTouchMoveHandler,!1),
n.on(i,"touchstart",".js_feedback_dialog",this.stopPropagationHandler,!0),n.on(i,"touchend",".js_feedback_dialog",this.stopPropagationHandler,!0);
},i.prototype.show=function(){
this.container.querySelector(".js_feedback_dialog").style.display="",s.addClass(this.container.querySelector(".js_feedback_dialog"),"feedback_dialog_show");
},i.prototype.hide=function(){
var e=this.container,t=e.querySelector(".js_submit");
n.off(e,"click",this.tabClickEventHandler,!0),n.off(t,"click",this.submitDataHandler,!0),
n.off(e,"click",this.maskHandler,!0),n.off(e,"touchmove",this.maskTouchMoveHandler,!0),
n.off(e,"click",this.maskTouchMoveHandler,!1),s.removeClass(this.container.querySelector(".js_feedback_dialog"),"feedback_dialog_show");
},{
init:a
};
});