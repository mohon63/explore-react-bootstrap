import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './conponents/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=39aa6265d78a463db82682629dc6e5a9')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
      {
        news.length === 0 ?
          <Spinner animation="grow" />
          :
          <Row xs={1} md={3} className="g-4">
            {
              news.map(nw => <News news={nw}></News>)
            }
          </Row>
      }
    </div>
  );
}

export default App;
