DB → 서버 → 클라이언트

서버 (정적,동적)
1. (데이터+HTML) → 브라우저
2. react 등 (데이터(json)) → 아이폰,안드로이드, 등

## Create react app (typescript) vscode에서 Hello World 찍기
app.tsx
```
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
```
index.tsx
```
import * as React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root')
render(<App />, rootElement)

reportWebVitals();
```
