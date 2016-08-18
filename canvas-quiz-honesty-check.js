/*
 * canvas-quiz-honesty-check.js
 * by: David Lyons hi@lyonsinbeta.com
 * Simple honesty pledge checkbox for Quizzes
 */
 
$(function () {
  if (window.location.pathname.includes("quizzes") && !window.location.pathname.includes("take")) { 
    var check = '<form><label class="checkbox" for="honesty"><input type="checkbox" id="honesty">I solemly swear I am up to no good.</label></form>';

    $("#take_quiz_link").attr("disabled","disabled").before(check);

    $("#honesty").change(function () {
      if($(this).is(":checked")) {
        $("#take_quiz_link").removeAttr('disabled');
      } else {
        $("#take_quiz_link").attr("disabled", "disabled");
      }
    });
  }
});
