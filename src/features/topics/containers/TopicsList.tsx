import * as React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import {Table} from 'antd'

import { addArticle, removeArticle } from "../store/actions"

import {selectors} from '../store'


const ws = new WebSocket('ws://localhost:8080/ws')
const DevicesList:React.FC = () =>{
    const articles = useSelector(selectors.getArticles)
    const columns =[
        {
            title:'Path',
            dataIndex:'path',
            key:'path'
        },
        {
            title:'Body',
            dataIndex:'body',
            key:'body'
            },
    ]
    
    const dispatch: Dispatch<any> = useDispatch()
    
    const saveArticle = React.useCallback(
        (article: IMqttChannel) => dispatch(addArticle(article)),
        [dispatch]
    )

    useEffect(() => {
        ws.onopen = ()=>{
            console.log("Connected to server localhost:1883!!")
        }
        ws.onmessage = (e) =>{
            let msg = JSON.parse(e.data)
            console.log(msg)
            let article:IMqttChannel = {
                key:Math.random(),
                path:msg.Path,
                body:msg.Message
            }
            saveArticle(article)
        }
        ws.onclose = function(){
            alert("Connection has been closed")
    }
    });

        return(
            <main>
            {/* <AddArticle saveArticle={saveArticle} /> 
            {articles.map((article: IMqttChannel) => (
            <Article
                key={article.key}
                article={article}
                removeArticle={removeArticle}
            />
            ))}   */}
            <Table columns={columns} dataSource={articles}/>
            
            </main>
        )
    }

export default DevicesList;