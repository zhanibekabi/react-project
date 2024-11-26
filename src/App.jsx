import React from 'react'
import './index.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Items from './Components/Items'
import Categories from './Components/Categories'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItems: [],
      orders: [],
      items: [

        {
          id: 1,
          title: 'one-pocket shirt',
          image: 'img/shirt.png',
          desc: "",
          category: "shirt",
          price: "10.27"
        },
        {
          id: 2,
          title: 'squared shirt',
          image: 'img/shirt 2.png',
          desc: "",
          category: "shirt",
          price: "10.27"
        },
        {
          id: 3,
          title: 'gray shirt',
          image: 'img/shirt3.png',
          desc: "",
          category: "shirt",
          price: "10.27"
        },
        {
          id: 4,
          title: 'cozy white shirt',
          image: 'img/shirt4.png',
          desc: "",
          category: "shirt",
          price: "10.27"
        },
        {
          id: 5,
          title: 'fade bold shirt',
          image: 'img/shirt5.png',
          desc: "",
          category: "shirt",
          price: "10.27"
        },
        {
          id: 6,
          title: 'black cargo',
          image: 'img/wal 1.png',
          desc: "",
          category: "pants",
          price: "10.27"
        },
        {
          id: 7,
          title: 'washed jeans',
          image: 'img/wal2.png',
          desc: "",
          category: "pants",
          price: "10.27"
        },
        {
          id: 8,
          title: 'parachute pants',
          image: 'img/wal3.png',
          desc: "",
          category: "pants",
          price: "10.27"
        },
        {
          id: 9,
          title: 'gray cargo',
          image: 'img/wal4.png',
          desc: "",
          category: "pants",
          price: "10.27"
        },
        {
          id: 10,
          title: 'black parachute',
          image: 'img/wal5.png',
          desc: "",
          category: "pants",
          price: "10.27"
        },
        {
          id: 11,
          title: 'black knit',
          image: 'img/jeide1.png',
          desc: "",
          category: "knit",
          price: "10.27"
        },
        {
          id: 12,
          title: 'brown knit',
          image: 'img/jeide2.png',
          desc: "",
          category: "knit",
          price: "10.27"
        },
        {
          id: 13,
          title: 'green knit',
          image: 'img/jeide3.png',
          desc: "",
          category: "knit",
          price: "10.27"
        },
        {
          id: 14,
          title: 'gray knit',
          image: 'img/jeide4.png',
          desc: "",
          category: "knit",
          price: "10.27"
        },
        {
          id: 15,
          title: 'violet knit',
          image: 'img/jeide5.png',
          desc: "",
          category: "knit",
          price: "10.27"
        },
        {
          id: 16,
          title: 'washed jacket',
          image: 'img/jacket1.png',
          desc: "",
          category: "jacket",
          price: "10.27"
        },
        {
          id: 17,
          title: 'jacket',
          image: 'img/jacket2.png',
          desc: "",
          category: "jacket",
          price: "10.27"
        },
        {
          id: 18,
          title: 'leather jacket',
          image: 'img/jacket3.png',
          desc: "",
          category: "jacket",
          price: "10.27"
        },
        {
          id: 19,
          title: 'vintage jacket',
          image: 'img/jacket4.png',
          desc: "",
          category: "jacket",
          price: "10.27"
        },
        {
          id: 20,
          title: 'green jacket',
          image: 'img/jacket5.png',
          desc: "",
          category: "jacket",
          price: "10.27"
        },
        

      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  
  render(props) {
    return (
    <div className='wrapper'>
    <Header orders = {this.state.orders} onDelete = {this.deleteOrder}/>
    <Categories chooseCategory = {this.chooseCategory}/>
    <Items items = {this.state.currentItems} onAdd = {this.addToOrder}/>

    <Footer />
    </div>
    )
  }
  
  deleteOrder(id) {
    //console.log(id)
    this.setState({orders: this.state.orders.filter(el =>
      el.id !==id
    )})

  }
  addToOrder(item){
    this.setState({orders: [...this.state.orders, item]})
  }
  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({currentItems: this.state.items.filter(el => el.category === category)})
  }


  addToOrder(item){
    let arrayId = false
    this.state.orders.map(el => {
      if(el.id === item.id) {
        arrayId = True
      }
    })
    if (!arrayId) {
      this.setState({orders: [...this.state.orders, item]})
    }
}
}

export default App
