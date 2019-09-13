export const getData = () => {
  return {
    type: "FETCHING_DATA"
  };
};

export const getDataSuccess = data => {
  return {
    type: "ADD_STATE",
    data
  };
};

export const getDataFailure = () => {
  return {
    type: "FETCHING_DATA_FAILURE"
  };
};

export const searchData = (data, indx) => {
  return {
    type: "SEARCH_ALL",
    data
  };
};

export const membersGet = () => {
  return dispatch => {
    fetch("https://api.propublica.org/congress/v1/115/senate/members.json", {
      headers: { "X-API-Key": "W2E9JmXSgPD2ZZHunBHRN7iQWeHqDnJeMNWohZ5D" }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then(data => {
        dispatch(getDataSuccess(data.results[0].members));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
