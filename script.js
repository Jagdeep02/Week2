const uname = document.getElementById('name');
const email = document.getElementById('email');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
const form = document.querySelector('.form');


uname.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
pass1.addEventListener('input', validatePassword);
pass2.addEventListener('input', validateConfirmPassword);


if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            resetForm();
        } else {
            alert('Please fill out the form correctly.');
        }
    });
}
function validateName() {
    const nameValue = uname.value.trim();
    const nameError = document.getElementById('name-error');
    if (nameValue.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long.';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}
function validateEmail() {
    const emailValue = email.value.trim();
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}
function validatePassword() {
    const passwordValue = pass1.value.trim();
    const passwordError = document.getElementById('password-error');
    if (passwordValue.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}
function validateConfirmPassword() {
    const passwordValue = pass1.value.trim();
    const confirmPasswordValue = pass2.value.trim();
    const confirmPasswordError = document.getElementById('confirm-password-error');
    if (confirmPasswordValue !== passwordValue) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        return false;
    } else {
        confirmPasswordError.textContent = '';
        return true;
    }
}
function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    return isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
}
function resetForm() {
    if (form) {
        uname.value = '';
        email.value = '';
        pass1.value = '';
        pass2.value = '';
        document.getElementById('name-error').textContent = '';
        document.getElementById('email-error').textContent = '';
        document.getElementById('password-error').textContent = '';
        document.getElementById('confirm-password-error').textContent = '';
        form.reset();
    }
}