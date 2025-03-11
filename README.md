# Formulario y Descarga CSV

Este proyecto consiste en un formulario HTML que recopila datos del usuario y permite descargar esos datos en formato CSV. Además, el formulario está configurado para enviar los datos por correo electrónico utilizando FormSubmit.co.

## Descripción

El formulario incluye campos para nombre, email, mensaje, fecha, cliente, actividad programada, modelo del equipo, serial del equipo, validaciones (checkboxes), voltaje, amperios, presiones de operación, superheat y subcooling. Al enviar el formulario, se realizan dos acciones:

1.  **Descarga CSV:** Los datos del formulario se convierten a un archivo CSV y se descargan automáticamente.
2.  **Envío por Correo Electrónico:** Los datos del formulario se envían por correo electrónico utilizando el servicio FormSubmit.co.

## Características

-   **Formulario HTML:** Recopila información del usuario a través de varios campos de entrada.
-   **Descarga CSV:** Permite descargar los datos del formulario en formato CSV.
-   **Envío por Correo Electrónico:** Utiliza FormSubmit.co para enviar los datos del formulario por correo electrónico.
-   **Validaciones:** Incluye checkboxes para validaciones específicas.
-   **Diseño Básico:** Estilizado con un archivo `index.css` (debe ser creado por el usuario).

## Tecnologías Utilizadas

-   HTML5
-   JavaScript (para la descarga CSV)
-   CSS3 (para estilos, debe ser creado por el usuario)
-   FormSubmit.co (para el envío de correos electrónicos)

## Cómo Usar

1.  **Clona o descarga el repositorio.**
2.  **Abre `index.html` en tu navegador.**
3.  **Completa el formulario con los datos deseados.**
4.  **Haz clic en "Enviar y Descargar CSV".**
5.  **Se descargará un archivo `formulario.csv` con los datos del formulario.**
6.  **Los datos del formulario se enviarán por correo electrónico a la dirección configurada en `action` de `form` (baracaldo2@yahoo.com).**

## Configuración

-   **Correo Electrónico:**
    -   Para cambiar la dirección de correo electrónico a la que se envían los datos, modifica el atributo `action` del formulario:
        ```html
        <form id="mi-formulario" action="[https://formsubmit.co/tu_correo@example.com](https://www.google.com/search?q=https://formsubmit.co/tu_correo%40example.com)" method="POST">
        ```
-   **Estilos:**
    -   Crea un archivo `index.css` en el mismo directorio que `index.html` para aplicar estilos personalizados al formulario.

## Código JavaScript

El código JavaScript en el `<script>` dentro del `index.html` maneja la descarga del archivo CSV. Aquí está una explicación de las partes claves:

-   **`event.preventDefault()`:** Evita el envío tradicional del formulario.
-   **`FormData`:** Recopila los datos del formulario.
-   **Generación de CSV:** Los datos se convierten a un formato CSV.
-   **Creación de Enlace de Descarga:** Se crea un enlace (`<a>`) con los datos CSV codificados.
-   **Descarga Automática:** Se simula un clic en el enlace para iniciar la descarga.
-   **Envío del Formulario:** Se envía el formulario usando `form.submit()` para realizar el envío por correo electrónico a través de FormSubmit.co.

## Nota

-   Para que el envío de correos electrónicos funcione correctamente, asegúrate de que la dirección de correo electrónico en el atributo `action` sea válida y que FormSubmit.co esté configurado correctamente.
-   El archivo `index.css` debe ser creado por el usuario para aplicar estilos al formulario.
