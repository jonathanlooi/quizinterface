$(document).ready(function(){

  function unansweredQuestion(className) {
    $("." + className).css("background-color", "#eee");
    $("." + className + " " + ".error").css("color", "red");
    $("." + className + " " + ".error").html(" – unanswered, dummy.");
  }
  function undoUnanswered(className) {
    $("." + className).css("background-color", "#fff");
    $("." + className + " " + ".error").html("");
  }

  $(".submit-quiz button").click(function() {
    $(".results").show();
    $("#reset").show();

    var q1answer = $("input[name='question1radio']:checked").val();
    var q2answer = $("input[name='question2radio']:checked").val();
    var q3answer = $("input[name='shortanswer']").val();

    if (!q1answer) {
      // this will be true if q1answer isn't either:
      // null, undefined, NaN, empty string (""), 0, false
      unansweredQuestion("q1");
      // this will happen if user didn't answer question1
    } else {
      undoUnanswered("q1");
    }

    if (!q2answer) {
      unansweredQuestion("q2");
    } else {
      undoUnanswered("q2");
    }

    if (!q3answer) {
      unansweredQuestion("q3");
    } else {
      undoUnanswered("q3");
    }

    if(!q1answer || !q2answer || !q3answer) {
      $(".results h1").replaceWith("<h1>You have unanswered questions.</h1>");
      $(".results h1").css("color", "red");
    } else {
      // revert to original
      $(".results h1" ).replaceWith("<h1>The results of your quiz go here.</h1>");
    }

    $('#outputq1answer').html(q1answer);
    $('#outputq2answer').html(q2answer);
    $("#outputq3answer").html(q3answer);

  });

});
