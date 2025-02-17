package com.example.ecommerce.controller;

	import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ecommerce.model.user;
import com.example.ecommerce.service.UserService;

	@RestController
	@RequestMapping("/api/users")
	@CrossOrigin(origins = "http://localhost:3000") // Adjust if needed
	public class UserController {
	    @Autowired
	    private UserService userService;

	    @PostMapping("/register")
	    public user registerUser(@RequestBody user user) {
	    	System.out.println("Register API called with: " + user.getEmail());
	        return userService.registerUser(user);
	    }
	 // GET request to fetch all users
	    @GetMapping
	    public List<user> getAllUsers() {
	        return userService.getAllUsers();
	    }
	    @PostMapping("/login")
	    public Optional<user> loginUser(@RequestBody user user) {
	        return userService.findByEmail(user.getEmail());
	    }

	}


