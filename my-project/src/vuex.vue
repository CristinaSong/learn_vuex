<template>
<div class="center">
  <div class="aaa">
	<span>全部考勤</span>
	<span @mouseover="showConnectStateTip" @mouseout="hideConnectStateTip">~</span>
  </div>
   <div class="mainSignalTip">筛选框<span class="mainSignalTipMiddleRight"></span></div>
</div>
</template>

<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        showConnectStateTip(){
           
        },
        hideConnectStateTip(){

        }
    }
}
</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
*{
  margin: 0;
  padding: 0;
}
.center{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.aaa{
	background-color: red;
	font-family: PingFang-SC-Regular;
	font-size: 13px;
	color: #FCFCFC;
	line-height: 13px;
}
.mainSignalTip{
  display: inline-block;
  background: rgba(0,0,0,0.69);
  border-radius: 4px;
  font-size: 14px;
  color: #BFCCD9;
  line-height: 26px;
  height: 50px;
  padding: 0 10px 0 10px;
  position: relative;
  margin-top: 5px;
  width: 66px;
  box-sizing: border-box;
}
.mainSignalTipMiddleRight {
  width: 0;
  height: 0;
  border-bottom: 6px solid rgba(0,0,0,0.69);
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  position: absolute;
  bottom: 100%;
  left:30px;
}
</style>
