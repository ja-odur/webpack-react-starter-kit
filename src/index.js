import React from "react";
import ReactDOM from "react-dom";
import FormContainer from "./js/components/container/FormContainer";

import styles from './css/main.css'


const wrapper = document.getElementById("create-article-form");
ReactDOM.render(<FormContainer />, document.getElementById("create-article-form"));
