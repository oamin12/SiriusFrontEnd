import React from "react";
import "./EmptyBookmarksPage.css";
/**
 * @description Component to be rendered when the bookmarks page is empty. It contains the text and the image
 * @returns {div}A div that returns the component
 */
function EmptyBookmarksPage() {
  return (
    <div className="adjust">
      <div className="emptyBookmarksFeeder">
        <img
          className="emptyBookmarksImg"
          src="https://abs.twimg.com/sticky/illustrations/empty-states/book-in-bird-cage-800x400.v1.png"
          alt=""
        ></img>
        <h2 className="emptyBookmarksHeader">Save Tweets for later</h2>
        <p>
          Don't let the good ones fly away! Bookmark Tweets to easily find them
          again in the future.
        </p>
      </div>
    </div>
  );
}

export default EmptyBookmarksPage;
