import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Book() {
  const [searchParams] = useSearchParams();
  const [bookDetails, setBookDetails] = useState(null);
  const title = searchParams.get('title')
  const baseUrl = 'http://localhost:3001'

  async function getBookDetails(){
    const response = await axios.get(`${baseUrl}/book/details`, {params: {title}})
    console.log(response)
    setBookDetails(response.data.data)
  }

  useEffect(() => {
    getBookDetails()
  }, [title])
  
  return (
    <main className="book-details-container">
      {bookDetails ? (
        <div id="book-card" className="book-details">
          <p><span>Title:</span> {bookDetails.title}</p>
          <p><span>Author:</span> {bookDetails.author}</p>
          <p><span>Year:</span> {bookDetails.year}</p>
          <p><span>country:</span> {bookDetails.country}</p>
          <p><span>pages:</span> {bookDetails.pages}</p>
          <p><span>language:</span> {bookDetails.language}</p>
        </div>
      ) : "nothing found" }
    </main>
  );
}

export default Book;
