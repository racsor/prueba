package org.alterq.repo.impl;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.group;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.match;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.unwind;

import org.alterq.domain.Ranking;
import org.alterq.domain.RoundBets;
import org.alterq.domain.RoundRanking;
import org.alterq.repo.MongoCollection;
import org.alterq.repo.RoundRankingDao;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

@Repository
public class RoundRankingDaoImpl extends MongoCollection implements RoundRankingDao {
	public static final String COLLECTION_NAME = "roundRanking";

	public RoundRanking findRanking(int company, int season, int round) {
		Query query = new Query(Criteria.where("company").is(company).and("season").is(season).and("round").is(round));
//		query.fields().include("rankings.user._id");
//		query.fields().include("rankings.user.name");
		RoundRanking aux = mongoTemplate.findOne(query, RoundRanking.class, COLLECTION_NAME);
		return aux;
	}

	public RoundRanking findUserRanking(int company, int season, int round, String userID)
	{
//		Query query = new Query(Criteria.where("company").is(company).and("season").is(season).and("round").is(round).and("rankings.user._id").is(userID));
//		query.fields().include("rankings.user._id");
//		query.fields().include("rankings.user.name");
//		Ranking aux = mongoTemplate.findOne(query, Ranking.class, COLLECTION_NAME);
//		return aux;
		
		Aggregation agg = newAggregation( 
				unwind("rankings"),
				match(Criteria.where("company").is(company).and("season").is(season).and("round").is(round).and("rankings.user").is(userID)),
				group("_id").first("season").as("season").first("round").as("round").push("rankings").as("rankings")
				);
		AggregationResults<RoundRanking> result = mongoTemplate.aggregate(agg, "roundRanking", RoundRanking.class);
		if ( !result.getMappedResults().isEmpty()){
			RoundRanking aux = result.getMappedResults().get(0);
			return aux;
		}
		else
			return null;		
		
	}
	
	public RoundRankingDaoImpl() {
		super.COLLECTION_NAME = COLLECTION_NAME;
	}

	public boolean addRanking(int company, int season, int round, Ranking ranking) {
		Query query = new Query();
		query.addCriteria(Criteria.where("company").is(company).and("season").is(season).and("round").is(round));

		Update update = new Update();
		update.push("rankings", ranking);

		mongoTemplate.upsert(query, update, RoundRanking.class);
		return true;
	}
	
	public boolean updateRanking(int company, int season, int round, Ranking ranking) {
		Query query = new Query();
		//query.addCriteria(Criteria.where("company").is(company).and("season").is(season).and("round").is(round));
		query.addCriteria(Criteria.where("company").is(company).and("season").is(season).and("round").is(round).and("rankings.user").is(ranking.getUser()));

		Update update = new Update();
		//update.push("rankings", ranking);
		update.set("rankings.$.points", ranking.getPoints());
		update.set("rankings.$.ones", ranking.getOnes());
		update.set("rankings.$.equs", ranking.getEqus());
		update.set("rankings.$.twos", ranking.getTwos());

		
		mongoTemplate.updateFirst(query, update, RoundRanking.class);
				        
		return true;
	}

	public boolean deleteRanking(int company, int season, int round) {
		Query query = new Query();
		query.addCriteria(Criteria.where("company").is(company).and("season").is(season).and("round").is(round));
		mongoTemplate.remove(query, RoundRanking.class);
		return true;
	}

	@Override
	public void add(RoundRanking bean) {
		mongoTemplate.insert(bean, COLLECTION_NAME);
	}

	public void update(RoundRanking roundRanking) {

	}
}
