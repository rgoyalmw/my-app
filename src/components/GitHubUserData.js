import useGitHub from "../hooks/useGitHub";
import React from "react";

const GitHubUserData = ({userName}) => {
    // https://api.github.com/users/username

    const {user,error,loading} = useGitHub(userName);

    return (
        <div className="githubuser">
            {loading && <p> Loading... </p>}
            {error && <p> {error.message} </p>}
            {user && (
                <ul className="user-details">
                    <li>
                        <img src={user.avatar_url} alt={user.login}/>
                    </li>
                    <li>
                        <strong>Name:</strong> {user.name}
                    </li>
                    <li>
                        <strong>Bio:</strong> {user.bio ? user.bio : "NA"}
                    </li>
                    <li>
                        <strong>Blog or site:</strong> {user.blog ? user.blog : "NA"}
                    </li>
                </ul>
            )}
        </div>
    );
}

export default GitHubUserData;