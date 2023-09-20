import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const Layout = () => {
    return (
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    );
};