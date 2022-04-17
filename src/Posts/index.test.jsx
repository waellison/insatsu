import React from 'react';
import renderer from 'react-test-renderer';
import fetchMock from "jest-fetch-mock";
import Posts from './index';

fetchMock.enableMocks();

it('renders a list of posts if a nonzero number of posts is found', () => {
    const postListMock = [
        {
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
            "slug": "fare-concrete-hill-apparatus-imported",
            "summary": "Mouth stuff statement thousand economic should. Majority nature back mean.",
            "tags": []
        },
        {
            "categories": [
                {
                    "id": 11,
                    "name": "Thong",
                    "parentCategoryId": null,
                    "slug": "thong",
                    "summary": "Body some service family western fast open community. Decide together morning player economic. Item product will stock.",
                    "taxonomyType": "category"
                },
                {
                    "id": 14,
                    "name": "Serving Pendant",
                    "parentCategoryId": null,
                    "slug": "serving-pendant",
                    "summary": "Present realize medical very expect short page. Before management else drug nor fish.",
                    "taxonomyType": "category"
                }
            ],
            "content": "Your member practice option follow exist different. Business concern weight particularly several development.\n\nMight especially we check hope official. Never instead than seek win after country include.\n\nCourt sit join book tell attack.\n\nOn least certainly show federal. Bag husband last subject third.\n\nMust protect life exactly tend brother. Citizen under while today gun night.\n\nUse car range mean resource bar. Account fly word out because if. Table beat professor performance life month.\n\nProfessor night bring value. Hope care spend certain. Candidate country couple foreign our accept.\n\nType tree scene image book Congress. Fact system performance no.\n\nTerm treatment left near event assume. Memory already later clear I stop budget. Less practice hard worker effort.\n\nRecord difference half across identify any window. Almost career kitchen shoulder human type.",
            "id": 2,
            "is_published": true,
            "name": "Phrases Relationship Frequently Pushing Cest Blank",
            "slug": "phrases-relationship-frequently-pushing-cest-blank",
            "summary": "Prove shoulder role billion court such foreign. Through rule spend behind.",
            "tags": []
        },
        {
            "categories": [
                {
                    "id": 4,
                    "name": "Actress",
                    "parentCategoryId": null,
                    "slug": "actress",
                    "summary": "Serve hope service win.",
                    "taxonomyType": "category"
                },
                {
                    "id": 16,
                    "name": "Starsmerchant Nuts",
                    "parentCategoryId": null,
                    "slug": "starsmerchant-nuts",
                    "summary": "Practice bar budget to always. According order how nation.",
                    "taxonomyType": "category"
                },
                {
                    "id": 17,
                    "name": "Foundations",
                    "parentCategoryId": null,
                    "slug": "foundations",
                    "summary": "Pattern sit friend trial. Plant product nation bad the.",
                    "taxonomyType": "category"
                },
                {
                    "id": 18,
                    "name": "Meanwhile",
                    "parentCategoryId": null,
                    "slug": "meanwhile",
                    "summary": "Year surface coach meeting middle worker term. Perhaps might agent court serious. Statement debate hand number audience little.",
                    "taxonomyType": "category"
                }
            ],
            "content": "Alone discover as fish. Present hold particular stop simply age contain. System answer where across amount.\n\nSit end above environmental experience maintain can. Suddenly paper mention pull major. Create wrong family agency many.\n\nJoin data line and discuss quite about. Game leg trade operation anything director.\n\nLater rest sister race among PM. Worry happen activity step. Nation large already push their bit.\n\nDeep Democrat know not guess. Against boy service according record. Kitchen occur develop.\n\nOperation require herself social second hold suggest. Executive receive quite allow.\n\nDream visit rather shoulder behavior. Respond around coach subject watch seek. Us technology option attorney school accept week attorney. Relate power understand.\n\nHundred court soldier responsibility truth happen team. Provide important threat fast. How project western truth others relate.\n\nRelationship state establish suffer trade. News whatever statement air model provide.\n\nUs ok year evening because beat debate. Success memory scientist write world every tree.",
            "id": 3,
            "is_published": true,
            "name": "Formula Designated Days Finances Depot",
            "slug": "formula-designated-days-finances-depot",
            "summary": "Full among into authority from.",
            "tags": []
        },
    ];

    jest.mock('./index.jsx');
    fetch.mockResponseOnce(JSON.stringify(postListMock));

    const post = renderer.create(<Posts />);
    let tree = post.toJSON();
    expect(tree).toMatchSnapshot();
})
