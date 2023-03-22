import { defineStore } from 'pinia'
import axios from "axios";

export const usePasswordStore = defineStore({
	id:"password",
	state:function(){

		return {

			form:{

				password:"",
				repassword:""
			}		
		}
	},
  	actions:{

	  	async reset(){

		    try{

		    	if(this.form.password == this.form.repassword){

			    	let formData = new FormData();
			    	formData.append("password", this.form.password)
			    	formData.append("repassword", this.form.repassword)

			        const res = await axios.post("/reset/password", formData);

			        return {

			    		"success":true,
			    		"message":"Password was reset."
			    	};
			    }

			    return {

			    	"success":false,
			    	"message":"Password do not match!"
			    }
	    	}
	    	catch(error){

				console.log(error)

				return {

			    	"success":false,
			    	"message":"Operation failed!"
			    }
	    	}
	  	}
  	}
})
