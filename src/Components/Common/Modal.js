import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'

function ModalExampleModal({ open, setOpen, singleCrypto, closeModal }) {
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
        >
            <Modal.Header>{singleCrypto.name}</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={singleCrypto.image ? singleCrypto.image.large : ''} wrapped />
                <div>
                    <div>
                        <h1>Market Capital</h1>
                        <h5>
                            USD: $ {singleCrypto.market_data ? singleCrypto.market_data.market_cap.usd.toLocaleString() : ''}
                        </h5>
                        <h5>
                            INR: ₹ {singleCrypto.market_data ? singleCrypto.market_data.market_cap.inr.toLocaleString() : ''}
                        </h5>
                    </div>

                    <div style={{ marginTop: 20 }}>
                        <h1>Market Change in 24 Hours</h1>
                        <h5>
                            USD: $ {singleCrypto.market_data ? singleCrypto.market_data.market_cap_change_24h_in_currency.usd.toLocaleString() : ''}
                        </h5>
                        <h5>
                            INR: ₹ {singleCrypto.market_data ? singleCrypto.market_data.market_cap_change_24h_in_currency.inr.toLocaleString() : ''}
                        </h5>
                        <h5>
                            PERCENTAGE: {singleCrypto.market_data ? `${singleCrypto.market_data.market_cap_change_percentage_24h} %` : ''}
                        </h5>
                    </div>
                </div>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={closeModal}>
                    Close
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalExampleModal