<template>
    <ve-bar
        :settings="chartSettings"
        :data="chartData"
        :loading="loading"
        :data-empty="dataEmpty"
        :grid="grid"
        :extend="extend"
        height="105%"
    >
    </ve-bar>
</template>

<script>
export default {
    name: "ViewHorizontalBar",
    props: ["type"],
    data() {
        this.grid = {
            top: "15%"
        }

        this.extend = {

        }

        this.chartSettings = {
            dimension: ["Hashtag"],
            metrics: ["User", "Retweet", "Count"],
            xAxisType: ['Users', 'Tweets'],
            xAxisName: ["User", "Count"],
            axisSite: {
                top: ["User"]
            }
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
            this.$axios.get("http://localhost:8888/chart/hbar", {
                params: {
                    type: this.type,
                    hashtag: this.getHashtag
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
    },
    computed: {
        getHashtag: function (){
            return this.$store.getters.getSelected.hashtag
        }
    },
    watch: {
        getHashtag: function (){
            this.getData()
        }
    }

}
</script>

<style scoped>

</style>