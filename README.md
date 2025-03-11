# Formato de Actividades Realizadas

Este proyecto consiste en un formulario HTML diseñado para registrar actividades realizadas, con la capacidad de descargar los datos en formato CSV y enviar la información por correo electrónico a través de FormSubmit.co.

## Descripción

El formulario está diseñado para recopilar información detallada sobre actividades realizadas, incluyendo datos personales, detalles del cliente, información del equipo y validaciones técnicas. Al enviar el formulario, los datos se descargan automáticamente en un archivo CSV y se envían por correo electrónico a la dirección configurada.

## Características

-   **Formulario HTML:** Recopila datos del usuario a través de diversos campos de entrada.
-   **Descarga CSV:** Genera y descarga un archivo CSV con los datos ingresados.
-   **Envío por Correo Electrónico:** Utiliza FormSubmit.co para enviar los datos del formulario por correo electrónico.
-   **Validaciones Técnicas:** Incluye una amplia gama de checkboxes para registrar validaciones y fallas técnicas.
-   **Detalles Eléctricos y de Operación:** Campos para registrar voltajes, amperajes y presiones de operación.
-   **Diseño Básico:** Estilizado con un archivo `index.css` (debe ser creado por el usuario).

## Tecnologías Utilizadas

-   HTML5
-   JavaScript (para la descarga CSV)
-   CSS3 (para estilos, debe ser creado por el usuario)
-   FormSubmit.co (para el envío de correos electrónicos)

## Cómo Usar

1.  **Clona o descarga el repositorio.**
2.  **Abre `index.html` en tu navegador.**
3.  **Completa el formulario con los datos requeridos.**
4.  **Haz clic en "Enviar y Descargar CSV".**
5.  **Se descargará un archivo `formulario.csv` con los datos del formulario.**
6.  **Los datos del formulario se enviarán por correo electrónico a la dirección configurada en el atributo `action` del formulario (baracaldo2@yahoo.com).**

## Configuración

-   **Correo Electrónico:**
    -   Para cambiar la dirección de correo electrónico a la que se envían los datos, modifica el atributo `action` del formulario:
        ```html
        <form id="mi-formulario" action="[https://formsubmit.co/tu_correo@example.com](https://formsubmit.co/tu_correo@example.com)" method="POST">
        ```
-   **Estilos:**
    -   Crea un archivo `index.css` en el mismo directorio que `index.html` para personalizar la apariencia del formulario.

## Código JavaScript

El código JavaScript en el `<script>` dentro del `index.html` maneja la descarga del archivo CSV. Aquí están las partes claves:

-   **`event.preventDefault()`:** Evita el envío tradicional del formulario.
-   **`FormData`:** Recopila los datos del formulario.
-   **Generación de CSV:** Los datos se convierten a un formato CSV.
-   **Creación de Enlace de Descarga:** Se crea un enlace (`<a>`) con los datos CSV codificados.
-   **Descarga Automática:** Se simula un clic en el enlace para iniciar la descarga.
-   **Envío del Formulario:** Se envía el formulario usando `form.submit()` para realizar el envío por correo electrónico a través de FormSubmit.co.

## Campos del Formulario

-   **Datos Personales:** Nombre, Email, Mensaje.
-   **Detalles de la Actividad:** Fecha, Cliente, Actividad Programada.
-   **Información del Equipo:** Modelo del Equipo, Serial del Equipo.
-   **Validaciones Técnicas:** Checkboxes para Fuga, Bloqueo de Hielo, Daño de Aislante Térmico, Humedad, Saturación de Refrigerante, Válvula de Expansión Descalibrada, Controlador Desconfigurado, Falla de Componente Eléctrico.
-   **Datos Eléctricos:** Voltaje L1-L2, Voltaje L2-L3, Voltaje L1-L3, Amperios L1, Amperios L2, Amperios L3.
-   **Datos de Operación:** Presiones de Operación LP, Presiones de Operación HP, Superheat, Subcooling.

## Nota

-   Asegúrate de que la dirección de correo electrónico en el atributo `action` sea válida y que FormSubmit.co esté configurado correctamente para el envío de correos electrónicos.
-   El archivo `index.css` es necesario para aplicar estilos al formulario.
