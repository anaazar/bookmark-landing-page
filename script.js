// const formulario= document.getElementById('contact-form');
// const $inputs = document.querySelectorAll('#contact-form input');

// const expresiones = {
//     correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
// }   
// const campos = {
//     correo: false
// }

// const validarFormulario = (e) => {
//     switch (e.target.name) {
//         case "correo":
//             validarCampo(expresiones.correo, e.target, 'correo');
//         break;
//     }
// }
// const validarCampo = (expresion, input, campo) => {
//     const valor = input.value;
//     if(expresion.test(correovalor)){
//         input.classList.remove('input-error');
//         input.classList.add('input-success');
//         campos[campo] = true;
//     } else {
//         input.classList.add('input-error');
//         input.classList.remove('input-success');
//         campos[campo] = false;
//     }
// }

// $inputs.forEach((input) => {
//     input.addEventListener('keyup', validarFormulario);
//     input.addEventListener('blur', validarFormulario);
// });

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if(campos.correo){
//         formulario.reset();
//         alert("Formulario enviado exitosamente");
//         document.querySelectorAll('.input-success').forEach((icono) => {
//             icono.classList.remove('input-success');
//         });
//     } else {
//         alert("Por favor complete el formulario correctamente.");
//     }
// });

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  const toggleMenu = () => {
    const isActive = hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    // accesibilidad
    hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  };

  hamburger.addEventListener('click', toggleMenu);

  // abrir/cerrar con Enter / Space si el usuario usa teclado
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // cerrar menú al hacer click en un enlace (útil en móvil)
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    })
  );
}
