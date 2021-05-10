var audio = document.getElementById("why_run_audio");

$(function(){
	$("#oxygen_coefficient").on("dblclick", function() {
		$("#official_tagline").toggle(); 
		$("#real_tagline").toggle();
		$("#real_tagline").is(":visible") ? audio.play() : audio.pause();
	});
}); 