import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { db } from "../../../firebase";
import ContentData from "./ContentData";
import "./Content.css";
import ContentSpinner from "./ContentSpinner";
import Search from "../../SearchBar/Search";
import DatePickers from "../../DatePicker/DatePickers";
import FilterDetail from "../../Filter/FilterDetail";

function Content() {
  const [posts, setposts] = useState([]);
  const [postPerPage] = useState(3);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); //currentpage
  const [search, setSearch] = useState("");
  const [noData, setNodata] = useState(false);
  console.log(search);

  useEffect(() => {
    setLoading(true);
    seterror(false);
    db.collection("posts").onSnapshot((snapshot) => {
      if (snapshot) {
        setposts(
          snapshot.docs.map((doc) => ({ id: doc.id, detail: doc.data() }))
        );
      } else {
        noData(true);
      }
      setLoading(false);
    });
  }, []);

  if (error) {
    return (
      <div className="content__h2">
        <h2>Network error..!</h2>
      </div>
    );
  }
  //pagination
  const numberOfPages = [];
  for (let i = 1; i <= Math.ceil(posts.length / postPerPage); i++) {
    numberOfPages.push(i);
  }
  //current post
  const indexofLastPost = currentPage * postPerPage;
  const indexoffirstPost = indexofLastPost - postPerPage;
  const currentPosts = posts.slice(indexoffirstPost, indexofLastPost);

  //change page
  const paginate = (paginate) => setCurrentPage(paginate);

  const handlerChange = () => {
    setSearch("");
  };
  let filter = currentPosts.filter((data) => {
    return data.detail.title
      .trim()
      .toLowerCase()
      .includes(search.trim().toLowerCase());
  });
  
  let load = (
    <div className="content">
      <div className="content__page">
        <a
          onClick={() =>
            setCurrentPage((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          <ArrowBackIosIcon />
          <h4 className="content__back">Prev</h4>
        </a>
        {numberOfPages.map((pages) => (
          <a
            key={pages.id}
            className={currentPage == pages && "active"}
            onClick={() => paginate(pages)}
          >
            {pages}
          </a>
        ))}

        <a
          onClick={() =>
            setCurrentPage((prev) =>
              prev === numberOfPages.length ? prev : prev + 1
            )
          }
        >
          <p>Next</p>
        </a>
        <ArrowForwardIosIcon className="content__forward" />
      </div>
      <div className="content__currentPost">
        {filter.map(({ detail, id }) => (
          <ContentData
            key={id}
            title={detail.title}
            place={detail.place}
            time={detail.time}
            qualification={detail.qualification}
            amount={detail.amount}
            date={detail.date}
            image={detail.image}
          />
        ))}
      </div>
      <div className="content__page">
        <a
          onClick={() =>
            setCurrentPage((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          <ArrowBackIosIcon />
          <h4 className="content__back">Prev</h4>
        </a>
        {numberOfPages.map((pages) => (
          <a
            key={pages.id}
            className={currentPage == pages && "active"}
            onClick={() => paginate(pages)}
          >
            {pages}
          </a>
        ))}

        <a
          onClick={() =>
            setCurrentPage((prev) =>
              prev === numberOfPages.length ? prev : prev + 1
            )
          }
        >
          <p>Next</p>
        </a>
        <ArrowForwardIosIcon className="content__forward" />
      </div>
    </div>
  );
  if (loading) {
    load = <ContentSpinner />;
  }
  return (
    <div>
      <div className="content__search">
        <Search
          onChanged={(e) => setSearch(e.target.value)}
          value={search}
          handlerChange={handlerChange}
        />
      </div>
      <DatePickers />
      <div className="content__post">
        {load}
        <div className="content__filter">
          <FilterDetail />
        </div>
      </div>
    </div>
  );
}

export default Content;
