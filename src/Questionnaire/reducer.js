export default function (state = {
  queryStatus: false,
}, action) {
  switch (action.type) {
    case 'FINISH_QUERY':
      return {
        queryStatus: action.payload,
      };
    default:
      return state;
  }
}
