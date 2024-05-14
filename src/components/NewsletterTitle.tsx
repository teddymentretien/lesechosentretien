import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
    gap: 8px; 
`;

const Title = styled.span`
    font-size: 24px;
    font-weight: bold;
    color: black;
`;

const Redline = styled.div`
    height: 2px;
    background-color: red;
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
