$(document).ready(function() {

///////////MODAL
  $(".modal").css("display","block");
  $(".goBtn").on("click", function(){
    $(".modal").css("display","none");
  });

///////////make scroll queue disappear
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
      $(".scrollQueue").css("display", "none");
    }
  });
///////////ScrollMagic
  var controller = new ScrollMagic.Controller();

///////////SCENE 1///////////

///////////Thought bubbles fade in
  var ourScene11 = new ScrollMagic.Scene({
      triggerElement: ".thoughtBubbles",
      triggerHook: .5
    })

    .setClassToggle("#bub1", "fade-in")
    // .addIndicators()
    .addTo(controller);

  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: ".thoughtBubbles",
      triggerHook: .4
    })

    .setClassToggle("#bub2", "fade-in")
    // .addIndicators()
    .addTo(controller);

  var ourScene13 = new ScrollMagic.Scene({
      triggerElement: ".thoughtBubbles",
      triggerHook: .3
    })

    .setClassToggle("#bub3", "fade-in")
    // .addIndicators()
    .addTo(controller);


///////////Text begins
  var ourScene14 = new ScrollMagic.Scene({
      triggerElement: ".thoughtBubbles",
      triggerHook: .2,
      duration: 70
    })

    .setClassToggle("#thought1", "fade-in")
    // .addIndicators()
    .addTo(controller);


  var ourScene16 = new ScrollMagic.Scene({
      triggerElement: ".thoughtBubbles",
      triggerHook: 0.1
    })

    .setClassToggle("#thought2", "fade-in")
    // .addIndicators()
    .addTo(controller);

///////////Pin first scene
  var pinYellow = new ScrollMagic.Scene({
      triggerElement: "#scene1",
      triggerHook: 0
    })
    .setPin("#scene1")
    .addTo(controller);

///////////SCENE 2///////////

///////////Clouds slide right
  var ourScene21 = new ScrollMagic.Scene({
      triggerElement: ".blue",
      triggerHook: 0.9
    })

    .setClassToggle("#clouds", "float-in")
    // .addIndicators()
    .addTo(controller);

///////////Mountains come up
  var ourScene22 = new ScrollMagic.Scene({
      triggerElement: ".blue",
      triggerHook: 0.4
    })

    .setClassToggle("#mountains", "slide-up")
    // .addIndicators()
    .addTo(controller);

///////////Landscape comes up
  var ourScene23 = new ScrollMagic.Scene({
      triggerElement: ".blue",
      triggerHook: 0.3
    })

    .setClassToggle("#landscape", "slide-up")
    // .addIndicators()
    .addTo(controller);

///////////Text appears
  var ourScene24 = new ScrollMagic.Scene({
      triggerElement: ".blue",
      triggerHook: 0.2
    })

    .setClassToggle("#lumbJackName", "fade-in")
    // .addIndicators()
    .addTo(controller);

///////////Tree fall
  var ourScene25 = new ScrollMagic.Scene({
      triggerElement: ".blue",
      triggerHook: 0.15
    })

    .setClassToggle(".tree", "hinge")
    // .addIndicators()
    .addTo(controller);

///////////Pin scene 2
  var pinBlue = new ScrollMagic.Scene({
      triggerElement: "#scene2",
      triggerHook: 0
    })
    .setPin("#scene2")
    .addTo(controller);

///////////SCENE 3///////////

///////////Plate slides up
  var ourScene31 = new ScrollMagic.Scene({
      triggerElement: ".yellow2",
      triggerHook: 0.85
    })

    .setClassToggle("#plateWrapper", "slide-up")
    // .addIndicators()
    .addTo(controller);

///////////Pizza bites
  var ourScene32 = new ScrollMagic.Scene({
      triggerElement: ".yellow2",
      triggerHook: 0.3
    })

    .setClassToggle("#pizza1", "hide")
    // .addIndicators()
    .addTo(controller);

  var ourScene33 = new ScrollMagic.Scene({
      triggerElement: ".yellow2",
      triggerHook: 0.15
    })

    .setClassToggle("#pizza2", "hide")
    // .addIndicators()
    .addTo(controller);


  var ourScene34 = new ScrollMagic.Scene({
      triggerElement: ".yellow2",
      triggerHook: 0
    })

    .setClassToggle("#pizza3", "hide")
    // .addIndicators()
    .addTo(controller);

///////////Text comes in
  var ourScene35 = new ScrollMagic.Scene({
      triggerElement: ".yellow2",
      triggerHook: 0.1
    })

    .setClassToggle("#pepperoni", "slide-in")
    // .addIndicators()
    .addTo(controller);

///////////Pin scene 3
  var pinYellow2 = new ScrollMagic.Scene({
      triggerElement: "#scene3",
      triggerHook: 0
    })
    .setPin("#scene3")
    .addTo(controller);

///////////SCENE 4///////////

///////////Pep fades in
  var ourScene41 = new ScrollMagic.Scene({
      triggerElement: ".green",
      triggerHook: 0.85
    })

    .setClassToggle("#pepJacked", "fade-in")
    // .addIndicators()
    .addTo(controller);

  var ourScene42 = new ScrollMagic.Scene({
      triggerElement: ".green",
      triggerHook: 0.86
    })

    .setClassToggle("#arm", "fade-in")
    // .addIndicators()
    .addTo(controller);

  var ourScene42 = new ScrollMagic.Scene({
      triggerElement: ".green",
      triggerHook: 0.4
    })

///////////Text comes up
    .setClassToggle("#jacked", "slide-up")
    // .addIndicators()
    .addTo(controller);

///////////Pin scene 4
  var pinGreen = new ScrollMagic.Scene({
      triggerElement: "#scene4",
      triggerHook: 0
    })
    .setPin("#scene4")
    .addTo(controller);

///////////SCENE 5///////////

///////////Feet dangle
  var ourScene51 = new ScrollMagic.Scene({
      triggerElement: ".gray",
      triggerHook: 1
    })

    .setClassToggle("#foot1", "legs1")
    // .addIndicators()
    .addTo(controller);


  var ourScene52 = new ScrollMagic.Scene({
      triggerElement: ".gray",
      triggerHook: 1
    })

    .setClassToggle("#foot2", "legs2")
    // .addIndicators()
    .addTo(controller);

///////////Text comes in
  var ourScene53 = new ScrollMagic.Scene({
      triggerElement: ".gray",
      triggerHook: .85
    })

    .setClassToggle("#agentJP", "slide-in")
    // .addIndicators()
    .addTo(controller);

///////////Pep appears
  var ourScene54 = new ScrollMagic.Scene({
      triggerElement: ".gray",
      triggerHook: 0.2
    })

    .setClassToggle(".doggo3", "show")
    // .addIndicators()
    .addTo(controller);

  var ourScene55 = new ScrollMagic.Scene({
      triggerElement: ".gray",
      triggerHook: 0.15
    })

    .setClassToggle(".doggo3", "dropIn")
    // .addIndicators()
    .addTo(controller);

  var ourScene56 = new ScrollMagic.Scene({
      triggerElement: ".gray",
      triggerHook: 0.05
    })

///////////Lasers appear
    .setClassToggle("#lasers1", "fade-in")
    // .addIndicators()
    .addTo(controller);

  var ourScene57 = new ScrollMagic.Scene({
      triggerElement: ".gray",
      triggerHook: 0
    })

    .setClassToggle("#lasers2", "fade-in")
    // .addIndicators()
    .addTo(controller);

///////////Pin scene 5
  var pinGray = new ScrollMagic.Scene({
      triggerElement: "#scene5",
      triggerHook: 0
    })
    .setPin("#scene5")
    .addTo(controller);

///////////SCENE 6///////////

///////////thought bubbles fade in
  var ourScene61 = new ScrollMagic.Scene({
      triggerElement: ".yellow3",
      triggerHook: .6
    })

    .setClassToggle("#bub4", "fade-in")
    // .addIndicators()
    .addTo(controller);

  var ourScene62 = new ScrollMagic.Scene({
      triggerElement: ".yellow3",
      triggerHook: .5
    })

    .setClassToggle("#bub5", "fade-in")
    // .addIndicators()
    .addTo(controller);

  var ourScene63 = new ScrollMagic.Scene({
      triggerElement: ".yellow3",
      triggerHook: .4
    })

    .setClassToggle("#bub6", "fade-in")
    // .addIndicators()
    .addTo(controller);

///////////Thoughts begin
  var ourScene64 = new ScrollMagic.Scene({
      triggerElement: ".yellow3",
      triggerHook: .35,
      duration: 100
    })

    .setClassToggle("#thought3", "fade-in")
    // .addIndicators()
    .addTo(controller);


  var ourScene65 = new ScrollMagic.Scene({
      triggerElement: ".yellow3",
      triggerHook: 0.25,
      duration: 80
    })

    .setClassToggle("#thought4", "fade-in")
    // .addIndicators()
    .addTo(controller);

  var ourScene66 = new ScrollMagic.Scene({
      triggerElement: ".yellow3",
      triggerHook: 0.15,
      duration: 60
    })

    .setClassToggle("#thought5", "fade-in")
    // .addIndicators()
    .addTo(controller);

///////////Ike appears
  var ourScene67 = new ScrollMagic.Scene({
      triggerElement: ".yellow3",
      triggerHook: 0.06
    })

    .setClassToggle("#ike", "fade-in")
    // .addIndicators()
    .addTo(controller);
///////////Ike strikeout
  var ourScene68 = new ScrollMagic.Scene({
      triggerElement: ".yellow3",
      triggerHook: 0
    })

    .setClassToggle("#strike", "fade-in")
    // .addIndicators()
    .addTo(controller);

///////////Pin scene 6
  var pinYellow3 = new ScrollMagic.Scene({
      triggerElement: "#scene6",
      triggerHook: 0
    })
    .setPin("#scene6")
    .addTo(controller);

});
