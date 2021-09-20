<template>
    <div>
        <div class="row">            
            <div class="col-md-4">
                <Room
                  :members = "getMembers"
                  :currentUser = 'getCurrentUser' 
                  :join ="onJoinMember"
                ></Room>
            </div>
            <div class="col-md-4 col-md-offset-4">
                <Table 
                :members = "getMembers"
                :join ="onStartIssue"
                :status ="issueStatus"
                :avg ="issueAvg"
                :finish = "onFinishIssue">
                </Table>                                         
            </div>              
        </div>
        <div class="row">
            <div class="col-md-12">                
                <CardDeck
                 :card ="onSelectedCard"
                 :cardActive = "cardActive"
                ></CardDeck>
            </div>            
        </div>
        <div class="row">
           Issue Status: <span id="issueStatus"> {{issueStatus}} </span>
        </div>
    </div>        
</template>

<script>

import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex';

export default{
    name: 'LobbyLayout',
    components: {
        Table: defineAsyncComponent(() => import('../components/Table.vue')),
        CardDeck: defineAsyncComponent(() => import('../components/CardDeck.vue')),
        Room: defineAsyncComponent(() => import('../components/Room.vue')),
    },
    computed: {
        ...mapGetters('issue', ['getCurrentUser','getMembers','getIssue']),
        issueStatus() {
           return this.getIssue.status
        },
        issueAvg() {
           return this.getIssue.avg
        }        
    },
    data() {
      return {
          cardActive: '',
      } 
    },
    methods: {
        ...mapActions('issue',['loadMembers','vote','join','initialize']),
        onSelectedCard(card) {
            this.cardActive = card
            this.vote(card)
      },
       onJoinMember(member) {
           this.cardActive = ''
           const issue= {
                id: this.getIssue.id,
                playerName: member,
                status: 'voting'
            }

          this.join(issue)
      },
       onStartIssue(issue) {
            this.cardActive = ''
            this.join(issue)
      },
       onFinishIssue(isFinish) {
           if (isFinish)
           {
               this.initialize()
               this.loadMembers()
               this.cardActive= ''
           }
      }                                 
    },
    created() {
        this.loadMembers()
    }

}
</script>
