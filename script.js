const   $btnSignIn = document.querySelector('.sign-in-btn'),
        $btnSignUp = document.querySelector('.sign-up-btn'),
        $signIn = document.querySelector('.sign-up'),
        $signUp = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp){
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});