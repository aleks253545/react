

export let downloadRepos=(repos)=>({
    type:'DOWNLOAD_REPOS',
    repos
});
export let changeLanguage=(data)=>({
    type:'CHANGE_LANGUAGE',
    data
});
export let changeTag=(data)=>({
    type:'CHANGE_TAG',
    data
});
export let onChangeDisplay=(value)=>({
    type:'CHANGE_DISPLAY',
    value
});
export let addVisibleRepos=()=>({
    type:'ADD_VISIBLE_REPOS',
});
export let changeLike=(id)=>({
    type:'CHANGE_LIKE',
    id
});

let initialState={filterLanguage:'JavaScript',filterTag:'',findRepos:[],visibleIndex:0,activeTag:'',display:'block',my_list:[]};
let searchReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'DOWNLOAD_REPOS':{
            action.repos.forEach(itemRepos=>{
                state.my_list.forEach(listItem=>{
                    if(itemRepos.id===listItem.id){
                        itemRepos.like=listItem.like;
                    }
                })
            })
            return {
                ...state,
                findRepos:action.repos,
                visibleIndex:0,
                activeTag:state.filterTag,
                filterTag:''
            }
        }
        case 'CHANGE_LANGUAGE':{
            return{
                ...state,
                filterLanguage:action.data
            }
        }
        case 'CHANGE_TAG':{
            return{
                ...state,
                filterTag:action.data
            }
        }
        case 'ADD_VISIBLE_REPOS':{
            return{
                ...state,
                visibleIndex:(state.visibleIndex>state.findRepos.length-4)?state.findRepos.length:state.visibleIndex+4
            }
        }
        case 'CHANGE_DISPLAY':{
            return{
                ...state,
                display:action.value
            }
        }
        case 'CHANGE_LIKE':{
                let MyList=state.my_list.concat(),iterator=0;
                for(let item of state.findRepos ){
                    iterator++;
                    if(item.id===action.id && !item.like){
                        MyList.push({...item,like:!item.like})
                        break
                    }else
                    if ( iterator===29 || item.id===action.id && item.like){
                        MyList.forEach((item,i)=>{
                            if(item.id===action.id){
                                MyList.splice(i,1);
                            }
                        })
                    }
                }
            return {
                ...state,
                my_list:MyList,
                findRepos:state.findRepos.map(item=>{
                    if(item.id===action.id){
                        return {
                            ...item,
                            like:!item.like
                        }
                    }
                    else {return {...item}}
                }),
            }
        }
        default:{
            return state;
        }
    }
}

export const getReposFromApi = (language,tag)=>{
        return (dispatch)=>{
        fetch(`https://api.github.com/search/repositories?q=${tag}+language:${language}`)
        .then(res=>res.json())
        .then(data=>{
            dispatch(downloadRepos(data.items.map(item=>{return {id:item.id,name:item.name,watchers:item.watchers,language:item.language,description:item.description,like:false}})));
            dispatch(addVisibleRepos());
        })
    }
}
export default searchReducer;