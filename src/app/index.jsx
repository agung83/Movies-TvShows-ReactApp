import { memo } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Public } from './routes';
import { NotFound } from './pages'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {
                    Public.map(({ key, path, Component }) => (
                        <Route key={key} path={path} element={<Component />} />
                    ))
                }
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default memo(App);
