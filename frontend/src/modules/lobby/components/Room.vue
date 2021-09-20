<template>
    <div>
        <div class="btn-group-vertical">
            <span>Click to change member 👇</span>
            <div v-for="m in members" :key="m">
                <button type="button" 
                    :class="{'btn btn-success' : m.name == currentUser,  'btn btn-outline-secondary' : m.name != currentUser}"
                    :disabled ="isAbleToVote(m)"
                    @click="joinPlayer(m.name)"
                    > 
                    {{m.name}}  {{completeValue(m)}}
                </button>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Room',
    props:['members','currentUser','join'] ,    
    methods: {
        completeValue(member) {
          return member.value && member.name == this.currentUser  ? '-'+ member.value  : null
        },
        async joinPlayer(member){
          this.join(member)
        },
        isAbleToVote(member){
          return  member.name == this.currentUser || (member.status =='voted' || member.status=='passed')
        }        
    },   
}
</script>

<style scoped>
 button {
    width: 200px;
    margin-bottom: 2px;
 }
</style>