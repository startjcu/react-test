import React from 'react'
import PriceList from './components/PriceList'

const items = [{
  "id": 1,
  "title": "去旅游",
  "price": 200,
  "date": "2018-09-01",
  "category": {
    "id": 1,
    "name": "旅行",
    "type": "income"
  }
}, {
  "id": 2,
  "title": "去旅游",
  "price": 400,
  "date": "2018-09-01",
  "category": {
    "id": 1,
    "name": "出游",
    "type": "outcome"
  }
}]

function App() {
  return (
    <div>
      <PriceList
        items={items}
        onModifyItem={(item) => { alert(item.id) }}
        onDeleteItem={(item) => { alert(item.id) }}
      />
    </div>
  );
}

export default App;
