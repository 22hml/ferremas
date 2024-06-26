/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.api.CRUD.services;

import com.api.CRUD.models.UserModel;
import com.api.CRUD.repositories.IUserRepository;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author jsmsp
 */
@Service
public class UserService {
    
    @Autowired
    IUserRepository userRepository;
    
    public ArrayList<UserModel> getUsers(){
        return (ArrayList<UserModel>) userRepository.findAll();
    }
    
    public UserModel saveUser(UserModel user){
        return userRepository.save(user);
    }
    
    public Optional<UserModel> getById(Long id){
        return userRepository.findById(id);
    }
   
    
    public UserModel updateById(UserModel request, Long id){
        UserModel user = userRepository.findById(id).get();
                
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        return user;
    }
    
    public Boolean deleteUser(Long id){
        try{
            userRepository.deleteById(id);
            return true;
        }catch(Exception e){
            return false;
        }
    }
}
