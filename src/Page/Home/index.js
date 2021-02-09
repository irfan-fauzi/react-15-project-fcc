import React from 'react'
import Banner from './Banner/Banner';
import { Link } from 'react-router-dom';
import { Card, CardContainer } from './StyledHome';

const HomeIndex = () => {
  return (
    <div>
      <Banner />
      <div className="projects">
        <h1 className="project-title">Basic Projects</h1>
        <CardContainer>
          <Link to="/birthday">
            <Card>
              <h3>Birthday</h3>
            </Card>
          </Link>
          <Link to="/tours">
            <Card>
              <h3>Tours</h3>
            </Card>
          </Link>
          <Link to="/qa">
            <Card>
              <h3>Question</h3>
            </Card>
          </Link>
          <Link to="/food">
            <Card>
              <h3>Food</h3>
            </Card>
          </Link>
        </CardContainer>
      </div>
    </div>
  )
}



export default HomeIndex

