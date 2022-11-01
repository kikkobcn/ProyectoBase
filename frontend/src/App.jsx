import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeBody } from './components/HomeBody'
import { NetworksBody } from './components/NetworksBody'
import NodesBody  from './components/NodesBody'
import { Home } from './Home'
import { QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient();

export const App = () => {
    return <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />}>
                    <Route index element={<HomeBody></HomeBody>}></Route>
                    <Route path="/contact" element="contactar"></Route>
                    <Route path="/whoami" element="nosotros"></Route>
                    <Route path="/networkList" element={<NetworksBody></NetworksBody>}></Route>
                    {/* <Route path="/nodesList" element={<NodesBody />}></Route> */}
                    <Route path="/network/:id" element={<NodesBody />}></Route>
                    <Route path="*" element="not found"></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
}