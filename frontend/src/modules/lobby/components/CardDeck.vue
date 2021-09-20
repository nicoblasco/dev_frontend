<template>
    <div>
        <div class="row text-center h-100">
            <p class="deck-text">Choose your card 👇</p>
        </div>
        <div class="row text-center">
            <div class="col-md-12 align-self-center">
                <button 
                    :class="{'btn btn-outline-primary card-player' : !evalSelectedCard(vote),  'btn btn-primary card-player card-selected ' : evalSelectedCard(vote)}"
                    v-for="vote in validVotes" 
                    :key="vote"
                    :disabled = "thereIsCardActive"
                    @click="selectedCard(vote)">
                    {{vote}}
                </button>
            </div>                   
        </div>
        
    </div>

</template>
<script>
export default {
  name: 'CardDeck',
  props: ['card', 'cardActive'],
  data() {
    return {
      validVotes: [1,2,3,5,8,13,20,40,'?']
      
    }
   },
    computed: {
        thereIsCardActive() {
           return this.cardActive == '' ? false : true
        },
    },  
    methods: {
      async selectedCard(selection) {
         this.card(selection);
      },
      evalSelectedCard(card){
          return (card == this.cardActive) ? true : false 
      }      
   }
}
</script>
<style scoped>
    .deck-text {
        margin-top: 30px;
    }
    .card-player {
        height: 100px;
        width: 50px;
        margin-right: 10px;
    }
    .card-selected {
        margin-bottom: 40px;
        color: white;
        background-color: 0d6efd;
    }
</style>