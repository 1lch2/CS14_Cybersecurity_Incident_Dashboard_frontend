<template>
    <el-row>
        <el-col>
            <el-menu :default-active="currentRoute" class="el-menu-vertical-demo" :router="true">
                <el-menu-item index="/">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">Overview</span>
                </el-menu-item>

                <el-menu-item index="/viewhashtag">
                    <i class="el-icon-s-comment"></i>
                    <span slot="title">Hashtag</span>
                </el-menu-item>

                <el-menu-item index="/viewtopic">
                    <i class="el-icon-s-flag"></i>
                    <span slot="title">Topic</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "Menu",
    computed: {
        currentRoute: function () {
            return this.$route.path
        }
    }
};
</script>

<style scoped>
span {
    font-size: 1.2em;
    padding-left: 5%;
}
i {
    padding-left: 10%;
}
</style>