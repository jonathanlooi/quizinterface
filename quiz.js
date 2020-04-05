$(document).ready(function(){

  $(".submit-quiz button").click(function() {
    $(".results").show();

    var q1answer = $("input[name='question1radio']:checked").val();
    var q2answer = $("input[name='question2radio']:checked").val();
    var q3answer = $("input[name='shortanswer']").val();

    $('#outputq1answer').html(q1answer);
    $('#outputq2answer').html(q2answer);
    $("#outputq3answer").html(q3answer);

  });

});
