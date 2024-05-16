import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
    margin: 10px 0;
    gap: 8px; 
`;

const Title = styled.span`
    font-size: 24px;
    font-weight: bold;
    color: black;
`;

const Redline = styled.div`
    height: 3px;
    width: 4rem;
    margin: 10px 0;
    border-radius: 10px;
    background-color: #b00104;
    flex-grow: 1;
`;

interface Props {
    title: string;
  }

const NewsletterTitle: React.FC<Props> = ({title}) => {
  return (
    <TitleContainer>
        <Title>{title}</Title>
        <Redline />
    </TitleContainer>
  );
};

export default NewsletterTitle;
