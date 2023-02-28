/* Constante para poder visualizar el contenido del formulario o el formulario*/
const FORMULARIO = document.getElementById('sign-in-form');
/* Constante para poder visualizar los inputs haciendo uso de la id del formulario */
const INPUTS = document.querySelectorAll('#sign-in-form input');


const EXPRESIONES  = {
    rfc: /^[A-Z0-9]{12,13}$/,
    password: /^[a-zA-Z0-9]{4,15}$/
}

const campos = {
	rfc: false,
	password: false
}

const VALIDARFORMULARIO = (e) => {
    switch(e.target.name){
        /* rfc */
        case "rfc":
        VALIDARCAMPOS(EXPRESIONES.rfc, e.target, 'rfc');
        break;

        /* password */
        case 'password':
        VALIDARCAMPOS(EXPRESIONES.password, e.target, 'password');
        break;
    }
}

const VALIDARCAMPOS = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');

		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
	
		campos[campo] = true;

	}else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');

		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		
		campos[campo] = false;
		}
	}

INPUTS.forEach((inputs) => {
    /* Cuando el usuario presiona una tecla, al momento de soltarla se ejecutara un codigo **/
    inputs.addEventListener('keyup', VALIDARFORMULARIO);
    inputs.addEventListener('blur', VALIDARFORMULARIO);

});

/* Aqui se puede colocar el codigo para acceder a las facturaciones de farmanimals. */
FORMULARIO.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.rfc && campos.password) {
        FORMULARIO.reset();
    }
});