import { defineStore } from 'pinia'
import axios from "axios";

export const useBlogStore = defineStore({
	id:"blog",
	// state:function(){

	// 	return {

				
	// 	}
	// },
  	actions:{

	  	async findByTags(tag:string){

		    try{

		        const res = await axios.get("/blogs/tag/".concat(tag));
		        return res.data
	    	}
	    	catch(error){

				console.log(error)

				return null;
	    	}
	  	}
  	}
})
