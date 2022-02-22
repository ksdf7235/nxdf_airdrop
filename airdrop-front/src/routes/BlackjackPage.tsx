import { BlackPage, BlackPageWrapper, Dealers } from '../components/BlackjackPage/css/BlackjackPage';
import PageHeader from '../components/BlackjackPage/Pageheader';
import Playbtn from '../components/BlackjackPage/PlayBtn';


function BlackJackPage() {

    return (
        <BlackPageWrapper>
            <BlackPage>
                <PageHeader />
                <Dealers />
                <Playbtn />
            </BlackPage>
        </BlackPageWrapper>
    );
}


export default BlackJackPage;