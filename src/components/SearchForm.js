import { useState } from "react";
import GitHubUserData from "./GitHubUserData";
import React from "react";
const SearchForm = () => {

    const [userName,setUserName] = useState("");

    return (
        <div className="find-user">
            <h1>Find User</h1>
            <form>
                <div className="form-group">
                    <label></label>
                    <input
                        type="text"
                        placeholder="Enter a username"
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>    
            </form>

            <div className="result">
                {userName === "" ? <p>Make a search!</p> : <GitHubUserData userName={userName} /> }
            </div>
            
        </div>
    );
}

export default SearchForm;