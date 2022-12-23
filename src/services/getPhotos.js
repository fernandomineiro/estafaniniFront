import React, { useRef, useState } from "react";
import axios from "axios";


 const  getAllPhotos  = async (what)  =>{
    const CLIENT_ID = 'e28971925a8d43c';
    const ROOT_URL = 'https://api.imgur.com';
 
    try {

      const res = axios.get(`${ROOT_URL}/3/account/me/image/${what}`);

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
            Authorization: `Bearer ${CLIENT_ID}`
        },
        data: res.data,
      };
      return result
    } catch (err) {
      return (err.response?.data || err);
    }
  }


export default getAllPhotos;