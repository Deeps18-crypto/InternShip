// import React, { useState, useEffect } from "react";
// import "./Pagination.css";
// import axios from "axios";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import { db } from "../../firebase";
// import ContentData from "../JobDetails/Content/ContentData"

// function Pagination() {
//   const [posts, setposts] = useState([]);
//   const [postPerPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, seterror] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1); //currentpage

//   useEffect(() => {
//     setLoading(true);
//     seterror(false);
//     db.collection("posts").onSnapshot((snapshot) => {
//       setposts(
//         snapshot.docs.map((doc) => ({ id: doc.id, detail: doc.data() }))
//       );
//       setLoading(false);
//     });
//   }, []);
//   console.log(posts);
//   if (loading) {
//     return (
//       <div className="pagination__h2">
//         <h2>Loading...</h2>
//       </div>
//     );
//   }
//   if (error) {
//     return (
//       <div className="pagination__h2">
//         <h2>Network error..!</h2>
//       </div>
//     );
//   }
//   //pagination
//   const numberOfPages = [];
//   for (let i = 1; i <= Math.ceil(posts.length / postPerPage); i++) {
//     numberOfPages.push(i);
//   }
//   //current post
//   const indexofLastPost = currentPage * postPerPage;
//   const indexoffirstPost = indexofLastPost - postPerPage;
//   const currentPosts = posts.slice(indexoffirstPost, indexofLastPost);

//   //change page
//   const paginate = (paginate) => setCurrentPage(paginate);

//   return (
//     <div>
//       <div className="pagination">
//         <a
//           onClick={() =>
//             setCurrentPage((prev) =>
//               prev === numberOfPages.length ? prev : prev - 1
//             )
//           }
//         >
//           <ArrowBackIosIcon className="pagination__back" />
//           Prev
//         </a>
//         {numberOfPages.map((pages) => (
//           <a
//             key={pages.id}
//             className={currentPage == pages && "active"}
//             onClick={() => paginate(pages)}
//           >
//             {pages}
//           </a>
//         ))}

//         <a
//           onClick={() =>
//             setCurrentPage((prev) =>
//               prev === numberOfPages.length ? prev : prev + 1
//             )
//           }
//         >
//           <p>Next</p>
//         </a>
//         <ArrowForwardIosIcon className="pagination__forward" />
//       </div>
//       <div className="pagination__currentPost">
//         {currentPosts.map(({detail,id}) => (
//           <ContentData
//             key={id}
//             title={detail.title}
//             place={detail.place}
//             time={detail.time}
//             qualification={detail.qualification}
//             amount={detail.amount}
//             date={detail.date}
//             image={detail.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Pagination;
