export const loadMembers = async({commit}) => {
    const data = [
        {"name": "florencia", "status": "waiting"}, 
        {"name": "kut", "status": "waiting"}, 
        {"name": "lucho", "status": "waiting"}
    ] 

    const members = []
    for (let id of Object.keys(data)){
        members.push ({
            ...data[id]
        })
    }

    commit('setMembers', members)
}

export const vote = async({commit}, card) => {
    commit('vote', card) 
}

export const join = async({commit}, issue) => {
    commit('join', {...issue })    
}

export const initialize = async({commit}) => {
    commit('initialize') 
}