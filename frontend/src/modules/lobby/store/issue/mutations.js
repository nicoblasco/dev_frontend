export const setMembers = (state, members) => {
    state.members = [ ...state.members, ...members]
}

export const join = (state, issue) => {
    const idx = state.members.map( m => m.name).indexOf(issue.playerName)
    state.issueNumber = issue.id
    state.currentPlayerName = issue.playerName
    state.status  = issue.status

    if (idx<0)
    {
        const member =  {"name": issue.playerName, "status": issue.status}
        state.members.push(member)
    }
}

export const vote = (state, card) => {
     const idx = state.members.map( m => m.name).indexOf(state.currentPlayerName)
     state.members[idx].status = (card === '?') ? 'passed' : 'voted'
     state.members[idx].value= (card != '?') ? card : 0
}


export const initialize = (state) => {
    state.issueNumber = null
    state.status= null
    state.currentPlayerName= null
    state.members= []
}