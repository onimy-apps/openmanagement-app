import * as types from './index';

export const fetchProjectsListAction = (user) => {
  return {
    type: types.FETCH_PROJECTS_LIST,
    user
  }
};
