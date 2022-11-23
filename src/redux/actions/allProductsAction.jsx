const testaction = () => async (dispatch) => {
  try {
    dispatch({
      type: 'testdata',
      payload: { hello: 'hello one' },
    });
  } catch (error) {
    dispatch({
      type: 'error_test',
      payload: { error: 'error' },
    });
  }
};

export default testaction;
