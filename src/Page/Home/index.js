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
          <Link to="/tabs">
            <Card>
              <h3>Tabs Experience</h3>
            </Card>
          </Link>
          <Link to="/tabscontek">
            <Card>
              <h3>Tabs Contekan</h3>
            </Card>
          </Link>
          <Link to="/slider">
            <Card>
              <h3>Slider</h3>
            </Card>
          </Link>
          <Link to="/slider-auto">
            <Card>
              <h3>Slider auto</h3>
            </Card>
          </Link>
          <Link to="/lorem-generator">
            <Card>
              <h3>Lorem generator</h3>
            </Card>
          </Link>
          <Link to="/simple-crud">
            <Card>
              <h3>Simple Crud</h3>
            </Card>
          </Link>
          <Link to="/simple-crud-contekan">
            <Card>
              <h3>Simple Crud Contekan</h3>
            </Card>
          </Link>
        </CardContainer>
      </div>
    </div>
  )
}



export default HomeIndex

