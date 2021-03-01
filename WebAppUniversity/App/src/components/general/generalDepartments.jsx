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
                            <div className="card-img-overlay">
                                <h4 className="card-title" style={{ color: "white" }}>
                                    John Doe</h4>
                                <p className="card-text" style={{ color: "white" }}>Some example text.</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="card">
                            <img src={require("../../images/trilobite.jpg")} />
                            <div className="card-img-overlay">
                                <h4 className="card-title" style={{ color: "white" }}>
                                    John Doe</h4>
                                <p className="card-text" style={{ color: "white" }}>Some example text.</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
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