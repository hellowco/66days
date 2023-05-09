package com.ssafy._66days.tier.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tier")
public class Tier {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotNull
	@Column
	private Long tierId;

	@NotNull
	@Column
	private String name;

	@NotNull
	@Column
	private String title;

	@NotNull
	@Column
	private Long requiredExp;
}