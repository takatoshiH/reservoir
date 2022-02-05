<?php

//	単一責任の原則

	// Bad pattern
	function getFullNameAttrtibute()
	{
		if (auth()->user() && auth()->user()->hasRole("client")
			&& auth()->user()->isVerified()
		) {
			return 'Mr. ' . $this->first_name . ' ' . $this->middle_name . ' '
				. $this->last_name;
		} else {
			return $this->first_name[0] . '. ' . $this->last_name;
		}
	}

// Good pattern
	function getFullNameAttribute()
	{
		return $this->isVerifiedClient() ? $this->getFullNameLong()
			: $this->getFullNameShort();
	}

	function isVerifiedClient()
	{
		return auth()->user() && auth()->user()->hasRole('client')
			&& auth()->user()->isVerified();
	}

	function getFullNameLong()
	{
		return 'Mr. ' . $this->first_name . ' ' . $this->middle_name . ' '
			. $this->last_name;
	}

	function getFullNameShort()
	{
		return $this->first_name[0] . '. ' . $this->last_name;
	}