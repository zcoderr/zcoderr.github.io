(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{167:function(t,e,n){"use strict";n.r(e);var o={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=n(5),i=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("p",[t._v("多数情况下大家选择将hexo部署在github pages中，虽然具有完全免费而且一次部署无需维护的优势，但由于github服务器在境外，而且随着前段时间github屏蔽了百度爬虫的抓取，在国内的访问速度和百度搜索的呈现得不到保证，最方便的解决方案就是使用国内众多厂商都提供的CDN服务。\n"),t._v("\n　　国内可以选择的CDN服务许多，而且基本都有免费套餐，使用方式也都基本一致，本文简单介绍一下基于腾讯云的CDN如何加快博客访问速度和百度爬取。也同样适用于其他类型的网络程序。CDN在原理上相当于一个dns代理，这个代理中既包含了A类型的解析，又包含了Cache，之所能加快网站的访问速度，就是因为这个Cache层通常是分布在各地的节点组成的，网络请求会被CDN转发到距离用户最近的节点上。\n　　　\n所以不管是哪家的CDN，通用的设置都是这样的：")]),t._v(" "),n("ol",[n("li",[t._v("设置你要加速的域名")]),t._v(" "),n("li",[t._v("添加源服务器的IP，让CDN可以找到网站的服务器，相当于域名解析中的A类型解析")]),t._v(" "),n("li",[t._v("设置缓存规则，可以根据自己的需求随时秀修改")]),t._v(" "),n("li",[t._v("CDN服务会提供给你一个二级域名，通过CNAME将要加速的域名转发到这个二级域名（现在只需要这一条解析，原来A解析到网站服务器的规则要删掉）")])]),t._v(" "),n("p",[t._v("经过以上的设置，所有来自用户的请求都会被转发到CDN所提供的这个二级域名，CDN会根据已经设置的缓存规则自动选择请求源站信息还是返回给用户Cache节点的信息。")]),t._v(" "),n("ul",[n("li",[t._v("百度seo")])]),t._v(" "),n("p",[t._v("在CDN设置面板中，通常都会有一个搜索引擎自动回源设置，当这个设置关闭时，搜索引擎会爬取Cache节点中的内容，很容易的解决了github屏蔽百度爬虫的问题。")]),t._v(" "),n("p")])},[],!1,null,null,null);i.options.__file="使用cdn加速博客访问速度和百度seo.md";e.default=i.exports}}]);