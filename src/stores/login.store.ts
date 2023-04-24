import { defineStore } from 'pinia'
import axios from "axios";

import router from '@/router';
import { useStorage } from '@vueuse/core'

export const useLoginStore = defineStore({
	id:"login",
	state:function(){

		return {

			form:{

				email:"",
				username:"",
				password:""
			},
			user: useStorage("user", {

				email:"",
				name:""
			}),	
		}
	},
  	actions:{

  		async autoAuth(){

		    try{

		    	let formData = new FormData();
		    	formData.append("email", this.form.email)

				const res = await axios.post("/auto/login", formData);

				this.user = {

					email:this.form.email,
					name:res.data.data.username
				}

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
	  	},
	  	logout() {
	  		
            this.user = {email:"", name:""};
            router.push('/');
        }
  	}
})
