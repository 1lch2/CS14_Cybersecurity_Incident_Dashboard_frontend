<template>
    <ve-scatter
        :settings="chartSettings"
        :data="chartData"
        :loading="loading"
        :data-empty="dataEmpty"
        :data-zoom="dataZoom"
        :grid="grid"
        :extend="extend"
        height="99%">
    </ve-scatter>
</template>

<script>
export default {
    name: "ViewScatter",
    props: ["type"],
    data() {
        this.grid = {
            top: "15%",
            bottom: "15%"
        }

        this.dataZoom = {
            type: "slider",
            start: 60,
            end: 100,
            minSpan: 15,
            height: 16
        };

        this.extend = {
            series: {
                large: true
            }
        }

        this.chartSettings = {
            dimension: "Date",
            metrics: ["User", "Count"],
            tooltipTrigger: 'axis',
            symbol: "circle",
            symbolSizeMax: 45,
            symbolSizeMin: 5,
            xAxisType: "time"
        };

        return {
            chartData: {
                columns: [],
                rows: {},
            },
            loading: false,
            dataEmpty: false,
        };
    },
    methods: {
        getData (){
            this.loading = true
            this.$axios.get("http://localhost:8888/chart/scatter", {
                params: {
                    type: this.type
                },
                timeout: 10000
            }).then((response) => {
                this.chartData = response.data
            }).then(() => {
                this.dataEmpty = !this.chartData.rows
                this.loading = false
            }).catch((err) => console.log(err))
        }
    },
    created() {
        this.getData()
    }

}
</script>

<style scoped>

</style>