<script setup lang="ts">
	const articles = [

		{

			id:"article-id-cap1",
			img: "article-img-cap1",
			title: "article-title-cap1"
		},
		{

			id:"article-id-cap2",
			img: "article-img-cap2",
			title: "article-title-cap2"
		}
	]
</script>
<template>
	<aside id="fh5co-hero">
		<div class="flexslider">
			<ul class="slides">
				<li ng-repeat="slide in slides" 
					style="background-image: url(images/img_bg_{{ $index + 1 }}.jpg);">
					<div class="overlay-gradient"></div>
					<div class="container-fluid">
						<div class="row">
				   			<div class="col-md-4 col-md-offset-3 col-md-pull-3 slider-text">
				   				<div class="slider-text-inner" ng-bind-html="slide">
				   				</div>
				   			</div>
				   		</div>
					</div>
				</li>	   	
			</ul>
		</div>
	</aside>
	<div ng-controller="featuresController">
		<div id="fh5co-blog" class="blog-flex">
			<div class="featured-blog" style="background-image: url(images/graph3.jpg);">
				<article class="color-white" btf-markdown ng-include="about_us">
				</article>
			</div>
			<div class="blog-entry fh5co-light-grey">
				<div class="row animate-box">
					<div class="col-md-12">
						<h2>Latest Posts</h2>
					</div>
				</div>
				<div class="row">
					<div v-for="article in articles" class="col-md-12">
							<a href="/blog/bid/{{ article.id }}" target="_blank" class="blog-post">
							<span class="img" 
								style="background-image: url('{{ article.img }}');">
							</span>
							<div class="desc">
								<h3>{{ article.title }}</h3>
								<span class="cat">Collection</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>