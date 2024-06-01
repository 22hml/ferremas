#### FERREMAS #######

Ferremas es una aplicación web desarrollada en Django que proporciona una plataforma para administrar productos de ferretería. Permite a los usuarios agregar, editar y eliminar productos, así como también ver una lista de todos los productos disponibles.

## INSTALACIÓN
1. Clona el repositorio de GitHub en tu máquina local utilizando el siguiente comando:
    git clone https://github.com/22hml/ferremas.git

2. Navega al directorio del proyecto:
    cd ferremas

3. Crea un entorno virtual para el proyecto (se recomienda, pero opcional):
    python -m venv venv

    3.1 Si no tienes python, instala python preferiblemente v.Python 3.11.6

4. Activa el entorno virtual:

    venv\Scripts\activate

5. Instala las dependencias del proyecto:
    pip install -r requirements.txt

6. Ejecuta las migraciones de la base de datos:
    python manage.py migrate

7. Crea un superusuario (para acceder al panel de administración) url + /admin:
    python manage.py createsuperuser

8. Inicia el servidor de desarrollo:
    python manage.py runserver

9. Abre tu navegador web y accede a http://127.0.0.1:8000 para ver la aplicación en funcionamiento, para acceder al admin: url + /admin


## USO
Una vez que la aplicación esté instalada y funcionando, puedes hacer lo siguiente:

Acceder al panel de administración con las credenciales del superusuario que creaste durante la instalación (http://127.0.0.1:8000/admin) para agregar, editar o eliminar productos.

## APIS
Utilizar los endpoints de la API para interactuar con la aplicación desde otras aplicaciones o servicios (POSTMAN).

1. (POST) http://127.0.0.1:8000/customuser/api/register/ (permite registrar un usuario y darle un token) - (campos: username, password, name, rut, email, phone)
2. (POST) http://127.0.0.1:8000/customuser/api/token/refresh/ (permite refrescar el token del usuario) - (campos: username y password)
3. (POST) http://127.0.0.1:8000/products/api/create_product/ (permite crear un producto) - (pasar token por Bearer Token) - (campos: name, brand, price, product_code)
4. (GET) http://127.0.0.1:8000/products/api/get_all_products/ (permite obtener todos los productos) - (pasar token por Bearer Token)
5. (DELETE) http://127.0.0.1:8000/products/api/delete_product/<product_code>/ (permite eliminar producto) - (pasar token por Bearer Token) (campos: product_code en url)
6. (GET) http://127.0.0.1:8000/products/api/get_product/<product_code>/ (permite obtener un producto) - (pasar token por Bearer Token) (campos: product_code en url)

## TOKEN
Token expira cada 15 min.

Este README proporciona una visión general del proyecto Ferremas, cómo instalarlo y usarlo, así como detalles sobre cómo contribuir, créditos y la licencia del proyecto. Asegúrate de personalizar la información según las necesidades específicas de tu proyecto y tus preferencias.