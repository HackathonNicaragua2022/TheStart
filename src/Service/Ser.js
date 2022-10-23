import React, { useEffect, useState, } from "react";

export const Service = () => {

    let URL = `${process.env.PORT}`
    console.log(`URL: ${URL}`)

    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        setTasks(data);
    }

    useEffect(() => {
        getTasks();
    }
        , []);
    
    console.log(tasks);

    return (
        <>
        </>
    )
}

