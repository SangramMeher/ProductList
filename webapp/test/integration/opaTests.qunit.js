sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'products/test/integration/FirstJourney',
		'products/test/integration/pages/ProductsList',
		'products/test/integration/pages/ProductsObjectPage',
		'products/test/integration/pages/Order_DetailsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage, Order_DetailsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('products') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage,
					onTheOrder_DetailsObjectPage: Order_DetailsObjectPage
                }
            },
            opaJourney.run
        );
    }
);