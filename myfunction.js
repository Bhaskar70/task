import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./layout";
import Form from "./form";
import App from "./App";

const DataTable=()=>{
    return(
            <BrowserRouter>
            <Layout />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/form" element ={<Form />} />
            </Routes>
            </BrowserRouter>
    )
}
export default DataTable;