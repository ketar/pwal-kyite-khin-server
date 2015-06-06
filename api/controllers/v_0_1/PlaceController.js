/**
*	PlaceController
*	@description :: Place Controller for managing place ,
*	@help 		 :: 
*/
var PlaceController={
	create:function(req,res,next){
		var place={};
		place._id=IDGeneratorService.getGUID.GET_ID(2);
		place.name=(req.body.name!==undefined)?req.body.name:res.json({"error":"Invalid Field"});		
		place.description=(req.body.desc!==undefined)?req.body.desc:res.json({"error":"Invalid Description"});		
		place.landmark=(req.body.landmark!==undefined)?req.body.landmark:res.json({"error":"Invalid Description"});		
		place.route=(req.body.route!==undefined)?req.body.route:res.json({"error":"Invalid Description"});		

		sails.models.place.create(place,function(err,Object){
			res.json({"data":Object});
		});
		//res.json({"data":place});
	},
	update:function(req,res,next){
		//res.json({"key":"I am update"});
		var place={
			name:(req.body.name!==undefined)?req.body.name:res.json({"error":"Invalid Field"}),		
			description:(req.body.desc!==undefined)?req.body.desc:res.json({"error":"Invalid Description"}),
			landmark:(req.body.landmark!==undefined)?req.body.landmark:res.json({"error":"Invalid Description"}),
			route:(req.body.route!==undefined)?req.body.route:res.json({"error":"Invalid Description"})
		};
		sails.models.place.update({_id:res.params.id},place,function(err,Object){
			if(!Object){res.json({"data":Object})}else{
				res.json({"error":err});
			}
		});
	},
	find:function(req,res,next){
		if(req.params.id){
			sails.models.place.findOne(req.params.id,function(err,object){
				res.json({"data":object});
			});
			
		}else{
			sails.models.place.find(function(err,object){
				res.json({"data":object});
			})
			
		}
	},
	destroy:function(req,res,next){
		if(req.params.id){
			res.json({"key":"I"+req.params.id});
		}else{
			res.json({"key":"I am delete"});
		}
	},
	_config:{actions: false, shortcuts: false, rest: false}
};
module.exports=PlaceController;