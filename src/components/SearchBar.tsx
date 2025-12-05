import {useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router";


const Form = styled.form`
    margin: 0 auto;
    width: 500px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    
    
`;
const Align = styled.div`
     
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;
const Input = styled.input`
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    
`;
const Button = styled.button`
    padding: 12px;
    border: none;
    background-color: #dc3b3b;
    color: #fff;
    border-radius: 8px;
`;
function SearchBar() {
    const [keyword, setKeyword] = useState("");

    const navigate = useNavigate();

    return (
        <div>
            <Form
            onSubmit={e => {
                e.preventDefault();
                navigate(`/search?keyword=${keyword}`)
            }}

            >
                <Align>
                <Input
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="검색어를 입력하세요"

                ></Input>
                <Button>Search</Button>
                </Align>
            </Form>
        </div>
    );
}

export default SearchBar;