import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../../firebase";
import { selectUser } from "../../../features/userSlice";
import { useSelector } from "react-redux";
import "./BlogDisplay.css";

const BlogDisplay = ({ id, title, content, thumbnailUrl, author }) => {
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  useEffect(() => {}, []);

  return (
    <div className="blogDisplay">
      <h2 className="blogDisplay__title">{title}</h2>
      <span className="blogDisplay__author">Author: {author}</span>

      <img className="blogDisplay__thumbnail" src={thumbnailUrl} alt="" />
      <p className="blogDisplay__content">{content}</p>

      <hr />
    </div>
  );
};

export default BlogDisplay;