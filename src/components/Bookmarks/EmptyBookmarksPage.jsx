import React from "react";
import "./EmptyBookmarksPage.css";

function EmptyBookmarksPage() {
  return (
    <div className="adjust">
      <div className="emptyBookmarksFeeder">
        <img
          className="emptyBookmarksImg"
          src="https://abs.twimg.com/sticky/illustrations/empty-states/book-in-bird-cage-800x400.v1.png"
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
