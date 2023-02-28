const FORMSEARCH = document.getElementById('form-search');
const INPUTSSEARCH = document.querySelectorAll('#form-search input');

const EXPRESIONESEARCH = {
	ticket: /^[0-9]{5}$/, // Letras y espacios, pueden llevar acentos.
	pin: /^[a-zA-Z0-9._-]{3}$/ // pin de distintos tipos de caracteres
}

const camposSearch = {
    ticket: false,
    pin: false
}

const FORMULARIOBUSCAR = (e) => {
    switch (e.target.name) {
        case "ticket":
            VALIDARCAMPOSSEARCH(EXPRESIONESEARCH.ticket, e.target, 'ticket');    
        break;
    
        case "pin":
            VALIDARCAMPOSSEARCH(EXPRESIONESEARCH.pin, e.target, 'pin'); 
        break;
    }
}

const VALIDARCAMPOSSEARCH = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');

		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
	
		camposSearch[campo] = true;

	}else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');

		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		
		camposSearch[campo] = false;
		}
	}

    INPUTSSEARCH.forEach((inputs) => {
        /* Cuando el usuario presiona una tecla, al momento de soltarla se ejecutara un codigo **/
        inputs.addEventListener('keyup', FORMULARIOBUSCAR);
        inputs.addEventListener('blur', FORMULARIOBUSCAR);
    
    });

FORMSEARCH.addEventListener('submit', (e) => {
        e.preventDefault();
        // if (camposSearch.ticket && camposSearch.pin) {}
            // FORMSEARCH.reset();

        var strTicket = document.querySelector('#ticket').value;
        var strPIN = document.querySelector('#pin').value;

        if (strTicket && strPIN) {
        Swal.fire({
            title: "Éxito",
            text: "Los campos han sido encontrados.",
            icon: "success",
            confirmButtonText: "Ok",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showConfirmButton: true,
            confirmButtonColor: '#00AEDD',
            showCloseButton: true
        })
        }else {
        Swal.fire({
            title: "Error",
            text: "Los campos están incompletos y/o Incorrectos",
            icon: "error",
            confirmButtonText: "Revisar",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showConfirmButton: true,
            confirmButtonColor: '#EC1C24',
            showCloseButton: true
        });
        return false;
        }
});	