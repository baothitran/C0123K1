function controlLight(){
    if(document.getElementById("btnControl").innerText =="Turn on"){
        document.getElementById("light").src="images/on.png";
        document.getElementById("btnControl").innerText = "Turn off";
    }
    else{
        document.getElementById("light").src="images/off.png";
        document.getElementById("btnControl").innerText = "Turn on";
    }
    }