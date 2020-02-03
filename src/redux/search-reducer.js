
export const downloadRepos = (repos) => ({
  type: 'DOWNLOAD_REPOS',
  repos,
});
export const changeLanguage = (data) => ({
  type: 'CHANGE_LANGUAGE',
  data,
});
export const changeTag = (data) => ({
  type: 'CHANGE_TAG',
  data,
});
export const onChangeDisplay = (value) => ({
  type: 'CHANGE_DISPLAY',
  value,
});
export const addVisibleRepos = () => ({
  type: 'ADD_VISIBLE_REPOS',
});
export const changeLike = (id) => ({
  type: 'CHANGE_LIKE',
  id,
});

const initialState = {
  filterLanguage: 'JavaScript', filterTag: '', findRepos: [], visibleIndex: 0, activeTag: '', display: 'block', my_list: [],
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DOWNLOAD_REPOS': {
      action.repos.forEach((itemRepos) => {
        state.my_list.forEach((listItem) => {
          if (itemRepos.id === listItem.id) {
            itemRepos.like = listItem.like;
          }
        });
      });
      return {
        ...state,
        findRepos: action.repos,
        visibleIndex: 0,
        activeTag: state.filterTag,
        filterTag: '',
      };
    }
    case 'CHANGE_LANGUAGE': {
      return {
        ...state,
        filterLanguage: action.data,
      };
    }
    case 'CHANGE_TAG': {
      return {
        ...state,
        filterTag: action.data,
      };
    }
    case 'ADD_VISIBLE_REPOS': {
      return {
        ...state,
        visibleIndex: (state.visibleIndex > state.findRepos.length - 4) ? state.findRepos.length : state.visibleIndex + 4,
      };
    }
    case 'CHANGE_DISPLAY': {
      return {
        ...state,
        display: action.value,
      };
    }
    case 'CHANGE_LIKE': {
      const MyList = state.my_list.concat(); let iterator = 0;
      for (const item of state.findRepos) {
        iterator += 1;
        if (item.id === action.id && !item.like) {
          MyList.push({ ...item, like: !item.like });
          break;
        } else
        if (iterator === 29 || item.id === action.id && item.like) {
          MyList.forEach((item, i) => {
            if (item.id === action.id) {
              MyList.splice(i, 1);
            }
          });
        }
      }
      return {
        ...state,
        my_list: MyList,
        findRepos: state.findRepos.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              like: !item.like,
            };
          } return { ...item };
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export const getReposFromApi = (language, tag) => (dispatch) => {
  fetch(`https://api.github.com/search/repositories?q=${tag}+language:${language}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(downloadRepos(data.items.map((item) => ({
        id: item.id,
        name: item.name,
        watchers: item.watchers,
        language: item.language,
        description: item.description,
        like: false,
      }))));
      dispatch(addVisibleRepos());
    });
};
export default searchReducer;
