import React from 'react';

export default class SearchHistory extends React.Component {
   
    render(){

        const { lineItems } = this.props;
        // console.log("props in searchhistory", this.props);
        // console.log("lineItems", lineItems);
        return (
            <div className='card border-info mb-3'>
                <div className='card-header bg-info'>Search History</div>
                <div className='card-body text-center'>
                    <table className='table table-striped'>
                        <tbody>
                          {
                            lineItems.map((lineItem,index) => (
                                <tr key={index}>
                                    <td>{ lineItem.cityName }</td>
                                    <td>
                                        <p>{ lineItem.date }</p>
                                        <p>{ lineItem.time }</p>
                                    </td>
                                </tr>
                                ))                              
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}