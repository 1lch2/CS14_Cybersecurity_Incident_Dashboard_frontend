<template>
    <div class="numbers">
        <p> Total Number of {{this.getNumType}}:<br><span>{{totalNum}}</span></p>
    </div>
</template>

<script>
import dataOps from "@/utils/data-ops";

export default {
    name: "ViewNumber",
    props: ["type"],
    data() {
        return {
            totalNum: 0
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        /**
         * Update by using API requests
         */
        getData() {
            this.$axios.get("http://localhost:8888/text/num", {
                params: {
                    type: this.type
                    // hashtag: this.getHashtag,
                    // topic: this.getTopic
                }
            }).then((response)=>{this.totalNum = response.data.num})
        }
    },
    computed:{
        getOverviewRange: function () {
           return this.$store.getters.getRange.overview
        },
        getHashtagRange: function (){
            return this.$store.getters.getRange.hashtag
        },
        getHashtag: function (){
            return this.$store.getters.getSelected.hashtag
        },
        getTopic: function (){
            return this.$store.getters.getSelected.topic
        },
        getNumType: function () {
            let text = "";

            switch (this.type) {
                case "overview": {
                    text = "Tweets"
                }
                break;

                case "hashtag": {
                    text = "Hashtags"
                }
                break;

                case "topic": {
                    text = "Topics"
                }
                break;

                case "user_num": {
                    text= "Users"
                }
                break;

            }
            return text
        }
    },
    watch: {
        getOverviewRange: function () {
            if (this.type === "overview") {
                let ISODateStart = dataOps.getISODateTime(this.getOverviewRange[0])
                let ISODateEnd = dataOps.getISODateTime(this.getOverviewRange[1])

                this.$axios.post("http://localhost:8888/text/num/range", {
                    type: this.type,
                    rangeStart: ISODateStart,
                    rangeEnd: ISODateEnd
                }).then((response)=>{this.totalNum = response.data.num})
            }
        },

        getHashtagRange: function () {
            if (this.type === "hashtag") {
                let ISODateStart = dataOps.getISODateTime(this.getHashtagRange[0])
                let ISODateEnd = dataOps.getISODateTime(this.getHashtagRange[1])

                this.$axios.post("http://localhost:8888/text/num/range", {
                    type: this.type,
                    hashtag: this.getHashtag,
                    rangeStart: ISODateStart,
                    rangeEnd: ISODateEnd
                }).then((response)=>{this.totalNum = response.data.num})
            }
        }
    }
};
</script>

<style scoped>
div .numbers {
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #e3eff6;
    border-radius: 6px;
}
p {
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 1.3;
    font-size: 1.2em;
}
p span{
    font-size: 1.8em;
}
</style>