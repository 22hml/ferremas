# ApiOrdenFerremas

Esta API permite gestionar órdenes de compra de una ferretería, así como el manejo de productos y usuarios asociados.

#Instalación

1. Clonar el repositorio: clone el repostorio a su maquina local
git clone https://github.com/Pepinder/ApiOrdenFerremas.git

2. Configurar la base de datos: Asegúrese de tener configurada una base de datos MySQL en su entorno local. Puede utilizar XAMPP o cualquier otro servidor MySQL. Luego, configure las credenciales de la base de datos en el archivo application.properties dentro de la carpeta src/main/resources.

spring.datasource.url=jdbc:mysql://localhost:3306/nombre_base_datos
spring.datasource.username=usuario
spring.datasource.password=contraseña
server.port = 4040  (El puerto que usted desee poner)

3. Compilar y ejecutar: Utilice Maven para compilar el proyecto y ejecutar la aplicación Spring Boot.

mvn spring-boot:run

4. Acceder a la API : Una vez la aplicación este funcionando, puede acceder a la API desde "http://localhost:4040"

#APIS

Utilizar los endpoints de la API para interactuar con la aplicación desde otras aplicaciones o servicios (POSTMAN).

1. (POST) http://localhost:4040/user permite agregar un usuario con los respectivos campos : firstName, lastName, email, role
2. (GET) http://localhost:4040/user permite retornar a todos los usuario registrados en el sistema
3. (GET) http://localhost:4040/user/(id) permite retornar los datos de un usuario especifico por su ID
4. (POST) http://localhost:4040/products permite agregar un producto con sus respectivos campos : name, descripción, price, stock
5. (GET) http://localhost:4040/products permite retornar todos los productos registrados del sistema
6. (GET) http://localhost:4040/products/(id) permite retornar los datos de un producto especifico por su ID
7. (POST) http://localhost:4040/orders permite agregar una orden con los respectivos campos : user(user_id), products (product_id), date , status 
8. (GET) http://localhost:4040/orders permite retornar todas las ordenes registradas en el sistema
9. (GET) http://localhost:4040/orders/(id) permite retornar los datos de una orden especifica por su ID


