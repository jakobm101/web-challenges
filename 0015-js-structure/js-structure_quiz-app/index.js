import cards from './components/CardList/CardArray.js'
import Card from './components/Card/Card.js'
import CardList from './components/CardList/CardList.js'
import Header from './components/Header/Header.js'
import Form from './components/Form/Form.js'
import Bookmark from './components/Bookmark/Bookmark.js'

function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
