/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.api.CRUD.services;

import com.api.CRUD.models.ProductModel;
import com.api.CRUD.repositories.IProductRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author jsmsp
 */
@Service
public class ProductService {
    @Autowired
    private IProductRepository productRepository;
    
    public List<ProductModel>getProducts(){
        return productRepository.findAll();
    }
    
    public ProductModel getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public ProductModel saveProduct(ProductModel product) {
        return productRepository.save(product);
    }

    public Boolean deleteProduct(Long id){
        try{
            productRepository.deleteById(id);
            return true;
        }catch(Exception e){
            return false;
        }
    }
    
    public ProductModel updateById(ProductModel request, Long id){
        ProductModel product = productRepository.findById(id).get();
                
        product.setName(request.getName());
        product.setDescripción(request.getDescripción());
        product.setPrice(request.getPrice());
        product.setStock(request.getStock());
        return product;
    }
    
    
}
