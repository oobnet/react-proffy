import React from 'react'
import whatsappImg from '../../assets/images/icons/whatsapp.svg'
import './styles.css'


interface TeacherItemProps  {
    name: string,
    profisao: string,
    descricao: string,
    img: string,
    price: string,
}



const TeacherItem: React.FC<TeacherItemProps> = ({
    name,profisao,descricao,img,price
}) => {
    return (
        <article className="teacher-item">
        <header>
            <img src={img} alt="Img"/>
            <div>
            <strong>{name}</strong>
            <span>{profisao}</span>
        </div>
        </header>
            <p>{descricao}</p>
        <footer>
            <p>
            Preço/Hora: <strong>R$ {price}</strong>
            </p>
            <button type="button"><img src={whatsappImg} alt="whatsappImg"/>Entrar em contato</button>
        </footer>
        </article>
    )
}

export default TeacherItem