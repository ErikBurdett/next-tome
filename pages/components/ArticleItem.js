import Link from 'next/link'
import Image from 'next/image'
import articleStyles from '/styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <Image src={article.cover}
        width='100%'
        height='100%'
        alt="D&D Session Cover Image"
        layout='responsive'/>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  )
}

export default ArticleItem