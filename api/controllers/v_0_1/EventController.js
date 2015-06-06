/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:function(req,res,next){
		 
		var obj_event={
			_id:IDGeneratorService.getGUID.GET_ID(2),
			name:(req.body.name!==undefined)?req.body.name:res.json({"error":"Invalid Field"}),
			type:(req.body.type!==undefined)?req.body.type:res.json({"error":"Invalid Field"}),
			due_date:(req.body.duedate!==undefined)?req.body.duedate:res.json({"error":"Invalid Field"}),
			speaker_name:(req.body.speakername!==undefined)?req.body.speakername:res.json({"error":"Invalid Field"}),
			description:(req.body.desc!==undefined)?req.body.desc:res.json({"error":"Invalid Field"}),
			is_complete:(req.body.iscomplete!==undefined)?req.body.iscomplete:res.json({"error":"Invalid Field"}),
			is_ondue:(req.body.due!==undefined)?req.body.due:res.json({"error":"Invalid Field"}),
			place_id:(req.body.placeid!==undefined)?req.body.placeid:res.json({"error":"Invalid Field"})
		};
		sails.models.event.create(obj_event,function(err,Object){
			if(err) return res.json({"error":err},500);
				res.json({"data":Object},200);
		});
	},
	update:function(req,res,next){

		//res.json(req.params.id);

		var obj_event={
			
			name:(req.body.name!==undefined)?req.body.name:res.json({"error":"Invalid Field"}),
			type:(req.body.type!==undefined)?req.body.type:res.json({"error":"Invalid Field"}),
			due_date:(req.body.duedate!==undefined)?req.body.duedate:res.json({"error":"Invalid Field"}),
			speaker_name:(req.body.speakername!==undefined)?req.body.speakername:res.json({"error":"Invalid Field"}),
			description:(req.body.desc!==undefined)?req.body.desc:res.json({"error":"Invalid Field"}),
			is_complete:(req.body.iscomplete!==undefined)?req.body.iscomplete:res.json({"error":"Invalid Field"}),
			is_ondue:(req.body.due!==undefined)?req.body.due:res.json({"error":"Invalid Field"}),
			place_id:(req.body.placeid!==undefined)?req.body.placeid:res.json({"error":"Invalid Field"})
		};

		sails.models.event.update({_id:req.params.id},obj_event,function(err,object){

			if(err) return res.json({"error":err},500);
				res.json({"data":object},200);				
			
		});
	},
	destroy:function(req,res,next){
		sails.models.event.destroy({_id:req.params.id},function(err,object){
			if(err) return res.json({"error":err},500);
				res.json({"data":object});
		});
	},
	find:function(req,res,next){
		if(req.params.id){

			sails.models.event.findOne(req.params.id,function(err,obj){
				if(err) return res.json({"error":err},500);
					res.json({"data":obj},200);				
				
			});
			//calling 
			
			//Event.findOne(req.params.id,function(err,event){
			//return res.json({"message":"found"});
			//});
		}else{
			
			sails.models.event.find(function(err,obj){
					if(err) return res.json({"error":err},500);
						res.json({"data":obj},200);
			});	
			//res.json({"val":"done"});
		}
		
	},
	_config:{actions: false, shortcuts: false, rest: false}
};

