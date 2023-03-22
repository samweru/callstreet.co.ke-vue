// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useContactStore = defineStore({
	id:"contact",
	state:function(){

		return {

			
		}
	},
  	actions:{

	  	async send(name:any, email:any, descr:any):Promise<Boolean>{

		    try{

		    	let formData = new FormData();
		    	formData.append("name", name)
		    	formData.append("email", email)
		    	formData.append("descr", descr)

		        const res = await axios.post("/contact/send", formData);

		        return true;
	    	}
	    	catch(error){

				console.log(error)

				return false;
	    	}
	  	}
  	}
})
