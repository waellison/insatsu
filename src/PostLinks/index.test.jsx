import React from 'react';
import renderer from 'react-test-renderer';
import PostLinks from './index';

test('PostLinks renders as expected with prev/next links', () => {
    const navBar = renderer.create(<PostLinks prev={7} next={9}/>);
    let tree = navBar.toJSON();
    expect(tree).toMatchSnapshot();
});

test('PostLinks renders as expected with next link only', () => {
    const navBar = renderer.create(<PostLinks next={9}/>);
    let tree = navBar.toJSON();
    expect(tree).toMatchSnapshot();
});

test('PostLinks renders as expected with prev link only', () => {
    const navBar = renderer.create(<PostLinks prev={9}/>);
    let tree = navBar.toJSON();
    expect(tree).toMatchSnapshot();
});
