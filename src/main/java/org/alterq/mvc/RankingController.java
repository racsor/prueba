package org.alterq.mvc;

import org.alterq.domain.RoundRanking;
import org.alterq.dto.AlterQConstants;
import org.alterq.dto.ErrorDto;
import org.alterq.dto.ResponseDto;
import org.alterq.repo.RoundRankingDao;
import org.alterq.util.enumeration.MessageResourcesNameEnum;
import org.arch.core.i18n.resources.MessageLocalizedResources;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/myaccount/{id:.+}/season/{season}/round/{round}/ranking")
public class RankingController {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private RoundRankingDao rankingDao;

	@Autowired
	@Qualifier("messageLocalizedResources")
	private MessageLocalizedResources messageLocalizedResources;

	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody
	ResponseDto getRanking(@PathVariable(value = "id") String id, @PathVariable(value = "season") int season, @PathVariable(value = "round") int round) {
		ResponseDto dto = new ResponseDto();
		RoundRanking roundRanking = new RoundRanking();
		try {
			// TODO control security by id user
			// TODO control security by id-company
			roundRanking = rankingDao.findRanking(AlterQConstants.DEFECT_COMPANY, season, round);
		} catch (Exception e) {
			ErrorDto error = new ErrorDto();
			error.setIdError(MessageResourcesNameEnum.GET_LAST_ROUND);
			error.setStringError(messageLocalizedResources.resolveLocalizedErrorMessage(MessageResourcesNameEnum.GET_LAST_ROUND));
			dto.addErrorDto(error);
			dto.setRound(null);
		}
		dto.setRoundRanking(roundRanking);
		return dto;
	}

}
