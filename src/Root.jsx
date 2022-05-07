import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from "./store";
import App from './components/App';

const Root = () => {
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<App />} >
                            <Route path=':filter' element={<App />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>

    //без redux-persist
    // <Provider store={store}>
    //         <BrowserRouter>
    //             <Routes>
    //                 <Route path='/' element={<App />} >
    //                     <Route path=':filter' element={<App />} />
    //                 </Route>
    //             </Routes>
    //         </BrowserRouter>
    //     </Provider>
    )
}

export default Root