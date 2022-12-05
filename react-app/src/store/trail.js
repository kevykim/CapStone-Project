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

export const thunkCreateTrail = (formData) => async dispatch => {
    const response = await fetch('/api/trails/', {
        method: 'POST',
        // headers: {'Content-Type': 'application/json'},
        // body: JSON.stringify(payload)
        body: formData
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(actionCreateTrail(data))
        return data
    }
}

export const thunkGetTrail = () => async dispatch => {
    const response = await fetch("/api/trails/", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if(response.ok) {
        const data = await response.json()
        dispatch(actionGetTrail(data))
    }
}

export const thunkGetCurrentTrail = () => async dispatch => {
    const response = await fetch("/api/trails/current", {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });
    if(response.ok) {
        const data = await response.json()
        dispatch(actionGetCurrentTrail(data))
    }
}

export const thunkGetSingleTrail = (id) => async dispatch => {
  const response = await fetch(`/api/trails/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(actionGetSingleTrail(data));
  }
};

export const thunkUpdateTrail = (payload) => async dispatch => {
    const {name, city, country, state, resort, difficulty, description, length, elevation, routeType, previewImg} = payload
    const formData = new FormData()
    formData.append("name", name);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("resort", resort);
    formData.append("difficulty", difficulty);
    formData.append("description", description);
    formData.append("length", length);
    formData.append("elevation", elevation);
    formData.append("routeType", routeType);
    formData.append("previewImg", previewImg);
  const response = await fetch(`/api/trails/${payload.id}`, {
    method: "PUT",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(payload)
    body: formData
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(actionUpdateTrail(data));
    return data;
  }
};

export const thunkDeleteTrail = (id) => async dispatch => {
    const response = await fetch(`/api/trails/${id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        dispatch(actionDeleteTrail(id))
    }
}



const initialState = {}

const trailReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case createTrail:
            newState[action.trail.id] = action.trail;
            return newState
        case getTrail:
            newState = {};
            action.trails.trails.forEach((trail) => {
                newState[trail.id] = trail;
            })
            return newState
        case getCurrentTrail:
            newState = {};
            action.trails.trails.forEach((trail) => {
                newState[trail.id] = trail;
            })
            return newState
        case getSingleTrail:
            newState = {};
            newState[action.trail.id] = action.trail
            return newState
        case updateTrail:
            newState[action.trail.id] = action.trail
            return newState
        case deleteTrail:
            delete newState[action.id]
            return newState
        default:
            return state
    }
}



export default trailReducer