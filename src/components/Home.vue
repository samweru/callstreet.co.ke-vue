<script lang="ts">
import { marked } from 'marked'

export default{

	data(){

		let slides:String[] = []
		let about:String = ""

		return {

			slides:slides,
			about:about,
			articles:[

				{

					id:"article-id-cap1",
					img: "/images/jpm.png",
					title: "article-title-cap1"
				},
				{

					id:"article-id-cap2",
					img: "/images/safaricom.jpg",
					title: "article-title-cap2"
				}
			]
		};		
	},
    methods:{

    	async getSlides():Promise<void>{

    		let paths = [

	    		"/docs/slider/slider1.md",
				"/docs/slider/slider2.md",
				"/docs/slider/slider3.md"
			]

			const $component = this;
			const $axios = $component.axios
	    	await Promise.all(paths.map(async function(path, _){

	    		// return await $axios.get(path)//.data;
	    		let result = await $axios.get(path);
	    		$component.slides.push(marked(result.data))
	    	}))
	    },
	    async getAbout():Promise<void>{

	    	const about = await this.axios.get("/docs/about/about5.md")
	    	this.about = marked(about.data)
	    }
    },
    async created(){

    	// const slides:String[] = await this.getSlides()
    	// for(let slide of slides)
    		// this.slides.push(slide)

    	await this.getSlides()
    	await this.getAbout()
    }
}
</script>
<template>
	<aside id="fh5co-hero">
		<div class="flexslider">
			<ul class="slides">
				<li v-for="(slide, idx) in slides" 
					:style="{ backgroundImage: `url(/images/img_bg_${idx + 1}.jpg)` }">
					<div class="overlay-gradient"></div>
					<div class="container-fluid">
						<div class="row">
				   			<div class="col-md-4 col-md-offset-3 col-md-pull-3 slider-text">
				   				<div class="slider-text-inner" v-html="slide">
				   				</div>
				   				<!-- <div class="slider-text-inner">
				   					{{slide}}
				   				</div> -->
				   			</div>
				   		</div>
					</div>
				</li>	   	
			</ul>
		</div>
	</aside>
	<div ng-controller="featuresController">
		<div id="fh5co-blog" class="blog-flex">
			<div class="featured-blog" 
					:style="{ backgroundImage: `url(images/graph3.jpg)` }">
				<!-- <article class="color-white">
					{{about}}
				</article> -->
				<article class="color-white" v-html="about"></article>
			</div>
			<div class="blog-entry fh5co-light-grey">
				<div class="row animate-box">
					<div class="col-md-12">
						<h2>Latest Posts</h2>
					</div>
				</div>
				<div class="row">
					<div v-for="(article, idx) in articles" class="col-md-12">
							<RouterLink class="blog-post" target="_blank" :to="{
						        name: 'Blog',
						    	params: { id: article.id }
							}">
								<span class="img" 
									:style="{ backgroundImage: `url(${article.img})` }">
								</span>
								<div class="desc">
									<h3>{{ article.title }}</h3>
									<span class="cat">Collection</span>
								</div>
							</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>