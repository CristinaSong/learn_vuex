<template>
    <div id="app">
        <el-steps :space="200" :active="active"  finish-status="success" align-center>
            <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字" icon="el-icon-edit"></el-step>
            <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字" icon="el-icon-upload" ></el-step>
            <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字" icon="el-icon-upload"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>
