import React from "react";
import renderer from 'react-test-renderer';
import fetchMock from "jest-fetch-mock";
import Post from './index';

fetchMock.enableMocks();

it('renders as expected when given a post to render', () => {
    const postMock = {
        "categories": [
            {
                "id": 16,
                "name": "Starsmerchant Nuts",
                "parentCategoryId": null,
                "slug": "starsmerchant-nuts",
                "summary": "Practice bar budget to always. According order how nation.",
                "taxonomyType": "category"
            }
        ],
        "content": "Line option improve trip. Try our throughout drop three even late.\n\nLow start trouble subject significant threat nature. Training then own.\n\nLarge history husband. Down summer wind experience have. Truth wear some city.\n\nScene until already. Late dog lay something practice.\n\nVoice he effort information military soldier. Republican scene three art institution image most organization. Million report there child.\n\nWould instead too peace her general scene. Difficult pressure positive head research last.\n\nNot word reflect despite speech range series. Interview current nice I fly human. Prevent hour house rather design. When coach green short really create major.\n\nLand single him way value network tonight. Collection mean already conference. Everyone by have figure thus may pick.\n\nParticular you management force population. Receive time personal hair yes feel.\n\nTonight recent site analysis could investment street bar. Culture century game. War if drive minute garden into ask.",
        "id": 1,
        "is_published": true,
        "name": "Fare Concrete Hill Apparatus Imported",
        "next_id": 2,
        "previous_id": null,
        "slug": "fare-concrete-hill-apparatus-imported",
        "summary": "Mouth stuff statement thousand economic should. Majority nature back mean.",
        "tags": []
    };

    jest.mock('./index.jsx');
    fetch.mockResponseOnce(JSON.stringify(postMock));

    const post = renderer.create(<Post />);
    let tree = post.toJSON();
    expect(tree).toMatchSnapshot();
    expect(fetch).toHaveBeenCalledTimes(1);
});

it('renders as expected upon error', () => {
    fetch.mockReject(() => Promise.reject("404 not found"));

    const post = renderer.create(<Post />);
    // do not set state here
    let tree = post.toJSON();
    expect(tree).toMatchSnapshot();
});
