import { useState } from "react";
import Nav from "./Nav";

export default function Header() {
  const [keywords, setKeywords] = useState('');

  const onChangeHandler = (event) => {
    // console.log("I was Changed");
    setKeywords(event.target.value);
  };

  return (
    <>
      <header>
        <div className="logo">Awesome News</div>
        <input onChange={onChangeHandler} />
        {/* Use lowercase 'keywords' to match your useState definition */}
        <p>The keywords are: {keywords}</p>
        <Nav />
      </header>
    </>
  );
}