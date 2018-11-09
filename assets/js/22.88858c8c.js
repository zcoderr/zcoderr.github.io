(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{165:function(t,a,n){"use strict";n.r(a);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=n(5),p=Object(o.a)(s,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("p",[t._v("Spring的繁琐的配置简直是每个项目开始的时候都会吐槽的地方，特别是对于较为小型的项目，或者是个人项目，过于繁琐的配置就更显得多余了。Spring boot是Spring推出的一个轻量化web框架，主要解决了Spring对于小型项目饱受诟病的配置和开发速度问题。")]),t._v(" "),n("p",[t._v("来自Spring官网对Spring boot的介绍：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Takes an opinionated view of building production-ready Spring applications. Spring Boot favors convention over configuration and is designed to get you up and running as quickly as possible.\n")])])]),n("p",[t._v("大概意思就是Spring boot是一个简化了配置的Spring，专门为快速开发而设计。")]),t._v(" "),n("h2",{attrs:{id:"一、入门示例程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、入门示例程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、入门示例程序")]),t._v(" "),n("h3",{attrs:{id:"_1、添加pom依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、添加pom依赖","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、添加pom依赖")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[t._v(" "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("parent")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-parent"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.2.3.RELEASE"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("parent")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project.build.sourceEncoding")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("UTF-8"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project.build.sourceEncoding")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("java.version")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("java.version")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-web"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugins")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-maven-plugin"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugins")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("build")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n")])])]),n("h3",{attrs:{id:"_2、编写控制器和启动程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、编写控制器和启动程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、编写控制器和启动程序")]),t._v(" "),n("p",[t._v("1. 控制器和SpringMVC中一样，通过添加注解的方式配置。代码如下：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("package")]),t._v(" control"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoconfigure"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EnableAutoConfiguration"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PathVariable"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RequestMapping"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RestController"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * Created by zachary on 16/8/8.\n */")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("//声明为控制器")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@EnableAutoConfiguration")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//自动配置")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Control")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"/"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//请求路径，和Spring一样")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String "),n("span",{attrs:{class:"token function"}},[t._v("Hello")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Hello Spring boot!"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"/user/{username}"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//带参数的请求路径")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String "),n("span",{attrs:{class:"token function"}},[t._v("User")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),t._v(" String username"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Hello "')]),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("username"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("2. 启动程序作为程序入口，包含一个主方法，因为Spring boot 自带容器（默认为tomcat），所以直接运行这个主方法就可以在浏览器中直接访问程序，当然，还需要添加相应注解使上面配置好的控制器可以被自动扫描添加。")]),t._v(" "),n("p",[n("strong",[t._v("这里有个坑：启动程序必须包含在一个包中，如果直接放在/src/main/java中，自动扫描其它控制器会失效，具体原因等查到了会写上来")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("package")]),t._v(" control"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SpringApplication"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoconfigure"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EnableAutoConfiguration"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ComponentScan"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Configuration"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//相当于传统的xml配置文")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@ComponentScan")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//表示将该类自动发现（扫描）并注册为Bean，可以自动收集所有的Spring组件，包括@Configuration类。我们经常使用@ComponentScan注解搜索beans，并结合@Autowired注解导入。")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@EnableAutoConfiguration")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("main")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        SpringApplication"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("run")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Application"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"二、注解详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、注解详解","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、注解详解")]),t._v(" "),n("p",[t._v("Spring boot 中常用的注解如下：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("@ResponseBody\n用该注解修饰的函数，会将结果直接填充到HTTP的响应体中，一般用于构建RESTful的api；")])]),t._v(" "),n("li",[n("p",[t._v("@Controller\n用于定义控制器类，在spring 项目中由控制器负责将用户发来的URL请求转发到对应的服务接口（service层）。")])]),t._v(" "),n("li",[n("p",[t._v("@RestController\n@ResponseBody和@Controller的合集")])]),t._v(" "),n("li",[n("p",[t._v("@RequestMapping\n提供路由信息，负责URL到Controller中的具体函数的映射。")])]),t._v(" "),n("li",[n("p",[t._v("@EnableAutoConfiguration\nSpring Boot自动配置（auto-configuration）：尝试根据你添加的jar依赖自动配置你的Spring应用。例如，如果你的classpath下存在HSQLDB，并且你没有手动配置任何数据库连接beans，那么我们将自动配置一个内存型（in-memory）数据库”。你可以将@EnableAutoConfiguration或者@SpringBootApplication注解添加到一个@Configuration类上来选择自动配置。如果发现应用了你不想要的特定自动配置类，你可以使用@EnableAutoConfiguration注解的排除属性来禁用它们.")])]),t._v(" "),n("li",[n("p",[t._v("@ComponentScan\n表示将该类自动发现（扫描）并注册为Bean，可以自动收集所有的Spring组件，包括@Configuration类。我们经常使用@ComponentScan注解搜索beans，并结合@Autowired注解导入。")])]),t._v(" "),n("li",[n("p",[t._v("@Configuration\n相当于传统的xml配置文件，如果有些第三方库需要用到xml文件，建议仍然通过@Configuration类作为项目的配置主类——可以使用@ImportResource注解加载xml配置文件。")])]),t._v(" "),n("li",[n("p",[t._v("@SpringBootApplication\n相当于@EnableAutoConfiguration、@ComponentScan和@Configuration的合集。")])]),t._v(" "),n("li",[n("p",[t._v("@Import\n用来导入其他配置类。")])]),t._v(" "),n("li",[n("p",[t._v("@ImportResource\n用来加载xml配置文件。")])]),t._v(" "),n("li",[n("p",[t._v("@Autowired\n自动导入依赖的bean")])]),t._v(" "),n("li",[n("p",[t._v("@Service\n一般用于修饰service层的组件")])]),t._v(" "),n("li",[n("p",[t._v("@Repository\n使用@Repository注解可以确保DAO或者repositories提供异常转译，这个注解修饰的DAO或者repositories类会被ComponetScan发现并配置，同时也不需要为它们提供XML配置项。")])])]),t._v(" "),n("h2",{attrs:{id:"三、部署到tomcat"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、部署到tomcat","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、部署到tomcat")]),t._v(" "),n("p",[t._v("由此看来，Spring boot确实大大简化了以往的Spring开发，个人认为今后在小型系统中，使用Spring boot毫无疑问。\n因为Spring boot自带容器，所以开发完成后将项目部署到tomcat中还需要几步简单的操作：")])])},[],!1,null,null,null);p.options.__file="使用springboot快速搭建简洁高效的web应用（一）.md";a.default=p.exports}}]);