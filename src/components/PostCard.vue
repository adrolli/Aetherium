<template>
	<article class="post-card">
		<paper>
			<div class="post-card-media" slot="paper-header" v-if="post.featured_media">
				<router-link :to="post.link | path">
					<Media :id="post.featured_media" class="post-card-media-image"></Media>
				</router-link>
			</div>
			<template>
				<div class="body">
					<header>
						<PostCategories class="post-card-categories" :post-id="post.id" :link="true"></PostCategories>
						<h1 class="post-card-title"><router-link :to="post.link | path" v-html="post.title.rendered"></router-link></h1>
					</header>
					<div v-html="post.excerpt.rendered"></div>
					<p><router-link :to="post.link | path">Read more</router-link></p>
				</div>
			</template>



		</paper>
	</article>
</template>

<script>
	import Media from './Media';
	import PostCategories from './PostCategories';
	import Paper from './Paper';
	export default {
		name: 'PostCard',
		components: {
			Paper,
			PostCategories,
			Media
		},
		props: {
			post: {
				featured_media: '',
				title: {
					rendered: ''
				},
				excerpt: {
					rendered: ''
				},
				content: {
					rendered: ''
				}
			}
		}
	};
</script>

<style scoped>

	.post-card {
		position: relative;
	}

	.post-card-title {
		font-size: 20px;
	}

	.post-card-media {
		position: relative;
		height: 200px;
	}

	.post-card-categories {
		position: absolute;
		top: 0;
		transform: translateY(-50%);

	}

	.post-card-media-image {
		position: absolute;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

</style>
