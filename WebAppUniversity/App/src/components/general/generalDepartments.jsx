import React from 'react';


export default class GeneralDepartments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="col-md-10 col-lg-10">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="card">
                            <img src={require("../../images/artificial-intelligence.jpg")} />
                            <div className="card-img-overlay mt-2">
                                <h3 className="card-title" style={{ color: "white", paddingTop: '40%' }}>
                                    Инженерная школа</h3>
                                <a href="#" className="btn btn-primary">Регистрация</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="card">
                            <img src={require("../../images/trilobite.jpg")} />
                            <div className="card-img-overlay">
                                <h3 className="card-title" style={{ color: "white", paddingTop: '40%' }}>
                                    Естественные науи</h3>
                                <a href="#" className="btn btn-primary">Регистрация</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-md-6 col-lg-6">
                        <p style={{ textAlign: "justify", fontWeight: "bold" }}>
                            Исследовательская (научно-техническая) деятельность — прикладные научные исследования,
                            технико-экономическое обоснование планируемых капиталовложений, планирование.
                    <br />
                            Конструкторская (проектная) деятельность — конструирование (проектирование),
                            создание и испытание прототипов (макетов, опытных образцов) технических устройств;
                            разработка технологий их изготовления (сооружения), упаковки, перевозки, хранения и проч.
                </p>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <p style={{ textAlign: "justify", fontWeight: "bold" }}>
                            Это науки, изучающие природу понимаемую в широком смысле как материальный мир Вселенной.
                            Важно понимать, что знания об окружающем мире несовершенны и даже бывают довольно далеки от
                            истины. Теории, на которых базируются естественные науки, представляют собой лишь объяснение
                            какого-либо явления. В зависимости от того, в какой степени они согласуются с реальностью, определяется
                            их качество.
                </p>
                    </div>
                </div>
            </section>
        );
    }
}