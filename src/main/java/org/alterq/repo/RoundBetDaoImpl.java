package org.alterq.repo;

import org.alterq.domain.Bet;
import org.alterq.domain.RoundBets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;




import static org.springframework.data.mongodb.core.aggregation.Aggregation.group;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.unwind;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.match;

@Repository
public class RoundBetDaoImpl implements RoundBetDao {
	@Autowired
	private MongoTemplate mongoTemplate;
	public static final String COLLECTION_NAME = "roundBets";

	public RoundBets findAllBets(int season, int round) {
		Query query = new Query(Criteria.where("season").is(season).and("round").is(round));
		RoundBets aux =mongoTemplate.findOne(query, RoundBets.class, COLLECTION_NAME);
		return aux;
	}
	
	public int countAllBets(int season, int round) {
		Query query = new Query(Criteria.where("season").is(season).and("round").is(round));
		RoundBets aux =mongoTemplate.findOne(query, RoundBets.class, COLLECTION_NAME);
		return (aux.getBets()==null?0:aux.getBets().size());
	}

	public RoundBets findAllUserBets(int season, int round, String user) {
        Aggregation agg = newAggregation( 
                unwind("bets"),
                //match(Criteria.where("bets.user").is(user).and("season").is(season).and("round").is(round).and("company").is(company)),
                //group("_id").first("company").as("company").first("season").as("season").first("round").as("round").push("bets").as("bets")
                match(Criteria.where("bets.user").is(user).and("season").is(season).and("round").is(round)),
                group("_id").first("season").as("season").first("round").as("round").push("bets").as("bets")
        );
        AggregationResults<RoundBets> result = mongoTemplate.aggregate(agg, "roundBets", RoundBets.class);
        if ( !result.getMappedResults().isEmpty()){
        	RoundBets aux = result.getMappedResults().get(0);
        	return aux;
        }
        else
        	return null;
	}

	public boolean addBet(int season, int round, Bet bet){
		Query query = new Query();
		query.addCriteria(Criteria.where("season").is(season).and("round").is(round));
 
		Update update = new Update();
		update.push("bets", bet);
 
		mongoTemplate.upsert(query, update, RoundBets.class);
		return true;
	}
	
	public boolean deleteAllBets(int season, int round){
		Query query = new Query();
		query.addCriteria(Criteria.where("season").is(season).and("round").is(round));
		mongoTemplate.remove(query, RoundBets.class);
		return true;
	}
	public boolean deleteAllUserBets(int season, int round, String user){
		Query query = new Query();
		query.addCriteria(Criteria.where("season").is(season).and("round").is(round));
		 
		Update update = new Update();
		Bet bet=new Bet();
		bet.setUser(user);
		update.pull("bets", bet);
		
		mongoTemplate.upsert(query,update, RoundBets.class);
		return true;
	}
	public boolean deleteUserBet(int season, int round, Bet bet){
		Query query = new Query();
		query.addCriteria(Criteria.where("season").is(season).and("round").is(round));
		 
		Update update = new Update();
		update.pull("bets", bet);
		
		mongoTemplate.upsert(query,update, RoundBets.class);
		return true;
	}

	@Override
	public void add(RoundBets bean) {
		mongoTemplate.insert(bean,COLLECTION_NAME);
	}
	
	public void update(RoundBets rounBets){
		
	}
}


