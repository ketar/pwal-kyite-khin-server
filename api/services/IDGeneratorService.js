exports.getGUID={
	GUID:function(){
	
	
		function s4() {
	    return Math.floor((1 + Math.random()) * 0x1000000)
	      .toString(16)
	      .substring(1);
  		}
  	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
	},
	GET_ID:function(substr_count){
		function s4() {
	    return Math.floor((1 + Math.random()) * 0x1000000)
	      .toString(15)
	      .substring(substr_count);
  		}
  	return s4()+s4() ;
    ;
	}
	
};

