package com.example.ecommerce.repository;


	import com.example.ecommerce.model.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

	public interface UserRepository extends JpaRepository<user, Long> {
	    boolean existsByEmail(String email);
	    Optional<user> findByEmail(String email);
	}


