<template>
    <div id="hashtag-fullscreen">
        <el-row :gutter="10">
            <el-col :span="12">
                <ViewLineChart type="hashtag" />
<!--                <div class="grid-content bg-purple">-->
<!--                    Line chart: number of tweets of top 5 hashtag overtime(weekly)-->
<!--                </div>-->
            </el-col>
            <el-col :span="12">
                <el-row :gutter="10">
                    <el-col :span="12">
<!--                        <div class="grid-content bg-purple">-->
<!--                            Plain text: Total number of hashtags-->
<!--                        </div>-->
                        <ViewNumber type="hashtag"/>
                    </el-col>
                    <el-col :span="12">
<!--                        <div class="grid-content bg-purple">-->
<!--                            Plain text: top 1 hashtag-->
<!--                        </div>-->
                        <ViewText type="hashtag"/>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="24">
<!--                        <div class="grid-content bg-purple">-->
<!--                            Not confirmed-->
<!--                        </div>-->
                        <ViewHorizontalBar type="hashtag"/>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="8">
<!--                <div class="grid-content bg-purple">-->
<!--                    Bar chart: Number of tweets over hashtags-->
<!--                </div>-->
                <ViewBarChart type="hashtag"/>
            </el-col>
            <el-col :span="8">

                <ViewTweet type="hashtag" />
            </el-col>
            <el-col :span="8">
<!--                <div class="grid-content bg-purple">-->
<!--                    Radar graph: (group by top 5 hashtags)<br>-->
<!--                    (column: total number of tweets <br> -->
<!--                    total number of users<br>-->
<!--                    total number of likes<br>-->
<!--                    total number of reply)-->
<!--                </div>-->
                <ViewRadar type="hashtag"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ViewNumber from "../charts/ViewNumber";
import ViewText from "@/components/charts/ViewText";
import ViewLineChart from "@/components/charts/ViewLineChart";
import ViewBarChart from "@/components/charts/ViewBarChart";
import ViewTweet from "@/components/charts/ViewTweet";
import ViewRadar from "@/components/charts/ViewRadar";
import ViewHorizontalBar from "@/components/charts/ViewHorizontalBar";

export default {
    name: "ViewOverall",
    components: {ViewHorizontalBar, ViewRadar, ViewTweet, ViewBarChart, ViewLineChart, ViewText, ViewNumber },
};
</script>

<style scoped>
#hashtag-fullscreen {
    height: 100%;
}

.el-row {
    padding-bottom: 10px;
    height: 50%;
    max-height: 50%;
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