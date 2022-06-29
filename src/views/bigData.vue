<template>
    <div :class={bigData:true,bigData1:show}>
        <site-header></site-header>
        <div class="content">
           <router-view></router-view>
        </div>
    </div>
</template>

<script>
import siteHeader from '@/components/bigDataHeader'
export default {
    name: 'bigData',

    data() {
        return {
            show:false
        };
    },

    mounted() {
       let  path = this.$route.path;
        if(path == "/bigData/wgfx"){
            this.show = true;
        }else{
                this.show = false;
        }
    },
    watch: {
        '$route':'getPath'
    },
     components:{
        siteHeader,
    },
    methods: {
         getPath(v1,v2){
            let  path = this.$route.path;
            if(path == "/bigData/wgfx"){
                this.show = true;
            }else{
                 this.show = false;
            }
        }
    },
};
</script>

<style scoped>

</style>