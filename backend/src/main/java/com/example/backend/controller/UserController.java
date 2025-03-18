package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend requests
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return "User already exists!";
        }
        userRepository.save(user);
        return "User registered successfully!";
    }

    @GetMapping
    public List<User> getAllUsers() {
        System.out.println("Fetching all users..."); // Debugging log
        return userRepository.findAll();
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        System.out.println("Login attempt for email: " + user.getEmail());
        
        User foundUser = userRepository.findByEmail(user.getEmail());
        
        // Check if user exists and password matches
        if (foundUser == null) {
            System.out.println("User not found for email: " + user.getEmail());
            return ResponseEntity.badRequest().body("Invalid email or password");
        }

        // Check password match
        if (!foundUser.getPassword().equals(user.getPassword())) {
            System.out.println("Password mismatch for email: " + user.getEmail());
            return ResponseEntity.badRequest().body("Invalid email or password");
        }

        System.out.println("Login successful for email: " + user.getEmail());
        return ResponseEntity.ok("Login successful!");
    }

}
