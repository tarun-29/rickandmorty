import React, { useState, useEffect } from "react";
import Axios from "axios";
import Episode from "./Episode";
import Pagination from "./Pagination";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [search, setSearch] = useState("");
  const [filteredEpisode, setFilteredEpisode] = useState([]);

  useEffect(async () => {
    const api1 = `https://rickandmortyapi.com/api/episode/?page=1`;
    const api2 = `https://rickandmortyapi.com/api/episode/?page=2`;
    const episode = [];
    const getFirstPage = await Axios.get(api1);
    const getSecondPage = await Axios.get(api2);
    var data = getFirstPage.data.results;
    data.forEach(d => {
      episode.push(d);
    });
    var data = getSecondPage.data.results;
    data.forEach(d => {
      episode.push(d);
    });
    setPosts(episode);
  }, []);

  useEffect(() => {
    setFilteredEpisode(
      posts.filter(post => {
        return post.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, posts]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  console.log("filteredEpisode");
  console.log(filteredEpisode);
  return (
    <div className="container">
      <div style={{}}>
        <input
        style={{marginTop: 0, marginBottom: 20}}
          type="text"
          placeholder="Search"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {search ? (
        <div>
          {filteredEpisode.map(d => (
            <div
              class="card"
              style={{
                width: 250,
                background:
                  "linear-gradient( 135deg, #F761A1 10%, #8C1BAB 100%)"
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
      ) : (
        <div>
          <div className="card-columns">
            <Episode posts={currentPosts} />
          </div>
          <div style={{ marginTop: 20, marginLeft: 100 }}>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DataFetching;
