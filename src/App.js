import './App.css';
import { NewsList } from './components/News/NewsList';
import { News } from './components/News/News';
import { InputBar } from './components/InputBar/InputBar';
import { Img } from './components/Img';
import { Widget } from './components/Widget/Widget';

function App() {
  const data = {
    description: "news",
    src: 'https://i.imgur.com/gtfe7oc.png',
    classes: 'icon'
  }
  const data2 = {
    description: "bear",
    src: 'https://placebear.com/g/200/200',
    classes: 'icon'
  }

  const datasForBigImg = {
    src: 'https://media.kg-portal.ru/production/hobbsandshaw/hobbsandshaw_10.jpg',
    class: 'focusImg'
  }

  const titleWidget = 'Widget'
  return (
    <>
    <NewsList title = 'news'>
      <News props = {data}></News>
      <News props = {data2}></News>
      <News props = {data}></News>
      <News props = {data}></News>
      <News props = {data}></News>
    </NewsList>

    <InputBar />

    <Img src = {datasForBigImg}></Img>

    <Widget title = {titleWidget}>

    </Widget>
    </>
  );
}

export default App;
