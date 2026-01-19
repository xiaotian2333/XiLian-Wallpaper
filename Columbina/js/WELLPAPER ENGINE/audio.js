let nowaudio = "backgroundmuisc.mp3";
let fristload = true;
let volume = 0.5;

var isPause = false;
var RGB_show = true;

let displayerror = true;
let rorl = 0;
let wallpaper_width = null;
let wallpaper_height = null;
let wallpaper_real_height = null;

var wallpaperSettings = {
    ledPlugin: false,
    cuePlugin: false
};

window.wallpaperPluginListener = {
    onPluginLoaded: function (name, version) {
        if (name === 'led') {
            // LED plugin loaded (works for all hardware)
            wallpaperSettings.ledPlugin = true;
        }
        if (name === 'cue') {
            // iCUE-specific plugin loaded, only needed if you want to utilize extra iCUE functions
            wallpaperSettings.cuePlugin = true;
        }
    }
};

window.wallpaperPropertyListener={
    applyUserProperties: function(setting){
        if(setting.my_audio){
            if(setting.my_audio.value != ""){
                nowaudio = "file:///" + setting.my_audio.value;
                if(fristload == false){
                    document.getElementById("sound").src = nowaudio;
                }
            }else{
                if(fristload == false){
                    nowaudio = "backgroundmuisc.mp3";
                    document.getElementById("sound").src = nowaudio;
                }

            }
        }
        if(setting.audio_switch){
            if(setting.audio_switch.value){
                document.getElementById("sound").src = nowaudio;
                document.getElementById("sound").volume = volume;
            }else{
                document.getElementById("sound").src = "";
                document.getElementById("sound").volume = 0;
            }
        }
        if(setting.audio_volume){
            volume = setting.audio_volume.value/100;
            document.getElementById("sound").volume = volume;
        }

        if(setting.rgb){
            RGB_show = setting.rgb.value
            if(setting.rgb.value && !fristload){
            background2canvas()
            }
        }

        if(setting.cyymodle){
            window.localStorage.setItem("cyymodle", setting.cyymodle.value);
        }
        if(setting.hlmodle){
            window.localStorage.setItem("hlmodle", setting.hlmodle.value);
        }

        if(setting.displayerror){
            displayerror = setting.displayerror.value;
            if (fristload) {
                if (displayerror) setTimeout(() => { func_displayerror(); }, 1700); 
            } else {
                func_displayerror();
            }
        }
        if(setting.rorl){
            rorl = setting.rorl.value / 200;
            if (fristload) {
            } else {
                func_displayerror();
            }
        }
        
    },
	setPaused: function( isPaused ) {
		if (isPaused){
            isPause = true
			
		}else{
            isPause = false
            background2canvas()
		}
	}
}

setTimeout(function(){
    fristload = false;
},5000)

function func_displayerror () {
    if (fristload) {
        wallpaper_width = document.querySelector("#canvas-bg").style.width.slice(0, -2);
        wallpaper_height = document.querySelector("#canvas-bg").style.height.slice(0, -2);
        wallpaper_real_height = document.querySelector("body").style.height.slice(0, -2);
    }

    let modifiedwidth = wallpaper_width * (wallpaper_real_height / wallpaper_height);
    document.querySelector("#canvas-bg").style.overflow = "";
    document.querySelector("#layout").style.overflow = "";
    document.querySelector("#frame").style.overflow = "";
    
    document.querySelector("#canvas-bg").style.inset = "";
    document.querySelector("#canvas-bg").style.left = "50%";
    document.querySelector("#canvas-bg").style.top = "50%";

    document.querySelector("#canvas-bg").style.width = modifiedwidth + "px";
    document.querySelector("#canvas-bg").style.height = wallpaper_real_height + "px";

    document.querySelector("#canvas-bg").style.transform = `translate(-50%, -50%) translateX(${(modifiedwidth - wallpaper_width) * rorl}px)`;
}