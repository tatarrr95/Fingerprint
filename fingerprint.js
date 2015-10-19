			
			//устанавливаем куки
			function setCookie (name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}		

				var hash = function(s){
	var n;
	if (typeof(s) == 'number' && s === parseInt(s, 10)){
		s = Array(s + 1).join('x');
	}
	return s.replace(/x/g, function(){
		var n = Math.round(Math.random() * 61) + 48;
		n = n > 57 ? (n + 7 > 90 ? n + 13 : n + 7) : n;
		return String.fromCharCode(n);
	});
}		
			
			
			if(getCookie('lolipop') == null){
setCookie('lolipop', hash(13), '31556926');
}
			
			//Скрипт для определения шрифтов
			        var Detector = function () {
                    var baseFonts = ['monospace', 'sans-serif', 'serif'];
                    var testString = "mmmmmmmmmmlli";
                    var testSize = '72px';

                    var h = document.getElementsByTagName("body")[0];
                    var s = document.createElement("span");
                    s.style.fontSize = testSize;
                    s.innerHTML = testString;
                    var defaultWidth = {};
                    var defaultHeight = {};
                    for (var index in baseFonts) {
                        s.style.fontFamily = baseFonts[index];
                        h.appendChild(s);
                        defaultWidth[baseFonts[index]] = s.offsetWidth;
                        defaultHeight[baseFonts[index]] = s.offsetHeight;
                        h.removeChild(s);
                    }

                    function detect(font) {
                        var detected = false;
                        for (var index in baseFonts) {
                            s.style.fontFamily = font + ',' + baseFonts[index];
                            h.appendChild(s);
                            var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
                            h.removeChild(s);
                            detected = detected || matched;
                        }
                        return detected;
                    }

                    this.detect = detect;
                };


                var detective = new Detector(),
                        myfonts = ['Abadi MT', 'Aharoni Bold', 'Al Bayan', 'Andale Mono', 'Andalus', 'AngsanaUPC', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple Gothic', 'Apple LiGothic Medium', 'Apple LiSung Light', 'Apple Myungjo', 'Apple Symbols', 'Aqua Kana', 'Arabic Typesetting', 'Helvetica', 'Nimbus Sans', 'Arial Hebrew', 'Arial Narrow', 'Arial Rounded', 'Arial Unicode', 'Ayuthaya', 'Baghdad', 'Bangla MN', 'Bangla Sangam MN', 'Baskerville', 'BatangChe', 'BiauKai', 'Big Caslon', 'Book Antiqua', 'Browallia New', 'BrowalliaUPC', 'Brush Script', 'Calibri', 'Calisto MT', 'Cambria', 'Candara', 'Century GothicChalkboard', 'Chalkduster', 'Charcoal', 'Cochin', 'Comic Sans MS', 'Monaco', 'Consolas', 'Constantia', 'Copperplate', 'Corbel', 'Cordia New', 'CordiaUPC', 'Corsiva', 'Courier', 'Courier New', 'DFKai-SB', 'Damascus', 'David', 'DaunPenh', 'David Transparent', 'DecoType Naskh', 'Devanagari MT', 'Devanagari Sangam MN', 'Didot', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Estrangelo Edessa', 'EucrosiaUPC', 'Euphemia', 'FangSong', 'Fixed Miriam Transparent', 'FrankRuehl', 'Franklin Gothic Medium', 'FreesiaUPC', 'Futura', 'GB18030 Bitmap', 'Gabriola', 'Garamond', 'Gautami', 'Geeza Pro', 'Geneva', 'Georgia', 'Gill Sans', 'Gill Sans MT', 'Gisha', 'Gujarati MT', 'Gujarati Sangam MN', 'Gulim', 'GungSeo', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Gurmukhi MT', 'Head Line A', 'Hei', 'Heiti SC', 'Heiti TC', 'Helvetica', 'Helvetica Neue', 'Herculanum', 'Hiragino Kaku Gothic', 'Hiragino Maru Gothic', 'Hiragino Mincho', 'Hiragino Sans', 'Hoefler Text', 'Impact', 'InaiMathi', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Kai', 'KaiTi', 'Kailasa', 'Kalinga', 'Kannada MN', 'Kannada Sangam MN', 'Kartika', 'Kefa', 'Keyboard', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Kokonor', 'Krungthep', 'KufiStandardGK', 'Lao UI', 'Last Resort', 'Latha', 'Leelawadee', 'Levenim MT', 'LiHei Pro', 'LiSong Pro', 'LilyUPC', 'Lucida Console', 'Lucida Grande', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter Regular', 'Lucida Sans Unicode', 'MS Gothic', 'MS Mincho', 'MS PGothic', 'MS PMincho', 'MS UI Gothic', 'MV Boli', 'Malayalam MN', 'Malayalam Sangam MN', 'Malgun Gothic', 'Mangal', 'Marker Felt', 'Marlett', 'Meiryo', 'Meiryo UI', 'Menlo', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le', 'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU-ExtB', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'Miriam', 'Miriam Fixed', 'Miriam Transparent', 'Monaco', 'Mongolian Baiti', 'MoolBoran', 'Myanmar MN', 'Myanmar Sangam MN', 'NSimSun', 'Nadeem', 'Nanum Gothic', 'Nanum Myeongjo', 'Nanum Script', 'Narkisim', 'New Peninim MT', 'News Gothic MT', 'Noteworthy', 'Nyala', 'OCR A Extended', 'Optima', 'Oriya MN', 'Osaka', 'Osaka-Mono', 'PCMyungjo', 'PMingLiU', 'PMingLiU-ExtB', 'PTSans', 'Palatino Linotype', 'Papyrus', 'PilGi', 'Plantagenet Cherokee', 'Raanana', 'Raavi', 'Rod', 'Rod Transparent', 'STHeiti', 'STXihei', 'Sakkal Majalla', 'Sathu', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Symbol', 'Shonar Bangla', 'Shruti', 'Silom', 'SimHei', 'SimSun', 'SimSun-ExtB', 'Simplified Arabic', 'Simplified Arabic Fixed', 'Sinhala MN', 'Sinhala Sangam MN', 'Skia', 'Sylfaen', 'Symbol', 'Tahoma', 'Tamil MN', 'Tamil Sangam MN', 'Telugu MN', 'Telugu Sangam MN', 'Thonburi', 'Times', 'Times New Roman', 'Traditional Arabic', 'Trebuchet MS', 'Tunga', 'Utsaah', 'Vani', 'Verdana', 'Vijaya', 'Vrinda', 'Webdings', 'Westminster', 'Wingdings', 'Zapf Dingbats', 'Zapfino'
                        ]
                var fonthash = '';
                for (var i = 0; i < myfonts.length; i++) {
                    if (detective.detect(myfonts[i])) {
                        fonthash = fonthash + '1';
                    }
                    else {
                        fonthash = fonthash + '0';
                    }
                }
				
				
				
				
				//скрипт для определения экрана
			for (var prop in screen) {
                    if (navigator[prop] instanceof Object || screen[prop] === '')
                        continue
                }
				var dvodepth;
				if(screen.pixelDepth == '24'){dvodepth = '1'}
				else{dvodepth = '0'}

                function dvoscreen() {
                    if (screen.width == 320 & screen.height == 240) {
                        return '0000001' + dvodepth;
                    }

                    else if (screen.width == 352 & screen.height == 240) {
                        return '0000010' + dvodepth;
                    }

                    else if (screen.width == 352 & screen.height == 288) {
                        return '0000011' + dvodepth;
                    }

                    else if (screen.width == 400 & screen.height == 240) {
                        return '0000100' + dvodepth;
                    }

                    else if (screen.width == 480 & screen.height == 576) {
                        return '0000101' + dvodepth;
                    }

                    else if (screen.width == 640 & screen.height == 360) {
                        return '0000110' + dvodepth;
                    }

                    else if (screen.width == 800 & screen.height == 480) {
                        return '0000111' + dvodepth;
                    }

                    else if (screen.width == 640 & screen.height == 480) {
                        return '0001000' + dvodepth;
                    }

                    else if (screen.width == 800 & screen.height == 600) {
                        return '0001001' + dvodepth;
                    }

                    else if (screen.width == 854 & screen.height == 480) {
                        return '0001010' + dvodepth;
                    }

                    else if (screen.width == 960 & screen.height == 540) {
                        return '0001011' + dvodepth;
                    }

                    else if (screen.width == 1024 & screen.height == 600) {
                        return '0001100' + dvodepth;
                    }

                    else if (screen.width == 1024 & screen.height == 768) {
                        return '0001101' + dvodepth;
                    }

                    else if (screen.width == 1152 & screen.height == 864) {
                        return '0001110' + dvodepth;
                    }

                    else if (screen.width == 1200 & screen.height == 600) {
                        return '0001111' + dvodepth;
                    }

                    else if (screen.width == 1280 & screen.height == 720) {
                        return '0010000' + dvodepth;
                    }

                    else if (screen.width == 1280 & screen.height == 768) {
                        return '0010001' + dvodepth;
                    }

                    else if (screen.width == 1280 & screen.height == 1024) {
                        return '0010010' + dvodepth;
                    }

                    else if (screen.width == 1440 & screen.height == 900) {
                        return '0010011' + dvodepth;
                    }

                    else if (screen.width == 1400 & screen.height == 1050) {
                        return '0010100' + dvodepth;
                    }

                    else if (screen.width == 1536 & screen.height == 960) {
                        return '0010101' + dvodepth;
                    }

                    else if (screen.width == 1536 & screen.height == 1024) {
                        return '0010110' + dvodepth;
                    }

                    else if (screen.width == 1600 & screen.height == 900) {
                        return '0010111' + dvodepth;
                    }

                    else if (screen.width == 1600 & screen.height == 1024) {
                        return '0011000' + dvodepth;
                    }

                    else if (screen.width == 1600 & screen.height == 1200) {
                        return '0011001' + dvodepth;
                    }

                    else if (screen.width == 1680 & screen.height == 1050) {
                        return '0011010' + dvodepth;
                    }

                    else if (screen.width == 1920 & screen.height == 1080) {
                        return '0011011' + dvodepth;
                    }

                    else if (screen.width == 1920 & screen.height == 1200) {
                        return '0011100' + dvodepth;
                    }

                    else if (screen.width == 2048 & screen.height == 1080) {
                        return '0011101' + dvodepth;
                    }

                    else if (screen.width == 2048 & screen.height == 1152) {
                        return '0011110' + dvodepth;
                    }

                    else if (screen.width == 2048 & screen.height == 1536) {
                        return '0011111' + dvodepth;
                    }

                    else if (screen.width == 2560 & screen.height == 1440) {
                        return '0100000' + dvodepth;
                    }

                    else if (screen.width == 2560 & screen.height == 1600) {
                        return '0100001' + dvodepth;
                    }

                    else if (screen.width == 2056 & screen.height == 2048) {
                        return '0100010' + dvodepth;
                    }

                    else if (screen.width == 3200 & screen.height == 2048) {
                        return '0100011' + dvodepth;
                    }

                    else if (screen.width == 3200 & screen.height == 2400) {
                        return '0100100' + dvodepth;
                    }

                    else if (screen.width == 3840 & screen.height == 2400) {
                        return '0100101' + dvodepth;
                    }

                    else if (screen.width == 3840 & screen.height == 2160) {
                        return '0100110' + dvodepth;
                    }

                    else if (screen.width == 4096 & screen.height == 2160) {
                        return '0100111' + dvodepth;
                    }

                    else if (screen.width == 5120 & screen.height == 4096) {
                        return '0101000' + dvodepth;
                    }

                    else if (screen.width == 6400 & screen.height == 4096) {
                        return '0101001' + dvodepth;
                    }

                    else if (screen.width == 6400 & screen.height == 4800) {
                        return '0101010' + dvodepth;
                    }

                    else if (screen.width == 7680 & screen.height == 4320) {
                        return '0101011' + dvodepth;
                    }

                    else if (screen.width == 7680 & screen.height == 4800) {
                        return '0101100' + dvodepth;
                    }

                    return '1111111';
                }

				
				
				
				//скрипт для определения часового пояса
			x = new Date()
                currentTimeZoneOffsetInHours = -x.getTimezoneOffset() / 60

                if (currentTimeZoneOffsetInHours == -12) {
                    var dvotime = 00001
                }
                if (currentTimeZoneOffsetInHours == -11) {
                    var dvotime = 00010
                }
                if (currentTimeZoneOffsetInHours == -10) {
                    var dvotime = 00011
                }
                if (currentTimeZoneOffsetInHours == -9) {
                    var dvotime = 00100
                }
                if (currentTimeZoneOffsetInHours == -8) {
                    var dvotime = 00101
                }
                if (currentTimeZoneOffsetInHours == -7) {
                    var dvotime = 00110
                }
                if (currentTimeZoneOffsetInHours == -6) {
                    var dvotime = 00111
                }
                if (currentTimeZoneOffsetInHours == -5) {
                    var dvotime = 01000
                }
                if (currentTimeZoneOffsetInHours == -4) {
                    var dvotime = 01001
                }
                if (currentTimeZoneOffsetInHours == -3) {
                    var dvotime = 01010
                }
                if (currentTimeZoneOffsetInHours == -2) {
                    var dvotime = 01011
                }
                if (currentTimeZoneOffsetInHours == -1) {
                    var dvotime = 01100
                }
                if (currentTimeZoneOffsetInHours == 0) {
                    var dvotime = 01101
                }
                if (currentTimeZoneOffsetInHours == 1) {
                    var dvotime = 01110
                }
                if (currentTimeZoneOffsetInHours == 2) {
                    var dvotime = 01111
                }
                if (currentTimeZoneOffsetInHours == 3) {
                    var dvotime = 10000
                }
                if (currentTimeZoneOffsetInHours == 4) {
                    var dvotime = 10001
                }
                if (currentTimeZoneOffsetInHours == 5) {
                    var dvotime = 10010
                }
                if (currentTimeZoneOffsetInHours == 6) {
                    var dvotime = 10011
                }
                if (currentTimeZoneOffsetInHours == 7) {
                    var dvotime = 10100
                }
                if (currentTimeZoneOffsetInHours == 8) {
                    var dvotime = 10101
                }
                if (currentTimeZoneOffsetInHours == 9) {
                    var dvotime = 10110
                }
                if (currentTimeZoneOffsetInHours == 10) {
                    var dvotime = 10111
                }
                if (currentTimeZoneOffsetInHours == 11) {
                    var dvotime = 11000
                }
                if (currentTimeZoneOffsetInHours == 12) {
                    var dvotime = 11001}
					
					
					//скрипт для user-agent
			for (var prop in navigator) {
                    if (navigator[prop] instanceof Object || navigator[prop] === '')
                        continue
    //document.writeln(prop+": "+navigator[prop])
                }

    //Сначала платформа 
                if (navigator.platform == 'Android') {
                    var dvoplatform = '000001'
                }
                if (navigator.platform == 'Linux') {
                    var dvoplatform = '000010'
                }
                if (navigator.platform == 'null') {
                    var dvoplatform = '000011'
                }
                if (navigator.platform == 'undefined') {
                    var dvoplatform = '000100'
                }
                if (navigator.platform == 'iPhone') {
                    var dvoplatform = '000101'
                }
                if (navigator.platform == 'iPod') {
                    var dvoplatform = '000110'
                }
                if (navigator.platform == 'iPad') {
                    var dvoplatform = '000111'
                }
                if (navigator.platform == 'Pike v7.6 release 92') {
                    var dvoplatform = '001000'
                }
                if (navigator.platform == 'Pike v7.8 release 517') {
                    var dvoplatform = '001001'
                }
                if (navigator.platform == 'Macintosh') {
                    var dvoplatform = '001010'
                }
                if (navigator.platform == 'MacIntel') {
                    var dvoplatform = '001011'
                }
                if (navigator.platform == 'MacPPC') {
                    var dvoplatform = '001100'
                }
                if (navigator.platform == 'Mac68K') {
                    var dvoplatform = '001101'
                }
                if (navigator.platform == 'BlackBerry') {
                    var dvoplatform = '001110'
                }
                if (navigator.platform == 'FreeBSD i386') {
                    var dvoplatform = '001111'
                }
                if (navigator.platform == 'FreeBSD amd64') {
                    var dvoplatform = '010000'
                }
                if (navigator.platform == 'Linux i686') {
                    var dvoplatform = '010001'
                }
                if (navigator.platform == 'Linux i686 X11') {
                    var dvoplatform = '010010'
                }
                if (navigator.platform == 'Linux armv7l') {
                    var dvoplatform = '010011'
                }
                if (navigator.platform == 'Linux x86_64 X11') {
                    var dvoplatform = '010100'
                }
                if (navigator.platform == 'OS/2') {
                    var dvoplatform = '010101'
                }
                if (navigator.platform == 'Pocket PC') {
                    var dvoplatform = '010101'
                }
                if (navigator.platform == 'Windows') {
                    var dvoplatform = '010110'
                }
                if (navigator.platform == 'Win16') {
                    var dvoplatform = '010111'
                }
                if (navigator.platform == 'Win32') {
                    var dvoplatform = '011000'
                }
                if (navigator.platform == 'WinCE') {
                    var dvoplatform = '011001'
                }
                if (navigator.platform == 'Nintendo DSi') {
                    var dvoplatform = '011010'
                }
                if (navigator.platform == 'Nintendo 3DS') {
                    var dvoplatform = '011011'
                }
                if (navigator.platform == 'Nintendo Wii') {
                    var dvoplatform = '011100'
                }
                if (navigator.platform == 'Nintendo WiiU') {
                    var dvoplatform = '011101'
                }
                if (navigator.platform == 'Nokia_Series_40') {
                    var dvoplatform = '011110'
                }
                if (navigator.platform == 'S60') {
                    var dvoplatform = '011111'
                }
                if (navigator.platform == 'Symbian') {
                    var dvoplatform = '100000'
                }
                if (navigator.platform == 'PalmOS') {
                    var dvoplatform = '100001'
                }
                if (navigator.platform == 'webOS') {
                    var dvoplatform = '100010'
                }
                if (navigator.platform == 'SunOS') {
                    var dvoplatform = '100011'
                }
                if (navigator.platform == 'SunOS i86pc') {
                    var dvoplatform = '100100'
                }
                if (navigator.platform == 'SunOS sun4u') {
                    var dvoplatform = '100101'
                }
                if (navigator.platform == 'PLAYSTATION 3') {
                    var dvoplatform = '100110'
                }
                if (navigator.platform == 'PlayStation 4') {
                    var dvoplatform = '100111'
                }
                if (navigator.platform == 'PSP') {
                    var dvoplatform = '101000'
                }
                if (navigator.platform == 'HP-UX') {
                    var dvoplatform = '101001'
                }
                if (navigator.platform == 'WebTV OS') {
                    var dvoplatform = '101010'
                }
                if (navigator.platform == 'X11') {
                    var dvoplatform = '101011'
                }

    //теперь куки

                if (navigator.cookieEnabled == true) {
                    dvoplatform = '1' + dvoplatform
                }
                if (navigator.cookieEnabled == false) {
                    dvoplatform = '0' + dvoplatform
                }

    //теперь Browser Name
                var getBrowserName = function () {
                    return this.name = this.name || function () {
                        var userAgent = navigator ? navigator.userAgent.toLowerCase() : "other";

                        if (userAgent.indexOf("chrome") > -1)
                            return "chrome";
                        else if (userAgent.indexOf("safari") > -1)
                            return "safari";
                        else if (userAgent.indexOf("msie") > -1)
                            return "ie";
                        else if (userAgent.indexOf("firefox") > -1)
                            return "firefox";
                        else if (userAgent.indexOf("trident") > -1)
                            return "ie";
                        return 'other browser';
                    }();
                };

                if (getBrowserName() == 'chrome') {
                    dvoplatform = '000' + dvoplatform
                } //оперу определяет как chrome
                if (getBrowserName() == 'safari') {
                    dvoplatform = '001' + dvoplatform
                }
                if (getBrowserName() == 'ie') {
                    dvoplatform = '010' + dvoplatform
                }
                if (getBrowserName() == 'firefox') {
                    dvoplatform = '011' + dvoplatform
                }
                if (getBrowserName() == 'other browser') {
                    dvoplatform = '100' + dvoplatform
                }

				
				
				var massiv = [];

                for (var i = 0; i < navigator.plugins.length; i++) {
                    massiv.push(navigator.plugins[i].name);
                }

                var encode = JSON.stringify(massiv);
                var font = JSON.stringify(fonthash);
                var useragent = JSON.stringify(dvoplatform);
                var time = JSON.stringify(dvotime);
                var yourscreen = JSON.stringify(dvoscreen());
                //передаем в php
                $.ajax({
                    type: "POST",
                    url: "fingerprint.php",
                    data: {Plugins: encode, font: font, time: time, useragent: useragent, yourscreen: yourscreen},
                    success: function (data) {
                        $('#answer').html(data);
                        $('.answer').html('Your plugins fingerprint is ' + data);
                    },
                });

