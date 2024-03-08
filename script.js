show_light = false;
function turnOff(){
    show_light = !show_light;
    if(show_light == true){
        document.getElementById('off').style.display = 'block';
        document.getElementById('on').style.display = 'none';
        document.getElementById('button').innerHTML = 'Turn off the lightbulb'
    }else{
        document.getElementById('on').style.display = 'block';
        document.getElementById('off').style.display = 'none';
        document.getElementById('button').innerHTML = 'Turn on the lightbulb'
    }
}