// L15VirtualContests
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const L15VirtualContests = ({ userData }) => {
    var date = new Date();
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');

    var currentDate = (parseInt(year)  - 1) * 365 + (parseInt(month) - 1) * 30 + parseInt(day);
    // console.log("Date : ", currentDate);

    var count = 0;
    var unique = {};
    userData.forEach(function (result) {
        if (result.author.participantType === "VIRTUAL") {
            var date = new Date(result.creationTimeSeconds * 1000);
            var year = date.getUTCFullYear();
            var month = date.getUTCMonth();
            if (month < 9) {
                month = '0' + (month + 1);
            } else {
                month = month + 1;
            }
            var day = date.getUTCDate();
            if (day < 10) {
                day = '0' + day;
            }
            var submissionDate =(parseInt(year)  - 1) * 365 + (parseInt(month) - 1) * 30 + parseInt(day);
            if (currentDate - submissionDate <= 15 && unique[result.contestId] == undefined) {
                count++;
                unique[result.contestId] = 1;
            }
        }
    });

    // console.log("Count : ", count);

    // console.log(userData);
    return (
        <Container>
            <div className="item-left">Virtual Contest Problems : </div>
            <div className="item-right">{count}</div>
        </Container>
    )
}

export default L15VirtualContests


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 10px;
  height: 45px; 
  width: 33%;
  border-radius: 5px;
  margin-top: 5px;

  border: 1px solid #d1d5db;
  background-color: rgba(255, 255, 255, 0.83);
  box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px 0px;

  font-size: 0.8rem;

  .item-left{
      font-weight: 500;
  }

  .item-right{
      font-family: verdana,arial,sans-serif;
      font-weight: 700;
  }

  @media only screen and (max-width: 1180px){
    width: 100%;
  }
`