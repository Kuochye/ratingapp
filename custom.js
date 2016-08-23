$(document).ready(function(){
	$("#rating-row2 input").prop('disabled', true).css('opacity',0.5);
	$("#rating-row3 input").prop('disabled', true).css('opacity',0.5);
	
	$('#rating-row1 input').dblclick(function(e){ 
    e.preventDefault();
	});
	
	$('#rating-row1 input').click(function(){
		$("#rating-row1 input").prop('disabled', true).css('opacity',0.5);
		$("#rating-row3 input").prop('disabled', true).css('opacity',0.5);
		$("#rating-row2 input").prop('disabled', false).css('opacity',"");
	});
	
	$('#rating-row2 input').click(function(){
		$("#rating-row1 input").prop('disabled', true).css('opacity',0.5);
		$("#rating-row2 input").prop('disabled', true).css('opacity',0.5);
		$("#rating-row3 input").prop('disabled', false).css('opacity',"");
	});
	
	$('#rating-row3 input').click(function(){
		$("#rating-row3 input").prop('disabled', true).css('opacity',0.5);
		$("#rating-row2 input").prop('disabled', true).css('opacity',0.5);
		$("#rating-row1 input").prop('disabled', false).css('opacity',"");
	});
	/*var ecount = sessionStorage.getItem("ename");
	document.getElementById("eresult").innerHTML = parseInt(ecount);*/
	
	
	$('#excellent1').click(function() {
        $("#voting").text("Thank you for rating!")
                    .show()
                    .delay(500)
                    .fadeOut();
		
		var value = document.getElementById("eresult").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("eresult").innerHTML = newValue;
		sessionStorage.setItem("ename", newValue);
		/*$.cookie('ename', newValue, { expires : 5 });*/
    });
	
	$('#good').click(function() {
        $("#voting").text("Thank you for rating!")
                    .show()
                    .delay(500)
                    .fadeOut();
					
		var value = document.getElementById("gresult").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("gresult").innerHTML = newValue;
		sessionStorage.setItem("gname", newValue);
    });
	
	$('#average').click(function() {
        $("#voting").text("Thank you for rating!")
                    .show()
                    .delay(500)
                    .fadeOut();
					
		var value = document.getElementById("aresult").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("aresult").innerHTML = newValue;
		sessionStorage.setItem("aname", newValue);
    });
	
	$('#poor').click(function() {
        $("#voting").text("Thank you for rating!")
                    .show()
                    .delay(500)
                    .fadeOut();
					
		var value = document.getElementById("presult").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("presult").innerHTML = newValue;
		sessionStorage.setItem("pname", newValue);
    });
	
	$('#verypoor').click(function() {
        $("#voting").text("Thank you for rating!")
                    .show()
                    .delay(500)
                    .fadeOut();
					
		var value = document.getElementById("vpresult").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("vpresult").innerHTML = newValue;
		sessionStorage.setItem("vpname", newValue);
    });
	
	$("#rbu").click(function () {
        $("#results").toggle();
    });
});