import React from 'react'
import './styles.css'

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherList(){
    return (
       <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponiveis">
              <form id="search-teacher">
                  <div className="input-block">
                      <label htmlFor="">Materia</label>
                      <input type="text"  />
                  </div>

                  <div className="input-block">
                      <label htmlFor="">Dia da semana</label>
                      <input type="text"  />
                  </div>

                  <div className="input-block">
                      <label htmlFor="">Horario</label>
                      <input type="text"  />
                  </div>
              </form>
           </PageHeader>
           {/* <article className="teacher-item">
        <header>
            <img src="https://i.pinimg.com/236x/f9/95/c3/f995c3006ecfa3d809f194c73a326c17.jpg" alt=""/>
            <div>
            <strong>ODAIR</strong>
            <span>PHP</span>
        </div>
        </header>
       
        <p>
        Lorem Ipsum is simply dummy text of the printing and
         typesetting industry. Lorem Ipsum has been the industry's 
         standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset 

        </p>
        <footer>
            <p>
                Preço/Hora: <strong>R$ 30,00</strong>
            </p>
            <button type="button"><img src={whatsappImg} alt="whatsappImg"/>Entrar em contato</button>
        </footer>
        </article> */}
           <main>
            <TeacherItem
            name="odair"
            profisao="PHP"
            descricao="Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset"
            price="30,30"
            img="https://i.pinimg.com/236x/f9/95/c3/f995c3006ecfa3d809f194c73a326c17.jpg"
            />
           </main>
       </div>
    )
}

export default TeacherList