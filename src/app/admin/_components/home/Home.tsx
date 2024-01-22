/* eslint-disable */
"use client";
import { HeaderAdmin } from "../header/HeaderAdmin";

import { useState } from "react";

import { Gender } from "../gender/gender.table";

import { Cinemas } from "../cinemas/cinemas.table";
import { Food } from "../food/food.table";
import { Movie } from "../movie/movie.table";
import { Screenings } from "../screenings/screenings.table";
import { Post } from "../post/post.table";

export default function Home() {
  let [check, setcheck] = useState<number>(0);
  let [name, setname] = useState<string>("Home");

  function handlemenu(id: number): void {
    if (id === 0) {
      setcheck(id);
      setname("Home");
    } else if (id === 1) {
      setcheck(id);
      setname("Thể loại Movie");
    } else if (id === 2) {
      setcheck(id);
      setname("Cinemas");
    } else if (id === 3) {
      setcheck(id);
      setname("Xuất chiếu");
    } else if (id === 4) {
      setcheck(id);
      setname("Food");
    } else if (id === 5) {
      setcheck(id);
      setname("Post");
    }
  }
  return (
    <div
      style={{
        display: "flex",
        backgroundImage: `url('https://raw.githubusercontent.com/buivantoana/host-file/main/body-background.png')`,
        height: "100vh",
        width: "100%",
      }}>
      <HeaderAdmin check={check} handlemenu={handlemenu} />

      <div className='adminscroll' style={{ padding: "10px", margin: 0 }}>
        <div className='headercontainer' style={{ padding: "30px 0" }}>
          <div className='headercontainer-left'>
            <i className='fa-solid fa-house'></i>
            <h3>{name}</h3>
          </div>
          <div className='headercontainer-right'>
            <div className='headercontainer-right-search'>
              <input id='searchcontainer' type='text' placeholder='Search...' />
              <label htmlFor='searchcontainer'>
                <button>
                  <i className='fa-solid fa-magnifying-glass'></i>
                </button>
              </label>
            </div>
            <div className='headercontainer-right-notify'>
              <i className='fa-solid fa-bell'></i>
            </div>
          </div>
        </div>
        {check === 0 && (
          <div style={{ color: "white", marginTop: "100px" }}>
            <Movie />
          </div>
        )}
        {check === 1 && (
          <div style={{ color: "white", marginTop: "100px" }}>
            <Gender />
          </div>
        )}
        {check === 2 && (
          <div style={{ color: "white", marginTop: "100px" }}>
            <Cinemas />
          </div>
        )}
        {check === 3 && (
          <div style={{ color: "white", marginTop: "100px" }}>
            <Screenings />
          </div>
        )}
        {check === 4 && (
          <div style={{ color: "white", marginTop: "100px" }}>
            <Food />
          </div>
        )}
        {check === 5 && (
          <div style={{ color: "white", marginTop: "100px" }}>
            <Post />
          </div>
        )}
      </div>
    </div>
  );
}
