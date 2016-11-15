$('form span').hide

function isPasswordValid(){
	return $('#password').val().length > 8;
}

function isUsernamePresent(){
	return $('#username').val().length > 0;
}

function arePasswordMatching(){
	return $('#password').val() === $('#confirm_password').val();
}

function canSubmit(){
	return isPasswordValid() && arePasswordMatching();
}


function usernameEvent(){
	if(isUsernamePresent()){
		$('#username').next().hide();
	}else{
		$('#username').next().show();
	}
}

function passwordEvent(){
	if (isPasswordValid()){
		$('#password').next().hide();
	}else{
		$('#password').next().show();
	}
}

function confirmPasswordEvent(){
	if(arePasswordMatching()){
		$('#confirm_password').next().hide();
	}else{
		$('#confirm_password').next().show();
	}
}

function enableSubmitEvent(){
	$('#submit').prop("disabled" , !canSubmit());
}

$('#password').focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
$('#confirm_password').focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
$('#username').focus(usernameEvent).keyup(usernameEvent);

enableSubmitEvent();