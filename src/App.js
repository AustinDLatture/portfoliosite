import React from 'react';  
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={ {height: '100vh', position: 'relative'} }>
        <Layout fixedHeader>
          <Header className="header-color" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Bio & Contact</Link>
                </Navigation>
            </Header>
            <Drawer className="header-color">
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Bio & Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
              <Main/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
