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
import { Grid } from "@material-ui/core";

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
    db.collection("jobs").onSnapshot((snapshot) => {
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
      <Grid container xs={12} xl={12} md={12} lg={12}>
        <Grid item xs={4} xl={8} md={8} lg={8} />
        <Grid item xs={4} xl={3} md={3} lg={3}>
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
        </Grid>
      </Grid>
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
            id={detail.id}
          />
        ))}
      </div>
      <Grid container xs={12} xl={12} md={12} lg={12}>
        <Grid item xs={4} xl={8} md={8} lg={8} />
        <Grid item xs={4} xl={3} md={3} lg={3}>
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
        </Grid>
      </Grid>
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
      <Grid container>
        <Grid container xs={12} xl={6} md={6} lg={6}>
          <Grid item lg={1} xl={1} md={1} />
          <Grid item lg={10} xl={10} md={10}>
            {load}
          </Grid>
        </Grid>
        <Grid container xs={12} xl={6} md={6} lg={6}>
          <Grid item lg={2} xl={2} md={2} />
          <Grid item lg={10} xl={10} md={10}>
            <FilterDetail />
          </Grid>
        </Grid>
      </Grid>
      <div className="content__filter"></div>
    </div>
  );
}

export default Content;
