import React, { Suspense } from 'react';

const LoginContainer = React.lazy(() =>
  import(
    'components/Login/Login.Container' /* webpackChunkName: "Login.Container" */
  ),
);

const DashboardContainer = React.lazy(() =>
  import(
    'components/Dashboard/Dashboard.Container' /* webpackChunkName: "Login.Container" */
  ),
);

const Register = React.lazy(() =>
  import(
    'components/Register/Register.Container' /* webpackChunkName: "Login.Container" */
  ),
);


const appRoutes = {
  root: {
    defaultRoute: {
      path: '/dashboard',
      component: DashboardContainer,
      needAuth: true,
      exact: true,
    },
  },
  
  authentication: {
    login: {
      path: '/login',
      component: LoginContainer,
      needAuth: false,
      exact: false,
    },
    register: {
      path: '/register',
      component: Register,
      needAuth: false,
      exact: false,
    },
  },
};

const defaultAuthenticatedRoute = '/dashboard';
const defaultUnauthenticatedRoute = '/login';

const getAllRoutesArray = () =>
  Object.keys(appRoutes)
    .map(key =>
      Object.keys(appRoutes[key]).reduce((allRoutes, innerKey) => {
        allRoutes.push(appRoutes[key][innerKey]);
        return allRoutes;
      }, []),
    )
    .flat();
export {
  appRoutes,
  defaultAuthenticatedRoute,
  defaultUnauthenticatedRoute,
  getAllRoutesArray,
};
