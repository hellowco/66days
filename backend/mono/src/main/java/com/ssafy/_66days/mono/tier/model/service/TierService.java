package com.ssafy._66days.mono.tier.model.service;

import com.ssafy._66days.mono.tier.model.repository.TierRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TierService {

	private final TierRepository tierRepository;
}
