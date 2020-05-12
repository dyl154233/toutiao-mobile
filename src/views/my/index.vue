<template>
  <div class="my-container">
    <van-cell-group
      class="my-info"
      v-if="user"
    >
      <van-cell
        class="base-info"
        :border="false"
        value="内容"
        center
      >
        <van-image
          class="avatar"
          round
          slot="icon"
          fit="cover"
          :src="userInfo.photo"
        />
        <div slot="title" class="name">{{ userInfo.name }}</div>
        <van-button
          class="update-btn"
          round
          size="small"
        >编辑资料</van-button>
      </van-cell>

      <van-grid :border="false" class="data-info">
        <van-grid-item class="data-info-item">
          <div slot="text">
            <div class="span">{{ userInfo.art_count }}</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text">
            <div class="span">{{ userInfo.follow_count }}</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text">
            <div class="span">{{ userInfo.fans_count }}</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text">
            <div class="span">{{ userInfo.like_count }}</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>

    <div v-else class="not-login">
      <img
        class="mobile"
        src="./shouji.png"
        @click="$router.push('/login')"
      >
      <div class="text">登录 / 注册</div>
    </div>

    <van-grid class="nav-gri md-5" :column-num="2">
      <van-grid-item
        class="nav-grid-item"
        icon-prefix="toutiao"
        icon="shoucang"
        text="收藏"
      />
      <van-grid-item
        class="nav-grid-item"
        icon-prefix="toutiao"
        icon="lishi"
        text="历史"
      />
    </van-grid>

    <van-cell title="消息通知" is-link to="/" />
    <van-cell class="md-5" title="小智同学" is-link to="/" />

    <van-cell
      v-if="user"
      class="exit-btn"
      title="退出登录"
      @click="onLogout"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'

export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {
      userInfo: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    this.loadUserInfo()
  },
  mounted () {},
  methods: {
    onLogout () {
      this.$dialog.confirm({
        title: '退出提示',
        message: '确认退出吗？'
      })
        .then(() => {
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
        })
    },
    async loadUserInfo () {
      const { data } = await getUserInfo()
      this.userInfo = data.data
    }
  }
}
</script>

<style scoped lang="less">
.my-container {
  .my-info {
    background: url("./banner.png") no-repeat;
    background-size: cover;
    .base-info {
      height: 115px;
      box-sizing: border-box;
      padding-top: 38px;
      padding-bottom: 11px;
      background-color: unset;
      .avatar {
        width: 66px;
        height: 66px;
        border: 1px solid #fff;
        margin-right: 11px;
      }
      .name {
        font-size: 15px;
        color: #fff;
      }
      .update-btn {
        height: 16px;
        font-size: 10px;
        color: #666;
      }
    }
    .data-info {
      .van-grid-item__content {
        height: 65px;
      }
      .data-info-item {
        font-size: 18px;
        color: #fff;
        text-align: center;
        .text {
          font-size: 11px;
        }
      }
    }
    /deep/  .van-grid-item__content {
      background-color: unset;
    }
  }
  .not-login {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 180px;
    background: url("./banner.png") no-repeat;
    background-size: cover;
    .mobile {
      height: 66px;
      width: 66px;
      margin-bottom: 10px;
    }
    .text {
      font-size: 15px;
      color: #fff;
    }
  }
  .nav-grid {
    .nav-grid-item {
      height: 70px;
      // .toutiao-shoucang {
      //   color: red;
      // }
    }
  }
  .exit-btn {
    text-align: center;
    color: #d86262;
  }
  .md-5 {
    margin-bottom: 5px;
  }
}
</style>
