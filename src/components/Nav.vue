<script lang="ts">
import { storeToRefs } from 'pinia'
import { useLoginStore } from "@/stores/login.store"

type Tag = {

	name:string,
	token:string
}

type Service = {

	id:string,
	title:string
}

export default {

	setup(){

		const loginStore = useLoginStore()
		const { user } = storeToRefs(loginStore)

		return {

			loginStore,
			user
		}
	},
	data(){

		let tags: Tag[] = [];
		let services: Service[] = [];

		return {

			tags:tags,
			services:services
		}
	},
	methods:{

		async getServiceList():Promise<void>{

			const services = await this.axios.post("/ref/service/list")
			// return services.data
			this.services = services.data
		},
		async getTags():Promise<void>{

			const tags = await this.axios.post("/ref/tags")
			// return tags.data
			this.tags = tags.data
		}
	},
	async created(){

		await this.getServiceList()
		await this.getTags()
	}
}
</script>
<template>
	<nav class="fh5co-nav" role="navigation">
		<div class="container-wrap">
			<div class="top-menu">
				<div class="row">
					<div class="col-xs-2">
						<div id="fh5co-logo">
							<center>
								<img src="/images/logo.gif">
								<a href="#">Callstreet</a>
							</center>
						</div>
					</div>
					<div class="col-xs-10 menu-1">
						<ul>
							<li>
								<!-- <a ng-click="setActive($event)" href="/home">Home</a> -->
								<RouterLink to="/">Home</RouterLink>
							</li>
							<li class="has-dropdown">
								<a ng-click="setActive($event)">About Us</a>
								<ul class="dropdown">
									<!-- <li><a href="#!/about">Who are we</a></li> -->
									<li><RouterLink to="/about">About</RouterLink></li>
									<li><RouterLink to="/contacts">Contacts</RouterLink></li>
									<!-- <li><a href="#!/contacts">Contacts</a></li> -->
									<!-- <li><a href="#">Our Team</a></li> -->
								</ul>
							</li>
							<li class="has-dropdown">
								<a ng-click="setActive($event)">Services</a>
								<ul class="dropdown">
									<!-- {{begin:services}} -->
									<!--<li><a href="/service/{{id}}">{{title}}</a></li>-->
									<!-- <li><RouterLink to="/service/{{id}}">{{title}}</RouterLink></li> -->
									
									<li v-for="(service, idx) in services">
										<RouterLink 
											v-bind:to = "{path:'/service/'.concat(service.id)}">
											{{service.title}}
										</RouterLink>
									</li>
									<!-- {{end:services}} -->
								</ul>
							</li>
							<li class="has-dropdown">
								<a ng-click="setActive($event)">Research Center</a>
								<ul class="dropdown">
									<li><RouterLink to="/research/insight">Insight</RouterLink></li>
									<li><RouterLink to="/research/studies">Studies</RouterLink></li>
									<!-- <li><a href="/research/insight">Insights</a></li> -->
									<!-- <li><a href="/research/studies">Studies</a></li> -->
								</ul>
							</li>
							<li>
								<!-- <a ng-click="setActive($event)" 
								href="/contacts">Contact Us
							</a> -->
							<RouterLink to="/contacts">Contacts</RouterLink>
						</li>
						<li class="has-dropdown">
							<a ng-click="setActive($event)">Blog</a>
							<ul class="dropdown">
								<!-- {{begin:tags}} -->
								<!-- <li><a href="/blogs/{{token}}">{{name}}</a></li> -->
								<!--<li><RouterLink to="/blogs/{{token}}">Contacts</RouterLink></li>-->
								<li v-for="(tag, idx) in tags">
									<RouterLink
								      :to="{
								        name: 'BlogTag',
								        params: { tag: tag.token }
								      }">
								    	{{tag.name}}
								    </RouterLink>
								</li>
								<!-- {{end:tags}} -->
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- <div ng-show="!online" class="container-wrap login-strip" ng-cloak>
		<div>{{status.online}}</div>
	</div> -->

	<div v-if="user.email" class="container-wrap login-strip" ng-cloak>
		<!--<a href="/home">{{user.name}}</a>&nbsp;|&nbsp;-->
		<!-- <a href="/logout">Logout</a> -->
		<RouterLink to="/home">{{user.name}}</RouterLink>&nbsp;|&nbsp;
		<!-- <RouterLink to="/logout">Logout</RouterLink> -->
		<a exact :style="{ cursor: 'pointer'}" @click="loginStore.logout">Logout</a>
	</div>
</nav>
</template>