<template>
    <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-container class="main">
            <el-aside width="13%">
                <Menu />
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";

export default {
    name: "App",
    components: {
        Header,
        Menu,
    }
};
</script>

<style>
html,
body,
#app,
.el-container {
    padding: 0;
    margin: 0;
    height: 100%;
}

/* Element UI Style */
.el-header,
.el-footer {
    background-color: #b4d7e7;
    color: rgb(0, 0, 0);
    line-height: 60px;
}

.el-aside {
    color: #333;
    text-align: left;
    line-height: 200px;
}

.el-main {
    background-color: #f9fdff;
    color: #333;
    text-align: center;
}

body {
    height: 100%;
}

body > .el-container {
    /* margin-bottom: 40px; */
    height: 100%;
}

.main {
    height: 100%;
}

div .grid-content {
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 10px;
}
</style>

