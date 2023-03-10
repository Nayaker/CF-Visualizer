import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const L15CountContests = ({ infoData }) => {
  const [countContests, setCountContests] = useState(0);
  var date = new Date();
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');

  var currentDate = (parseInt(year)  - 1) * 365 + (parseInt(month) - 1) * 30 + parseInt(day);
  // console.log("Current Date : ", currentDate);




  

  useEffect(() => {
    var count = 0;
    infoData.forEach(function (result) {
      var date = new Date(result.ratingUpdateTimeSeconds * 1000);
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
      
      var contestDate = (parseInt(year)  - 1) * 365 + (parseInt(month) - 1) * 30 + parseInt(day);
      // console.log("Contest Date : ", contestDate);
      if (currentDate - contestDate <= 15) {
        count++;
      }
    });
    setCountContests(count);
  }, [infoData])


  // console.log("Count : ", count);

  console.log(infoData);
  return (
    <Container>
      <div className="item-left">Number of Contests : </div>
      <div className="item-right">{countContests}</div>
    </Container>
  )
}

export default L15CountContests

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
