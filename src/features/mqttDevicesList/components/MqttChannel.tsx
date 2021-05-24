import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  article: IMqttChannel
  removeArticle: (article: IMqttChannel) => void
}

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteArticle = React.useCallback(
    (article: IMqttChannel) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  )

  return (
    <div className="Article">
      <div>
        <h1>{article.path}</h1>
        <p>{article.body}</p>
      </div>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  )
}