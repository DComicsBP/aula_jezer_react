function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    // alternative standard method
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {               // current working methods
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

document.addEventListener("keydown", function(e) {
console.log(e.keyCode);
//<-- 37 39 -->

switch(e.keyCode ) {
    case 13:
        toggleFullScreen();
        break;
    case 33:
	case 37:
       back();
	     e.preventDefault();
        return false;
        break;
    case 34:
	case 39:
	next();
		 e.preventDefault();
        return false;
        break;
    case 109:
    zoom(-0.01);
    break;
    case 107:
    zoom(0.01);
     break;

}

}, false);


function exitFullScreen()
  {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

function getVideo(pos)
  {
  var list = document.getElementsByTagName("slide");
  if(list[pos])
	{
	var videos=list[pos].getElementsByTagName("video");
	if(videos.length)
		return videos[0];
	}
  return false;
  }

function next()
  {

  list = document.getElementsByTagName("slide");
  var video=getVideo(slidePos);
  if(!video||video.ended)
    {
    exitFullScreen();
    anima=list[slidePos].getElementsByTagName("animacao");
    var achou=false;
    if(anima.length)
      {
      achou=false;
      for (var x =0;x<anima.length&&!achou ; x++)
	{
	console.log(anima[x].style.display);
	if(anima[x].style.display=="none"
	||!anima[x].style.display)
	  {
	  achou=true;
	  anima[x].style.display="block";
	  }
	}
      }


     if(!achou&&list.length>slidePos+1)
      {
      slidePos++;
      config();
      }

    }
   else
    {
    if(video.paused)
      {
      var elem = video;
      if (elem.requestFullscreen)
	elem.requestFullscreen();
      else if (elem.msRequestFullscreen)
	elem.msRequestFullscreen();
      else if (elem.mozRequestFullScreen)
	elem.mozRequestFullScreen();
      else if (elem.webkitRequestFullscreen)
	elem.webkitRequestFullscreen();
      video.play();
      }
    else
      {
      video.currentTime=video.duration;
      exitFullScreen();
      }
    }
  }

function back()
  {
  var list = document.getElementsByTagName("slide");
  var video=getVideo(slidePos);
  if(!video||video.currentTime==0)
    {
    exitFullScreen();
    anima=list[slidePos].getElementsByTagName("animacao");
    var achou=false;
    if(anima.length)
      {
      for (x = anima.length-1; x >=0&&!achou ; x--)
	{
	if(anima[x].style.display!="none")
	  {
	  achou=true;
	  anima[x].style.display="none";
	  }
	}

      }

    if(!achou&&slidePos!=0)
      {
      slidePos--;
      config();
      }
    }
   else
    {
	if(video.currentTime!=0&&!video.paused)
		{
		video.pause();
		}
    else
      {
	  video.currentTime=0;
      exitFullScreen();
      video.pause();
      }

    }
  }

var slidePos=0;
function config()
  {
  var list = document.getElementsByTagName("slide");

  for (x = 0; x < list.length; x++)
    {
    list[x].style.display=slidePos==x?"block":"none";
    }
  }

function zoom(val)
  {
  if(!document.body.style.zoom)
    document.body.style.zoom=1;
  var size= document.body.style.zoom*1;
  document.body.style.zoom=size+val;
  document.body.style.MozTransform = "scale("+(size+val)+")";
  }

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }

function init()
	{
	var param=getUrlVars();
	if(param['slide'])
		slidePos=param['slide']*1-1;
	var list = document.getElementsByTagName("slide");
	for (x = 0; x < list.length; x++)
		{
		list[x].style.display=slidePos==x?"block":"none";
		if(x!=0)
			{
			var page= document.createElement("timeline");
			var text= document.createTextNode((x+1));//+"/"+(list.length+1));
			page.appendChild(text);
			//page.style.width= (x/(list.length-1)*100)+"%";
			list[x].appendChild(page);
			}
		}
	}
