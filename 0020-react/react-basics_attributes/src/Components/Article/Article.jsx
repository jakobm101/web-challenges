import React from "react";

export default function Article() {
  return (
    <article>
      <h2 className="article__title">Gratefulness and Joy</h2>
      <label htmlFor="articleInput"></label>
      <input type="text" id="articleInput" />
      <a href="https://www.google.com" className="article__link">Google</a>
    </article>
  );
}
