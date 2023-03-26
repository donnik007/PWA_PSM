console.log('Hello World - działam!');

if(navigator.vibrate) {
        function vibrate() {
            navigator.vibrate([300, 250, 300, 250, 300, 250, 1000, 250, 1000, 250, 1000, 250, 300, 250, 300, 250, 300])
        }
    } else {
        error.innerHTML = "Vibrate API not supported in this device."
        error.classList.remove("close")
    }
