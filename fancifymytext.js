function bigFunction(){
    document.getElementById("inText").style.fontSize = "24px";
}

function fancy(){
    alert("Fancieness protocols engaging!");
    document.getElementById("inText").style.fontWeight ="bold";
    document.getElementById("inText").style.color ="blue";
    document.getElementById("inText").style.textDecorationLine = "underline";
    
}

function boring(){
    alert("Boring down, going dark.");
    document.getElementById("inText").style.fontWeight ="normal";
    document.getElementById("inText").style.color ="initial";
    document.getElementById("inText").style.textDecorationLine = "initial";
}

function moo(){
    var str = document.getElementById("inText").value.toUpperCase();
    var pts = str.split(".");
    str = pts.join("-Moo.");
    document.getElementById("inText").value = str;
}

