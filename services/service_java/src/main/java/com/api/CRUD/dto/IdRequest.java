/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.api.CRUD.dto;

/**
 *
 * @author jsmsp
 */
public class IdRequest {
    
    private Long id;

    // Constructor, getters y setters

    public IdRequest() {}

    public IdRequest(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
