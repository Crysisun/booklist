export default function(state = null, action) {//state here is not application state
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}