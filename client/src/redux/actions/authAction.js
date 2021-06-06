export const TYPES = {
  AUTH: "AUTH",
};

export const login = (data) => (dispatch) => {
  try {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    console.log(data);
  } catch (err) {}
};
