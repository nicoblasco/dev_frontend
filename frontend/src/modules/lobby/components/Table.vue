<template>
    <div>
        <div class="row text-center h-100 table-align">
            <div class="col-md-3 text-center">
                <div class="card card-block d-flex" style="width: 18rem; height: 10rem;">
                    <div class="card-body align-items-center d-flex justify-content-center">
                        <p v-if="isVoting" class="card-text">Pick your card.</p>
                        <button v-if="isNew" class="btn btn-outline-light" @click="toggleModal" data-toggle="modal" data-target="#newGameModal">Start new</button>
                        <div v-if="isReveal">
                            <div class="row">
                                <span class="card-text"><h3> AVG: {{avg}} </h3></span>
                            </div>
                            <div class="row">
                                <button class="btn btn-outline-light" @click="finishIssue"> FINISH</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col align-self-center" v-for="member in members" :key="member.name">
                <div class="card-player" v-if="member.value != null" >
                        <div v-if="!isReveal" class="card-selected" />
                        <div v-else class="card-reveal">{{member.value == 0 ? '?' : member.value }}</div>
                        <span>{{member.name}}</span>
                </div>             
            </div>                   
        </div>
    <div>
        <form
        id="modal"
        @submit="checkForm">
        <div
            ref="modal"
            class="modal fade"
            :class="{show, 'd-block': active}"
            tabindex="-1"
            role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Choose a name and issue</h5>
                    </div>
                    <div class="modal-body">
                        <p v-if="errors.length">
                            <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                            <ul>
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </p>                          
                        <div class="form-group">
                            <label for="issue-number" class="col-form-label">Issue Number</label>
                            <input type="number" class="form-control" id="issue-number" :value="issue.id" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="player-name" class="col-form-label">Player Name</label>
                            <input type="text" class="form-control" id="player-name" v-model="issue.playerName" required>
                        </div>                                             
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="startIssue">Start</button>
                    </div>                    
                </div>
            </div>          
        </div>
        <div v-if="active" class="modal-backdrop fade show"></div>
        </form>
    </div>
    </div>
</template>

<script>

export default {
    name: 'Table',
    props: ['members', 'join', 'status','avg', 'finish'],
    data() {
        return {
            errors: [],
            active: true,
            show: true,
            issue: {
                id: 1,
                status: 'voting'
            }
        };
    }, 
    computed: {
        isNew() {
           return this.status == null
        },        
        isVoting() {
           return this.status == 'voting'
        },
        isReveal() {
           return this.status == 'reveal'
        }    
    },     
    methods: {
        toggleModal() {
            const body = document.querySelector("body")
            this.active = !this.active;
            this.active
                ? body.classList.add("modal-open")
                : body.classList.remove("modal-open")
            setTimeout(() => (this.show = !this.show), 10)
        },
        hideModal(){
            this.active = false
            this.show= false
        },
        startIssue() {         
            if (this.validate()){
                this.join(this.issue)
                this.hideModal() 
            }   
           
        },        
        finishIssue() {   
            this.active= true
            this.show = true
            this.finish(true)
            this.issue.id = 1
            this.issue.playerName= ''            
        },
        validate() {

            if (this.issue.playerName && this.issue.id) {
                return true;
            }

            this.errors = [];

            if (!this.issue.id) {
                this.errors.push('Issue required.');
            }
            if (!this.issue.playerName) {
                this.errors.push('Player name requiered.');
            }

            return false
        }

    }
}
</script>

<style scoped>
    .card {
        padding: 30,0,30,0;
        margin-top: 70px;
        background-color:rgb(122, 38, 38);     
        border-radius: 2.8rem;  
    }
    .table-align {
        margin-left: 20px;
    }
    .card-text {
        color: white;
    }
    .card-player {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        perspective: 10rem;
        perspective-origin: bottom;
        max-width: 100%;
        height: 100%;
        margin-top: 10px;
    }

    .card-selected {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3993ff;
        width: 3.5rem;
        height: 6rem;
        border-radius: .6rem;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        overflow: hidden;
        background: linear-gradient(
            45deg,#3993ff 12%,transparent 0,transparent 88%,#3993ff 0),linear-gradient(
            135deg,transparent 37%,#1a7bf2 0,#1a7bf2 63%,transparent 0),linear-gradient(
            45deg,transparent 37%,#3993ff 0,#3993ff 63%,transparent 0),#74b3ff;
        background-size: 17px 17px;
        border: 1px solid rgba(168,174,178,.4);
        box-shadow: 0 2px 4px rgb(168 174 178 / 40%);
    }

    .card-reveal {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3993ff;
        width: 3.5rem;
        height: 6rem;
        border-radius: .6rem;
        color: white;
        font-size: larger;
        font-family: fantasy;        
    }    
</style>