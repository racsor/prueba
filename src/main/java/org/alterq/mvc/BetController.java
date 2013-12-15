package org.alterq.mvc;

import java.util.Map;
import java.util.StringTokenizer;

import javax.servlet.http.HttpServletRequest;

import org.alterq.domain.Bet;
import org.alterq.domain.Round;
import org.alterq.domain.RoundBets;
import org.alterq.dto.ErrorDto;
import org.alterq.dto.ResponseDto;
import org.alterq.repo.BetDao;
import org.alterq.repo.RoundDao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/bet")
public class BetController {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private RoundDao roundDao;
	@Autowired
	private BetDao betDao;

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody
	ResponseDto getLastJornada() {
		ResponseDto dto = new ResponseDto();
		Round j = new Round();
		try {
			j = roundDao.findLastJornada();
		} catch (Exception e) {
			ErrorDto error = new ErrorDto();
			error.setIdError("10");
			error.setStringError("getLastJornada (i18n error)");
			dto.setErrorDto(error);
			dto.setRound(null);
		}
		dto.setRound(j);
		return dto;
	}

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	ResponseDto addBet(@CookieValue(value = "session", defaultValue = "") String cookieSession, HttpServletRequest request) {
		if (log.isDebugEnabled()) {
			log.debug("init AccountController.updateUserAlterQ");
			log.debug("session:" + cookieSession);
		}
		
		String apuesta="";
		int pro[]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
		
		Map<String, String[]> parameters = request.getParameterMap();
		for (String parameter : parameters.keySet()) {
			StringTokenizer st = new StringTokenizer(parameter, "_");
			int indice = Integer.parseInt(st.nextToken());
			String signo = st.nextToken();
			int signoN = (signo.equals("1"))?4:(signo.equals("2")?1:2);
			pro[indice]+=signoN;
			//log.debug(sb.toString());
		}
		for(int i =0;i<pro.length;i++)
			apuesta+=pro[i];
		
		//data for test only!!
		int season = 2013;
		int round = 9;
		String user = "pepito@gmail.com";
		   
		Bet apuestaBet = new Bet();
		apuestaBet.setBet(apuesta);
		apuestaBet.setUser(user);
		StringBuffer sb = new StringBuffer();
		sb.append("New Bet: season=" + season +" round="+ round + " user="+apuestaBet.getUser()+ " bet="+apuestaBet.getBet());
		log.debug(sb.toString());
		
		//Insert new bet into the BBDD
		betDao.addBet(season,round,apuestaBet);

		// TODO control security
		ResponseDto dto = new ResponseDto();
		return dto;

	}
    @RequestMapping(method=RequestMethod.GET, produces="application/json",value="bets", params = {"season", "round"})
    public @ResponseBody RoundBets findAllBetsParams(@RequestParam(value = "season") int season, @RequestParam(value = "round") int round)
    {
        return betDao.findAllBets(season, round);
    }
    @RequestMapping(method=RequestMethod.GET, produces="application/json",value="betsUser", params = {"season", "round", "user"})
    public @ResponseBody RoundBets findAllUserBetsParams(@RequestParam(value = "season") int season, @RequestParam(value = "round") int round, @RequestParam(value = "user") String user)
    {
        return betDao.findAllUserBets(season, round, user);
    }
    @RequestMapping(method=RequestMethod.GET, produces="application/json",value="addBet", params = {"season", "round", "user", "bet"})
    public @ResponseBody boolean addBetParams(@RequestParam(value = "season") int season, @RequestParam(value = "round") int round, @RequestParam(value = "user") String user, @RequestParam(value = "bet") String bet)
    {
    	Bet bAux = new Bet();
    	bAux.setBet(bet);
    	bAux.setUser(user);
        return betDao.addBet(season, round, bAux);
    }
    @RequestMapping(method=RequestMethod.GET, produces="application/json",value="delAllBets", params = {"season", "round"})
    public @ResponseBody boolean delAllUserBetsParams(@RequestParam(value = "season") int season, @RequestParam(value = "round") int round)
    {
        return betDao.deleteAllBets(season, round);
    }
    @RequestMapping(method=RequestMethod.GET, produces="application/json",value="delUserBets", params = {"season", "round", "user"})
    public @ResponseBody boolean delAllUserBetsParams(@RequestParam(value = "season") int season, @RequestParam(value = "round") int round, @RequestParam(value = "user") String user)
    {
        return betDao.deleteAllUserBets(season, round, user);
    }
    @RequestMapping(method=RequestMethod.GET, produces="application/json",value="delUserBet", params = {"season", "round", "user", "bet"})
    public @ResponseBody boolean delUserBet(@RequestParam(value = "season") int season, @RequestParam(value = "round") int round, @RequestParam(value = "user") String user, @RequestParam(value = "bet") String bet)
    {
    	Bet bAux = new Bet();
    	bAux.setBet(bet);
    	bAux.setUser(user);
        return betDao.deleteUserBet(season, round, bAux);
    }

}
