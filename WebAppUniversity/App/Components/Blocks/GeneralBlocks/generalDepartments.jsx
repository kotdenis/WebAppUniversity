import React from 'react';
import './GeneralCSS/generalblocks.css';


export default class GeneralDepartments extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6">
                        <div className="card cardEngeneer">
                            <img src={require("./GeneralImages/artificial-intelligence.jpg")} width="450" />
                            <div className="card-img-overlay">
                                <h4 className="card-title" id="cardEngeneerTitle">
                                    John Doe</h4>
                                <p className="card-text" id="cardEngeneerText">Some example text.</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card cardNatural">
                            <img src={require("./GeneralImages/trilobite.jpg")} width="450" id="cardNaturalImg" />
                            <div className="card-img-overlay">
                                <h4 className="card-title" id="cardNaturalTitle">
                                    John Doe</h4>
                                <p className="card-text" id="cardNaturalText">Some example text.</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row rowDescription">
                    <div className="col-6">
                        <p>
                            Исследовательская (научно-техническая) деятельность — прикладные научные исследования,
                            технико-экономическое обоснование планируемых капиталовложений, планирование.
                    <br />
                            Конструкторская (проектная) деятельность — конструирование (проектирование),
                            создание и испытание прототипов (макетов, опытных образцов) технических устройств;
                            разработка технологий их изготовления (сооружения), упаковки, перевозки, хранения и проч.
                </p>
                    </div>
                    <div className="col-6">
                        <p id="p2">
                            Это науки, изучающие природу понимаемую в широком смысле как материальный мир Вселенной.
                            Важно понимать, что знания об окружающем мире несовершенны и даже бывают довольно далеки от
                            истины. Теории, на которых базируются естественные науки, представляют собой лишь объяснение
                            какого-либо явления. В зависимости от того, в какой степени они согласуются с реальностью, определяется
                            их качество.
                </p>
                    </div>
                </div>
            </div>
        );
    }
}