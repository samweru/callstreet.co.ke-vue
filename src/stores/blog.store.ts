import { defineStore } from 'pinia'
import axios from "axios";
import { marked } from 'marked'
export const useBlogStore = defineStore({
	id:"blog",
	state:function(){

		return {

			blog:{

				id:null,
				descr:"",
				share:{

					twitter:"/to/twitter",
					facebook:"/to/facebook",
					linkedin:"/to/linkedin"
				}
			}
		}
	},
  	actions:{

	  	async findByTags(tag:string){

		    try{

		        const res = await axios.get("/blogs/tag/".concat(tag));
		        // console.log(res.data)
		        return res.data
	    	}
	    	catch(error){

				console.log(error)

				return null;
	    	}
	  	},
	  	async getBlogData(id:any){

	  		const res_blog = await axios.get("/blog/" + id)
			const blog = res_blog.data
			const blog_descr = await this.getBlogContent(blog.path)

			this.blog = {

				descr: blog_descr,
				id:blog.id,
				share:this.blog.share
			}
	  	},
	  	async getBlogContent(path:string){

	  		const res_md = await axios.get("/docs/".concat(path))

			return marked(res_md.data)
	  	}
  	}
})
