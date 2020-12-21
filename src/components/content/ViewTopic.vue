<template>
    <div id="topic-fullscreen">
        <el-row :gutter="10">
            <el-col :span="12">
<!--                <div class="grid-content bg-purple">-->
<!--                    Line chart: tweets number of each topic overtime-->
<!--                </div>-->
                <ViewLineChart type="topic"/>
            </el-col>
            <el-col :span="6">
                <el-row :gutter="10" type="flex">
                    <el-col :span="24">
<!--                        <div class="grid-content bg-purple">-->
<!--                            Plain text: Total number of topics-->
<!--                        </div>-->
                        <ViewNumber type="topic"/>
                    </el-col>
                </el-row>
                <el-row :gutter="10" type="flex">
                    <el-col :span="24">
<!--                        <div class="grid-content bg-purple">-->
<!--                            Plain text: lifetime of the top topic-->
<!--                        </div>-->
                        <ViewText type="topic-lifetime"/>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
<!--                <div class="grid-content bg-purple">-->
<!--                    Plain text list: Top one topic and its keywords-->
<!--                </div>-->
                <ViewText type="topic"/>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="8">
<!--                <div class="grid-content bg-purple">-->
<!--                    Bar chart: Number of tweets over topics-->
<!--                </div>-->
                <ViewScatter type="topic"/>
            </el-col>
            <el-col :span="8">
<!--                <div class="grid-content bg-purple">-->
<!--                    Pie chart: Ratio of each topic-->
<!--                </div>-->
                <ViewWordCloud />
            </el-col>
            <el-col :span="8">
                <ViewRingChart/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ViewWordCloud from "@/components/charts/ViewWordCloud";
import ViewNumber from "@/components/charts/ViewNumber";
import ViewRingChart from "@/components/charts/ViewRingChart";
import ViewText from "@/components/charts/ViewText";
import ViewLineChart from "@/components/charts/ViewLineChart";
import ViewScatter from "@/components/charts/ViewScatter";

export default {
    name: "ViewTopic",
    components: {ViewScatter, ViewLineChart, ViewText, ViewRingChart, ViewNumber, ViewWordCloud}
};
</script>

<style scoped>
#topic-fullscreen {
    height: 100%;
}

.el-row {
    padding-bottom: 10px;
    height: 50%;
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