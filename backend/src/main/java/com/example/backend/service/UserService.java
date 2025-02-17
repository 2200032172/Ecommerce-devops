package com.example.backend.service;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

import java.util.List;

	@Service
	public class UserService {

	    @Autowired
	    private UserRepository userRepository;

	    public User registerUser(User user) {
	        return userRepository.save(user);
	    }

	    // Method to get all users
	    public List<User> getAllUsers() {
	        return userRepository.findAll();
	    }
	}


