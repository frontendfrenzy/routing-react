import { useParams } from "react-router-dom"

const Post = () => {
    {/*namma data wa parent toda child page lanthu show panna react la oru hooks eruku 
        athu name useParam() --> Hook*/}

    const {id} = useParams()

  return (
    <div>
      <br/>
        <h1>post hello world {id}</h1>
    </div>
  )
}

export default Post