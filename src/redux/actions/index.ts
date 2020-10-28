//**All actions stay here*/
//**Actions types will also be in the types.ts file */

export const fetchDogImage = () => {
  return {
    type: 'FETCH_ME_SOME_DOG',
  };
};

export const deliverImage = (data: any) => {
  return {
    type: 'IMAGE_COMING',
    payload: data,
  };
};
