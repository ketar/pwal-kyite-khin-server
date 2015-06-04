tb_speaker={
	"migrate":"drop",
	tableName:"tb_speaker",
	attributes:{
		_id:{
			type:"string",
			columnName:'_id',
			unique:true,
			primaryKey:true
		},
		name:{
			type:"string",
			columnName:"name",

		},
		description:{
			type:"string",
			columnName:"description"
		}
	}
};

module.exports=tb_speaker;