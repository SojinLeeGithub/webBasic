var userIdElement = document.getElementById('user-id');
var userPasswordElemt = document.getElementById('user-password');
var messageElement = document.getElementById('message');
var signInButton = document.getElementById('sign-in-button');

function onSignInButtonClickHandler (event) {

    var userId = userIdElement.value;
    var userPassword = userPasswordElemt.value;


    if (userId !== 'qwer1234' || userPassword !== '1234') {
        messageElement.textContent = '로그인 정보가 일치하지 않습니다.';
        return;
    } 
        alert('로그인 성공!');
        messageElement.textContent = '';

}

function userIdKeyPressHandler (event) {

    if (event.key === 'Enter') userPasswordElemt.focus();
}

function userPasswordKeyPressHandler (event) {

    if (event.key === 'Enter') onSignInButtonClickHandler();

}

signInButton.addEventListener('click' , onSignInButtonClickHandler);
userPasswordElemt.addEventListener('keypress', userIdKeyPressHandler);
userPasswordElemt.addEventListener('keypress', userPasswordKeyPressHandler);