package com.example.ecommerce.service;

	import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.example.ecommerce.model.user;
import com.example.ecommerce.repository.UserRepository;

	@Service
	public class UserService {
	    @Autowired
	    private UserRepository userRepository;

	    public user registerUser(user user) {
	        if (userRepository.existsByEmail(user.getEmail())) {
	            throw new RuntimeException("Email already registered!");
	        }
	        return userRepository.save(user);
	    }
	    public List<user> getAllUsers() {
	        return userRepository.findAll();
	    }
	    
	    public Optional<user> findByEmail(String email) {
	        return userRepository.findByEmail(email);
	    }

	}

