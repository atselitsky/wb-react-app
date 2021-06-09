import * as React from "react"

type Props = {
  saveArticle: (article: IMqttChannel  | any) => void
}

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IMqttChannel | {}>()

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault()
    saveArticle(article)
  }

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="path"
        placeholder="Path"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <button disabled={article === undefined ? true : false}>
        Add article
      </button>
    </form>
  )
}