export default function searchText(STATE = '',action){
    switch(action.type){
        case 'SEARCH_TEXT':
            return action.text
        default:
            return STATE
    }
}