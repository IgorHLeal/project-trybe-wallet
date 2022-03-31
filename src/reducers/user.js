// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

const USER = 'USER';

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER:
    return {
      ...state,
      email: action.user.email,
    };
  default:
    return state;
  }
}

export default userReducer;
