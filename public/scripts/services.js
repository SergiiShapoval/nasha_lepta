'use strict';

/* Services */
var appServices = angular.module("nashaLeptaApp.services", []);

for (var template in appData.views)
{
	appServices.value(template, appData.views[template].data);
}

