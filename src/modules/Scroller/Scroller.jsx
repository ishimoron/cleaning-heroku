import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

// import AnimatedBackground from '../modules/AnimatedBackground/AnimatedBackground'

const Scroller = () => {
  return (
    <div>
      {/* <AnimatedBackground /> */}
      {/* <AnimatedText /> */}
        <ReactPageScroller>
            <section className="full-page">
            <h1>section 1</h1>
            </section>
            <section className="full-page">
            <h1>section 2</h1>
            </section>
            <section className="full-page">
            <h1>section 3</h1>
            </section>
        </ReactPageScroller>
    </div>
  );
};

export default Scroller;
