import React, { useState, useEffect } from "react";
import "./style.css";
import { Header, Footer, EmptyView, List } from "../../component/common";
import { Filter } from "../../component/Home";
import { toolsArray } from "../../constant";
import { useParams } from "react-router-dom";

const Home = () => {
  let { tool_id } = useParams();

  //search bar
  const [searchInput, setSearchInput] = useState("");
  const [cover, setCover] = useState(toolsArray);
  const [list, setList] = useState([]);
  const [coverCheckedAll, setCoverCheckedAll] = useState(false);

  //handle
  const handleChangeCheckedCover = (id) => {
    setCover((prevCover) => {
      return prevCover.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
    });
  };

  const handleToggleAll = () => {
    setCoverCheckedAll(!coverCheckedAll);
  };

  //apply
  const applyFilters = () => {
    let updatedList = cover;

    //cover filter
    const coverChecked = updatedList
      .filter((item) => item.checked)
      .map((item) => item.id);

    if (coverChecked.length) {
      updatedList = updatedList.filter((item) =>
        coverChecked.includes(item.id)
      );
    }

    if (coverCheckedAll) {
      updatedList = updatedList.filter((item) => item.checked === true);
    } else {
      updatedList = updatedList.filter((item) => item.checked !== true);
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);

    if (tool_id) {
      setList([cover[tool_id - 1]]);
    }
  };

  // Scroll-to-top button
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 200; // Adjust this value as needed

    setShowScrollButton(scrollY > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    applyFilters();
  }, [tool_id, searchInput, cover, coverCheckedAll]);

  return (
    <div>
      <Header />
      {!tool_id && (
        <Filter
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          cover={cover}
          changeCheckedCover={handleChangeCheckedCover}
          handleToggleAll={handleToggleAll}
          coverCheckedAll={coverCheckedAll}
        />
      )}
      <div className="home_list-wrap">
        {list ? <List list={list} /> : <EmptyView />}
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfgR0Ab0OXFtnXVMEiSBkePKWe5O9xWcxT6vu6rpFUJUW5yHw/viewform?embedded=true"
        width="640"
        height="913"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Загрузка…
      </iframe>

      <Footer />

      {/* Scroll-to-top button */}
      {showScrollButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default Home;
