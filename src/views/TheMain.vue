<template>
	<div class="main">
		<full-page :options="options">
			<div class="section content1">
				Section 1
			</div>
			<div class="section content2">
				Section 2
			</div>
		</full-page>
	</div>
</template>

<script>
import {reactive} from 'vue'
import Content from '@/components/Content.vue'

export default {
	name: 'TheMain',
	components: {
		Content
	},
	
	setup() {
		let afterLoad = null;
		
		const options = reactive({
			licenseKey: 'https://www.gnu.org/licenses/lgpl-3.0-standalone.html',
			navigation: true,
			credits: {
				enabled: false,
				label: null,
				position: 'right'
			},
			sectionsColor:['#00000000','#000000bb'],
			afterLoad: afterLoad
			
		})
		
		afterLoad = (section, origin, destination, direction) =>{
			console.log(section);
				//this.$store.dispatch('main/setPageIndex', origin.index);
		}
		
		return{
			options
		}
	}
}
</script>

<style scoped>
.main{

}

</style>
