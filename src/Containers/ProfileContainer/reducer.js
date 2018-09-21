let DefaultState = {
  nick_name: "Laxman Gautam",
  fields: {
    weight: "60",
    height: "170",
    birthDate: "1995-01-01",
    photo: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
    email:"laxman@gmail.com",
    password:"12345",
    currentPassword:"",
    newPassword:"",
    confirmPassword:"",
    passError:"NO_ERROR",
    
  },
  error:{
    hasError: false,
    message: ''
  }
}

const ProfileReducers =(state: Object= DefaultState, action: Function) => {
  let fields = null;
  let error;
  switch (action.type) {

    case "CHANGE_NAME":
    return {
      ...state, nick_name: action.payload
    }

    case "CHANGE_BIRTH_DATE":
    fields = {...state.fields};
    fields['birthDate']= action.payload
    return {
      ...state, fields
    }

    case "CHANGE_WEIGHT":
    fields = {...state.fields};
    fields['weight']= action.payload
    return {
      ...state, fields
    }

    case "CHANGE_HEIGHT":
    fields = {...state.fields};
    fields['height']= action.payload
    return {
      ...state, fields
    }

    case "CHANGE_EMAIL":
    fields = {...state.fields};
    fields['email']= action.payload
    return {
      ...state, fields
    }
    
    case "CHANGE_AVATAR":
    fields = {...state.fields};
    fields['photo']= action.payload
    return {
      ...state, fields
    }

    case "PUT_PASSWORD":
    {
      switch (action.field) {
        case "Current":
        fields ={...state.fields};
        fields['currentPassword']=action.payload
        return{
          ...state, fields
        }

        case "New":
        fields ={...state.fields};
        fields['newPassword']=action.payload;
        return{
            ...state, fields
        }

        case "Confirm":
        fields ={...state.fields};
        fields['confirmPassword']=action.payload
        return{
          ...state, fields
        }
        default:
        return{
          ...state, fields
        }
      }
    }

    case "SHOW_PASS_ERROR":
    fields ={...state.fields};
    fields['passError']=action.payload
    return{
      ...state, fields
    }

    case "CHANGE_PASSWORD":
    fields ={...state.fields};
    fields['password']=action.payload
    return{
      ...state, fields
    }
    case "CATCH_ERROR":
    error = {...state.error};
    error['hasError']= true;
    error['message'] = action.payload;
    return {
      ...state, error
    }
    case "REMOVE_ERROR":
    error = {...state.error};
    error['hasError']= false;
    error['message'] = action.payload;
    return {
      ...state, error
    }
    default:
      return state;
  }
}

export default ProfileReducers;
