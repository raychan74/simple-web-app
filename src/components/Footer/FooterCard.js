import React from 'react';

import {
	Link,
	CardHeading,
} from './Styles';

const FooterCard = ({ cardInfo }) => {
	return (
		<React.Fragment>
			<CardHeading>{cardInfo.heading}</CardHeading>
			{cardInfo.items.map(item => {
				return <Link key={item} href='#'>{item}</Link>;
			})}
		</React.Fragment>
	);
};

export default FooterCard;
