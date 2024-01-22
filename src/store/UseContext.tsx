"use client";

import { useLocalStorage } from "@/hook/useStorage";
import { Authentication, RefeshToken } from "@/services/account";
import React, { createContext, useReducer, useContext, useEffect } from "react";

export const ticketContext = createContext({});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FIRST":
      return {
        ...state,
        movie: action.payload.movie,
        cinemas: action.payload.cinemas,
        time: action.payload.time,
        date: action.payload.date,
      };
    case "SECOND":
      return {
        ...state,
        seats: action.payload.seats,
        total: action.payload.total,
      };
    case "LAST":
      return {
        ...state,
        food: action.payload.food,
        movie_id: action.payload.movie_id,
      };
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

// Provider
const TicketContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: {},
    movie: "",
    cinemas: "",
    date: "",
    time: "",
    seats: "",
    food: "",
    movie_id: "",
    total: 0,
  });

  const [user, setUser] = useLocalStorage("user", {});

  useEffect(() => {
    const handleProtectedRequest = async () => {
      try {
        const response: any = await Authentication(user.token);
        if (response.status === 1) {
          handleRefreshToken();
        } else {
          dispatch({
            type: "LOGIN",
            payload: {
              ...state,
              user: response.data,
            },
          });
        }
      } catch (error) {}
    };
    handleProtectedRequest();
  }, []);

  const handleRefreshToken = async () => {
    try {
      const response: any = await RefeshToken(user.refeshToken);

      if (response?.status === 0) {
        setUser({ ...user, token: response.accessToken });
        dispatch({
          type: "LOGIN",
          payload: {
            ...state,
            user: response.data,
          },
        });
      }
    } catch (error) {
      console.error("Refresh token error:", error);
    }
  };

  return (
    <ticketContext.Provider value={{ dispatch, state }}>
      {children}
    </ticketContext.Provider>
  );
};

// Hook
export const useTicketContext = () => useContext(ticketContext);
export default TicketContextProvider;
