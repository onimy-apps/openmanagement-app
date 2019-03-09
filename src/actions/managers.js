import * as types from './index';

export const createProjectAction = (projectData) => {
  return {
    type: types.CREATE_PROJECT,
    projectData
  }
};
