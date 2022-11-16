import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { selectUserId } from '../../store/store';
import { useRecoilValue } from 'recoil';
import { OtherRoomContainer } from './styled';
import { useParams, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../apis/url';
const TOKEN = localStorage.getItem('jwt') || '';

export const OtherRoom = () => {
  const BASE_URL = API_BASE_URL;
  const navigate = useNavigate();
  const param = useParams();
  const OtherID = param.id;
  useEffect(() => {
    // const OtherId =
    console.log(OtherID);
    axios
      .get(BASE_URL + '/api/user/detail/' + OtherID, {
        headers: {
          Authorization: TOKEN,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.resonse);
      });
  });
  // function GetOtherUser() { //다른 사람 유저 정보
  //   axios
  //     .get('http://localhost:8080/api/user/detail/' + OtherID, {
  //       headers: {
  //         Authorization: TOKEN,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.resonse);
  //     });
  // }
  // function GetOtherTree() { //다른 사람 트리 정보
  //   axios
  //     .get('http://localhost:8080/api/tree/' + OtherID, {
  //       headers: {
  //         Authorization: TOKEN,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.resonse);
  //     });
  // }
  // function GetOtherCalendar() { //다른 사람 어드벤트 캘린더 정보
  //   axios
  //     .get('http://localhost:8080/api/calendar/' + OtherID, {
  //       headers: {
  //         Authorization: TOKEN,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.resonse);
  //     });
  // }
  return (
    <OtherRoomContainer>
      {/* <h1>마이 룸</h1>
      <NotificationPage /> */}
    </OtherRoomContainer>
  );
};
