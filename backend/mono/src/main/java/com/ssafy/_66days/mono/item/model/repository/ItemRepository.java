package com.ssafy._66days.mono.item.model.repository;

import com.ssafy._66days.mono.item.model.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

}
