/*
 * navigator对象是window对象下 的
	alert(window.navigator);		// object Navigator
 
	alert(navigator.appName); 		//完整的浏览器的名称 ，并不是精确的
	// 用户代理字符串
	alert(navigator.userAgent);			// 浏览器用户代理字符串 浏览器的各个方面的信息

	alert('浏览器所在的系统：'+navigator.platform);	// win32
	
	// 浏览器嗅觉探测器
	一个js脚本 可以嗅探浏览器的信息  BrowerDetect.js
	alert(BrowserDetect.browser);			//浏览器的名称
	alert(BrowserDetect.version);			// 浏览器的版本号
	alert(BrowserDetect.OS);				// 所在的系统
	
	// 给IE7 以下的版本的特殊处理
	if(BrowserDetect.browser == 'Internet Explorer' && BrowserDetect.version<7 ){
		alert('需要做IE低版本的兼容！');
	}
	
	// 检测插件
	插件是一类特殊的程序。可以扩展浏览器的功能 。比如 在线音乐、视频动画 flash等
	
	navigator 对象的 Plugins属性，这是一个数组。储存在浏览器已安装插件的完整列表。
	
	name 插件名
	filename	插件的磁盘文件名
	length		plugins 数组的 元素个数
	description 插件的描述信息
	alert(navigator.plugins);	//object MSPlugins 
	

	// 列出插件的类型
	for (var i = 0; i < navigator.plugins.length; i++) {
		var array_element1 = navigator.plugins[i].description;
		var array_element2 = navigator.plugins[i].filename;
		var array_element3 = navigator.plugins[i].name;
		document.write('插件名'+i+': '+array_element3+'<br/>');
		document.write('文件名'+i+': '+array_element2+'<br/>');
		document.write('描   述'+i+': '+array_element1+'<br/>');
		document.write('<br/>');
	}

	// 检测非IE浏览器插件是否存在
	function hasPlugin(name){
		// 全部转为小写
		var name = name.toLowerCase();
		for (var i = 0; i < navigator.plugins.length; i++) {
			var d = navigator.plugins[i];
			if (navigator.plugins[i].name.toLowerCase().indexOf(name)>-1) {
				return true;
			}
		}
		return false;
	}
	alert(hasPlugin('Flash'));		// 检测是否具有flash
	alert(hasPlugin('qq'));		// 检测是否有qq的插件

	4.ActiveX
	IE browser没有插件，但提供了ActiveX控件 。ActiveX控件是一种在web页面中嵌入对象或者数组的方法。
	检测IE中的控件  ShockwaveFlash
	
	function hasIEPlugin(name) {
		try {
			new ActiveXObject(name);		// name必须是空间的的唯一标识符ID
			return true;			//如果new成功了，没有产出错误就不执行catch
		} catch (e) {
			return false;
		}
	}
	// alert(hasIEPlugin('flash'));
	// 检测 IE  的 flash
	alert(hasIEPlugin('ShockwaveFlash.ShockwaveFlash'));

	// 跨浏览器检测
		function hasPlugin(name){
			// 全部转为小写
			var name = name.toLowerCase();
			for (var i = 0; i < navigator.plugins.length; i++) {
				var d = navigator.plugins[i];
				if (navigator.plugins[i].name.toLowerCase().indexOf(name)>-1) {
					return true;
				}
			}
			return false;
		}
		
		function hasIEPlugin(name) {
			try {
				new ActiveXObject(name);		// name必须是空间的的唯一标识符ID
				return true;			//如果new成功了，没有产出错误就不执行catch
			} catch (e) {
				return false;
			}
		}
		
		function hasFlash(){
			var result = hasPlugin('flash');
			if(!result){
				result = hasIEPlugin('ShockwaveFlash.ShockwaveFlash');
			}
			return result;
		}
		
		alert(hasFlash());
		
		mime 类型
 */