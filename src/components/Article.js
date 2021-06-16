import React from 'react'

function Article() {
    const body = <section>body</section>
    return (
        <div className="hello" style={{color: 'red'}}>
            <h2>title1</h2>
            {body}
            <h3>дата создания: {(new Date()).toDateString()}</h3>
        </div>
    )
}

export default Article