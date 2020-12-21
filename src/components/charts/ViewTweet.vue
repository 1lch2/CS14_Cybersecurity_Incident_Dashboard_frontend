<template>
    <div class="top-tweet">
        <p id="tw-caption">{{this.captionText}}</p>
        <p>
            <span id="tw-username">User:
                <el-link
                    type="primary"
                    :href="this.link"
                    target="_blank"
                    :underline="this.underline"
                >{{ this.username }}</el-link>
            </span>
            <br>
            {{ this.tweetText }}
        </p>
    </div>
</template>

<script>
export default {
    name: "ViewTweet",
    props: ["type"],
    data() {
        return {
            username: "",
            tweetText: "",
            link: "",
            underline: false
        }
    },
    methods: {
        getTopTweet() {
            this.$axios.get("http://localhost:8888/getTweet", {
                params: {
                    type: this.type
                }
            }).then((response) => {
                this.username = response.data.username
                this.tweetText = response.data.tweetText
                this.link = `http://twitter.com/${response.data.screen_name}`
            })
        },
    },
    mounted() {
        this.getTopTweet()
    },
    computed: {
        captionText: function (){
            let text = ""
            if (this.type === "top") {
                text = "Top retweeted tweet:"
            } else if (this.type === "hashtag") {
                text = "Top tweet from top hashtag:" // TODO: selected hashtag?
            }
            return text
        }
    }
}
</script>

<style scoped>
div.top-tweet {
    height: 100%;
    text-align: justify;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #c6e8f3;
    border-radius: 6px;
    padding: 0 5%;
}

p {
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 1.3;
    font-size: 1.2em;
}

p#tw-caption{
    text-align: center;
    background-color: #d6e0e5;
    padding: 2px 2px;
    border-radius: 6px;
}

p span {
    line-height: 2;
    text-align: left;
}

.el-link {
    text-align: end;
    font-size: 1.1em;
    line-height: 2;
    padding-bottom: 5px;
    padding-left: 5%;
}
</style>