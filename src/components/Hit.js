import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import styled from 'styled-components';

const Article = styled.article`
  background: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
  padding: 29px;
`;

const Title = styled.h1`
  font-family: Helvetica;
  font-size: 20px;
  font-weight: bold;
  color: #2e2c70;
  letter-spacing: 0.28px;
  line-height: 25px;
  margin-top: 1rem;
`;

const Description = styled.p`
  font-family: Helvetica;
  font-size: 16px;
  color: #4a4a4a;
  letter-spacing: 0.2px;
  line-height: 28px;
  margin: 1rem 0;
`;

const Label = styled.span`
  font-family: Helvetica;
  font-size: 12px;
  color: #4a4a4a;
  letter-spacing: -0.56px;
  text-transform: uppercase;
`;

function Tag({ tags }) {
  return (
    <div className="flex items-center">
      <svg height="12" viewBox="0 0 12 12" width="12" className="mr-2">
        <path d="m0 0h12v12h-12z" fill="#c75000" fillRule="evenodd" />
      </svg>

      <Label>{tags.join(' & ')}</Label>
    </div>
  );
}

export function Hit({ hit }) {
  return (
    <Article>
      <a href={hit.url}>
        <Tag tags={hit.categories} />

        <Title>
          <Highlight tagName="mark" attribute="title" hit={hit} />
        </Title>

        <Description>
          <Snippet tagName="mark" attribute="content" hit={hit} />
        </Description>
      </a>
    </Article>
  );
}
