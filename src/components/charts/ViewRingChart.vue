<template>
    <ve-ring
        :settings="chartSettings"
        :data="chartData"
        :loading="loading"
        :data-empty="dataEmpty"
        :extend="extend"
        :grid="grid"
        height="98%"
    ></ve-ring>
</template>

<script>
import 'echarts/lib/component/title';
export default {
    name: "ViewRingChart",
    data() {
        this.grid = {
            top: "10%"
        }

        this.chartSettings = {
            dimension: ["Topic"],
            radius: [70, 100],
            offsetY: 160
        };

        this.extend = {
            series: {
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '12',
                        fontWeight: 'bold',
                        formatter: `{b}: {c} tweets`
                    }
                },
                labelLine: {
                    show: false
                },
            }
        }

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
            this.$axios.get("http://localhost:8888/chart/pie", {
                params: {
                    type: "topic",
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

<style scoped>

</style>