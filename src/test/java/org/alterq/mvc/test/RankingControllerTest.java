package org.alterq.mvc.test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@RunWith(value = SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(locations = { "classpath:/spring/applicationContext.xml", "classpath:/spring/app-servlet.xml" })
public class RankingControllerTest {

	@Autowired
	private WebApplicationContext wac;
	private MockMvc mockMvc;

	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
	}

	@Test
	public void getLastRound() throws Exception {
		// System.out.println(this.mockMvc.perform(get("/bet")).andReturn().getResponse().getContentAsString());
		this.mockMvc.perform(get("/myaccount/mail@mail.es/season/2015/round/2/ranking")).andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void updateRound1() throws Exception {
		// System.out.println(this.mockMvc.perform(get("/bet")).andReturn().getResponse().getContentAsString());
		//this.mockMvc.perform(get("/myaccount/mail@mail.es/1/2015/1/ranking/updateRanking")).andDo(MockMvcResultHandlers.print());
		//this.mockMvc.perform(get("/myaccount/mail@mail.es/1/2015/2/ranking/updateRanking")).andDo(MockMvcResultHandlers.print());
		this.mockMvc.perform(get("/myaccount/mail@mail.es/1/2015/3/ranking/updateRanking")).andDo(MockMvcResultHandlers.print());
	}

}
