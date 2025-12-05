import SearchBar from "../components/SearchBar.tsx";
import styled from "styled-components";

const Title = styled.h2`
    font-weight: 800;
    margin-bottom: 12px;
    font-size: 40px;
    
    
    
`;
const Wrapper = styled.div`
        width: 100vw;
        height: 100dvh;
        display: flex;
        justify-content: center;
        align-items: center;
    `;


function Home() {
    

    return (

        <Wrapper>
            <div>
                <Title>Movie Search</Title>
                <SearchBar />

            </div>
        </Wrapper>
    );
}

export default Home;