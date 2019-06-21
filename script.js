function onSignIn(googleUser){
	
	var profile = googleUser.getBasicProfile();
	alert("signed in to function");
	$(".g-signin2").css("display","none");
	$("#welcome").text("Welcome" + profile.getName());
	$(".programData").css("display","block");


}