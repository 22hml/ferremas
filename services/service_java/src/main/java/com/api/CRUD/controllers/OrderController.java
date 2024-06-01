/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.api.CRUD.controllers;

import com.api.CRUD.models.OrderModel;
import com.api.CRUD.services.OrderService;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author jsmsp
 */
@RestController
@RequestMapping("/orders")
public class OrderController {
    
    @Autowired
    private OrderService orderService;
    
    @GetMapping
    public ResponseEntity<List<OrderModel>> obtenerOrdenes() {
        List<OrderModel> ordenes = orderService.getOrders();
        return ResponseEntity.ok(ordenes);
    }
    
    @GetMapping("/{id}")
    public OrderModel getOrderById(@PathVariable Long id){
        return orderService.getOrderById(id);
    }
    
    @PostMapping
    public ResponseEntity<OrderModel> createOrder(@RequestBody OrderModel order) {
        order.setOrderDate(new Date());
        OrderModel nuevaOrden = orderService.saveOrder(order);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevaOrden);
    }
    
    @PutMapping("/{id}")
    public OrderModel updateOrder(@PathVariable Long id, @RequestBody OrderModel orderDetails) {
        OrderModel order = orderService.getOrderById(id);
        
       if (order != null) {
            order.setProducts(orderDetails.getProducts());
            order.setStatus(orderDetails.getStatus());
            order.setOrderDate(orderDetails.getOrderDate());
            order.setUser(orderDetails.getUser());
            return orderService.saveOrder(order);
        }

        return null;
    }
    
    
    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
    }
}
