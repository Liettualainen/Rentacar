import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';



import { Layout } from "./Layout";
import { Navigation } from "./Navigation";
import {
    AppLayout} from './Styled/AppLayout.styled'

const HomePage = lazy(() => import('./Pages/Home'));
const Catalogue = lazy(() => import('./Pages/Catalogue'));
const Favorites = lazy(() => import('./Pages/Favorites'));
const NotFound = lazy(() => import('./Pages/Notfound'));

export const App = () => {
  return (
    <AppLayout>
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/favorites" element={<Favorites />} />          
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppLayout>
  )
};