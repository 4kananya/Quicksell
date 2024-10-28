import React, { useState } from "react";
import "./Header.css";
import { ReactComponent as Display } from "../../icons/display.svg";
import { ReactComponent as Down } from "../../icons/down.svg";
import OutsideClickHandler from "react-outside-click-handler";
import { GroupingOptions, OrderingOptions } from "../../constants";

const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div className="Header">
      <button
        className="Display_button"
        onClick={() => {
          setOpen1((e) => !e);
          setOpen2(false);
          setOpen3(false);
        }}>
      <Display /> <span>Display</span> <Down />
      </button>
      {open1 && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpen1(false);
          }}>
          <div className="DropdownBox t-5 l-4 px-2 py-3">
            <div style={{ marginLeft: "10px", marginRight: "10px" ,display: "flex", alignItems: "center", gap: "4.50rem", marginTop:"5px" }}>
              <span>Grouping</span>
              <button
                className="Display_button_secondary"
                onClick={() => {
                  setOpen2((e) => !e);
                  setOpen3(false);
                }}
              >
                {GroupingOptions[grouping]} <Down />
              </button>
              {open2 && (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setOpen2(false);
                  }}>
                  <div className="DropdownBox_secondary t-4 l-8 px-4 py-4">
                    {GroupingOptions.map((option, id) => (
                      <button
                        style={{
                          background: "white",
                          border: "none",
                          padding: "0rem 1rem",
                          borderBottom: "0px solid #e",
                          cursor: "pointer"
                        }}
                        key={id}
                        onClick={() => {
                          setGrouping(id);
                          localStorage.setItem("grouping", id);
                        }}>
                        {option}
                      </button>
                    ))}
                  </div>
                </OutsideClickHandler>
              )}
            </div>
            <div style={{marginLeft: "10px", marginRight: "10px" , display: "flex", alignItems: "center", gap: "4.75rem", marginBottom:"5px"}}>
              <span>Ordering</span>
              <button
                className="Display_button_secondary"
                onClick={() => {
                  setOpen3((e) => !e);
                  setOpen2(false);
                }}
              >
                {OrderingOptions[ordering]} <Down />
              </button>
              {open3 && (
                <OutsideClickHandler
                  onOutsideClick={() => {
                    setOpen3(false)
                  }}
                >
                  <div className="DropdownBox_secondary t-7 l-8 px-4 py-4">
                    {OrderingOptions.map((option, id) => (
                      <button
                        style={{
                          background: "white",
                          border: "none",
                          padding: "0rem 1rem",
                          borderBottom: "0px solid #e",
                          cursor: "pointer"
                          
                        }}
                        key={id}
                        onClick={() => {
                          setOrdering(id);
                          localStorage.setItem("ordering", id);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </OutsideClickHandler>
              )}
            </div>
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default Header;
