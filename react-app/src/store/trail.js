// TYPES


const createTrail = '/trail/createTrail'
const getTrail = '/trail/getTrail'
const getCurrentTrail = '/trail/getCurrentTrail'
const getSingleTrail = '/trail/getSingleTrail'
const updateTrail = '/trail/updateTrail'
const deleteTrail = '/trail/deleteTrail'





// ACTION CREATORS

const actionCreateTrail = (trail) => {
    return {
        type: createTrail,
        trail
    }
}

const actionGetTrail = (trails) => {
    return {
        type: getTrail,
        trails
    }
}

const actionGetCurrentTrail = (trails) => {
    return {
        type: getCurrentTrail,
        trails
    }
}

const actionGetSingleTrail = (trail) => {
    return {
        type: getSingleTrail,
        trail
    }
}

const actionUpdateTrail = (trail) => {
    return {
        type: updateTrail,
        trail
    }
}

const actionDeleteTrail = (id) => {
    return {
        type: deleteTrail,
        id
    }
}






// THUNKS














const initialState = {}

const trailReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        default:
            return state
    }
}



export default trailReducer