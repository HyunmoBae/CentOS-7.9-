DB → 서버 → 클라이언트

## 설치
https://create-react-app.dev/docs/adding-typescript/

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
