import React from 'react';

import {
	Icon,
	Text,
	FeatureCard,
	ProductFeaturesContainer
} from './Styles';

const ProductFeatures = () => {
	return (
		<ProductFeaturesContainer>
			<FeatureCard>
				<Icon src='#' />
				<Text>Facilis cumque animi saepe labore laudantium explicabo voluptate quia, aliquam incidunt vel quidem quis voluptatem voluptates illum aperiam ipsa possimus porro sed. Cupiditate officia cum tempora atque, unde magnam corrupti</Text>
			</FeatureCard>

			<FeatureCard>
				<Icon src='#' />
				<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, nihil, earum. Pariatur excepturi dolores omnis quod laudantium, debitis sapiente reiciendis architecto aliquam modi, reprehenderit, eos facere</Text>
			</FeatureCard>

			<FeatureCard>
				<Icon src='#' />
				<Text>Eeos facere officia consequatur provident at explicabo libero voluptate. Doloribus provident amet possimus dolorum laboriosam, minus sunt earum iure suscipit, officia obcaecati, quod nobis nemo asperiores</Text>
			</FeatureCard>

			<FeatureCard>
				<Icon src='#' />
				<Text>Dolores omnis quod laudantium, debitis sapiente reiciendis architecto aliquam modi, reprehenderit, eos facere officia consequatur provident at explicabo libero voluptate. Doloribus provident amet possimus</Text>
			</FeatureCard>

			<FeatureCard>
				<Icon src='#' />
				<Text>Pariatur excepturi dolores omnis quod laudantium, debitis sapiente reiciendis architecto aliquam modi, reprehenderit, eos facere officia consequatur provident at explicabo libero voluptate</Text>
			</FeatureCard>

			<FeatureCard>
				<Icon src='#' />
				<Text>Possimus dolorum laboriosam, minus sunt earum iure suscipit, officia obcaecati, quod nobis nemo asperiores? Facilis cumque animi saepe labore laudantium explicabo voluptate quia, aliquam incidunt vel quidem quis voluptatem</Text>
			</FeatureCard>
		</ProductFeaturesContainer>
	);
};

export default ProductFeatures;
