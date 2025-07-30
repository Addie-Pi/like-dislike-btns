
type ButtonState = {
    likes:number;
    dislikes:number;
    isLiked:boolean;
    isDisliked:boolean;
}

type Action =  { type: "LIKE" } | { type: "DISLIKE" }

export const initialState: ButtonState = {
    likes: 100,
    dislikes: 25,
    isLiked: false,
    isDisliked: false
};  

// sing reducer to simplify the logic of like and dislike buttons
export default function buttonReducer(state: ButtonState, action: Action): ButtonState{
    switch(action.type){
        case "LIKE":
            // if the button is already liked
            if(state.isLiked){
                return{
                    ...state, 
                    likes: state.likes - 1,
                    isLiked: false
                }
            }
            // if the button is already disliked
            if(state.isDisliked){
                return{
                    ...state, 
                    likes: state.likes + 1, 
                    dislikes: state.dislikes - 1,
                    isLiked: true, 
                    isDisliked: false
                }
            }
            // init button state, the button is not liked or disliked
            return{
                ...state, 
                likes: state.likes + 1,
                isLiked: true
            }
        case "DISLIKE":
            // if the button is already disliked
            if(state.isDisliked){
                return{
                    ...state, 
                    dislikes: state.dislikes - 1,
                    isDisliked: false
                }
            }
            // if the button is already liked
            if(state.isLiked){
                return{
                    ...state, 
                    dislikes: state.dislikes + 1,
                    likes: state.likes - 1,
                    isLiked: false,
                    isDisliked: true
                }
            }
            // init button state, the button is not liked or disliked
            return{
                ...state, 
                dislikes: state.dislikes + 1,
                isDisliked: true
            }
                
        default:
            return state;
    }

}
