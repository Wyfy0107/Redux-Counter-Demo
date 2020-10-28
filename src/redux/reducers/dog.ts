const initialState = {
  dogData: {},
};

const dogReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_ME_SOME_DOG':
      console.log('start fetching');
      return state;

    case 'IMAGE_COMING':
      console.log(action);
      return {
        ...state,
        dogData: action.payload,
      };

    default:
      return state;
  }
};

export default dogReducer;
