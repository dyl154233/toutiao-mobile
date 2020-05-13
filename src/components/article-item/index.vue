<template>
  <!-- <div class="article-item">文章列表</div> -->
  <van-cell class="article-item">
    <div slot="title" class="title van-multi-ellipsis--l3">{{ article.title }}</div>
    <div slot="label">
      <div class="cover-wrap" v-if="article.cover.type === 3">
          <div
            class="cover-wrap-item"
            v-for="(img, index) in article.cover.images"
            :key="index"
          >
            <van-image
              class="cover-image"
              fit="cover"
              :src="img"
            />
          </div>
      </div>
      <div class="lable-wrap">
        <span>{{ article.aut_name }}</span>
        <span>{{ article.comm_count }}</span>
        <span>{{ article.pubdate }}</span>
      </div>
    </div>
    <van-image
      v-if="article.cover.type === 1"
      class="right-cover"
      fit="cover"
      :src="article.cover.images[0]"
    />
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.article-item {
  .title {
    font-size: 16px;
    color: #3a3a3a;
  }
  /deep/ .van-cell__value {
    flex: unset;
    width: 116px;
    height: 72px;
    margin-left: 12px;
  }
  .right-cover {
    width: 116px;
    height: 72px;
  }
  .cover-wrap {
    padding: 15px 0;
    display: flex;
    .cover-wrap-item {
      flex: 1;
      height: 73px;
      &:not(:last-child) {
        padding-right: 5px;
      }
      .cover-image {
          width: 116px;
          height: 73px;
      }
    }
  }
}
</style>
