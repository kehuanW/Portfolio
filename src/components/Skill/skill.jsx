import "./skill.css";

const Skill = () => {
    return (
        <div className="s">
            <h1 className="s-title">TECHNICAL SKILLS</h1>
            <div className="underline"></div>
            <table className="s-table">
                <tbody>
                    <tr className="s-table-tr">
                        <th className="s-table-th">Languages</th>
                        <td className="s-table-td">
                            <p className="s-table-td-p">JavaScript/HTML5/CSS3, Python, SQL, Java, R, C</p>
                        </td>
                    </tr>
                    <tr className="s-table-tr">
                        <th className="s-table-th">Frameworks & Libraries</th>
                        <td className="s-table-td">
                            <p className="s-table-td-p">React, Redux, Express.js, Django, RESTful APIs, Bootstrap, Mongoose</p>
                            <p className="s-table-td-p">PyTorch, Spark, Pandas, NumPy, Matplotlib, scikit-learn</p>
                        </td>
                    </tr>
                    <tr className="s-table-tr">
                        <th className="s-table-th">Databases</th>
                        <td className="s-table-td">
                            <p className="s-table-td-p">MongoDB, MySQL, SQLite, Oracle, Access, SQL Server</p>
                        </td>
                    </tr>
                    <tr className="s-table-tr">
                        <th className="s-table-th">Miscellaneous:</th>
                        <td className="s-table-td">
                            <p className="s-table-td-p">Git, Linux, Node.js, npm, AWS EC2, OOP, Agile Methodology</p>
                            <p className="s-table-td-p">Power BI, Azure ADF</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Skill;