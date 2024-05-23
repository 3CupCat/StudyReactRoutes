import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/", {state: "Error Not Page"})
            // navigate(-1) // 回到上一頁，可設定回到n頁
        }, 1000);
    }, []);
  return (
    <h1>NotFound</h1>
  )
}

export default NotFound