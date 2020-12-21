<template>
    <ve-radar
        :data="chartData"
        :settings="chartSettings"
        :loading="loading"
        :data-empty="dataEmpty"
        :legend="this.legend"
        :grid="grid"
        :extend="extend"
        height="99%"
    ></ve-radar>
</template>

<script>

export default {
    name: "ViewRadar",
    props:["type"],
    data() {
        this.legend = {
            top: "85%",
            bottom: "0",
            width: "80%",
        }

        this.extend = {
            radar: {
                shape: "circle",
                textStyle: {
                    color: "#000000"
                },
                startAngle: 30,
                center: ["50%", "37%"],
                radius: "70%"
            }
        }

        this.grid = {
            bottom: "25%"
        }

        this.chartSettings = {
            dimension: ["Hashtag"],
            metrics: ["User", "Retweet", "Like"],
            labelMap: {
                "User": "User number",
                "Retweet": "Retweets",
                "Like": "Likes"
            },
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
        getData () {
            this.loading = true
            this.$axios.get("http://localhost:8888/chart/radar", {
                params: {
                    type: this.type
                },
                timeout: 10000
            }).then((response) => {
                this.chartData = response.data
            }).then(() => {
                this.dataEmpty = !this.chartData.rows.length
                this.loading = false
            }).catch((err) => console.log(err))
        }
    },
    created() {
        this.getData()
    }
}
</script>