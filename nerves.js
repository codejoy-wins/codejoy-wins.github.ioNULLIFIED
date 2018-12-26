// alert("this website is live"); // works
var boo = true;

function rant(){
    // var x = document.getElementById("rant");
    // x.innerHTML = "hola";
    var msg = "I made this personal project after graduating from Coding Dojo, a fullstack immersive onsite web development bootcamp. I used my favorite framework Django to build this social networking site with similar functionality to facebook in order to challenge my modeling and querying skills with the database."
    if(boo){
        document.getElementById("rant").innerHTML = msg;
        document.getElementById("show").innerHTML = "Hide Rant";
    }else{
        document.getElementById("rant").innerHTML = "";
        document.getElementById("show").innerHTML = "Show Rant??";
    }
    
    boo = !boo;
    

}
rant();