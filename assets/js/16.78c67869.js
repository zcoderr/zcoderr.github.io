(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{179:function(s,e,n){"use strict";n.r(e);var p={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=n(5),o=Object(r.a)(p,function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[n("p",[n("strong",[s._v("以前一直把wp放在SAE中，虽然一键配置很方便，但是访问速度和灵活性会受到很大影响，上传图片容易出错，也没法更新版本，安装主题和插件都是通过svn上传的方式进行的，很是麻烦，前几天阿里云优惠开了个学生套餐，第一件事就是先搭个博客，把整个过程和之中遇到的问题记录如下，希望能对遇到问题的朋友有所帮助")])]),s._v(" "),n("p",[n("em",[s._v("有件事情要提一下，一开始镜像选的是CentOS,通过yum安装MySQL竟然不成功，试了很多次也没找到问题所在，遂对阿里云上的Centos产生了怀疑，于是索性换成阿里云版Linux镜像，配套的服务器和系统使用起来问题应该会少一些")]),s._v("\n####下面正式开始WordPress的配置过程")]),s._v(" "),n("p",[s._v("1.先新建一个空的数据库用于博客")]),s._v(" "),n("pre",[n("code",[s._v("rpm -qa | grep mysql　    // 这个命令就会查看该操作系统上是否已经安装了mysql数据库\n# yum install -y mysql-server mysql mysql-deve  //安装数据库服务\nservice mysqld start      //启动数据库服务\nmysqladmin -u root password 'newpassword'  //设置数据库密码\nmysql -u root -p   //登录数据库\n")])]),s._v(" "),n("p",[s._v("2.通过wget下载WordPress的官方最新版到任意目录")]),s._v(" "),n("pre",[n("code",[s._v("wget https://cn.wordpress.org/wordpress-4.4.2-zh_CN.zip\n")])]),s._v(" "),n("p",[s._v("3.解压下载到的压缩包，在文件wp-config-sample.php中添加数据库信息并保存为wp-config.php")]),s._v(" "),n("pre",[n("code",[s._v("unzip wordpress-4.4.2-zh_CN.zip\nnano wp-config-sample.php #填写第一步建立的空数据库的信息\n")])]),s._v(" "),n("p",[s._v("4.将修改后的WordPress文件夹拷贝至/var/www/html")]),s._v(" "),n("pre",[n("code",[s._v("cp -rf wordpress/* /var/www/html/\n")])]),s._v(" "),n("p",[s._v("5.浏览器中输入服务器ip，显示：您的PHP似乎没有安装运行WordPress所必需的MySQL扩展。解决办法：在 /etc/php.ini中添加")]),s._v(" "),n("pre",[n("code",[s._v("extension=mysql.so\n")])]),s._v(" "),n("p",[s._v("然后安装php-mysql：")]),s._v(" "),n("pre",[n("code",[s._v("yum install php-mysql\n")])]),s._v(" "),n("p",[n("strong",[s._v("这样所需的扩展就开启了，然后重启服务器，重启之后一定要确保mysqld和httpd服务是开启的。")])]),s._v(" "),n("pre",[n("code",[s._v("chkconfig mysqld on  //设置MySQL服务开机启动\nchkconfig httpd on   //设置http服务开机启动\nservice httpd start  //启动httpd服务\nservice mysqld start //启动mysql服务\n")])]),s._v(" "),n("p",[s._v("6.再次输入ip已经能够成功打开，填写好WordPress初始化信息后，还需要修改wp-config.php文件和WordPress安装目录的读写权限，否则无法安装主题或插件。修改如下：\n在wp-config.php文件的末尾添加以下脚本")]),s._v(" "),n("pre",[n("code",[s._v('define("FS_METHOD","direct");\n\ndefine("FS_CHMOD_DIR", 0777);\n\ndefine("FS_CHMOD_FILE", 0777);\n')])]),s._v(" "),n("p",[s._v("然后修改安装目录读写权限")]),s._v(" "),n("pre",[n("code",[s._v("sudo chmod -R 777 /var/www/\n")])]),s._v(" "),n("p",[n("strong",[s._v("至此Wordpress已经完全可用了，大家有什么问题和心得欢迎在下面留言讨论，此文章为本人原创，转载请注明出处")])])])},[],!1,null,null,null);o.options.__file="Linux中WordPress的搭建与常见问题.md";e.default=o.exports}}]);