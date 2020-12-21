<template>
    <div id="home-fullscreen">
        <el-row :gutter="10">
            <el-col :span="12" id="overview-time">
<!--                <div class="grid-content bg-purple">-->
<!--                    Line chart: tweets number overtime(weekly)-->
<!--                </div>-->
                <ViewLineChart type="overview" />
            </el-col>
            <el-col :span="12">
                <el-row :gutter="10" type="flex">
                    <el-col :span="12">
                        <ViewNumber type="overview" />
<!--                        <div class="grid-content bg-purple">-->
<!--                            Plain text: Total number of tweets-->
<!--                        </div>-->
                    </el-col>
                    <el-col :span="12">
<!--                        <div class="grid-content bg-purple">-->
<!--                            Plain text: top 1 user and number of tweets-->
<!--                        </div>-->
                        <ViewText type="topuser"/>
                    </el-col>
                </el-row>
                <el-row :gutter="10" type="flex">
                    <el-col :span="12">
<!--                        <div class="grid-content bg-purple">-->
<!--                            Plain text: Total number of users-->
<!--                        </div>-->
                        <ViewNumber type="user_num"/>
                    </el-col>
                    <el-col :span="12">
<!--                        <div class="grid-content bg-purple">-->
<!--                            Plain text: Total time of collection-->
<!--                        </div>-->
                        <ViewText type="totaltime"/>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="8">
<!--                <div class="grid-content bg-purple">-->
<!--                    Bar chart: Number of tweets for each user-->
<!--                </div>-->
                <ViewBarChart type="overview" />
            </el-col>
            <el-col :span="8">
<!--                <div class="grid-content bg-purple">-->
<!--                    Pie chart: ratio of top 5 users-->
<!--                </div>-->
                <ViewPieChart type="overview"/>
            </el-col>
            <el-col :span="8">
<!--                <div class="grid-content bg-purple">-->
<!--                    Twitter API display: Top tweet-->
<!--                </div>-->
                <ViewTweet type="top"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ViewNumber from '../charts/ViewNumber'
import ViewLineChart from "@/components/charts/ViewLineChart";
import ViewBarChart from "@/components/charts/ViewBarChart";
import ViewText from "@/components/charts/ViewText";
import ViewTweet from "@/components/charts/ViewTweet";
import ViewPieChart from "@/components/charts/ViewPieChart";

export default {
    name: "OverView",
    components: {ViewPieChart, ViewTweet, ViewText, ViewNumber, ViewLineChart, ViewBarChart},
};
</script>

<style scoped>
#home-fullscreen {
    height: 100%;
}

.el-row {
    padding-bottom: 10px;
    height: 49%;
}
.el-row:last-child {
    padding-bottom: 0;
}

.el-col {
    height: 100%;
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

div .grid-content {
    height: 100%;
}
</style>