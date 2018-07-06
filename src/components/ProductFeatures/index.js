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
				<Icon src='image/2cbox.svg' />
				<Text>Facilis cumque animi saepe labore laudantium explicabo voluptate quia, aliquam incidunt vel quidem quis voluptatem voluptates illum aperiam ipsa possimus porro sed. Cupiditate officia cum tempora atque, unde magnam corrupti</Text>
			</FeatureCard>

			<FeatureCard>
				<Icon src='image/2copy.svg' />
				<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, nihil, earum. Pariatur excepturi dolores omnis quod laudantium, debitis sapiente reiciendis architecto aliquam modi, reprehenderit, eos facere</Text>
			</FeatureCard>

			<FeatureCard>
				<Icon src='image/2link.svg' />
				<Text>Eeos facere officia consequatur provident at explicabo libero voluptate. Doloribus provident amet possimus dolorum laboriosam, minus sunt earum iure suscipit, officia obcaecati, quod nobis nemo asperiores</Text>
			</FeatureCard>

			<FeatureCard>
				<Icon src='image/2location.svg' />
				<Text>Dolores omnis quod laudantium, debitis sapiente reiciendis architecto aliquam modi, reprehenderit, eos facere officia consequatur provident at explicabo libero voluptate. Doloribus provident amet possimus</Text>
			</FeatureCard>

			<FeatureCard>
				<Icon src='image/2send.svg' />
				<Text>Pariatur excepturi dolores omnis quod laudantium, debitis sapiente reiciendis architecto aliquam modi, reprehenderit, eos facere officia consequatur provident at explicabo libero voluptate</Text>
			</FeatureCard>

			<FeatureCard>
				<Icon src='image/2storage.svg' />
				<Text>Possimus dolorum laboriosam, minus sunt earum iure suscipit, officia obcaecati, quod nobis nemo asperiores? Facilis cumque animi saepe labore laudantium explicabo voluptate quia, aliquam incidunt vel quidem quis voluptatem</Text>
			</FeatureCard>
		</ProductFeaturesContainer>
	);
};

export default ProductFeatures;
