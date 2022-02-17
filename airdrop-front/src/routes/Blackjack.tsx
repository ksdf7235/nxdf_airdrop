import BlackjackHeader from '../components/Blackjack/BlackjackHeader';
import { BlackjackWrapper } from '../components/Blackjack/css/blackjack';
import Player from '../components/Blackjack/Player';
import PlayTable from '../components/Blackjack/PlayTable';







function BlackJack() {
    return (
            <BlackjackWrapper>
                <BlackjackHeader />
                <PlayTable />
                <Player />
            </BlackjackWrapper>
    );
}

export default BlackJack;