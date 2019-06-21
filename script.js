function onSignIn(googleUser){
	
	var profile = googleUser.getBasicProfile();
	$(".g-signin2").css("display","none");
	$("#welcome").text("Welcome" + profile.getName());
	$(".programData").css("display","block");


}