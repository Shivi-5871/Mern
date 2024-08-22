import { useState } from 'react';

const LikeUnlike = () => {

    const [isLiked, setIsLiked] = useState("Liked");

    function handleToggleEvent() {
        setIsLiked(prevState => prevState === "Liked" ? "Not Liked" : "Liked");
    }

    return ( 
        <div>
            <button onClick={handleToggleEvent}>Switch to {isLiked === "Liked" ? 'Not Liked' : 'Liked'}</button>
            <p>Current State: {isLiked}</p>
        </div>

     );
}
 
export default LikeUnlike;