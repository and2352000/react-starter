import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { ProjectPage } from './pages/Project';
import { TokenPage } from './pages/Token';

export const PageRoute: React.FC = () => {
    return (
        <Routes >
            <Route path='/project' element={<ProjectPage />} />
            <Route path='/token' element={<TokenPage />} />
            <Route path='*' element={<ProjectPage />} />
        </Routes >)
} 
