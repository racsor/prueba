/*
 * Copyright 2007-2012 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.arch.core.channel;

import org.alterq.domain.UserAlterQ;
import org.alterq.dto.MailQueueDto;
import org.arch.core.mail.SendMail;
import org.arch.core.mail.SendMailer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.message.GenericMessage;

/**
 * The endpoint for a delivery order.
 *
 * @author ALTERQ
 */
@MessageEndpoint
public class SendEndpoint {

    final Logger logger = LoggerFactory.getLogger(SendEndpoint.class);
	@Autowired
	SendMailer sendMailer;

    /**
     * Process a delivery order for sending by mail.
     */
	public void sendingDailyMail(GenericMessage<MailQueueDto> message) {
		MailQueueDto mailQueue=  message.getPayload();
		UserAlterQ userAlterQ=mailQueue.getUser();
		
		sendMailer.sendDailyMail(userAlterQ);
	}
	/**
	 * Process a delivery order for sending by mail.
	 */
	public void sendingForgotMail(GenericMessage<MailQueueDto> message) {
		MailQueueDto mailQueue=  message.getPayload();
		UserAlterQ userAlterQ=mailQueue.getUser();
		
		sendMailer.sendForgotMail(userAlterQ);
	}
	/**
	 * Process a delivery order for sending by mail.
	 */
	public void sendingResultsMail(GenericMessage<MailQueueDto> message) {
		MailQueueDto mailQueue=  message.getPayload();
		UserAlterQ userAlterQ=mailQueue.getUser();
		
//		sendMailer.sendResultsMail(userAlterQ);
	}

	/**
	 * Process a delivery order for sending by mail.
	 */
	public void sendingWithoutMoneyMail(GenericMessage<MailQueueDto> message) {
		MailQueueDto mailQueue=  message.getPayload();
		UserAlterQ userAlterQ=mailQueue.getUser();
		
		sendMailer.sendWithoutMoneyMail(userAlterQ);
	}
}
