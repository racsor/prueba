package org.alterq.mvc;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.alterq.domain.Account;
import org.alterq.domain.Bet;
import org.alterq.domain.Company;
import org.alterq.domain.RolCompany;
import org.alterq.domain.RoundBets;
import org.alterq.domain.UserAlterQ;
import org.alterq.dto.ErrorDto;
import org.alterq.dto.MailQueueDto;
import org.alterq.dto.RequestUserDto;
import org.alterq.dto.ResponseDto;
import org.alterq.repo.AccountingDao;
import org.alterq.repo.AdminDataDao;
import org.alterq.repo.CompanyDao;
import org.alterq.repo.RoundBetDao;
import org.alterq.repo.RoundDao;
import org.alterq.repo.RoundRankingDao;
import org.alterq.repo.SessionAlterQDao;
import org.alterq.repo.UserAlterQDao;
import org.alterq.security.UserAlterQSecurity;
import org.alterq.util.BetTools;
import org.alterq.util.enumeration.AccountTypeEnum;
import org.alterq.util.enumeration.BetTypeEnum;
import org.alterq.util.enumeration.MessageResourcesNameEnum;
import org.alterq.util.enumeration.QueueMailEnum;
import org.alterq.validator.CompanyValidator;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.arch.core.channel.ProcessMailQueue;
import org.arch.core.i18n.resources.MessageLocalizedResources;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = { "/adminCompany" })
public class AdminCompanyController {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private SessionAlterQDao sessionDao;
	@Autowired
	private RoundBetDao roundBetDao;
	@Autowired
	private UserAlterQDao userAlterQDao;
	@Autowired
	private RoundRankingDao roundRankingDao;
	@Autowired
	private CompanyDao companyDao;
	@Autowired
	private RoundDao roundDao;
	@Autowired
	private UserAlterQSecurity userSecurity;
	@Autowired
	private AdminDataDao adminDataDao;
	@Autowired
	private AccountingDao accountingDao;
	@Autowired
	private BetTools betTools;
	@Autowired
	private CompanyValidator companyValidator;
	@Autowired
	@Qualifier("messageLocalizedResources")
	private MessageLocalizedResources messageLocalizedResources;
	@Autowired
	ProcessMailQueue processMailQueue;

	@RequestMapping(method = RequestMethod.POST)
	public ModelAndView initPagePost(RequestUserDto requestUserDto) {
		// public ModelAndView initPagePost(HttpServletRequest request) {
		log.debug("init adminCompany POST");

		ModelAndView model = new ModelAndView("adminCompany");
		model.addObject("requestUserDto", requestUserDto);

		return model;
	}

	/*
	 * @RequestMapping(method = RequestMethod.POST) public ModelAndView
	 * initPagePost(HttpServletRequest request) {
	 * log.debug("init adminCompany POST");
	 * 
	 * String company="0"; String round="0"; String season="0"; String
	 * idUserAlterQ="";
	 * 
	 * Map<String, String[]> parameters = request.getParameterMap(); for (String
	 * parameter : parameters.keySet()) { try { if (parameter.equals("company"))
	 * { company = request.getParameter(parameter); } else if
	 * (parameter.equals("round")) { round = request.getParameter(parameter); }
	 * else if (parameter.equals("season")) { season =
	 * request.getParameter(parameter); } else if
	 * (parameter.equals("idUserAlterQ")) { idUserAlterQ =
	 * request.getParameter(parameter); } } catch (Exception e) { // TODO:
	 * handle exceptionBets } } ModelAndView model = new
	 * ModelAndView("adminCompany"); model.addObject("company", company);
	 * model.addObject("round", round); model.addObject("season", season);
	 * model.addObject("idUserAlterQ", idUserAlterQ);
	 * 
	 * return model; }
	 */

	// @RequestMapping(method = RequestMethod.GET)
	// public String initPage() {
	// log.debug("init adminCompany.jsp");
	// return "adminCompany";
	// }

	@RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "/company/{company}/inviteTo/{idMail:.+}")
	public @ResponseBody ResponseDto inviteTo(@CookieValue(value = "session", defaultValue = "") String cookieSession, @PathVariable int company, @PathVariable String idMail) {
		ResponseDto response = new ResponseDto();
		log.debug("inviteTo: start");
		try {
			userSecurity.isAdminUserInSession(cookieSession, company);
			// TODO create process to send Mail
			log.debug("inviteTo: " + idMail + " to join at: " + company);
			//send user with mail and company to join
			UserAlterQ userAlterQ=new UserAlterQ();
			userAlterQ.setId(idMail);
			Company companyObject=companyDao.findByCompany(company);
			MailQueueDto mailDto=new MailQueueDto();
			mailDto.setUser(userAlterQ);
			mailDto.setCompany(companyObject);
			mailDto.setType(QueueMailEnum.Q_JOINTOCOMPANYMAIL);
			processMailQueue.process(mailDto);

		} catch (Exception e) {
			ErrorDto error = new ErrorDto();
			error.setIdError(MessageResourcesNameEnum.USER_NOT_ADMIN);
			error.setStringError(messageLocalizedResources.resolveLocalizedErrorMessage(MessageResourcesNameEnum.USER_NOT_ADMIN));
			response.addErrorDto(error);
			log.error(ExceptionUtils.getStackTrace(e));
		}
		log.debug("inviteTo: end");
		return response;
	}

	@RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "/company/{company}/season/{season}/round/{round}/closeAC")
	public @ResponseBody ResponseDto closeRound(@CookieValue(value = "session", defaultValue = "") String cookieSession, @PathVariable int company, @PathVariable int season, @PathVariable int round) {
		ResponseDto response = new ResponseDto();
		log.debug("closeRound: start");
		float priceBet = betTools.getPriceBet();
		float price = new Double(betTools.getPriceBet() * 1).floatValue();


		try {
			userSecurity.isAdminUserInSession(cookieSession, company);

			// CLOSING PROCESS STEPS (Admin Company)
			//

			// STEP 1: Automatics Bets
			//
			// STEP 1.1 - Get Users with automatic bets
			List<UserAlterQ> lUsers = userAlterQDao.findUserWithTypeSpecialBets(company, BetTypeEnum.BET_AUTOMATIC);
			// STEP 1.2 - For each user do as bets as automatic bets (It has to
			// check user amount before make automatics bets)

			for (UserAlterQ user : lUsers) {
				int numApu = 0;
				List<Bet> specialBet = user.getSpecialBets();
				for (Bet bet : specialBet) {
					if (bet.getType() == BetTypeEnum.BET_AUTOMATIC.getValue() && bet.getCompany() == company) {
						numApu = bet.getNumBets();
					}
				}
				// STEP 1.2.1 - Check User Balance
				float balance = new Float(user.getBalance()).floatValue();
				for (int i = 0; i < numApu; i++) {
					if (balance < priceBet) {
						log.debug("closeRound: user(" + user.getName() + ") No enough money for automatic bet");
						// STEP 1.2.1.error - Send an email to the user
						// ("NOT ENOUGH MONEY")
						continue;
					}
					// STEP 1.2.2 - Calc RandomBet
					String randomBet = betTools.randomBet();
					// STEP 1.2.3 - Make Automatic User Bet
					Bet bet = new Bet();
					bet.setPrice(betTools.getPriceBet());
					bet.setBet(randomBet);
					bet.setUser(user.getId());
					bet.setCompany(company);
					bet.setDateCreated(new Date());
					bet.setDateUpdated(new Date());
					bet.setNumBets(1);
					bet.setReduction("NNNNNNNNNNNNNN");
					bet.setType(BetTypeEnum.BET_NORMAL.getValue());
					bet.setId(new ObjectId().toHexString());

					roundBetDao.addBet(company, season, round, bet);
					// update new balance minus value bet
					balance -= priceBet;

					//account entry
					Account account = new Account();
					account.setAmount(Double.toString(price));
					account.setCompany(company);
					account.setDate(new Date());
					account.setDescription("Apuesta T "+season+"/"+(season+1-2000)+" J "+round);
					account.setRound(round);
					account.setSeason(season);
					account.setType(new Integer(AccountTypeEnum.ACCOUNT_BET.getValue()));
					account.setUser(user.getId());
					
					accountingDao.add(account);
				}

				// STEP 1.2.4 - Update User Balance
				try {
					user.setBalance(Float.toString((float) (balance)));
					userAlterQDao.save(user);
					
					
					
					/*
					 * if(userAlterQDao.getLastError() != null){
					 * log.debug("closeRound: user("
					 * +user.getName()+") Error updating balance."); //STEP
					 * 2.2.4.error - Send an email to the admin
					 * ("ERROR updating user balance") continue; }
					 */
				} catch (Exception e) {
					log.debug("closeRound: user(" + user.getName() + ") Error updating balance.");
					// STEP 1.2.4.error - Send an email to the admin
					// ("ERROR updating user balance")
					response.addErrorDto("AdminController:closeRound", " user(" + user.getName() + ") Error updating balance.");
					continue;
				}
			}

			// STEP 2: Fixed Bets
			lUsers = userAlterQDao.findUserWithTypeSpecialBets(company, BetTypeEnum.BET_FIXED);
			for (UserAlterQ user : lUsers) {
				// loop for number of fixed bets
				float balance = new Float(user.getBalance()).floatValue();
				List<Bet> specialBets = user.getSpecialBets();
				for (Bet betSpecial : specialBets) {
					if (balance < priceBet) {
						log.debug("closeRound: user(" + user.getName() + ") No enough money for automatic bet");
						// STEP 1.2.1.error - Send an email to the user
						// ("NOT ENOUGH MONEY")
						continue;
					}
					// STEP 1.2.3 - Make Automatic User Bet
					if (betSpecial.getType() == BetTypeEnum.BET_FIXED.getValue() && betSpecial.getCompany() == company) {
						log.debug("bet:" + betSpecial.getBet());
						Bet bet = new Bet();
						bet.setPrice(betTools.getPriceBet());
						bet.setBet(betSpecial.getBet());
						bet.setUser(user.getId());
						bet.setCompany(company);
						bet.setDateCreated(new Date());
						bet.setDateUpdated(new Date());
						bet.setNumBets(1);
						bet.setReduction("NNNNNNNNNNNNNN");
						bet.setType(BetTypeEnum.BET_NORMAL.getValue());
						bet.setId(new ObjectId().toHexString());

						roundBetDao.addBet(company, season, round, bet);
						// update new balance minus value bet
						balance -= priceBet;
						
						//account entry
						Account account = new Account();
						account.setAmount(Double.toString(price));
						account.setCompany(company);
						account.setDate(new Date());
						account.setDescription("Apuesta T "+season+"/"+(season+1-2000)+" J "+round);
						account.setRound(round);
						account.setSeason(season);
						account.setType(new Integer(AccountTypeEnum.ACCOUNT_BET.getValue()));
						account.setUser(user.getId());
						
						accountingDao.add(account);
					}
				}
				// STEP 1.2.4 - Update User Balance
				try {
					user.setBalance(Float.toString((float) (balance)));
					userAlterQDao.save(user);
					
					
					
					/*
					 * if(userAlterQDao.getLastError() != null){
					 * log.debug("closeRound: user("
					 * +user.getName()+") Error updating balance."); //STEP
					 * 2.2.4.error - Send an email to the admin
					 * ("ERROR updating user balance") continue; }
					 */
				} catch (Exception e) {
					log.debug("closeRound: user(" + user.getName() + ") Error updating balance.");
					// STEP 1.2.4.error - Send an email to the admin
					// ("ERROR updating user balance")
					response.addErrorDto("AdminController:closeRound", " user(" + user.getName() + ") Error updating balance.");
					continue;
				}

			}

		} catch (Exception e) {
			ErrorDto error = new ErrorDto();
			error.setIdError(MessageResourcesNameEnum.USER_NOT_ADMIN);
			error.setStringError(messageLocalizedResources.resolveLocalizedErrorMessage(MessageResourcesNameEnum.USER_NOT_ADMIN));
			response.addErrorDto(error);
			log.error(ExceptionUtils.getStackTrace(e));
		}

		log.debug("closeRound: end");
		return response;
	}

	@RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/{id:.+}/{company}/{season}/{round}/summary")
	public @ResponseBody ResponseDto summary(@CookieValue(value = "session", defaultValue = "") String cookieSession, @PathVariable(value = "id") String id, @PathVariable int company, @PathVariable int season, @PathVariable int round) {
		ResponseDto response = new ResponseDto();
		String responseString = new String();
		RoundBets roundBets;

		log.debug("getSummary: start");
		try {
			userSecurity.isAdminUserInSession(cookieSession, company);
			companyValidator.isCompanyOk(company);

			roundBets = roundBetDao.findRoundBetWithBets(season, round, company);

			response.setRoundBet(roundBets);

		} catch (Exception e) {
			ErrorDto error = new ErrorDto();
			error.setIdError(MessageResourcesNameEnum.USER_NOT_ADMIN);
			error.setStringError(messageLocalizedResources.resolveLocalizedErrorMessage(MessageResourcesNameEnum.USER_NOT_ADMIN));
			response.addErrorDto(error);
			log.error(ExceptionUtils.getStackTrace(e));
		}

		log.debug("getSummary: end");
		return response;
	}

}
