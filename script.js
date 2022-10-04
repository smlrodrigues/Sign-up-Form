function checkPassword(form) {
    pw1 = form.password1;
    pw2 = form.password2;
    const errorMsg = document.querySelector('.pass-error-msg');

    if (pw1.value != pw2.value) {
        pw1.classList.add('error');
        pw2.classList.add('error');
        errorMsg.style.display = 'block';
        return false;
    } else {
        return true;
    }
}