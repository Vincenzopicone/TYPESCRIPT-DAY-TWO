import {Article} from "../interfaces/Article"
import {useState, useEffect} from "react"
import {Button, Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"


const HomeArticle = () => {

    const [article, setArticle] = useState<Article[]>([])



    useEffect(()=>{
        fetchArticle()
    }, [])

    const fetchArticle = async () => {
        try{
            const response = await fetch ("https://api.spaceflightnewsapi.net/v3/articles")
            if(response.ok) {
                let data = await response.json()
                setArticle(data)

            } else {
                alert("Errore nel fetch")

            } 
            
        } catch(error) {
   /*          alert ("Errore grave", error) */

            }
    }
    return (
    <Container className="p-3 d-flex justify-content-between flex-wrap ">
         {article.map ((el) => (
        <>
         <Card style={{width: '500px' }} className="m-3">
        <Card.Img style={{height: '300px' }} variant="top" src={el.imageUrl} />
        <Card.Body className="d-flex flex-column justify-content-between align-item-center">
          <Card.Text><h4><strong>{el.title}</strong></h4></Card.Text>
          <Card.Text>{el.summary}</Card.Text>
          <section className="d-flex justify-content-between align-items-baseline">
          <Link to={`/article/${el.id}`} className="text-center "><Button variant="secondary">Informazioni</Button></Link>
          <h6><strong> {el.newsSite} </strong></h6>
          <Button variant="success" href={el.url}>Articolo Completo</Button>
          </section>
         
        </Card.Body>
      </Card>
      <br />     
      </>))}
    </Container>

    )

}

export default HomeArticle
