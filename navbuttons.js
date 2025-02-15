const home = document.getElementById("home");
const about = document.getElementById("about");
const gallery = document.getElementById("gallery");
const artists = document.getElementById("artists");

home.style.display = "block";
about.style.display = "none";
gallery.style.display = "none";
artists.style.display = "none";

function homeShow()
{
    if(home.style.display === "none"){
        home.style.display = "block";
    }

    if(about.style.display === "block"){
        about.style.display = "none";
    }

    if(gallery.style.display === "block"){
        gallery.style.display = "none";
    }

    if(artists.style.display === "block"){
        artists.style.display = "none";
    } 
}

function aboutShow()
{
    if(home.style.display === "block"){
        home.style.display = "none";
    }

    if(about.style.display === "none"){
        about.style.display = "block";
    }

    if(gallery.style.display === "block"){
        gallery.style.display = "none";
    }

    if(artists.style.display === "block"){
        artists.style.display = "none";
    } 
}

function galleryShow()
{
    if(home.style.display === "block"){
        home.style.display = "none";
    }

    if(about.style.display === "block"){
        about.style.display = "none";
    }

    if(gallery.style.display === "none"){
        gallery.style.display = "block";
    }

    if(artists.style.display === "block"){
        artists.style.display = "none";
    } 
}

function artistShow()
{
    if(home.style.display === "block"){
        home.style.display = "none";
    }

    if(about.style.display === "block"){
        about.style.display = "none";
    }

    if(gallery.style.display === "block"){
        gallery.style.display = "none";
    }

    if(artists.style.display === "none"){
        artists.style.display = "block";
    } 
}