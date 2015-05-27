var SystemController={
	getGUID:function(req,res,next){
		var guid={"GUID":IDGeneratorService.getGUID.GUID()};
		res.json(guid);
	},
	gettoken:function(req,res,next){
		var token={"TOKEN":IDGeneratorService.getGUID.GET_ID(2)};
		res.json(token);
	}
};
module.exports=SystemController;