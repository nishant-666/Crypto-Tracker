import React from 'react'
import { Table } from 'semantic-ui-react';

function TableExampleSortable({ cryptoList, getSingleCrypto }) {
    return (
        <div>
            <h3>Click Any Name to see Details</h3>
            <Table unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            Symbol
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Name
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Rank
                        </Table.HeaderCell>
                        {/* <Table.HeaderCell>
                            Capital
                        </Table.HeaderCell> */}
                        <Table.HeaderCell>
                            Current Price
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {cryptoList.map(({ id, symbol, name, market_cap, market_cap_rank, current_price }) => (
                        <Table.Row key={name}>
                            <Table.Cell>{symbol}</Table.Cell>
                            <Table.Cell className='crypto-name' onClick={() => getSingleCrypto(id)}>{name}</Table.Cell>
                            <Table.Cell>{market_cap_rank}</Table.Cell>
                            {/* <Table.Cell>${market_cap.toLocaleString()}</Table.Cell> */}
                            <Table.Cell>${current_price.toLocaleString()}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default TableExampleSortable