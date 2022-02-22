import { Logo, LogoImg, Nav, PageHeaderDiv, Title } from "./css/BlackjackPage";





function PageHeader() {
    return (
        <PageHeaderDiv>
            <Logo><LogoImg src="/img/icon-nxdf.png" /></Logo>
            <Title>
                <span>NXDF</span>
                <span>BLACKJACK</span>
            </Title>
            <Nav>
                <li>HOME</li>
                <li>GITHUB</li>
                <li>ABOUT</li>
            </Nav>
        </PageHeaderDiv>
    )
}

export default PageHeader;