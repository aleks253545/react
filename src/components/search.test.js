import searchReducer, { onChangeDisplay, downloadRepos, initialState } from '../redux/search-reducer';

let repos=[
  {id:1,name:'Name',like:false,description:'this description'},
  {id:1,name:'Name',like:false,description:'this description'},
  {id:1,name:'Name',like:false,description:'this description'},
  {id:1,name:'Name',like:false,description:'this description'},
]
it('display has been changed', () => {
  const action = onChangeDisplay('line');
  let newState = searchReducer(initialState,action);
  expect(newState.display).toBe(
    'line'
  );
});
it('repo has been added', () => {
  const action = downloadRepos(repos);
  let newState = searchReducer(initialState,action);
  expect(newState.findRepos).toBe(
    repos
  );
});

