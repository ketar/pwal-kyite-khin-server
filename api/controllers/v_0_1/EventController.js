/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:function(req,res,next){
		res.json({"data":[
			{"key":"i am post"}
			]});
	},
	update:function(req,res,next){

		res.json(req.params.id);
	},
	find:function(req,res,next){
		if(req.params.id){
			sails.models.event.findOne(req.params.id,function(err,obj){
				res.json(obj);
			});

			//calling 
			
			//Event.findOne(req.params.id,function(err,event){
			//return res.json({"message":"found"});
			//});
		}else{
			
			sails.models.event.find(function(err,obj){
					res.json(obj);
			});	
			//res.json({"val":"done"});
		}
		
	},
	_config:{actions: false, shortcuts: false, rest: false}
};

