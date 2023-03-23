<script lang="ts">
import { storeToRefs } from 'pinia'
import BlogForm from './BlogForm.vue'
import { useBlogStore } from "@/stores/blog.store"
export default {

	setup(){

		const blogStore = useBlogStore()
		const { blog } = storeToRefs(blogStore)

		return {

			blogStore,
			blog
		}
	},
	components:{

		BlogForm
	},
	async created(){

		const id = this.$route.params.id
		await this.blogStore.getBlogData(id)
		// console.log("-----------------")
		// console.log(this.blog)
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