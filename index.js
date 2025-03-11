// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mi-formulario');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Recopila los datos del formulario
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            if (key === 'fuga' || key === 'hielo' || key === 'electrico') {
                if (!data.validaciones) {
                    data.validaciones = {};
                }
                data.validaciones[key] = value;
            } else {
                data[key] = value;
            }
        });

        // Simula la creación de un objeto Excel (reemplaza con tu lógica real)
        const excelData = [
            ["Nombre", "Email", "Mensaje", "Fecha", "Cliente", "Actividad", "Modelo", "Serial", "Fuga", "Hielo", "Electrico", "Voltaje", "Amperios", "Presion", "Superheat", "Subcooling"],
            [
                data.nombre,
                data.email,
                data.mensaje,
                data.fecha,
                data.cliente,
                data.actividad,
                data.modelo,
                data.serial,
                data.validaciones?.fuga || '',
                data.validaciones?.hielo || '',
                data.validaciones?.electrico || '',
                data.voltaje,
                data.amperios,
                data.presion,
                data.superheat,
                data.subcooling
            ]
        ];

        // Descarga el CSV
        downloadCSV(excelData, 'formulario_data.csv');

        // Envía el correo electrónico
        sendEmail(data.email, "Datos del Formulario", JSON.stringify(data, null, 2));

        // Opcional: Limpia el formulario después de la descarga y envío
        form.reset();
    });

    function downloadCSV(data, filename) {
        const csv = data.map(row => row.map(String).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, filename);
        } else {
            const url = URL.createObjectURL(blob);
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    function sendEmail(to, subject, body) {
        // Simulación de envío de correo electrónico (reemplaza con tu lógica real)
        console.log(`Simulando envío de correo a: ${to}`);
        console.log(`Asunto: ${subject}`);
        console.log(`Cuerpo: ${body}`);

        // En un entorno real, necesitarías un backend para enviar correos electrónicos.
        // Puedes usar servicios como SendGrid, Mailgun, o tu propio servidor SMTP.
        // Ejemplo usando fetch (necesitarías un backend):
        /*
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ to, subject, body })
        })
        .then(response => {
            if (response.ok) {
                console.log('Correo enviado con éxito');
            } else {
                console.error('Error al enviar el correo');
            }
        })
        .catch(error => {
            console.error('Error de red:', error);
        });
        */
    }
});