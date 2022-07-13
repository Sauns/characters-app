import { BrowserRouter, Navigate, Routes, Route, Link } from 'react-router-dom'

import { CharacterDetail, CharactersList } from './components'

import 'antd/dist/antd.css'
import './App.css'
import { PageHeader } from 'antd'

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <PageHeader
                    className="site-page-header"
                    title={<Link to="/">Characters</Link>}
                    avatar={{
                        icon: <Link to="/">Ch</Link>,
                    }}
                />
                <Routes>
                    <Route path="/" element={<CharactersList />} />
                    <Route
                        path="/character/:id"
                        element={<CharacterDetail />}
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
