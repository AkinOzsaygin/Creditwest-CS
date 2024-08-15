import React from 'react'
import useAuth from '../hooks.js/useAuth'
import { Outlet, Navigate } from 'react-router-dom';

const RequireAuth = ({ allowedRoles }) => {

    const { auth } = useAuth();

    const roles = auth.roles || [];
    console.log(auth);

    return (
        roles?.find(role => allowedRoles.includes(role))
            ? <Outlet />
            : auth.firstName
                ? <Navigate to={'/forbiden'} replace />
                : <Navigate to={'/'} />
    );
};

export default RequireAuth
