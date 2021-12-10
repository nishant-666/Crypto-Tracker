import React from 'react';
import Table from './Common/Table';
export default function CryptoList({ cryptoList, setTotalPages, getSingleCrypto }) {
    return (
        <div>
            <Table
                cryptoList={cryptoList}
                setTotalPages={setTotalPages}
                getSingleCrypto={getSingleCrypto}
            />
        </div>
    )
}
