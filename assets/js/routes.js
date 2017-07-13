import {Router, Route, IndexRoute, hashHistory} from 'react-router';

/*const componentsRoutes = {
	component: Home,
	path: "/", 
	indexRoute: {component: ''},
	childRoutes: [
		{
			path: '/',
			getComponent(location, cb) {
				System.import('/').then(module => cb(null, module.default));
			}
		}
	]
}*/

const Routes = () => {
	return (
		<Router history={hashHistory} /*routes={componentsRoutes}*/ />
	);
};

export default Routes;