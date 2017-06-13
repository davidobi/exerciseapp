<template>
    <div id="signup">
        <gymlog-out-header></gymlog-out-header>
        
        

        <gymlog-out-footer></gymlog-out-footer>
    </div>
</template>

<script>
    import Header from './outlayout/Header.vue'
    import Footer from './outlayout/Footer.vue'

    export default {
        data() {
            return {

            }
        },
        components: {
            'gymlog-out-header': Header,
            'gymlog-out-footer': Footer,
        }
    }

</script>

<style></style>