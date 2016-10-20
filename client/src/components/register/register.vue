<template>
  <div class="register">
    <h2>用户注册</h2>
    <form>
      <div class="account-input">
        <input placeholder="用户名" class="register-input"/>
      </div>
      <div class="account-input">
        <input placeholder="邮箱" class="register-input"/>
      </div>
      <div class="account-input">
        <input placeholder="密码" class="register-input"/>
      </div>
      <div class="account-input">
        <input placeholder="确认密码" class="register-input"/>
      </div>
    </form>
    <button class="btn  register-btn">注册</button>
    <div class="bottom-link">
      <router-link to="/login">已有账户？马上登陆</router-link>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus" scoped>
@import '../styles//common.styl'

.register
  generalForm(480px, 480px)

.register-input
  generalInput()

.account-input
  position: relative
  height: 68px

.register-btn
  width: 400px
  height: 48px
  color: #fff
  font-size: 24px
  border-radius: 24px

.bottom-link
  margin-top: 15px
  text-align: center
  font-size: 18px
  a
    color: rgba(0, 0, 0, 0.6)


</style>
