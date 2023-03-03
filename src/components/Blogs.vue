<script setup lang="ts">
	const blogs = [

		{
			id:"id-cap1",
			img:"img-cap1",
			date:"date-cap1",
			likes:"likes-cap1",
			views:"views-cap1",
			title:"title-cap1",
			descr:"descr-cap1"
		},
		{
			id:"id-cap2",
			img:"img-cap2",
			date:"date-cap2",
			likes:"likes-cap2",
			views:"views-cap2",
			title:"title-cap2",
			descr:"descr-cap2"
		}
	]
</script>
<template>
	<div class="col-md-4 please-wait" text-center>Please wait..</div>
	<div id="fh5co-blog">
		<div class="row">
			<div v-for="blog in blogs" class="col-md-4">
				<div class="fh5co-blog animate-box">
					<a href="/blog/bid/{{ blog.id }}" class="blog-bg" target="_blank" 
						style="background-image: url('{{blog.img}}');"></a>
					<div class="blog-text">
						<span class="posted_on">{{ blog.date }}</span>
						<h3><a href="/blog/bid/{{ blog.id }}" target="_blank">{{ blog.title }}</a></h3>
						<p>{{ blog.descr }}</p>
						<ul class="stuff">
							<li><i class="icon-heart3"></i>{{ blog.likes }}</li>
							<li><i class="icon-eye2"></i>{{ blog.views }}</li>
							<li><a href="/blog/bid/{{ blog.id }}" target="_blank">Read More
								<i class="icon-arrow-right22"></i>
							</a></li>
						</ul>
					</div> 
				</div>
			</div>
		</div>
	</div>
</template>