import React from 'react'
import { useParams } from 'react-router-dom'

const tabs = [ //not true
    { title: 'tab1', content: 'content1' },
    { title: 'tab2', content: 'content2' },
    { title: 'tab3', content: 'content3' },
]
const Tab = () => {
    const param = useParams()
    const data = tabs[param.tabId - 1]
    return (
        <div>
            <div>content {param.tabId}</div>
            <div>{ data.content }</div>
        </div>
    )
}

export default Tab


// import React from 'react'

// const Tab = (props) => {
//     return (
//         <div>
//             <div>title : {props.title}</div>
//             <div>info : {props.content}</div>
//         </div>
//     )
// }

// export default Tab