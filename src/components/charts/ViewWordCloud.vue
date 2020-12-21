<template>
    <div class="wordcloud">
        <el-image
            :src="this.getUrl"
        >
            <div slot="error" class="image-slot" id="error-img">
                <i class="el-icon-picture-outline"><br><span>Loading</span></i>
            </div>
        </el-image>
        <p>Word cloud of {{this.getTopic}} topic</p>
    </div>
</template>

<script>
export default {
    name: "ViewWordCloud",
    computed: {
        getUrl: function () {
            let url = "http://localhost:8888/wordcloud?topic="
            return url + this.$store.getters.getSelected.topic
        },
        getTopic: function () {
            let currentTopic = this.$store.getters.getSelected.topic
            if (currentTopic === "all") {
                currentTopic = "random"
            } else {
                currentTopic = "#" + currentTopic
            }
            return currentTopic
        }
    }
}
</script>

<style scoped>
div#error-img{
    border-radius: 4px;
    background: #d3dce6;
    padding-top: 50px;
}

i {
    font-size: 5em;
    line-height: 1.2;
    padding-top: 40%;
}
i span{
    font-size: 0.5em;
}

p{
    font-size: 0.8em;
    background-color: #dfe5ee;
    border-radius: 5px;

    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
}
</style>