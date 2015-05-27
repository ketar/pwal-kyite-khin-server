/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* 
*/

tb_event = {
		"migrate":"drop", // auto create drop and recreate table, First Time Use Only!
		tableName:"tb_event",
		attributes: {
		  	_id:{
		  		type:'integer',
		  		columnName:'_id',
		  		unique:true,

		  		primaryKey: true
		  	},
		  	name:{
		  		type:'string',
		  		columnName:'name',
		  		require:true
		    },
		    type:{
		    	type:'string',
		    	columnName:'type'
		    },
		    due_date:{
		    	type:'string',
		    	columnName:'due_date'
		    },
		    speaker_name:{
		    	type:'string',
		    	columnName:'speaker_name'
		    },
		    description:{
		    	type:'string',
		    	columnName:'description'
		    },
		    is_complete:{
		    	type:'integer',
		    	columnName:'is_complete'
		    },	
		    is_ondue:{
		    	type:'integer',
		    	columnName:'is_ondue'
		    },
		    place_id:{
		    	type:'string',
		    	columnName:'place_id'
		    }

	  }
  
};

module.exports=tb_event;

