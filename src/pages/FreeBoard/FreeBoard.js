import React from 'react';

const FreeBoard = () => {
    return (
        <div className="column">
            <div className="ui grid">
                <div className="row">
                    <div className="column">
                        FreeBoard
                    </div>
                </div>
            </div>
            <div className="ui grid">
                <div className="one column row">
                    <div className="column">
                        <table className="ui blue table">
                            <thead className="">
                                <tr className="">
                                    <th className="two wide">No.</th>
                                    <th className="eleven wide">Title</th>
                                    <th className="three wide">Date</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="">
                                    <td className="">1</td>
                                    <td className="">Cell</td>
                                    <td className="">2015-01-01</td>
                                </tr>
                                <tr className="">
                                    <td className="">2</td>
                                    <td className="">Cell</td>
                                    <td className="">2016-02-02</td>
                                </tr>
                                <tr className="">
                                    <td className="">3</td>
                                    <td className="">Cell</td>
                                    <td className="">2017-03-03</td>
                                </tr>
                            </tbody>
                            <tfoot className="">
                                <tr className="">
                                    <th colSpan="3" className="">
                                        <div className="ui pagination right floated menu">
                                            <a className="icon item">
                                                <i aria-hidden="true" className="left chevron icon"></i>
                                            </a>
                                            <a className="item">1</a>
                                            <a className="item">2</a>
                                            <a className="item">3</a>
                                            <a className="item">4</a>
                                            <a className="icon item">
                                                <i aria-hidden="true" className="right chevron icon"></i>
                                            </a>
                                        </div>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeBoard;