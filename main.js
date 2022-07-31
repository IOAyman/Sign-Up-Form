
const password = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password-input');

const errorMsg = document.getElementById('err-msg')

if (!passwordsMatch(password.value, confirmPassword.value)) {
    errorMsg.classList.add('show-err-msg')
}

confirmPassword.onkeyup = () => {
    if (passwordsMatch(password.value, confirmPassword.value)) {
        errorMsg.classList.remove('show-err-msg')
    }
}

function passwordsMatch(field1, field2) {
    return (field1 && field2 && field1 === field2)
}
