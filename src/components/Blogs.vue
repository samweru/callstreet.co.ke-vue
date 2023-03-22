<script>
import { storeToRefs } from 'pinia'
import { useBlogStore } from "@/stores/blog.store"
export default{

	setup(){

		setTimeout(function(){

			$.contentWayPoint();

		}, 1000);

		const blogStore = useBlogStore()

		return {

			blogStore
		}
	},
	async data(){

		const token = this.$route.params.token

		const { blogs } = await this.blogStore.findByTags(token)

		return {

			blogs:blogs
		}

		// return {

		// 	blogs:[

		// 		{
		// 			id:"id-cap1",
		// 			img:"img-cap1",
		// 			date:"date-cap1",
		// 			likes:"likes-cap1",
		// 			views:"views-cap1",
		// 			title:"title-cap1",
		// 			descr:"descr-cap1"
		// 		}
		// 	]
		// }
	}
}
</script>
<template>
	<div class="col-md-4 please-wait" text-center>Please wait..</div>
	<div id="fh5co-blog">
		<div class="row">
			<div v-for="blog in blogs" class="col-md-4">
				<div class="fh5co-blog animate-box">
					<RouterLink :to="{
					        name: 'Blog',
					    	params: { id: blog.id }
						}" class="blog-bg" target="_blank"
							:style="{ backgroundImage: `url(/images/_blog-2.jpg)` }">
						Test {{blog.id}}
					</RouterLink>
					<!-- <a href="/blog/bid/{{ blog.id }}" 
						class="blog-bg" 
						target="_blank" 
						style="background-image: url('{{blog.img}}');">A</a> -->
					<div class="blog-text">
						<span class="posted_on">{{ blog.date }}</span>
						<!-- <h3><a href="/blog/bid/{{ blog.id }}" target="_blank">{{ blog.title }}</a></h3> -->
						<h3><RouterLink target="_blank" :to="{
						        name: 'Blog',
						    	params: { id: blog.id }
							}">
							<a>{{ blog.title }}</a>
							</RouterLink>
						</h3>
						<p>{{ blog.descr }}</p>
						<ul class="stuff">
							<li><i class="icon-heart3"></i>{{ blog.likes }}</li>
							<li><i class="icon-eye2"></i>{{ blog.views }}</li>
							<!-- <li><a href="/blog/bid/{{ blog.id }}" target="_blank">Read More
								<i class="icon-arrow-right22"></i>
							</a></li> -->
							<li><RouterLink :to="{
								        name: 'Blog',
								    	params: { id: blog.id }
									}">
									Read More<i class="icon-arrow-right22"></i>
								</RouterLink>
							</li>
						</ul>
					</div> 
				</div>
			</div>
		</div>
	</div>
</template>