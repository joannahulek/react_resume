import { getEducation, getWork, CvElement } from "./CvContent";

function CV2 () {
    return (
        <div>
            <hr></hr>
            {renderTable("Work Experience", getWork())}
            <hr></hr>
            {renderTable("Education", getEducation())}
            <hr></hr>
        </div>
    )
}

export default CV2

function renderTable(title:string, items:CvElement[]) {
    return <div className="row">
        <div className="col"><h2>{title}</h2></div>
        <div className="col-9">{items.map((item) => (
                <table className="table">
                            <thead>
                    <tr>
                                <th colSpan={2}>{item.label}</th>
                            </tr>
                            <tr>
                                <td className="companyName">{item.company}</td>
                                <td>{item.time}</td>
                            </tr>
                            </thead>
                            <tr>
                                <td colSpan={2}>
                                    <small>{item.description}</small>
                                </td>
                            </tr>
                        </table>
                    )
                )
                }
                </div>

    </div>;
}