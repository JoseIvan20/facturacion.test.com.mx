const FORMNEW = document.getElementById('sign-up-form');
const INPUTSNEW = document.querySelectorAll('#sign-up-form input');

const EXPRESIONESNEW  = {
    nrs: /^[a-zA-ZÀ-ÿ\s\.\'\´]{1,40}$/,
    //regimen
    rfcc: /^[A-Z0-9]{12,13}$/,
    cp: /^[0-9]{5}$/,
    passwordd: /^[a-zA-Z0-9]{4,15}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const camposNew = {
    nrs: false,
    rfcc: false,
    cp: false,
    passwordd: false,
    email: false
}

const FORMULARIONUEVO = (e) => {
    switch (e.target.name) {
        case "nrs":
            VALIDARCAMPOSNEW(EXPRESIONESNEW.nrs, e.target, 'nrs');    
        break;
    
        case "rfcc":
            VALIDARCAMPOSNEW(EXPRESIONESNEW.rfcc, e.target, 'rfcc'); 
        break;

        case "cp":
            VALIDARCAMPOSNEW(EXPRESIONESNEW.cp, e.target, 'cp');
        break;

        case "passwordd":
            VALIDARCAMPOSNEW(EXPRESIONESNEW.passwordd, e.target, 'passwordd');
        break;

        case "password2":
            validarPassword2();
        break;

        case "email":
            VALIDARCAMPOSNEW(EXPRESIONESNEW.email, e.target, 'email');
        break;
    }
}

const VALIDARCAMPOSNEW = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');

		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
	
		camposNew[campo] = true;

	}else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');

		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		
		camposNew[campo] = false;
		}
	}

// Validar Campo de Confirmar Contraseña (validarPassword2)
const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('passwordd');
	const inputPassword2 = document.getElementById('password2');

	// Si inputPassword1 es diferente de inputtPassword2
	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-check');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['passwordd'] = false;
	}else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-check');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');	
		campos['passwordd'] = true;
	}
}	

INPUTSNEW.forEach((inputs) => {
    /* Cuando el usuario presiona una tecla, al momento de soltarla se ejecutara un codigo **/
    inputs.addEventListener('keyup', FORMULARIONUEVO);
    inputs.addEventListener('blur', FORMULARIONUEVO);

});

FORMNEW.addEventListener('submit', (e) => {
    e.preventDefault();
    if (camposNew.nrs && camposNew.rfcc && camposNew.cp && camposNew.passwordd && camposNew.password2 && camposNew.email) {
        FORMNEW.reset();
    }
});