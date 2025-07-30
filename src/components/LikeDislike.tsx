import { useReducer } from "react";
import classNames from "classnames";
import buttonReducer, { initialState } from "../hooks/button.reducer";


export default function LikeDislike(){
  // The following state management is commented out to use the reducer instead
  // const [likes, setLikes] = useState<number>(100);
  // const [dislikes, setDislikes] = useState<number>(25);
  // const [isLiked, setIsLiked] = useState<boolean>(false);
  // const [isDisliked, setIsDisliked] = useState<boolean>(false);

  // const clickLike = () => {
  //   if(!isLiked && !isDisliked) {
  //     setLikes(pre => pre + 1);
  //     setIsLiked(true);
  //     return
  //   }

  //   if(isLiked){
  //     setLikes(pre => pre - 1)
  //     setIsLiked(false);
  //     return
  //   }

  //   if(isDisliked){
  //     setDislikes(pre => pre - 1);
  //     setIsDisliked(false);
  //     setLikes(pre => pre + 1);
  //     setIsLiked(true);
  //     return
  //   }
  // };

  // const clickDislike = () => {
  //   if(!isLiked && !isDisliked) {
  //     setDislikes(pre => pre + 1);
  //     setIsDisliked(true);
  //     return
  //   }

  //   if(isDisliked){
  //     setDislikes(pre => pre - 1)
  //     setIsDisliked(false);
  //     return
  //   }

  //   if(isLiked){
  //     setDislikes(pre => pre + 1);
  //     setIsDisliked(true);
  //     setLikes(pre => pre - 1);
  //     setIsLiked(false);
  //     return
  //   }
  // };

  const [state, dispatch] = useReducer(buttonReducer, initialState)

  return (
    <div>
      <button
        className={classNames("like-button", { liked: state.isLiked })}
       onClick={() => dispatch({ type: "LIKE" })}
      >
        Like | <span className="likes-counter">{state.likes}</span>
      </button>
      <button
        className={classNames("dislike-button", { disliked: state.isDisliked })}
       onClick={() => dispatch({ type: "DISLIKE" })}
      >
        Dislike | <span className="dislikes-counter">{state.dislikes}</span>
      </button>
    </div>
  );
};
