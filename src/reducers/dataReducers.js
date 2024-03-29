const initialState = {
  allMembers: [],
  members: [],
};

export const ADD_STATE = 'ADD_STATE';
export const SEARCH_ALL = 'SEARCH_ALL';

const selectOfValue = (value, select, state) => {
  let updatedMembers = [];
  switch (select) {
    case 'id':
      state.allMembers.forEach(item => {
        if (item.id.toLowerCase().indexOf(value) >= 0) {
          return updatedMembers.push(item);
        }
      });
      return updatedMembers;
    case 'gender':
      state.allMembers.forEach(item => {
        if (item.gender.toLowerCase().indexOf(value) >= 0) {
          return updatedMembers.push(item);
        }
      });
      return updatedMembers;
    case 'party':
      state.allMembers.forEach(item => {
        if (item.party.toLowerCase().indexOf(value) >= 0) {
          return updatedMembers.push(item);
        }
      });
      return updatedMembers;
    case 'title':
      state.allMembers.forEach(item => {
        if (item.title.toLowerCase().indexOf(value) >= 0) {
          return updatedMembers.push(item);
        }
      });
      return updatedMembers;
    case 'name':
      state.allMembers.forEach(item => {
        if (
          item.first_name.toLowerCase().indexOf(value) >= 0 ||
          item.last_name.toLowerCase().indexOf(value) >= 0
        ) {
          return updatedMembers.push(item);
        }
      });
      return updatedMembers;
    case 'All':
      state.allMembers.forEach(item => {
        if (
          item.id.toLowerCase().indexOf(value) >= 0 ||
          item.gender.toLowerCase().indexOf(value) >= 0 ||
          item.party.toLowerCase().indexOf(value) >= 0 ||
          item.title.toLowerCase().indexOf(value) >= 0 ||
          item.first_name.toLowerCase().indexOf(value) >= 0 ||
          item.last_name.toLowerCase().indexOf(value) >= 0
        ) {
          return updatedMembers.push(item);
        }
      });
      return updatedMembers;
    // eslint-disable-next-line no-fallthrough
    default:
      return state.allMembers;
  }
};

const searchAll = (value, select, state) => {
  let updatedMembers = [];
  if (state) {
    updatedMembers = selectOfValue(value.toLowerCase(), select, state);
  }
  if (value === '') {
    updatedMembers = state.allMembers;
  }

  return { ...state, members: updatedMembers };
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STATE:
      return { ...state, members: action.data, allMembers: action.data };
    case SEARCH_ALL:
      return searchAll(
        action.data.value.valueInput,
        action.data.value.valueSelect,
        action.data.dataReducer,
      );
    default:
      return state;
  }
};

export default dataReducer;
