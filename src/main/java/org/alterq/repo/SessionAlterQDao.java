package org.alterq.repo;

import org.alterq.domain.SessionAlterQ;

public interface SessionAlterQDao {
	public String findUserAlterQIdBySessionId(String sessionId);

	public String startSession(String username);

	public void endSession(String sessionID);

	public SessionAlterQ getSession(String sessionID);
}