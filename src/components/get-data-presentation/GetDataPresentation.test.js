import React from 'react';
test('Render a div', () => {
    const wrapper = shallow(
        <div>Hello Jest!</div>
    );
    expect(wrapper).toMatchSnapshot();
});
