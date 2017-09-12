$(document).foundation()

whatIsTrigger = false;

function clickWhatIsHackathon() {
  if (whatIsTrigger) {
    //turn off
    $('#about').css("background-color","#EADFD8");
    $('#aboutHeader').fadeOut(200);
    $('#aboutText').fadeOut(200);
    $('#what-is-question').fadeOut(200);
    
    setTimeout(function(){
      $('#aboutHeader').html("Welcome to Boston");
      $('#aboutText').html("BostonHacks is Boston University's annual hackathon. 400 students will come from all around North America to create a project in 24 hours. They'll forms teams to build project that addresses a problem or idea, learning about different technologies along the way and building their experience as developers.");
      $('#what-is-question').html('What is a Hackathon? &nbsp;<i class="fa fa-caret-right" aria-hidden="true"></i>');
      $('#aboutHeader').css("color","#4A4B4E");
      $('#aboutText').css("color","#4A4B4E");
    },200);
    
    $('#aboutHeader').fadeIn(200);
    $('#aboutText').fadeIn(200);
    $('#what-is-question').fadeIn(200);
    
    whatIsTrigger = false;
  }else{
    //turn on
    $('#about').css("background-color","#F58549");
    $('#aboutHeader').fadeOut(200);
    $('#aboutText').fadeOut(200);
    $('#what-is-question').fadeOut(200);
    
    setTimeout(function(){
      $('#aboutHeader').html("What is a Hackathon?");
      $('#aboutText').html("Descriptionn");
      $('#what-is-question').html('<i class="fa fa-times fa-3x" aria-hidden="true"></i>');
      $('#aboutHeader').css("color","#F9F5EF");
      $('#aboutText').css("color","#F9F5EF");
    },200);
    
    $('#aboutHeader').fadeIn(200);
    $('#aboutText').fadeIn(200);
    $('#what-is-question').fadeIn(200);
    
    whatIsTrigger = true;
  }
}

var showSignup = function() {
  $('#mailchimp-signup').show();
} 