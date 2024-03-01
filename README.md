# Prueba Técnica Full Stack Developer (Merge and Deploy)

Tiempo estimado: 1 hora

### **Objetivo General**

Desarrollar una aplicación web que permita manejar usuarios, utilizando NestJS para el backend y Angular para el frontend.

### **Ejercicio 1: Crear API con NestJS**

1. Crea un controlador con dos endpoints:
   - `GET /api/users` Debe devolver una lista de usuarios en formato JSON.
   - `POST /api/users` Debe permitir la creación de un nuevo usuario.
2. Implementa un servicio para manejar la lógica de negocio de los usuarios.
3. Utiliza un array en memoria o archivo json para almacenar los usuarios (no es necesario una base de datos).
4. Implementa la validación de datos (DTOs) para la creación de usuarios (nombre, correo electrónico, etc) [Documentation | NestJS - Validation](https://docs.nestjs.com/techniques/validation)

### **Ejercicio 2: Configuración del Frontend con Angular**

1. Configura servicios en Angular para consumir las APIs creadas en el ejercicio anterior.
2. Crea un componente en Angular para mostrar la lista de usuarios.
3. Crea un componente en Angular para permitir la creación de nuevos usuarios a través de un formulario.
4. Configura algún framework de CSS (Opcional)

### **Ejercicio 3: Integración de Funcionalidad**

1. Implementar endpoint para mostrar la lista de usuarios.
2. Implementa endpoint para manejar la creación de usuarios.
3. Asegúrate de validar los datos del formulario antes de enviarlos al servidor.
4. Actualiza la lista de usuarios automáticamente después de agregar un nuevo usuario sin recargar la página.

### **Notas Importantes**

- Utiliza buenas prácticas y sigue los principios de diseño SOLID.
- Puedes agregar cualquier framework o librería para desarrollar la aplicación.
- Utiliza git para control de versiones y comparte tu repositorio al finalizar la prueba.

### Puntos Extras

- Agregar testing a la aplicación.
- Agregar búsqueda que filtre por nombre del usuario.
- Agregar opciones de eliminar y editar producto.
- Agregar Responsive Design a la aplicación.
- Desplegar en un ambiente cloud.

## ¡Buena suerte!
