tb_place={
	//"migrate":"drop",
	tableName:"tb_place",
	attributes:{
		_id:{
			type:'string',
			columnName:'_id',
			unique:true,
			primaryKey:true
		},
		name:{
			type:'string',
			columnName:'name'
		},
		description:{
			type:'string',
			columnName:'description'
		},
		landmark:{
			type:'string',
			columnName:'landmark'
		},
		route:{
			type:'string',
			columnName:'route'
		}
	}
};

module.exports=tb_place;