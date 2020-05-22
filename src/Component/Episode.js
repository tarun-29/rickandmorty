import React, { useState, useEffect } from "react";

function Episode({posts}) {
  return (
      <div>
        {posts.map(d => (
          <div
            class="card"
            style={{
              width: 250,
              background: "linear-gradient( 135deg, #F761A1 10%, #8C1BAB 100%)"
            }}
          >
            <div class="card-body">
              <h5 class="card-title">{d.episode}</h5>
              <h5 class="card-title">{d.name}</h5>
              <p class="card-text"></p>
              <p class="card-text">
                Release Date : - {}
                {d.air_date}
              </p>
            </div>
          </div>
        ))}
      </div>
  );
}

export default Episode;
