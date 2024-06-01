/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.api.CRUD.controllers;

import com.api.CRUD.models.ProductModel;
import com.api.CRUD.services.ProductService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/products")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    @GetMapping
    public List<ProductModel> getProducts(){
        return productService.getProducts();
    }
    
    @GetMapping("{id}")
    public ProductModel getProductById(@PathVariable Long id){
        return productService.getProductById(id);
    }
            
    @PostMapping
    public ProductModel saveProduct(@RequestBody ProductModel product){
        return productService.saveProduct(product);
    }
    
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
    }
    
    @PutMapping(path = "/{id}")
    public ProductModel updateProductById(@RequestBody ProductModel request, @PathVariable("id")Long id){
        return this.productService.updateById(request, id);
    }
}
