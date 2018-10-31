export default (state = {}, action) => {
    switch(action.type) {
        case 'LOGIN':
          return {
              uid: user.id
          };
        case 'LOGOUT': 
          return {};
        default:
          return state;
    }
};