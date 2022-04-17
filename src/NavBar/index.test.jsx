import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from './index';

test('NavBar renders as expected', () => {
    const navBar = renderer.create(<NavBar/>);
    let tree = navBar.toJSON();
    expect(tree).toMatchSnapshot();
});
