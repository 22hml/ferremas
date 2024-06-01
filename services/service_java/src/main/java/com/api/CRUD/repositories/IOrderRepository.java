/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.api.CRUD.repositories;

import com.api.CRUD.models.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author jsmsp
 */
public interface IOrderRepository extends JpaRepository<OrderModel, Long>{
    
}
