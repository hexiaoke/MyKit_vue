<template>
  <div class="login">
    <h2>用户登录</h2>
    <form>
      <div class="account-input">
        <input placeholder="用户名" class="login-input"/>
      </div>
      <div class="account-input">
        <input placeholder="密码" class="login-input"/>
      </div>
    </form>
    <div class="login-check">
      <div class="checkbox">
        <input type="checkbox">
        <label>记住我</label>
      </div>
      <a href="#/index/mykit/register">找回密码</a>
    </div>
    <button class="btn  login-btn" ng-click="login()"ng-class="{'btn-checked':check()}" ng-disabled="!check()">登陆</button>
    <div class="bottom-link">
      <a href="#/mykit/register">还没有账户,马上注册</a>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus" scoped>
@import '../styles/common.styl'

h2
  width: 400px
  margin: 0 0 30px
  font-size: 25px
  font-weight: 400
  text-align: center
  color: #323a45

.login
  generalForm(480px, 380px)
  input
    outline: none

.login-input
  generalInput()

.account-input
  position: relative
  height: 68px

.login-check
  margin-bottom: 15px
  color: rgba(0, 0, 0, 0.6)
  overflow: auto
  font-size: 18px
  a
    color: rgba(0, 0, 0, 0.6)
    float: right

.checkbox
  float: left
  display: inline-block
  text-align: center
  outline: 0
  vertical-align: middle
  input
    width: 15px
    height: 15px

.login-btn
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
