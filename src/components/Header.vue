<template>
    <el-row type="flex" justify="space-between">
        <el-col :span="12">
            <div id="welcome">Cybersecurity Incident Dashboard <span :class="{running: isRunning}">{{dashboardStat}}</span></div>
        </el-col>
        <el-col :span="12">
            <el-row :gutter="10" type="flex" justify="end">
                <el-col :span="4">
                    <p class="select-caption">Hashtag</p>
                </el-col>
                <el-col :span="8" class="selection-dropdown">
                    <el-select v-model="tagValue" value-key="hashtag" @change="onHashtagChange" placeholder="Select a hashtag">
                        <el-option
                            v-for="item in tagOptions"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <p class="select-caption">Topic</p>
                </el-col>
                <el-col :span="8">
                    <el-select v-model="topicValue" value-key="id" @change="onTopicChange" placeholder="Select a topic">
                        <el-option
                            v-for="item in topicOptions"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "Header",
    mounted(){
        this.updateStat();
        this.updateOptions();
        this.loopStat();
    },
    data(){
        return {
            dashboardStat: "",
            isRunning: false,

            // Update options via API request
            tagOptions: [],
            topicOptions: [],

            tagValue: "",
            topicValue: ""
        }
    },
    methods: {
        /**
         * Get backend server status
         */
        updateStat(){
            this.dashboardStat = "Inactive"
            this.$axios.get("http://localhost:8888/api/runstat").then((response) => {
                let backendStat = response.data.isRunning;

                if (backendStat){
                    this.dashboardStat = "Operational";
                    this.isRunning = true;
                } else {
                    this.dashboardStat = "Inactive";
                    this.isRunning = false;
                }
            });
        },

        /**
         * Get options from backend server.
         */
        updateOptions (){
            this.$axios.get("http://localhost:8888/options").then((response) => {
                this.tagOptions = response.data.hashtag;
                this.topicOptions = response.data.topic;
                this.$message({
                    message: "Options updated",
                    type: "success",
                    duration: 1500
                })
            });
        },

        /**
         * Update the state with selected hashtag
         * @param optionVal value of the selected option
         */
        onHashtagChange (optionVal){
            this.$store.commit("changeHashtag", optionVal)
        },

        /**
         * Update the state with selected topic
         * @param optionVal value of the selected option
         */
        onTopicChange (optionVal){
            this.$store.commit("changeTopic", optionVal)
        },

        loopStat() {
            setTimeout(this.updateStat, 10000)
        }
    }
};
</script>

<style scoped>
#welcome {
    font-size: 18px;
}
span{
    margin-left: 5px;
    color: red;
    background-color: #EFE2E2;
    border-radius: 4px;
    border-color: transparent;
    padding: 2px;
}
span.running{
    color: rgb(0, 131, 17);
    background-color: rgb(235, 247, 228);
}

p.select-caption{
    font-size: 1.1em;
    line-height: 2;
    text-align: center;
    background-color: #e3eff6;
    border-radius: 4px;
    height: 60%;
    margin-top: 12%;
}

.selection-dropdown{
    margin-right: 3%;
}

.el-row{
    margin-left: 1%;
    height: 100%;
}
.el-col{
    height: 100%;
}
</style>
