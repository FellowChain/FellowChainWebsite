<template>
  <div class="content-box reset-padding">
    <el-table
      :data="elementsList"
      stripe
      style="width: 100%"
      @expand-change="readRow"
    >
      <el-table-column type="expand" >
        <template slot-scope="props">
          <div v-loading="isLoading[props.row.callIdx.toNumber()]">
            <p>Discussion Link: <a :href="props.row.fireBaseData.link">link</a></p>
            <p>Description: {{ props.row.fireBaseData.desc }}</p>
            <p>Sum: {{ ((props.row.fireBaseData.sum==undefined)?'not applicable':props.row.fireBaseData.sum) }}</p>
          </div>

        </template>
      </el-table-column>

      <el-table-column

        prop="timeStr"
        label="Voting End"
        width="300">
      </el-table-column>
      <el-table-column

        prop="fullName"
        label="Full Name"
        sortable
        width="450">
      </el-table-column>

      <el-table-column

        prop="isExecuted"
        label="Executed"
        width="90">
      </el-table-column>


      <el-table-column

        prop="voteStats"
        label="Yes/No"
        width="90">
      </el-table-column>


      <el-table-column
        fixed="right"
        label="Operations"

        width="120">
        <template slot-scope="scope">
          <el-button @click="processCall(scope.row.voteFor)" size="mini">Vote Yes</el-button>
          <el-button @click="processCall(scope.row.voteAgainst)" size="mini">Vote No</el-button>
          <el-button @click="processCall(scope.row.executeCall)" size="mini">Execute</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
  export default {
    name: 'govWelcome',
    data () {

      return {
        isLoading:{}
      }
    },
    computed: {
      elementsList(){
        var that = this;
        return this.$store.getters['voting/votings']
          .map(x =>{
            var x =Object.assign(
              {
                voteStats:"("+(x.votesFor==undefined?0:x.votesFor)+"/"
                +(x.votesAgainst==undefined?0:x.votesAgainst)+")",
                endTimeStr:(new Date(x.endTime*1000)).toUTCString(),
                timeStr:(new Date(x.time*1000)).toUTCString(),
                fireBaseData:(x.fireBaseData==undefined)?{}:undefined
              },x);/*
             */
            return x;
          });
      }
    },
    methods: {
      processCall(clbk){
        var that = this;
        that.$store.dispatch('loading/lock');
        //that.$emit('lock-ui');

        clbk(function(){
          that.$store.dispatch('loading/unlock');
          //that.$emit('unlock-ui');
        });
      },
      readRow(row, allExpanded){
        var that = this ;
        that.$set(that.$data.isLoading, row.callIdx.toNumber(), true);
        that.$store.dispatch('firebase/getData',{
          storage:row,
          property:'fireBaseData',
          key:row.hash
        }).then(function(){
          that.$set(that.$data.isLoading, row.callIdx.toNumber(), false);
        }).catch(function(err){
          that.$set(that.$data.isLoading, row.callIdx.toNumber(), false);
          console.error(err);
        });
      }
    },
    components:{}
  }
</script>
