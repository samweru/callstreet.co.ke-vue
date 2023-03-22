<script lang="ts">
import BlogForm from './BlogForm.vue'
import { marked } from 'marked'
export default {

	data(){

		return{

			blog:{

				share:{

					twitter:"/to/twitter",
					facebook:"/to/facebook",
					linkedin:"/to/linkedin"
				},
				descr:""
			}
		}
	},
	components:{

		BlogForm
	},
	methods:{

		async getBlog(){

			// const id = this.$route.params.id

			// console.log(this.$router.currentRoute.value.params.id)

			const id = this.$router.currentRoute.value.params.id

			const res_blog = await this.axios.get("/blog/" + id)
			const blog = res_blog.data

			const res_md = await this.axios.get("/docs/".concat(blog.path))
			this.blog.descr = marked(res_md.data)
		}
	},
	async created(){

		await this.getBlog()
	}
} 
</script>
<template>
		<div class="mt-150 mb-150">
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<div class="single-article-section">
							<div class="single-article-text">
								<span>
									<p>
										<ul class="fh5co-social-icons">
											<li>
												<RouterLink v-bind:to="{path:blog.share.twitter}"
													target="_blank"
													class="btn btn-share">Share&nbsp;
														<i class="icon-twitter"></i>
												</RouterLink>
											</li>
											<li>
												<RouterLink v-bind:to="{path:blog.share.facebook}"
													target="_blank"
													class="btn btn-share">Share&nbsp;
														<i class="icon-facebook"></i>
												</RouterLink>
											</li>
											<li>
												<RouterLink v-bind:to="{path:blog.share.linkedin}"
													target="_blank"
													class="btn btn-share">Share&nbsp;
														<i class="icon-linkedin"></i>
												</RouterLink>
											</li>
										</ul>
									</p>
								</span>
								<article v-html="blog.descr">
								</article>
							</div>
							<BlogForm/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>