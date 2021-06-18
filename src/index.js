import React from 'react'
import ReactDOM from 'react-dom'
import Content from './component/Content'
import styled from 'styled-components'



class Main extends React.Component{
    render() {
        return(
            <>
            <h1>React First Page</h1>
            <Content />
            </>
        );
    }
}
ReactDOM.render(<Main />,document.getElementById('root'))