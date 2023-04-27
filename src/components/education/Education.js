import React from "react"
import "./Education.css"

const Education = () => {
    return (
        <div className="education-container">
        <div className="education-desc">
            <h3>Formação Acadêmica e Cursos:</h3>
            <div className="education-desc-text">
                <h4>Colégio Tiradentes da Polícia Militar de Minas Gerais</h4>
                <p>Ensino Médio - 2008</p>
            </div>
            <div className="education-desc-text">
                <h4>Alura-ONE: Oracle Next Education</h4>
                <p>Curso de formação em programação disponibilizado pela Alura, em parceria com a Oracle.</p>
   
                <h5>Formação Iniciante em Programação T4 - ONE</h5>
                <p>Carga Horária: 71h/aula. Concluida em 15/01/2023</p>

                <h5>Formação Business Agility T4 - ONE</h5>
                <p>Carga Horária: 27h/aula. Concluida em 09/02/2023</p>

                <h5>Formação Front End T4 - ONE</h5>
                <p>Carga Horária: 89h/aula. Concluida em 28/03/2023</p>

                <h5>Formação React T4 - ONE</h5>
                <p>Carga Horária: 62h/aula. Em andamento</p>
            </div>
        </div>

    </div>
    )
}

export default Education;