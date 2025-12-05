import { useSearchParams, Link } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export type MovieItem = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};

type ApiResponse = {
    Search: MovieItem[];
    totalResults: string;
    Response: string;
}

const Wrapper = styled.div`
    padding: 30px;
    max-width: 1400px;
    margin: 0 auto;
`;

const Title = styled.h3`
    margin-bottom: 24px;
    font-size: 24px;
    color: #333;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Item = styled(Link)`
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    text-decoration: none;
    color: inherit;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
`;

const Cover = styled.img`
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    background-color: #f5f5f5;
`;

const InfoContainer = styled.div`
    padding: 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const MovieTitle = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const MovieInfo = styled.div`
    font-size: 12px;
    color: #777;
`;

const EmptyMessage = styled.div`
    text-align: center;
    padding: 60px 20px;
    color: #999;
    font-size: 16px;
`;

function Search() {
    const [params] = useSearchParams();
    const keyword = params.get("keyword") || "";
    const [list, setList] = useState<MovieItem[]>([]);

    useEffect(() => {
        if (!keyword) return;

        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&s=${keyword}`)
            .then(res => res.json())
            .then((data: ApiResponse) => {
                if (data.Response === "True") {
                    setList(data.Search);
                } else {
                    setList([]);
                }
            })
    }, [keyword]);

    return (
        <Wrapper>
            <Title>검색 결과: {keyword}</Title>
            {list.length === 0 ? (
                <EmptyMessage>검색 결과가 없습니다.</EmptyMessage>
            ) : (
                <GridContainer>
                    {list.map((item) => (
                        <Item to={`/detail/${item.imdbID}`} key={item.imdbID}>
                            <Cover
                                src={item.Poster !== "N/A" ? item.Poster : "/placeholder.png"}
                                alt={item.Title}
                            />
                            <InfoContainer>
                                <MovieTitle>{item.Title}</MovieTitle>
                                <MovieInfo>
                                    {item.Year} · {item.Type}
                                </MovieInfo>
                            </InfoContainer>
                        </Item>
                    ))}
                </GridContainer>
            )}
        </Wrapper>
    );
}

export default Search;