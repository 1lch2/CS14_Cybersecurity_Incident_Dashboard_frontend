<template>
    <div class="top-text">
        <p> {{this.text}}:<br><span :class="{keywords: isKeywords}">{{this.num}}</span></p>
    </div>
</template>

<script>
export default {
    name: "ViewText",
    props: ["type"],
    data() {
        return {
            num: 0,
            text: "Placeholder",
            isKeywords: false
        }
    },
    methods: {
        getData() {
            this.$axios.get("http://localhost:8888/viewText", {
                params: {
                    type: this.type,
                    hashtag: this.getHashtag,
                    topic: this.getTopic
                }
            }).then((response)=>{
                this.text = response.data.toptext
                this.num = response.data.topnumber

                if (this.type === "topic") {
                    this.isKeywords = true
                }
            })
        }
    },
    mounted() {
        this.getData();
    },
    computed: {
        getHashtag: function (){
            return this.$store.getters.getSelected.hashtag
        },
        getTopic: function (){
            return this.$store.getters.getSelected.topic
        }
    },
    watch: {
        getHashtag: function (){
            this.getData()
        },
        getTopic: function (){
            this.getData()
        }
    }
}
</script>

<style scoped>
div .top-text {
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #e1f1e9;
    border-radius: 6px;
}
p {
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 1.3;
    font-size: 1.2em;
    padding: 0 5%;
}
p span{
    font-size: 1.6em;
}

p span.keywords{
    font-size: 1.4em;
}
</style>