const pasos = document.querySelectorAll('.paso');

pasos.forEach(paso => {
    paso.style.opacity = '0';
    paso.style.transform = 'translateY(60px)';
    paso.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

function checkPasos() {
    pasos.forEach((paso, index) => {
        const rect = paso.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            setTimeout(() => {
                paso.style.opacity = '1';
                paso.style.transform = 'translateY(0)';
            }, index * 250);
        }
    });
}

window.addEventListener('scroll', checkPasos);
window.addEventListener('load', checkPasos);

// ───── FORMULARIO ─────
function enviarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const edad   = document.getElementById('edad').value.trim();
    const email  = document.getElementById('email').value.trim();

    if (!nombre || !edad || !email) {
        alert('Por favor completá todos los campos.');
        return;
    }

    if (!email.includes('@')) {
        alert('Por favor ingresá un e-mail válido.');
        return;
    }

    const mensaje = `¡Gracias ${nombre}! 🎭 Ya sos parte de nuestra obra. Te enviamos tu QR a ${email}. ¡Nos vemos el 2 de mayo en el Gran Rex!`;

    document.getElementById('mensaje-gracias').textContent = mensaje;
    document.getElementById('gracias').style.display = 'block';

    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('email').value = '';
}