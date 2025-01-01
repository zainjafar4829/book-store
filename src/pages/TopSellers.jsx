import React, { useEffect, useState } from "react";

const TopSellers = () => {
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        console.log(books);
      });
  }, []);
  return <div>Top Sellers</div>;
};

export default TopSellers;
