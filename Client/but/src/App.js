import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios'
import './index.css'
const apiUrl = "http://localhost:3000";

export default function App() {
  useEffect(()=> {
      getApi()
  }, [])
  
  const getApi = () => {
    const response = axios.get(apiUrl)
    console.log(response)
  }

  const addedFolder = () => {

    const response = axios.get('http://localhost:3333/addFolder')
    console.log(response)
  }

  const deletedFolder = () => {

    const response = axios.get('http://localhost:3333/folderDeleted')
    console.log(response)
  }


  const addedFile = () => {

    const response = axios.get('http://localhost:3333/addFile')
    console.log(response)
  }

  const deletedFile = () => {

    const response = axios.get('http://localhost:3333/deleteFile')
    console.log(response)
  }
  
  const readFile = () => {

    const response = axios.get('http://localhost:3333/readFolder')
    console.log(response)
  }

  const moveFdolder = () => {

    const response = axios.get('http://localhost:3333/moveFolder')
    console.log(response)
  }
  
  return (
    <div className="App">  

        <h1> Projet: Formation Fullstack - Back Avancé </h1>
     

        <button onClick={() => addedFolder(alert('folder added'))}>Add the folder </button>
        <button onClick={() => deletedFolder(alert('folder deleted'))}>Delete the folder </button>
        <button onClick={() => addedFile(alert('file added'))}>Add the file </button>
        <button onClick={() => deletedFile(alert('file deleted'))}>Delete the file </button>
        <button onClick={() => readFile(alert('folder read'))}>read the folder </button>
        <button onClick={() => moveFdolder(alert('folder moved'))}>move the folder </button>

     </div>
  );
}
