<template>
    <ve-line
        :settings="chartSettings"
        :events="chartEvents"
        :data="chartData"
        :data-zoom="dataZoom"
        :loading="loading"
        :data-empty="dataEmpty"
        :colors="colors"
        :grid="grid"
        height="99%"
    ></ve-line>
</template>

<script>
import "echarts/lib/component/dataZoom";
import dataOps from  "../../utils/data-ops"
import store from '../../utils/store'

let iTime; // Used for catching last dataZoom event

export default {
    name: "ViewLineChart",
    props: ["type"],
    data() {
        this.grid = {
            top: "12%",
            bottom: "15%"
        }
        this.chartSettings = {
            dimension: ["Date"],
            legendName: {"Count": "Number of tweets per week"}
        };

        this.colors = ["#1394ff", "#f32a2a", "#39bd52", "#a538e0", "#e0bd38"]

        this.chartEvents = {
            /**
             * Catch last dataZoom event and change the state of data range
            * */
            datazoom: (e) => {
                // Reference: https://blog.csdn.net/weixin_33676492/article/details/93316144
                clearTimeout(iTime)
                iTime = setTimeout(()=>{
                    const startEnd = dataOps.getStartEnd(this.chartData, e);
                    const tempInterval = [this.chartData.rows[startEnd[0]].Date, this.chartData.rows[startEnd[1]].Date]

                    // Update data range for different panels
                    switch (this.type) {
                        case "overview": {
                            store.commit("changeOverviewRange", tempInterval)
                        }
                        break;

                        case "hashtag": {
                            store.commit("changeHashtagRange", tempInterval)
                        }
                        break;

                        case "topic": {
                            store.commit("changeHashtagRange", tempInterval)
                        }
                            break;
                    }
                }, 250)

                // Bug warning: when slide the slider to full, it won't trigger the data_zoom event.
            }
        };

        this.dataZoom = {
            type: "slider",
            start: 0,
            end: 100,
            minSpan: 20,
            height: 16
        };

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
            this.$axios.get("http://localhost:8888/chart/line", {
                params: {
                    type: this.type,
                    hashtag: this.getHashtag,
                    // topic: this.getTopic
                },
                timeout: 10000
            }).then((response) => {
                if (this.type === "hashtag") {
                    this.colors = ["#f32a2a"]
                    if (this.getHashtag === "all") {
                        this.chartSettings.legendName = {"Count": "Number of tweets with hashtags per week"}
                    } else {
                        this.chartSettings.legendName = {"Count": "Number of tweets with selected hashtag per week"}
                    }
                } else if (this.type === "topic") {
                    this.colors = ["#1394ff", "#f32a2a", "#39bd52"]
                    this.chartSettings.legendName = {}
                    this.dataZoom.start = 50
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
    mounted() {
        /**
         * Reset the data range everytime switch to the view
         */
        this.$store.commit("changeHashtagRange", ["1970/1", "2077/1"])
        this.$store.commit("changeOverviewRange", ["1970/1", "2077/1"])
        this.$store.commit("changeTopicRange", ["1970/1", "2077/1"])
    },
    watch: {
        /**
         * Get corresponding data for the line chart when selecting a different hashtag.
         */
        getHashtag: function () {
            if (this.type === "hashtag") {
                this.getData()
            }
        }
    }
};
</script>