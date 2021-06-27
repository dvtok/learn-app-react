import React, {Component} from 'react'
import ArticleList from "./ArticleList"
import {data as articles} from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    state = {
        reverted: false
    }

    articlesLocal = articles.slice()


    render() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        App name
                        <button className="btn" onClick={this.revert}>Изменение</button>
                    </h1>
                </div>
                <ArticleList articles={this.articlesLocal} />
            </div>
        ) 
    }

    

    revert = () => {           
        console.log(this.articlesLocal)     
        this.articlesLocal.reverse()
        this.setState({        
            reverted: !this.state.reverted
        })
    }
}

export default App