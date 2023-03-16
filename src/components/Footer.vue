<script setup lang="ts">
	const about = "about-cap"
	const blogs = [

		{

			title:"blog-title1",
			id:"id-cap1"
		},
		{

			title:"blog-title2",
			id:"id-cap2"
		},
	]
	const contacts = "contact-cap"
</script>
<template>
	<footer id="fh5co-footer" role="contentinfo">
		<div class="row">
			<div class="col-md-3 fh5co-widget">
				<h4>About Callstreet</h4>
				<p>{{ about }}</p>
			</div>
			<div class="col-md-3 col-md-push-1">
				<h4>Latest Posts</h4>
				<ul class="fh5co-footer-links">
					<li v-for="blog in blogs">
						<RouterLink target="_blank" :to="{
					        name: 'Blog',
					    	params: { id: blog.id }
						}">
						<a>{{ blog.title }}</a>
						</RouterLink>
						<!-- <a href="/blog/bid/{{ blog.id }}" target="_blank">{{ blog.title }}</a> -->
					</li>
				</ul>
			</div>
			<div class="col-md-3 col-md-push-1">
				<h4>Links</h4>
				<ul class="fh5co-footer-links">
					<li><RouterLink to="/">Home</RouterLink></li>
					<li><RouterLink to="/about">Home</RouterLink></li>
					<!-- <li><a href="/#!/home">Home</a></li>
					<li><a href="/#!/about">About us</a></li> -->
				</ul>
			</div>

			<div class="col-md-3">
				<h4>Contact Information</h4>
				<span>{{contacts}}</span>
			</div>

		</div>

		<div class="row copyright">
			<div class="col-md-12 text-center">
				<p>
					<small class="block">&copy; 2016 Free HTML5. All Rights Reserved.</small> 
					<small class="block">Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a></small>
					<small class="block">Developer: <a href="http://samweru.github.io" target="_blank">Samuel Weru</a></small>
				</p>
				<p>
					<ul class="fh5co-social-icons">
						<li><a href="#"><i class="icon-twitter"></i></a></li>
						<li><a href="#"><i class="icon-facebook"></i></a></li>
						<li><a href="#"><i class="icon-linkedin"></i></a></li>
					</ul>
				</p>
			</div>
		</div>
	</footer>
</template>