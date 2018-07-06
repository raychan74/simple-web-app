import React from 'react';

import { DropdownItem, DropdownList } from './Styles';

const Dropdown = ({ navItems }) => {
	return (
		<DropdownList>
			{navItems.map(item => {
				return (
					<DropdownItem href={`#${item.toLowerCase()}`} key={item}>
						{item}
					</DropdownItem>
				);
			})}
		</DropdownList>
	);
};

export default Dropdown;
