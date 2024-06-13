import { useEmojiGenerator } from "./useEmojiGenerator";

export default function MapPractice1() {
    const emojisArray = useEmojiGenerator();
    // console.log("emojisArray", emojisArray);
     
    return (
        <div className="mapPractice">
            <h2>Pamela's Emojis</h2>
            <div className="emojiList">
                {emojisArray.map( (emoji) => {
                    return (
                    <div className="emojiList">
                        {emoji}
                    </div>
                    )
                })
            }
            </div>
        </div>
    );
}
