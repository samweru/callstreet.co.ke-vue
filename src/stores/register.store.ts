import { defineStore } from 'pinia'
import axios from "axios";

export const useRegisterStore = defineStore({
	id:"register",
	state:function(){

		return {

			form:{

				surname:"",
				othernames:"",
				username:"",
				email:"",
				password:"",
				repassword:""
			}		
		}
	},
  	actions:{

	  	async create(){

		    try{

		    	let formData = new FormData();
		    	formData.append("surname", this.form.surname)
				formData.append("othernames", this.form.othernames)
				formData.append("username", this.form.username)
				formData.append("email", this.form.email)
				formData.append("password", this.form.password)
				formData.append("repassword", this.form.repassword)

		        const res = await axios.post("/user/add", formData);

		        return {

		    		"success":true,
		    		"message":"You are registered successfully."
		    	};
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
