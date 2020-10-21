const initialState = {
  name: "",
  movies: [],
  input: "",
  dog: {
    message: "",
    status: "",
  },
};

const reducer1 = (state = initialState, action: any) => {
  switch (action.type) {
    case "YO":
      return {
        name: "duy",
      };

    case "DATA_RECEIVED":
      return {
        ...state,
        movies: action.payload,
      };

    case "DELIVER_INPUT":
      console.log("2");
      return {
        ...state,
        input: action.payload,
      };

    case "POST_SUCCESS":
      console.log("5");
      return {
        ...state,
        dog: { ...action.payload },
      };

    default:
      return state;
  }
};

export default reducer1;
