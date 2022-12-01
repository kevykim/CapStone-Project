// constants
const SET_USER = 'session/SET_USER';
// const EDIT_USER = 'session/EDIT_USER'
const REMOVE_USER = 'session/REMOVE_USER';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

// const editUser = (user) => ({
//   type: EDIT_USER,
//   payload: user
// })

const removeUser = () => ({
  type: REMOVE_USER,
})

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
  
    dispatch(setUser(data));
  }
}

export const thunkDemoUser = (email, password) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "demo@aa.io",
      password: "password2",
    }),
  });
  // console.log(response, "thunk");
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return response
  }
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};

export const thunkEditUser = (payload) => async dispatch => {
  const {id, firstName, lastName, profileImg} = payload
  const formData = new FormData()
  formData.append('firstName', firstName)
  formData.append("lastName", lastName)
  formData.append('profileImg', profileImg)
  const response = await fetch(`/api/auth/profile/${id}` , {
    method: "PUT",
    body: formData
  })

   if (response.ok) {
     const data = await response.json();
     dispatch(setUser(data));
     return null;
   } else if (response.status < 500) {
     const data = await response.json();
     if (data.errors) {
       return data.errors;
     }
   } else {
     return ["An error occurred. Please try again."];
   }
}


export const signUp = (username, firstName, lastName, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      firstName,
      lastName,
      email,
      password,
      // profileImg
    }),
  });
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}



export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    default:
      return state;
  }
}
