import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

// OMDB API의 상세 정보 타입
type MovieDetail = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    imdbRating: string;
    imdbID: string;
    Type: string;
};

const Wrapper = styled.div`
    padding: 30px;
    max-width: 1200px;
    margin: 0 auto;
`;

const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #f3f3f3;
    color: #333;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 24px;
    
    &:hover {
        background-color: #e8e8e8;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 20px;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Poster = styled.img`
    width: 300px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
    }
`;

const InfoContainer = styled.div`
    flex: 1;
`;

const Title = styled.h2`
    font-size: 32px;
    margin-bottom: 12px;
    color: #333;
`;

const MetaInfo = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    color: #666;
    font-size: 14px;
`;

const Section = styled.div`
    margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 8px;
    color: #333;
`;

const Text = styled.p`
    line-height: 1.6;
    color: #555;
    margin: 0;
`;

const Rating = styled.div`
    display: inline-block;
    background-color: #f0ad4e;
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 18px;
`;

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState<MovieDetail | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=6a0a8eb4&i=${id}&plot=full`)
            .then(res => res.json())
            .then((data: MovieDetail) => {
                setMovie(data);
            })
            .catch(error => {
                console.error("Error fetching movie:", error);
            });
    }, [id]);

    if (!movie) {
        return <Wrapper>Loading...</Wrapper>;
    }

    return (
        <Wrapper>
            <BackButton
                onClick={() => {
                    navigate(-1);
                }}>
                ← 뒤로 가기
            </BackButton>

            <ContentContainer>
                <Poster
                    src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
                    alt={movie.Title}
                />

                <InfoContainer>
                    <Title>{movie.Title}</Title>

                    <MetaInfo>
                        <span>{movie.Year}</span>
                        <span>•</span>
                        <span>{movie.Rated}</span>
                        <span>•</span>
                        <span>{movie.Runtime}</span>
                    </MetaInfo>

                    {movie.imdbRating !== "N/A" && (
                        <Section>
                            <Rating>⭐ {movie.imdbRating}/10</Rating>
                        </Section>
                    )}

                    <Section>
                        <SectionTitle>줄거리</SectionTitle>
                        <Text>{movie.Plot !== "N/A" ? movie.Plot : "줄거리 정보가 없습니다."}</Text>
                    </Section>

                    <Section>
                        <SectionTitle>장르</SectionTitle>
                        <Text>{movie.Genre}</Text>
                    </Section>

                    <Section>
                        <SectionTitle>감독</SectionTitle>
                        <Text>{movie.Director}</Text>
                    </Section>

                    <Section>
                        <SectionTitle>출연</SectionTitle>
                        <Text>{movie.Actors}</Text>
                    </Section>

                    {movie.Awards !== "N/A" && (
                        <Section>
                            <SectionTitle>수상 내역</SectionTitle>
                            <Text>{movie.Awards}</Text>
                        </Section>
                    )}
                </InfoContainer>
            </ContentContainer>
        </Wrapper>
    );
}

export default Detail;