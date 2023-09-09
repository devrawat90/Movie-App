import React, { useEffect, useState } from "react";
import "./Bannerpage.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../component/content/ContentWrapper";
import Img from "../../../component/lazyLoadImage/Img";
const HeroBanner = () => {
  const [background, setbackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setbackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key == "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} alt="" />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannercontent">
          <span className="title">Welcome</span>
          <span className="subtitle">
            Millions of Movies TV shows and People to discover . Explore Now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movies, tvshows or people..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
