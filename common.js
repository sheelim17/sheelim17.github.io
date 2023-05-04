(function () {
  var totalSeconds = 0;
	const scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    mobile: {
      smooth: true
    },
  });
    scroll.on('call', (value, way, obj) => {
        if (way === 'enter') {
          switch (value) {
            case "light": 
              document.querySelector('#body').style.backgroundColor = "#F9F5EF";
            break;      
            
            case "dark": 
              document.querySelector('#body').style.backgroundColor = "#181818";
            break;   
            case "countup" :
              setInterval(countUpTimer, 1000);
            break;
          }
        }
    });
    function pad ( value ) { return value > 9 ? value : "0" + value; }
    function countUpTimer() {
      ++totalSeconds;
      var hour = Math.floor(totalSeconds / 3600);
      var minute = Math.floor((totalSeconds - hour * 3600) / 60);
      var seconds = totalSeconds - (hour * 3600 + minute * 60);
      document.getElementById("count_up_timer").innerHTML = pad(hour) + ":" + pad(minute) + ":" + pad(seconds);
    }
})();

