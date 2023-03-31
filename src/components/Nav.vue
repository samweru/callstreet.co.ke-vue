<script lang="ts">
import { storeToRefs } from 'pinia'
import { useLoginStore } from "@/stores/login.store"
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

		return {

			title:"service-cap",
			id:"id-cap",
			name:"name-cap",
			// status:{

				// online:"Offline"
			// }, 
			// user:{

				// name: "pitsolu"
			// },
			token:"stocks"
		}
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
									<li><RouterLink v-bind:to = "{path:'/service/'.concat(id)}">
											{{title}}
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
								<li>
									<RouterLink
								      :to="{
								        name: 'BlogTag',
								        params: { token: token }
								      }">
								    	Blog1
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