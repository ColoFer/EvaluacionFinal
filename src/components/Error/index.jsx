import React from "react";
import "./error.css"
const Error = () =>{
    return(
        <div className="error">
            <div className="textprincipal">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <h3>The Page You Are Looking For Does Not Exists.</h3>
                <button>BACK TO HOME</button>
            </div>

        </div>
    );
}
export {Error}