import styled from "styled-components";
import SearchBar from "../components/SearchBar.tsx";

function Home() {

const Wrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    flex-direction: column;
    gap: 1rem;
    

`;

    return (

            <Wrapper>
                <h1>Movie Search</h1>
                <SearchBar />

            </Wrapper>

    );
}

export default Home;