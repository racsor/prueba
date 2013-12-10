package org.alterq.dto;

import org.alterq.domain.Round;
import org.alterq.domain.UserAlterQ;

public class ResponseDto {
	private UserAlterQ userAlterQ;
	private ErrorDto errorDto;
	private Round jornada;

	public UserAlterQ getUserAlterQ() {
		return userAlterQ;
	}

	public void setUserAlterQ(UserAlterQ userAlterQ) {
		this.userAlterQ = userAlterQ;
	}

	public ErrorDto getErrorDto() {
		return errorDto;
	}

	public void setErrorDto(ErrorDto errorDto) {
		this.errorDto = errorDto;
	}

	public Round getRound() {
		return jornada;
	}

	public void setRound(Round jornada) {
		this.jornada = jornada;
	}

}