
import React from 'react';
import Card from './Card';

const cardData = [
  { id: 1, title: 'Serverless Bootstrapper', url: 'https://www.example.com/page1', image: 'https://images.pexels.com/photos/7313450/pexels-photo-7313450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Fastrack the API development journey.' },
  { id: 2, title: 'API Bootstrapper', url: 'https://www.example.com/page2', image: 'https://images.pexels.com/photos/7313450/pexels-photo-7313450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Create serverless lambda though accelerator.' },
  { id: 3, title: 'ia Tester', url: 'https://www.example.com/page3', image: 'https://images.pexels.com/photos/7313450/pexels-photo-7313450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Gen AI Testing framework.' },
  { id: 4, title: 'Clique', url: 'https://www.example.com/page3', image: 'https://images.pexels.com/photos/7313450/pexels-photo-7313450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Gen AI Testing framework.' },
  { id: 5, title: 'SW IPaaS Code Generator', url: 'https://www.example.com/page3', image: 'https://images.pexels.com/photos/7313450/pexels-photo-7313450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Gen AI solution to generate IPasS Code.' },
  { id: 6, title: 'Frontend Accelerator', url: 'https://www.example.com/page3', image: 'https://images.pexels.com/photos/7313450/pexels-photo-7313450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Frontend GenAI solution to generate Cypress & Storybook from Frontend Code.' },
  { id: 3, title: 'Seamless Till Health Checker', url: 'https://www.example.com/page3', image: 'https://images.pexels.com/photos/7313450/pexels-photo-7313450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'A solution to identify till health in Semless Area.' },
];

function App() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 display-4 fw-bold">Community of Practice</h1>
      <p className="text-center mb-5 text-muted">
        Explore a variety of accelerator developed by TCS Community of Practice.
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardData.map((card) => (
          <div className="col" key={card.id}>
            <Card title={card.title} url={card.url} image={card.image} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
