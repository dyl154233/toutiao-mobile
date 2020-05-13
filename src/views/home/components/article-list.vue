<template>
  <div class="article-list">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="(article, index) in articles"
          :key="index"
          :title="article.title"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'
export default {
  name: 'ArticleList',
  components: {},
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      articles: [],
      loading: false,
      finished: false,
      timestamp: '',
      refreshing: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      // console.log(onLoad)
      // 1. 请求获取数据
      const { data } = await getArticles({
        channel_id: this.channel.id,
        timestamp: this.timestamp || Date.now(),
        with_top: 1
      })
      // console.log(data)
      // 2. 把数据放到 articles 数组中
      this.articles.push(...data.data.results)
      // 3. 设置本次加载状态结束，它才可以判断是否需要加载下一次，否则就会永远的停在这里
      this.loading = false
      // 4. 数据全部加载完成
      if (data.data.results.length) {
        // 更新获取下一页数据的页码
        this.timestamp = data.data.pre_timestamp
      } else {
        // 没有数据了，把加载状态设置结束，不再触发加载更多
        this.finished = true
      }
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  }
}
</script>

<style scoped lang="less">
.article-list {
  position: fixed;
  left: 0;
  right: 0;
  top: 90px;
  bottom: 50px;
  overflow-y: auto;
}
</style>
