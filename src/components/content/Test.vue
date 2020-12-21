<template>
    <div>
        <el-row>
            <h1>Remove this panel in production version</h1>
        </el-row>
        <el-row class="gird-content">
            <el-button type="primary" @click="fireRequest">API Test</el-button>
            <p>{{responseData}}</p>
        </el-row>
        <el-row>
            <el-button type="primary" @click="changeState">Vuex Test</el-button>
        </el-row>
        <el-row>
            <p>Data range</p>
            <p>{{getDataRange}}</p>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "Test",
    data(){
        return {
            responseData: "",
            dataRange: [],
        }
    },
    computed: {
        getDataRange: function () {
            return this.$store.getters.getRange.overview
        }
    },
    methods: {
        // Flask CORS test
        fireRequest() {
            this.$axios
                .get("http://localhost:8888/api?key=10")
                .then((result) => {
                    this.responseData = result.data.response;
                    console.log(result.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        changeState(){
            this.$store.commit("changeOverviewRange",["2/2", "2/6"])
        }
    },
    mounted() {
        this.$store.commit("changeOverviewRange", ["", ""])
        this.dataRange = this.$store.getters.getRange.overview
    },
    watch: {
        getDataRange: function (){
            console.log("Range changed !")
        }
    }
};
</script>

<style>
</style>