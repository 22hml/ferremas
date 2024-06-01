/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.api.CRUD.services;

import com.api.CRUD.models.OrderModel;
import com.api.CRUD.models.ProductModel;
import com.api.CRUD.models.UserModel;
import com.api.CRUD.repositories.IOrderRepository;
import com.api.CRUD.repositories.IProductRepository;
import com.api.CRUD.repositories.IUserRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author jsmsp
 */
@Service
public class OrderService {
    @Autowired
    private IOrderRepository orderRepository;
    
    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IProductRepository productRepository;
    public List<OrderModel> getOrders(){
        return orderRepository.findAll();
    }
    
    public OrderModel getOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    public OrderModel saveOrder(OrderModel order) {
        // Recuperar el usuario desde la base de datos usando el ID proporcionado
        Optional<UserModel> userOpt = userRepository.findById(order.getUser().getId());
        if (!userOpt.isPresent()) {
            throw new RuntimeException("User not found");
        }
        order.setUser(userOpt.get());

        // Recuperar los productos desde la base de datos usando los IDs proporcionados
        List<ProductModel> products = new ArrayList<>();
        for (ProductModel product : order.getProducts()) {
            Optional<ProductModel> productOpt = productRepository.findById(product.getId());
            if (!productOpt.isPresent()) {
                throw new RuntimeException("Product not found");
            }
            products.add(productOpt.get());
        }
        order.setProducts(products);

        // Guardar la orden en la base de datos
        return orderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}
