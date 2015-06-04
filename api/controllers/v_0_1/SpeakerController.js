var SpeakerController={
	create:function(req,res,next){
		var speaker={};
		speaker._id=IDGeneratorService.getGUID.GET_ID(2);
		speaker.name=(req.body.name!==undefined)?req.body.name:res.json({"error":"Invalid name"});
		speaker.description=(req.body.desc!==undefined)?req.body.desc:res.json({"error":"Invalid description"});
		sails.models.speaker.create(speaker,function(err,object){
			res.json({"data":object});
		});
	},
	update:function(req,res,next){

	},
	find:function(req,res,next){
		if(req.params.id){
			sails.models.speaker.findOne(req.params.id,function(err,object){

				res.json({"data":object});
			});
			
		}else{
			sails.models.speaker.find(function(err,object){
				res.json({"data":object});
			})
			
		}
	},
	destroy:function(req,res,next){},
	_config:{actions: false, shortcuts: false, rest: false}
};

module.exports=SpeakerController;