<template>
    <ve-histogram
        :settings="chartSettings"
        :data="chartData"
        :data-zoom="dataZoom"
        :loading="loading"
        :data-empty="dataEmpty"
        :colors="colors"
        :extend="extend"
        :grid="grid"
        height="99%"
    ></ve-histogram>

</template>

<script>

export default {
    name: "ViewBarChart",
    props: ["type"],
    data() {
        this.grid = {
            top: "12%",
            bottom: "15%"
        }

        this.chartSettings = {
            dimension: [],
        };

        this.extend = {
            series: {
                label: { show: true, position: "top" }
            }
        }

        this.colors = ["#39bd52"]

        return {
            chartData: {
                columns: [],
                rows: [],
            },
            loading: false,
            dataEmpty: false,
        };
    },
    methods: {
        getData (){
            this.loading = true
            this.$axios.get("http://localhost:8888/chart/bar", {
                params: {
                    type: this.type,
                    hashtag: this.getHashtag,
                    topic: this.getTopic
                },
                timeout: 10000
            }).then((response) => {
                switch (this.type) {
                    case "overview":
                        this.chartSettings.dimension = ["User"];
                        this.chartSettings.legendName = {"Count": "User name and his number of tweets"}
                        break;

                    case "hashtag":
                        this.chartSettings.dimension = ["Hashtag"]
                        this.chartSettings.legendName = {"Count": "Hashtag name and its number of tweets"}
                        this.dataZoom = {
                            type: "slider",
                            start: 0,
                            end: 25,
                            minSpan: 10,
                            height: 15
                        };
                        this.colors = ["#38e0d2"]
                        break;

                    case "topic":
                        this.chartSettings.dimension = ["Topic"]
                        this.chartSettings.legendName = {"Count": "Topic ID and its number of tweets"}
                        this.colors = ["#d9b636"]
                }

                this.chartData = response.data
            }).then(() => {
                this.dataEmpty = !this.chartData.rows.length
                this.loading = false
            }).catch((err) => console.log(err))
        }
    },
    computed:{
        getHashtag: function (){
            return this.$store.getters.getSelected.hashtag
        },
        getTopic: function (){
            return this.$store.getters.getSelected.topic
        }
    },
    created() {
        this.getData()
    },
}
</script>

<style>

</style>