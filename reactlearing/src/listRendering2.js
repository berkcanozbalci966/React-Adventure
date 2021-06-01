import React from "react";
import ReactDOM from "react-dom";

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

  const content = props.posts.map((post) => (
    <div key={post.id.toString()}>
      <h3> {post.title} </h3>
      <p> {post.content} </p>
    </div>
  ));

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {
    id: 1,
    title: "Merhaba OYUNFOR",
    content: "Bu işi bilmektyiz reactide çözüyoruz arşa çıkcaz inş",
  },
  {
    id: 2,
    title: "Merhabanı aldım güzel gardaşım",
    content: "SEN bu işleri basit mi sandın ha?",
  },
];

ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));
