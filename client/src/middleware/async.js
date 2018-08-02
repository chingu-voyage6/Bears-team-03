// Async middleware will check if action has a payload or .then call, if it does not it then it will return next action. If it does then it means a promise has resolved and it will copy the action and add on the payload.

export default ({ dispatch }) => {
  return next => action => {
    if(!action.payload || !action.payload.then) {
      return next(action)
    }

    action.payload.then(response => {
      const newAction = {
        ...action,
        payload: response.data
      }
      dispatch(newAction)
    })
  } 
}