<template>
    <div class="pie-chart">
        <ve-pie
            :settings="chartSettings"
            :data="chartData"
            :loading="loading"
            :data-empty="dataEmpty"
            :grid="grid"
            height="99%"
        ></ve-pie>
    </div>
</template>

<script>
export default {
    name: "ViewPieChart",
    props: ["type"],
    data() {
        this.grid = {
            top: "13%"
        }

        this.chartSettings = {
            dimension: ["User"],
        };

        return {
            chartData: {
                columns: [],
                rows: [],
            },
            loading: false,
            dataEmpty: false
        };
    },
    methods: {
        getData (){
            this.loading = true
            this.$axios.get("http://localhost:8888/chart/pie", {
                params: {
                    type: this.type,
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
div.pie-chart{
    height: 100%;
}

div .ve-pie{
    height: 90%;
}
</style>