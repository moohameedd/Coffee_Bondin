function setState(input, error, valid, msg) {
    var value = input.value.trim();

    if (value === '') {
        input.style.borderColor = '#333';
        error.textContent = '';
        return false;
    }

    if (!valid) {
        input.style.borderColor = 'red';
        error.textContent = msg;
        return false;
    }

    input.style.borderColor = 'green';
    error.textContent = '';
    return true;
}

// NAME
function verif_name() {
    var input = document.getElementById('name');
    var error = document.getElementById('name-error');
    var value = input.value.trim();

    var valid = true;

    if (value.length < 3) {
        valid = false;
    } else {
        for (var i = 0; i < value.length; i++) {
            var c = value[i];
            if (!(
                (c >= 'A' && c <= 'Z') ||
                (c >= 'a' && c <= 'z') ||
                c === ' '
            )) {
                valid = false;
                break;
            }
        }
    }

    return setState(input, error, valid,
        'Le nom doit contenir au moins 3 lettres.');
}

// EMAIL (بدون regex)
function verif_email() {
    var input = document.getElementById('email');
    var error = document.getElementById('email-error');
    var value = input.value.trim();

    var hasAt = false;
    var hasDot = false;

    for (var i = 0; i < value.length; i++) {
        if (value[i] === '@') {
            hasAt = true;
        }
        if (value[i] === '.') {
            hasDot = true;
        }
    }

    var valid = hasAt && hasDot && value.indexOf('@') < value.lastIndexOf('.');

    return setState(input, error, valid,
        'Email invalide.');
}

// FAVORITE
function verif_favorite() {
    var input = document.getElementById('favorite_coffee');
    var error = document.getElementById('favorite-error');
    var value = input.value.trim();

    if (value === '') {
        input.style.borderColor = 'red';
        error.textContent = 'Veuillez sélectionner votre boisson préférée.';
        return false;
    }

    input.style.borderColor = 'green';
    error.textContent = '';
    return true;
}

// MESSAGE
function verif_message() {
    var input = document.getElementById('message');
    var error = document.getElementById('message-error');

    var valid = input.value.trim().length >= 10;

    return setState(input, error, valid,
        'Min 10 caractères.');
}

// FORM
function validateForm() {
    if (!verif_name()) {
        alert('Vérifier le nom.');
        return false;
    }
    if (!verif_email()) {
        alert('Vérifier l\'email.');
        return false;
    }
    if (!verif_favorite()) {
        alert('Vérifier votre boisson préférée.');
        return false;
    }
    if (!verif_message()) {
        alert('Vérifier le message.');
        return false;
    }

    alert('Message envoyé !');
    return false;
}