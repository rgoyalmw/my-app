import { useState, useEffect } from "react";

const useGitHub = (userName) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    useEffect(() => {

        const fetchUserData = async () => {

            try{
                setLoading(true);
                let response = await fetch(`https://api.github.com/users/${userName}`);
                let userData = await response.json();
                setLoading(false);
                setUser(userData);
                console.log(userData);

            } catch (error) {
                setError(error);
                console.log(error);
            }
            

        };
        fetchUserData();
        
    },[userName]);

    return {user,error,loading};
}

export default useGitHub;
