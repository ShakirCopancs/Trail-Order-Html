function toggleHighlight(stepId) {
    const element = document.getElementById(stepId);
    element.classList.toggle("submitForm");
  }

  function downChevrons(stepId) {
    const element = document.getElementById(stepId);
    element.classList.toggle("accountDetails");
  }

  function toggleActive() {
    const activeElement = document.querySelector(".show-more-details");
    activeElement.classList.toggle("hide-more-details");
  }


$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

$(".text-change").click(function(){
    $(this).text(function(i, v){
       return v === '[+] Show Product Details' ? '[+] Hide Product Details' : '[+] Show Product Details'
    });

});



$(document).ready(function () {
  function updateButtonState() {
    if ($('input[type="checkbox"]:checked').length > 0) {
      $("#continueButton")
        .removeClass("btn-disable")
        .addClass("btn-primary");
    } else {
      $("#continueButton")
        .removeClass("btn-primary")
        .addClass("btn-disable");
    }
  }
  $(".parent").click(function () {
    $(this).nextUntil(".parent").toggle();
    $(this)
      .find(".toggle")
      .text($(this).find(".toggle").text() == "+" ? "-" : "+");
  });
  $(".child-checkbox").change(function () {
    updateButtonState();
  });
  updateButtonState();
});