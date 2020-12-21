import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    overviewRange: [],
    hashtagRange: [],
    topicRange: [],
    currentTopic: "all",
    currentHashtag: "all"
}

const getters = {
    getRange: state => {
        return {
            overview: state.overviewRange,
            hashtag: state.hashtagRange,
            topic: state.topicRange,
        }
    },
    getSelected: state => {
        return {
            hashtag: state.currentHashtag,
            topic: state.currentTopic
        }
    }
}

const mutations = {
    changeHashtagRange(state, rangeList) {
        state.hashtagRange = rangeList;
    },
    changeOverviewRange(state, rangeList) {
        state.overviewRange = rangeList;
    },
    changeTopicRange(state, rangeList) {
        state.topicRange = rangeList;
    },
    changeHashtag(state, hashtag) {
        state.currentHashtag = hashtag
    },
    changeTopic(state, topic) {
        state.currentTopic = topic
    }
}

const store = new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations
})

export default store;