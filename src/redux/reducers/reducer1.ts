const initialState = {
  name: "",
};

const reducer1 = (state = initialState, action: any) => {
  switch (action.type) {
    case "YO":
      return {
        name: "duy",
      };

    default:
      return state;
  }
};

export default reducer1;
