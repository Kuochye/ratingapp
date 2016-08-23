$(document).ready(function(){
	$("#rating-row2 input").prop('disabled', true).css('opacity',0.5);
	$("#rating-row3 input").prop('disabled', true).css('opacity',0.5);
	
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
		alert("Thank you for voting!");
	});
	/*var ecount = sessionStorage.getItem("ename");
	document.getElementById("eresult").innerHTML = parseInt(ecount);*/
	
	/*$("#voting").text("Thank you for rating!")
                    .show()
                    .delay(500)
                    .fadeOut();*/
					
	$('#excellent').click(function() {

		var value = document.getElementById("eresult").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("eresult").innerHTML = newValue;
		sessionStorage.setItem("ename", newValue);
		/*$.cookie('ename', newValue, { expires : 5 });*/
    });
	
	$('#good').click(function() {
					
		var value = document.getElementById("gresult").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("gresult").innerHTML = newValue;
		sessionStorage.setItem("gname", newValue);
    });
	
	$('#average').click(function() {
					
		var value = document.getElementById("aresult").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("aresult").innerHTML = newValue;
		sessionStorage.setItem("aname", newValue);
    });
	
	$('#poor').click(function() {
					
		var value = document.getElementById("presult").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("presult").innerHTML = newValue;
		sessionStorage.setItem("pname", newValue);
    });
	
	$('#verypoor').click(function() {
					
		var value = document.getElementById("vpresult").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("vpresult").innerHTML = newValue;
		sessionStorage.setItem("vpname", newValue);
    });
	
	$("#rbu").click(function () {
        $("#overall").toggle();
    });
	
	$('#game1').click(function() {
					
		var value = document.getElementById("ga1").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("ga1").innerHTML = newValue;
    });
	
	$('#game2').click(function() {
					
		var value = document.getElementById("ga2").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("ga2").innerHTML = newValue;
    });
	
	$('#game3').click(function() {
					
		var value = document.getElementById("ga3").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("ga3").innerHTML = newValue;
    });
	
	$('#game4').click(function() {
					
		var value = document.getElementById("ga4").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("ga4").innerHTML = newValue;
    });
	
	$('#last1').click(function() {
					
		var value = document.getElementById("la1").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("la1").innerHTML = newValue;
    });
	
	$('#last2').click(function() {
					
		var value = document.getElementById("la2").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("la2").innerHTML = newValue;
    });
	
	$('#last3').click(function() {
					
		var value = document.getElementById("la3").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("la3").innerHTML = newValue;
    });
	
	$('#last4').click(function() {
					
		var value = document.getElementById("la4").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("la4").innerHTML = newValue;
    });
	
	$('#last5').click(function() {
					
		var value = document.getElementById("la5").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("la5").innerHTML = newValue;
    });
});
