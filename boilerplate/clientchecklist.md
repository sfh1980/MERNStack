# Client Checklist

* create client
```javascript
npx create-react-app client
```

* cd into client folder
* install dependencies
```javascript
npm install react-router-dom axios
```
* set up react-router-dom in index.js
```javascript
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```








* test React connectivity
    * in Terminal, make sure you are cd'd into client
    * type...
```javascript
npm start
```
* browser React server page should open up. Open Inspect on the browser

* set up React Router Dom in app.js
```javascript
import { Routes, Route } from 'react-router-dom';

function App()
    return
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
```
* create a components folder in ProjectName/client/src










# REUSABLE COMPONENTS



* create NavBar.jsx reusable component
```javascript
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
    const {title="Title Here", linkAction="/", linkName="Link Name Here"} = props
    return(
        <div>
            <h1>{title}</h1>
            <Link to={linkAction}>{linkName}</Link>
        </div>
    )
}
```


* create Form.jsx reusable component
```javascript
import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useNavigate } from 'react-raoter-dom'


function Form() {
    const Navigate = useNavigate
    const [formInfo, setFormInfo]= useState({
        name:"",
        things:"",  //or an array[]
        number: 0
    })
    const [formErrs, setFormErrs] = useState([])
    const inputHandler = (e) => {
        let value = e.target.value
        let name = e.target.name
        //if things is an array, below allows to be array and not string
        if (name === "things") value = value.split(",") 

        setFormInfo(
            ...formInfo, 
            [name]: value
        )
    }

    const formHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/tableName', {
            name: formInfo.name, 
            things: formInfo.things, 
            number: formInfo.number,
        })
        .then(res => {
            Navigate('/')
        })
        .catch(err => {
            const errs = []
            let data = err.response.data.error.errors
            for(const key in data){
                let msg = data[key].message
                errs.push(msg)
            }
            setFormErrs(errs)
        })
    }
    
    return (
        <div>
        {
            formErrs.map((item) => {
                return (
                    <p key={idx}>{item}</p>
                )
            })
        }
            <form onSubmit={formHandler}>
                <div>
                    <label>name</label>
                    <input type="text" name="name" id="name" onChange={inputHandler} value={formInfo.name} /> 
                </div>
                <div>
                    <label>things</label>
                    <input type="text" things="things" id="things" onChange={inputHandler} value={formInfo.things} /> 
                </div>
                <div>
                    <label>number</label>
                    <input type="number" number="number" id="number" onChange={inputHandler} value={formInfo.number} /> 
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

```



* Table.jsx resuable component
```javascript
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Table() {
    const[allnames, setAllNames] = useState([])

    useEffect(() => {
        axios.get(http://localhost:8000/api/tableNames)
        .then(res => {
            setAllNames(res.data.allNames)
        })
        .catch(err => console.log(err))
    }, [])

    


    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>things</th>
                        <th>number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allNames.map((item, idx) => {
                            return(
                                <tr key={item._id}>
                                    <td> {item.name} </td>
                                    <td> {item.things} </td>
                                    <td> {item.number} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
```

* see how resuable components get used in Main, Create, Edit, View One pages below...



# CRUD Components
* create Main.jsx

```javascript
import React from 'react'
import NavBar from './NavBar'

function Main() {
    return
    <div>
        <NavBar
        title="dashboard"
        linkName="create"
        linkAction="/tableName/create"    
    />
    <table />
    </div>
}
export default Main
```






*  tableNameCreate
```javascript
import React from 'react';
import NavBar from './Navbar';

function tableNameCreate () {
    return(
        <div>
            <NavBar
            title="Whatever"
            linkName="dashboard"
            linkAction="/"
            />
            <Form /> //reusable component
        </div>
    )
}

export default tableNameCreate
```
* set routes for CRUD components in App.js
```javascript
import './App.css.';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App()
    return
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/tableName/create" element={<tableNameCreate />} />
            </Routes>
        </div>
```