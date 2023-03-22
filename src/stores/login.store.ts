import { defineStore } from 'pinia'
import axios from "axios";

export const useLoginStore = defineStore({
	id:"login",
	state:function(){

		return {

			form:{

				email:"pitsolu@gmail.com",
				username:"",
				password:""
			}		
		}
	},
  	actions:{

  		async autoAuth(){

		    try{

				const res = await axios.post("/auto/login", {

					"email":this.form.email

				},{ headers: { 'Content-Type': 'multipart/form-data' }})

				return {

					success:true,
					message: "Login successful."
				}
			}
			catch(error){

				console.log(error)

				return {

					success:false,
					message: "Operation failed!"
				}
			}
	  	},
	  	async auth(){

		    try{

		    	let formData = new FormData();
		    	formData.append("username", this.form.username)
		    	formData.append("password", this.form.password)

		        const res = await axios.post("/login", formData);

		        return {

		    		"success":true,
		    		"message":"Login successful."
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
