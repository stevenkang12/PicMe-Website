$(document).ready(function() {
  $(".dot").each(function() {
    dot_remover(this);
  });

  vertical_center();
  $(window).resize(function() {
    vertical_center();
  });

  $(".phone .switch").click(function() {
    var hidden = $(".screen.hidden")[0];
    var shown = $(".screen.shown")[0];

    if (shown.id == "light") {
      $(".dot").each(function() {
        $(".dot").hide();
      });
      $(shown).removeClass("shown");
      $(shown).addClass("hidden");
      $(hidden).removeClass("hidden");
      $(hidden).addClass("shown");
    } else {
      $(".dot").each(function() {
        $(".dot").show();
      });
      $(shown).removeClass("shown");
      $(shown).addClass("hidden");
      $(hidden).removeClass("hidden");
      $(hidden).addClass("shown");
    }
  })
});

function dot_remover(el) {
  var time = Math.floor((Math.random() * 1000) + 750);
  $(el).animate({
    opacity: 0
  }, time, function() {
    dot_adder(this);
  })
}

function dot_adder(el) {
  var time = Math.floor((Math.random() * 1000) + 750);
  var top = Math.floor((Math.random() * 14) + 39);
  var left = Math.floor((Math.random() * 29) + 32);
  $(el).css("left", left + "%");
  $(el).css("top", top + "%");
  $(el).css("opacity", 0);
  $(el).animate({
    opacity: 1
  }, time, function() {
    dot_remover(el);
  });
}

function vertical_center() {
  if ($(".info").height() > $(window).height()) {
    if ($(".info").hasClass("centered")) {
      $(".info").removeClass("centered");
    }
  } else {
    if (!$(".info").hasClass("centered")) {
      $(".info").addClass("centered");
    }
  }

  if ($(".feature").height() > $(window).height()) {
    if ($(".feature").hasClass("centered")) {
      $(".feature").removeClass("centered");
    }
  } else {
    if (!$(".feature").hasClass("centered")) {
      $(".feature").addClass("centered");
    }
  }
}