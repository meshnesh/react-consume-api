import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { LogoutButton } from '../../../components/Navigation/LoginButton';

describe('Button', () => {
	const mockFn = jest.fn();
	it('should be defined', () => {
		expect(LogoutButton).toBeDefined();
	});
    
	it('should render correctly', () => {
		const tree = shallow(
			<LogoutButton name='button test' handleClick={mockFn} />
		);
		expect(tree).toMatchSnapshot();
	});

});
