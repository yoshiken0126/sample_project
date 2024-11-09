'use client';
import React,{useState,useEffect} from "react";
import axios from 'axios';

function App() {
  const[boardgames,setBoardgames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/boardgame/')
      .then(response => {
        setBoardgames(response.data);
      })
      .catch(error => {
        console.error("エラー発生", error);
      });
  },[]);

  return(
    <div>
      <h2>ボードゲーム一覧</h2>
      {boardgames.length === 0 ?(
        <p>ボードゲームは登録されていません</p>
      ) : (
        <ul>
          {boardgames.map(boardgame => (
            <li key={boardgame.id}>
              <p>ボードゲーム名：{boardgame.name}</p>
              <p>紹介文：{boardgame.description}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );

}

export default App;
