<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="app-nav-bar">
      <van-button
        class="search-btn"
        slot="title"
        icon="search"
        type="info"
        round
      >搜索</van-button>
    </van-nav-bar>
    <!-- 导航栏 -->
    <!-- 文章列表页 -->
      <van-tabs v-model="active">
        <van-tab
          :title="channels.name"
          v-for="channels in channels"
          :key="channels.id"
        >
          <!-- {{ channels.name }} -->
          <article-list :channel="channels" />
        </van-tab>
      </van-tabs>
    <!-- 文章列表页 -->
  </div>
</template>

<script>
import { getUserChannels } from '@/api/user'
import ArticleList from './components/article-list'
export default {
  name: 'HomeIndex',
  components: {
    ArticleList
  },
  props: {},
  data () {
    return {
      active: 0,
      channels: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      const { data } = await getUserChannels()
      // console.log(data)
      this.channels = data.data.channels
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  /deep/  .van-nav-bar__title {
    max-width: none;
  }
  .search-btn {
    width: 277px;
    height: 32px;
    background-color: #5babfb;
    .van-icon {
      font-size: 16px;
    }
    .van-title {
      font-size: 14px;
    }
  }
}
</style>
