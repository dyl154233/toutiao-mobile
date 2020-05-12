<template>
  <div class="my-container">
    <van-cell-group class="my-info">
      <van-cell
        class="base-info"
        :border="false"
        value="内容"
        center
      >
        <van-image
          round
          slot="icon"
          width="50"
          height="50"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title">昵称</div>
        <van-button
          round
          size="small"
        >编辑资料</van-button>
      </van-cell>

      <van-grid :border="false">
        <van-grid-item>
          <div slot="text">
            <div class="span">132</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">132</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">132</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">132</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>

    <van-grid :column-num="2">
      <van-grid-item icon-prefix="toutiao" icon="shoucang" text="收藏" />
      <van-grid-item icon-prefix="toutiao" icon="lishi" text="历史" />
    </van-grid>

    <van-cell title="消息通知" is-link to="/" />
    <van-cell title="小智同学" is-link to="/" />

    <van-cell class="exit-btn" title="退出登录" />
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  components: {},
  props: {},
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
.my-container {
  .my-info {
    background: url("./banner.png") no-repeat;
    background-size: cover;
    .base-info {
      background-color: unset;
    }
    /deep/  .van-grid-item__content {
      background-color: unset;
    }
  }
  .exit-btn {
    text-align: center
  }
}
</style>
