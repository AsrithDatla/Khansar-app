import React from 'react';
import './Details.css'; // Import CSS file for styling

function Details() {
  return (
    <div className="details-container">
      <div className="title">
        <h1 style={{ color: 'red', fontFamily: 'Arial, sans-serif', fontSize: '2em' }}>CEASEFIRE IN KHANSAR</h1>
      </div>
      <div className="information">
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2em' }}>
          Ceasefire in Khansar: 日本語フォントスタイルで、1文で情報を提供します。
        </p>
      </div>
    </div>
  );
}

export default Details;

