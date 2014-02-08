package org.alterq.repo;

import org.alterq.domain.Bet;
import org.alterq.domain.RoundBets;


public interface RoundBetDao {
	public RoundBets findAllBets(int season, int round);
	public RoundBets findAllUserBets(int season, int round, String user);
	
	public boolean addBet(int season, int round, Bet bet);
	public void add(RoundBets bean);
	
	public boolean deleteAllBets(int season, int round);
	public boolean deleteAllUserBets(int season, int round, String user);
	public boolean deleteUserBet(int season, int round, Bet bet);
}