import React, { useEffect, useRef, useState } from "react"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import "./nav.css"

const Nav = ({ tag, location }) => {
  let current
  const navRef = useRef(null)

  useEffect(() => {
    current = document.getElementById(tag)
    const changeFirstCategory = () => {
      document.getElementById("all").innerText = tag
      document
        .getElementById("all")
        .parentElement.classList.add("navBox-active")
    }
    const changeFirstCategoryToAll = () => {
      document
        .getElementById("all")
        .parentElement.classList.add("navBox-active")
    }
    current
      ? current.parentElement.classList.add("navBox-active")
      : location && location.pathname === "/"
      ? changeFirstCategoryToAll()
      : changeFirstCategory()

    const navWrapper = document.querySelector(".navWrapper")
    const navPosition = navWrapper.offsetTop
  }, [])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: rhythm(1),
      }}
    >
      <div className="navWrapper" ref={navRef}>
        <div className="navBox">
          <Link id={"all"} to={"/"}>
            all
          </Link>
        </div>

        <div className="navBox">
          <Link id={"algorithm"} to={"/tags/algorithm"}>
            algorithm
          </Link>
        </div>
        <div className="navBox">
          <Link id={"knowledge"} to={"/tags/knowledge"}>
            knowledge
          </Link>
        </div>

        <div className="navBox" style={{}}>
          <Link id={"studylog"} to={"/tags/studylog"}>
            studylog
          </Link>
        </div>
        <div className="navBox navBox-end">1</div>
      </div>
    </div>
  )
}

export default Nav
