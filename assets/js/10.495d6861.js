(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{174:function(t,a,s){"use strict";s.r(a);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=s(5),e=Object(o.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("p",[s("code",[t._v("声明")]),t._v(": 这是我在Android开发学习过程中所写的笔记，在保证内容足够详细的同时也尽量不说废话，本系列文章持续更新,如有疏漏或错误的地方欢迎批评指正,如需转载请注明出处。")]),t._v(" "),s("p",[t._v("** 在独立完成了几个不大不小的App之后，对混乱的项目结构产生了思考，在这几个项目中的分层基本上是沿用了JavaEE经验，或者主观上强行将不同业务分开，甚至把所有后台逻辑都放进了service层，Android中特有的和UI相关的类并没有分层，都堆放在了一起，我意识到如果业务进一步增多，这样的结构会非常难以维护，自己都开始理不清各个类之间的关系，于是我购买了《App研发录》和《Android编程权威指南》两本书，加之参考网上的资料，开始了对Android项目结构的学习，希望能让以后的项目更加规范、易于维护扩展和阅读。 **")]),t._v(" "),s("h3",{attrs:{id:"一、组织清晰的项目结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、组织清晰的项目结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、组织清晰的项目结构")]),t._v(" "),s("p",[t._v("新的项目包结构如下：")]),t._v(" "),s("ul",[s("li",[t._v("activity （根据种类将不同activity放入不同包中）\n"),s("ul",[s("li",[t._v("others")]),t._v(" "),s("li",[t._v("personcenter")]),t._v(" "),s("li",[t._v("......")])])]),t._v(" "),s("li",[t._v("adatper （所有的适配器，如果太多再分开放）")]),t._v(" "),s("li",[t._v("db （SQLite相关逻辑）")]),t._v(" "),s("li",[t._v("engine （业务相关的类）")]),t._v(" "),s("li",[t._v("entity （所有实体类）")]),t._v(" "),s("li",[t._v("ui （自定义控件）")]),t._v(" "),s("li",[t._v("utils （公用方法）")]),t._v(" "),s("li",[t._v("interfaces （接口）")]),t._v(" "),s("li",[t._v("listener (基于Listener的接口，I开头命名)")]),t._v(" "),s("li",[t._v("net （网络层封装）")]),t._v(" "),s("li",[t._v("cache （缓存数据和图片的处理）")])]),t._v(" "),s("h3",{attrs:{id:"二、细化activity的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、细化activity的生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、细化Activity的生命周期")]),t._v(" "),s("p",[t._v("在Activity的onCreate()方法中调用另外三个不同作用的子方法，使onCrete()更加精简，如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("BaseActivity")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Activity")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bundle savedInststanceState"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("super")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("onCreate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInststanceState"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("initVariables")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("initViews")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("savedInststanceState"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("loadData")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("initVariables")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//初始化变量，包括Intent携带的数据")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("initViews")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bundle savedInststanceState"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//加载布局文件，初始化控件，为按钮注册监听事件")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("loadData")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//视具体业务而定，把每次启动Activity都要进行的操作放在这里")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"三、统一事件编程模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、统一事件编程模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、统一事件编程模型")]),t._v(" "),s("p",[t._v("统一事件编程模型就是在给按钮设定事件的时候采用同一种风格，个人比较倾向的是在按钮控件上直接添加点击事件，将业务封装到另一个私有方法中，在onclick()函数中调用这个方法。")]),t._v(" "),s("h3",{attrs:{id:"四、实体化编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、实体化编程","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、实体化编程")]),t._v(" "),s("p",[t._v("实体化编程就是在使用json作为数据传递格式时，新建一个当前数据的实体，对数据的操作先解析为这个实体的一个对象。由于之前就是这么用的，不再做说明。")]),t._v(" "),s("h3",{attrs:{id:"五、adapter模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、adapter模板","aria-hidden":"true"}},[t._v("#")]),t._v(" 五、Adapter模板")]),t._v(" "),s("p",[t._v("让项目中所有的适配器都继承自BaseAdapter，并且在适配器中统一使用ViewHolder让listview更加流畅。")]),t._v(" "),s("p",[t._v("做法就是在适配器中添加一个ViewHolder类，构建视图时，使用convertView作为缓存，如果ViewHolder不为空，就从中加载控件。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" View "),s("span",{attrs:{class:"token function"}},[t._v("getView")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" View convertView"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ViewGroup viewGroup"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//构建视图前先判读，如果convertview不为空，说明视图已经构建且缓存，则直接从convertView中通过getTag()方法加载之前用setTag()方法保存的视图。")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" ViewHolder viewHolder"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("convertView"),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            viewHolder "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ViewHolder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            LayoutInflater layoutInflater "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LayoutInflater"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("from")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            convertView "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" layoutInflater"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("inflate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gankioimage_list_item"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            viewHolder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextView"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("convertView"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("findViewById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tv_gankid_date"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            viewHolder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imageView "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ImageView"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("convertView"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("findViewById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iv_gankio_image"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            convertView"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setTag")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("viewHolder"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            viewHolder "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ViewHolder"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("convertView"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getTag")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        Image image "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" images"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v("null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            viewHolder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setText")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getPublishedAt")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Picasso"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("with")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("load")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getUrl")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("into")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("viewHolder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imageView"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" convertView"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//创建ViewHolder类用来构建和缓存视图")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ViewHolder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        TextView  data"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ImageView  imageView"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"六、使用类型转换函数避免转换类型时产生崩溃"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、使用类型转换函数避免转换类型时产生崩溃","aria-hidden":"true"}},[t._v("#")]),t._v(" 六、使用类型转换函数避免转换类型时产生崩溃")])])},[],!1,null,null,null);e.options.__file="Android进阶之项目重构.md";a.default=e.exports}}]);