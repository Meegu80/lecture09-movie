import {useState} from "react";
import {useNavigate} from "react-router";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    gap: 10px;
    width: 500px;
    
    
`;
const Input = styled.input`

    width: 350px;
    flex: 1;
    border-radius: 8px;
    padding: 12px;
    border : 1px solid #ccc
`;
const Button = styled.button`
    border-radius: 8px;
    color: white;
    
    padding: 12px 20px;
    background-color: #e74c3c;
    border: none;
    font-size: 16px;
    cursor: pointer;
    

`;

function SearchBar() {

    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    return (

        <div>
            <Form onSubmit={e =>{
                e.preventDefault();
                navigate(`/search?keyword=${keyword}`);
            }}>
                <Input
                    placeholder={"Write a keyword"}
                    onChange={e=> {
                        setKeyword(e.target.value);
                    }
                }></Input>
                <Button>Search</Button>
            </Form>
        </div>
    );
}

export default SearchBar;