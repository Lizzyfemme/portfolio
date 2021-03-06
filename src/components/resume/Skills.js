import React from "react";
import styled from "styled-components";

const SkillsDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background-color: transparent;
  border: none;
  font-family: main;
  @media screen and (min-width: 570px) {
    grid-template-columns: auto auto auto;
  }
  @media screen and (min-width: 710px) {
    grid-template-columns: auto auto auto auto;
  }
  @media screen and (min-width: 875px) {
    grid-template-columns: auto;
  }
`;
const SkillsArticle = styled.article`
  // width: auto;
  & h2 {
    font-size: 18px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  & ul {
    padding: 5px;
    margin-top: 2px;
    margin-bottom: 2px;
    list-style-position: inside;
  }
  & li {
    padding-left: 0;
    font-size: 13px;
  }
  @media screen and (min-width: 570px) {
    & h2 {
      font-size: 24px;
    }
    & li {
      font-size: 20px;
    }
  }
`;
const SkillsContainer = styled.div`
  @media screen and (min-width: 875px) {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    width: 50vw;
  }
`;

export default function Skills() {
  return (
    <SkillsContainer>
      <h1>Skills</h1>
      <SkillsDiv>
        <SkillsArticle>
          <h2>Languages</h2>
          <ul>
            <li>JavaScirpt</li>
            <li>HTML</li>
            <li>Ruby</li>
            <li>CSS</li>
            <li>Java</li>
            <li>EJS</li>
            <li>SASS</li>
          </ul>
        </SkillsArticle>
        <SkillsArticle>
          <h2>Frameworks</h2>
          <ul>
            <li>Express</li>
            <li>Rails</li>
          </ul>
        </SkillsArticle>
        <SkillsArticle>
          <h2>Libraries</h2>
          <ul>
            <li>ReactJS</li>
            <li>Axios</li>
            <li>Ajax</li>
            <li>JQuery</li>
            <li>Styled Components</li>
            <li>react-chartjs-2</li>
          </ul>
        </SkillsArticle>

        <SkillsArticle>
          <h2>Databases</h2>
          <ul>
            <li>SQL</li>
            <li>Access</li>
            <li>Postgres</li>
          </ul>
        </SkillsArticle>
        <SkillsArticle>
          <h2>Testing</h2>
          <ul>
            <li>Jest</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Cypress</li>
          </ul>
        </SkillsArticle>
        <SkillsArticle>
          <h2>Environments</h2>
          <ul>
            <li>NodeJS</li>
          </ul>
        </SkillsArticle>
        <SkillsArticle>
          <h2>Software</h2>
          <ul>
            <li>Tableau</li>
            <li>SharePoint</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Premiere</li>
            <li>InDesign</li>
          </ul>
        </SkillsArticle>
      </SkillsDiv>
    </SkillsContainer>
  );
}
