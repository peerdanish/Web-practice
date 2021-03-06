function change()
{
$("#myButton").html('I\'ve changed');
}

function bgImage(){
$(document).ready(function(){
$("#myBg").css("background-image", "url('img/bg.jpg')");
     });
}

$(document).ready(function(){ 
    $('#button1').click(function(){ 
     $('#r2').remove(); 
     });
  });

  $(document).ready(function(){
    $("#setvalue").click(function(){
      $("#setname").val("Set by Jquery");
    });
});

$(document).ready(function(){ 
    $("#myClass").click(function() {
       var className = $(this).attr("class");
       alert(className);
});
});

$(document).ready(function(){ 
$('#edit').click(function(){
  $('.inputDisabled').attr('disabled',false); 
});
});

$(document).ready(function(){ 
$('.button1').click(function() { 
  $('#spanid').html("New Span text content"); 
});
});

$(document).ready(function () { 
  $("#btn").click(function () { 
      $("#click").attr("href",  
      $('input[name$="url"]').val()); 
  }); 
}); 