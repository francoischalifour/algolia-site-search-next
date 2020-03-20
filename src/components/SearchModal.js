import React from 'react';
import Head from 'next/head';
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
  Panel,
  SortBy,
  Pagination,
  ScrollTo,
  ClearRefinements,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import styled from 'styled-components';

import { Hit } from './Hit';

const searchClient = algoliasearch(
  'latency',
  'af044fb0788d6bb15f807e4420592bc5'
);
const indexName = 'PROD_algolia_blog';

export function SearchModal({ onClose }) {
  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      <Head>
        <title>Search | Site Search</title>
      </Head>

      <div className="fixed top-0 bg-white w-full h-full overflow-y-scroll">
        <div className="flex flex-col justify-center">
          <header css={{ background: '#2e2c70' }}>
            <div className="flex justify-center">
              <div className="w-full max-w-5xl flex justify-between items-center p-4 text-white">
                <h1 className="text-2xl tracking-tight">Search</h1>

                <a
                  className="flex flex-col items-center cursor-pointer"
                  onClick={onClose}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-25 h-25"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  <div>esc</div>
                </a>
              </div>
            </div>
          </header>

          <ScrollTo>
            <div className="flex justify-center">
              <div className="flex w-full max-w-5xl p-4">
                <div
                  className="px-4 py-8 mr-8"
                  css={{ flex: 1, background: '#F4F4F4' }}
                >
                  <Header>Filters</Header>

                  <Panel header="Category">
                    <RefinementList attribute="categories" />
                  </Panel>

                  <Panel header="Author">
                    <RefinementList
                      attribute="coauthors.nickname"
                      searchable={true}
                    />
                  </Panel>

                  <ClearRefinements />
                </div>

                <div css={{ flex: 2 }}>
                  <SearchBox
                    autoFocus={true}
                    translations={{ placeholder: 'Search' }}
                  />

                  <div className="flex justify-end my-8">
                    <SortBy
                      items={[{ value: indexName, label: 'Most recent' }]}
                      defaultRefinement={indexName}
                    />
                  </div>

                  <Hits hitComponent={Hit} />

                  <div className="flex items-center justify-center my-8">
                    <Pagination showFirst={false} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollTo>
        </div>
      </div>
    </InstantSearch>
  );
}

const Header = styled.h1`
  font-family: Helvetica;
  font-size: 32px;
  color: #2e2c70;
  letter-spacing: 0.29px;
  line-height: 26px;
  font-weight: bold;
`;
