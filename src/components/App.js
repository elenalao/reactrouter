import React from "react";
import { Route, Routes } from "react-router-dom";

// App components
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import Courses from "./Courses";
import HTML from "./courses/HTML";
import CSS from "./courses/CSS";
import JavaScript from "./courses/JavaScript";
import NotFound from "./NotFound";

const App = () => (
  <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About title="About" />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/courses" element={<Courses />}>
        {/* Nested Route */}
        <Route index element={<HTML />}/>
        <Route path="html" element={<HTML title="HTML" />} />
        <Route path="css" element={<CSS title="CSS" />} />
        <Route path="javascript" element={<JavaScript title="Javascript" />} />
      </Route>

      <Route path="*" element={<NotFound />} />
      
    </Routes>
  </div>
);

export default App;