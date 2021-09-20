export const getMembers = ( state ) => {
    return state.members
}

export const getCurrentUser = ( state ) => {
     return state.currentPlayerName
}

export const getIssue = ( state ) => {
    let status = "reveal"
    let avg = 0
    const {issueNumber, members} = state
        
    if (issueNumber == null)
        status = null
    else{
        if ( members.some( ( member ) => member.status == null || member.status == 'waiting' ))
            status = 'voting'
    }

    const issue = {
        "id": issueNumber,
        "status": status,
        "members": members
    }


    if (status == "reveal")
    {
        let sum = members.reduce(( previous, current )  => previous +  current.value,0 )
        avg = sum / members.length
        issue.avg = avg == 0 ? '?' : avg.toFixed(2)
    }



    return issue
}