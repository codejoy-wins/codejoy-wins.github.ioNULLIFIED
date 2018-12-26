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

var boom = true;

function rant2(){
    // var x = document.getElementById("rant");
    // x.innerHTML = "hola";
    var msg2 = "After taking on facebook I figured I'd take on ESPN, so I made a website for my friends and I to have as an alternative to ESPN Fantasy Sports.  This product was challenging because I wanted to get it done before the draft.  I ended up implementing a draft feature last second and using the website on draft day to keep track of who was available, rather than use a sheet of paper.  I was still a beginner, so I figured I'd avoid any NFL API type deal and just update the stats of star players if I felt like.  I continued to tune up the site during the season.  Once the season was underway, I realized my site didn't have a lot to offer that ESPN didn't other than pretty pictures.  So, I made it personal by creating a power rankings page, and updating where everyone is each week according to me, not the espn standings.  Now, people selfishly had to visit my website to see where they were ranking.  I basically wrote a weekly column and had 11 views each week on it.  The best part about this project was realizing the importance of efficiency.  For example, I had it structured so new fantasy players I hadn't thought of could be inputted by anyone during the season.  Any one could visit the site and create a player.  At first I was using the shell to create players!  Then I was doing so much db work that I created a nice UI for myself to make updates!  I password protected it so now only I can change things.  It was so cool to be able to update my power rankings article without having to redeploy it and hit merge conflicts like the first time I tried which is why my fakebook website is no longer up.  I hope to run this website for years to come with new updates often.  This is probably my best project because a lot of passion was poured into it, and I pulled no punches on the front or back end.";
    if(boom){
        document.getElementById("rant2").innerHTML = msg2;
        document.getElementById("show2").innerHTML = "Hide Rant";
    }else{
        document.getElementById("rant2").innerHTML = "";
        document.getElementById("show2").innerHTML = "Show Rant??";
    }

    boom = !boom;

}