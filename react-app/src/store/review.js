// TYPES

const getAllReview = '/review/getAllReview'
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

const actionGetAllReview = (reviews) => {
    return {
        type: getAllReview,
        reviews
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

export const thunkCreateTrailReview = (payload) => async dispatch => {
    const {trailId, stars, review, reviewImg} = payload
    const formData = new FormData();
    formData.append("trailId", trailId);
    formData.append("stars", stars);
    formData.append("review", review);
    formData.append("reviewImg", reviewImg);
    const response = await fetch(`/api/reviews/trails/${payload.trailId}`, {
        method: "POST",
        // headers: {"Content-Type": "application/json"},
        // body: JSON.stringify(payload)
        body: formData
    });
    if(response.ok) {
        const data = await response.json()
        dispatch(actionCreateTrailReview(data))
        return data
    }
}

export const thunkGetAllReview = () => async dispatch => {
    const response = await fetch('/api/reviews/', {
        method:"GET",
        headers: {"Content-Type": "application/json"}
    });
    if (response.ok) {
        const data = await response.json()
        dispatch(actionGetAllReview(data))
    }
}

export const thunkGetTrailReview = (id) => async dispatch => {
    const response = await fetch(`/api/reviews/trails/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if(response.ok) {
        const data = await response.json()
        dispatch(actionGetTrailReview(data))
    }
}

export const thunkGetCurrentReview = () => async dispatch => {
    const response = await fetch('/api/reviews/current', {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });
    if(response.ok) {
        const data = await response.json()
        dispatch(actionGetCurrentReview(data))
    }
}

export const thunkUpdateTrailReview = (payload) => async dispatch => {
    const {id, trailId, stars, review, reviewImg } = payload;
    const formData = new FormData();
    formData.append("id", id);
    formData.append("trailId", trailId);
    formData.append("stars", stars);
    formData.append("review", review);
    formData.append("reviewImg", reviewImg);
    const response = await fetch(`/api/reviews/${payload.id}`, {
        method: "PUT",
        // headers: {"Content-Type": "application/json"},
        // body: JSON.stringify(payload)
        body:formData
    });
    if(response.ok) {
        const data = await response.json()
        dispatch(actionUpdateTrailReview(data))
        return data
    }
}

export const thunkDeleteTrailReview = (id) => async dispatch => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: "DELETE"
    });
    if(response.ok) {
        dispatch(actionDeleteTrailReview(id))
    }
}










const initialState = {}

const reviewReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case createTrailReview:
            newState[action.review.id] = action.review
            return newState
        case getAllReview:
            newState = {};
            action.reviews.reviews.forEach((review) => {
                newState[review.id] = review;
            })
            return newState
        case getTrailReview:
            newState = {};
            action.reviews.review.forEach((review) => {
                newState[review.id] = review;
            })
            return newState
        case getCurrentReview:
            newState = {};
            action.reviews.review.forEach((review) => {
                newState[review.id] = review;
            })
            return newState
        case updateTrailReview:
            newState[action.review.id] = action.review
            return newState
        case deleteTrailReview:
            delete newState[action.id]
            return newState
        default:
            return state
    }
}



export default reviewReducer