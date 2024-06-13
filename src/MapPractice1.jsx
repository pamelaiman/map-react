import { useEmojiGenerator } from "./useEmojiGenerator";

export default function MapPractice1() {
    const emojisArray = useEmojiGenerator();

    const showEmojis = (emoji => {
        return (
        <div className="emojiList">
            {emoji}
        </div>
        )
    }
)

    return (
        <div className="mapPractice">
            <h2>Pamela's Emojis</h2>
            <div className="emojiList">
                {emojisArray.map(showEmojis)}
            </div>
        </div>
    );
}
