// TYPES

const createTrailReview = '/review/createReview'
const getTrailReview = '/review/getTrailReview'
const getCurrentReview = '/review/getCurrentReview'
const updateTrailReview = '/review/updateTrailReview'
const deleteTrailReview = '/review/deleteTrailReview'

// ACTION CREATORS

const actionCreateTrailReview = (review) => {
    return {
        type: createTrailReview,
        review
    }
}

const actionGetTrailReview = (reviews) => {
    return {
        type: getTrailReview,
        reviews
    }
}

const actionGetCurrentReview = (reviews) => {
    return {
        type: getCurrentReview,
        reviews
    }
}

const actionUpdateTrailReview = (review) => {
    return {
        type: updateTrailReview,
        review
    }
}

const actionDeleteTrailReview = (id) => {
    return {
        type: deleteTrailReview,
        id
    }
}

// THUNKS









const initialState = {}

const reviewReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        default:
            return state
    }
}



export default reviewReducer