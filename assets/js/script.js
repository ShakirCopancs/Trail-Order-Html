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

