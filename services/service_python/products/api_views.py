
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from products.serializers import ProductSerializer
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from products.models import Product
from django.db.models import Max
import re

@api_view(http_method_names=['GET'])
def get_all_products(request):
    try:
        products_data = ProductSerializer(Product.objects.all(),many=True).data
        print("products_data del listado", products_data)

        return Response({"status": 1, 'products':products_data})
        
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)

@api_view(http_method_names=['POST'])
# @permission_classes([IsAuthenticated])
def create_product(request):
    try:
        if request and request.data:
            data = request.data
            name = None
            brand = None
            price = None
            product_code = None
            product = None
            data = request.data

            required_variables = ['name', 'brand', 'price', 'product_code']
            missing_variables = [var for var in required_variables if var not in data]
            if missing_variables:
                return Response({
                    "success": False,
                    "msg": f"Faltan las siguientes variables: {', '.join(missing_variables)}"
                })

            name = data.get('name', '').strip().upper()
            brand = data.get('brand', '').strip().upper()
            price = data.get('price', None)
            img = data.get('img', None)
            
            product_code = data.get('product_code', '').strip().upper()

            last_product = Product.objects.aggregate(Max('hardware_code'))
            last_hardware_code = last_product['hardware_code__max']
            if last_hardware_code:
                last_serial_number = int(re.search(r'\d+$', last_hardware_code).group())
            else:
                last_serial_number = 0

            next_serial_number = last_serial_number + 1
            next_hardware_code = f'FERREMAS-{next_serial_number:05d}'


            if Product.objects.filter(product_code=product_code).exists():
                return Response({
                    "success": False,
                    "msg": f"Ya existe un producto con el código {product_code}."
                })

            product = Product()
            product.name = name
            product.brand = brand
            product.price = price
            product.imageUrl = img
            product.product_code = product_code
            product.hardware_code=next_hardware_code
            product.save()
        
            if product:
                return Response({
                    "success": True,
                    'msg': 'Producto creado exitosamente, ID: ' + str(product.id) + ', Nombre: ' + str(product.name)
                })

            else:
                return Response({
                    "success": False,
                    "msg": "Producto no creado, intente nuevamente.",
                })

        else:
            return Response({
                "success": False,
                "msg": "Error request, intente nuevamente.",
            })

    except Exception as e:
        return Response({
            "success": False,
            "msg": str(e),
        })

@api_view(['GET'])
def get_product_by_id(request, product_id):
    try:
        product = Product.objects.get(product_code=str(product_id).strip().upper())
        serializer = ProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Product.DoesNotExist:
        return Response({"error": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_product(request, product_id):
    try:
        product = Product.objects.get(product_code=str(product_id).strip().upper())
        product.delete()
        return Response({"message": f"Producto con ID {product_id} eliminado correctamente"}, status=status.HTTP_204_NO_CONTENT)
    except Product.DoesNotExist:
        return Response({"message": f"No se encontró ningún producto con ID {product_id}"}, status=status.HTTP_404_NOT_FOUND)
