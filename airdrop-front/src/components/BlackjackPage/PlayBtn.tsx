import { PlayButton, PlayButtonDiv } from "./css/BlackjackPage";



function Playbtn() {
    return (

        <PlayButtonDiv>
            <PlayButton to="/events/blackjack/play">
                    <span>PLAY</span>
            </PlayButton>
        </PlayButtonDiv>
    )
}

export default Playbtn;