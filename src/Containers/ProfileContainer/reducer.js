let DefaultState = {
  fields: {
    weight: "",
  },
}

const ProfileReducers =(state: Object= DefaultState, action: Function) => {
  let fields = null;
  switch (action.type) {

    case "ADD_WEIGHT":
    fields = {...state.fields};
    fields['weight']= action.payload
    return {
      ...state, fields
    }
    default:
      return state;
  }
}

export default ProfileReducers;
