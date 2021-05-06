document.onreadystatechange = function () {
    if (document.readyState == "interactive") {

        // Simulação de loading da mídia
        
        document.querySelector('.loading-gif-container').classList.add('fade');
        setTimeout(() => { mostrarVideo() }, 2000);
        setTimeout(() => { document.querySelector('.video-container').classList.add('fade'); }, 2200);
        
    }
}

function mostrarVideo() {
    document.querySelector('.loading-gif-container').style.display = "none";
    document.querySelector('.video-container').style.display = "flex";
}