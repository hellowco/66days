package com.ssafy._66days.mainservice.user.controller;

import com.ssafy._66days.mainservice.user.feign.AuthServiceClient;
import com.ssafy._66days.mainservice.user.model.service.UserService;
import feign.FeignException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//import com.ssafy._66days.user.model.dto.UserDetailResponseDTO;
//import com.ssafy._66days.user.model.dto.UserSignUpRequestDTO;

import lombok.RequiredArgsConstructor;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Slf4j
public class UserController {

	private final UserService userService;
	private final AuthServiceClient authServiceClient;

	@GetMapping("/uuid/{uuid}")
	public ResponseEntity<UUID> extractUUIDFromToken(@PathVariable UUID uuid) {
		log.info("User-service UserController: {}",uuid);
		ResponseEntity<UUID> response = null;
		try {
			response = authServiceClient.extractUUID(uuid);
		} catch (FeignException e){
			log.error(e.getMessage());
		}
		return ResponseEntity.ok(response.getBody());
	}

	@GetMapping("/check-nickname/{nickname}")
	public ResponseEntity<Boolean> isNicknameAvailable(@RequestHeader("Authorization") String token,
													   @PathVariable String nickname) {
		//token validation
		// get UUID from token?
		UUID userId = authServiceClient.extractUUID(UUID.fromString(token)).getBody();
		// userService.
		boolean isAvailable = userService.isNicknameAvailable(nickname);
		return ResponseEntity.ok(!isAvailable);
	}

//	@GetMapping
//	public ResponseEntity<UserDetailResponseDTO> getUserDetail(@RequestHeader("Authorization") String token) {
//		// get UUID from token
//		//UserDetailResponseDTO userDetailResponseDTO = userService.getUserDetail(uuid);
//		//return ResponseEntity.ok(userDetailResponseDTO);
//		return ResponseEntity.ok().build();
//	}
}
