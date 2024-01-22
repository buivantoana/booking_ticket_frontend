/* eslint-disable */

import {
  CoffeeOutlined,
  FormOutlined,
  HomeOutlined,
  InfoOutlined,
  LogoutOutlined,
  TagsFilled,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import "./headeradmin.css";
import Image from "next/image";

export function HeaderAdmin({
  check,
  handlemenu,
}: {
  check: number;
  handlemenu: (id: number) => void;
}) {
  return (
    <div style={{ width: "300px", padding: "20px" }}>
      <div
        className=''
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "15px 0",
        }}>
        <Image
          src={
            "https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/logo-white.png"
          }
          width={108}
          height={34}
          alt=''
        />
      </div>

      <hr
        className='hr'
        style={{
          opacity: "0.25",
          backgroundColor: "transparent",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 117, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))!important",
        }}
      />
      <div className='menu-admin'>
        <div
          onClick={() => handlemenu(0)}
          className={
            check === 0 ? "menu-admin-item actives-menu" : "menu-admin-item "
          }>
          <div className='menu-admin-item-flex '>
            <div
              className={
                check === 0
                  ? "menu-admin-item-flex-left active-left"
                  : "menu-admin-item-flex-left"
              }>
              <HomeOutlined />
            </div>
            <div className='menu-admin-item-flex-right'>Home</div>
          </div>
        </div>
        <div
          onClick={() => handlemenu(1)}
          className={
            check === 1 ? "menu-admin-item actives-menu" : "menu-admin-item "
          }>
          <div className='menu-admin-item-flex'>
            <div
              className={
                check === 1
                  ? "menu-admin-item-flex-left active-left"
                  : "menu-admin-item-flex-left"
              }>
              <TagsFilled />
            </div>
            <div className='menu-admin-item-flex-right'>Thể loại Movie</div>
          </div>
        </div>
        <div
          onClick={() => handlemenu(2)}
          className={
            check === 2 ? "menu-admin-item actives-menu" : "menu-admin-item "
          }>
          <div className='menu-admin-item-flex'>
            <div
              className={
                check === 2
                  ? "menu-admin-item-flex-left active-left"
                  : "menu-admin-item-flex-left"
              }>
              <InfoOutlined />
            </div>
            <div className='menu-admin-item-flex-right'>Rạp chiếu phim</div>
          </div>
        </div>
        <div
          onClick={() => handlemenu(3)}
          className={
            check === 3 ? "menu-admin-item actives-menu" : "menu-admin-item "
          }>
          <div className='menu-admin-item-flex'>
            <div
              className={
                check === 3
                  ? "menu-admin-item-flex-left active-left"
                  : "menu-admin-item-flex-left"
              }>
              <UsergroupAddOutlined />
            </div>
            <div className='menu-admin-item-flex-right'>Xuất chiếu</div>
          </div>
        </div>
        <div
          onClick={() => handlemenu(4)}
          className={
            check === 4 ? "menu-admin-item actives-menu" : "menu-admin-item "
          }>
          <div className='menu-admin-item-flex'>
            <div
              className={
                check === 4
                  ? "menu-admin-item-flex-left active-left"
                  : "menu-admin-item-flex-left"
              }>
              <CoffeeOutlined />
            </div>
            <div className='menu-admin-item-flex-right'>Food</div>
          </div>
        </div>
        <div
          onClick={() => handlemenu(5)}
          className={
            check === 5 ? "menu-admin-item actives-menu" : "menu-admin-item "
          }>
          <div className='menu-admin-item-flex'>
            <div
              className={
                check === 5
                  ? "menu-admin-item-flex-left active-left"
                  : "menu-admin-item-flex-left"
              }>
              <FormOutlined />
            </div>
            <div className='menu-admin-item-flex-right'>Post</div>
          </div>
        </div>
        <h2 style={{ color: "white" }}>AccoutPage</h2>
        <div
          onClick={() => handlemenu(6)}
          className={
            check === 6 ? "menu-admin-item actives-menu" : "menu-admin-item "
          }>
          <div className='menu-admin-item-flex'>
            <div
              className={
                check === 6
                  ? "menu-admin-item-flex-left active-left"
                  : "menu-admin-item-flex-left"
              }>
              <UserOutlined />
            </div>
            <div className='menu-admin-item-flex-right'>Profile</div>
          </div>
        </div>
        <div
          onClick={() => handlemenu(7)}
          className={
            check === 7 ? "menu-admin-item actives-menu" : "menu-admin-item "
          }>
          <div className='menu-admin-item-flex'>
            <div
              className={
                check === 7
                  ? "menu-admin-item-flex-left active-left"
                  : "menu-admin-item-flex-left"
              }>
              <LogoutOutlined />
            </div>
            <div className='menu-admin-item-flex-right'>Đăng xuất</div>
          </div>
        </div>
      </div>
    </div>
  );
}
