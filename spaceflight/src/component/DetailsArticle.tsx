import {Article} from "../interfaces/Article"
import {useState, useEffect} from "react"
import {Button, Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {useNavigate, useParams, Link} from "react-router-dom"


const HomeArticleDetails = () => {
    const navigate = useNavigate()

    const [article, setArticle] = useState<Article>()
    const params = useParams()

    console.log(params.id)



    useEffect(()=>{
        fetchArticleDetails()
    }, [])

    const fetchArticleDetails = async () => {
        try{
            const response = await fetch (`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)
            if(response.ok) {
                let data = await response.json()
                console.log(data)
                setArticle(data)
                console.log(article)

            } else {
                alert("Errore nel fetch")

            } 
            
        } catch(error) {
   /*          alert ("Errore grave", error) */

            }
    }
    return (
    <Container className="p-5">
       <section className="d-flex">
        <Card.Img style={{width: "800px", height:"400px"}} variant="top" src={article?.imageUrl}/>
        <Card.Body className="p-3 bg-light ">
          <Card.Text><h2>{article?.title}</h2></Card.Text>          
          <Card.Text>{article?.summary}</Card.Text>
          <Card.Text>Fonte: <strong>{article?.newsSite}</strong> </Card.Text>
          <Card.Text>Pubblicato: {article?.publishedAt}</Card.Text>
          <Button variant="dark" onClick={() => navigate("/")}>BACK HOME</Button>
        </Card.Body>
      </section>
    </Container>

    )

}

export default HomeArticleDetails