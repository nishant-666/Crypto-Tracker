import './App.css';
import CryptoList from './Components/CryptoList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import alanBtn from "@alan-ai/alan-sdk-web";
import ModalExampleModal from './Components/Common/Modal';

function App() {
  const [cryptoList, setCryptoList] = useState([])
  const [singleCrypto, setSingleCrypto] = useState({});
  const [voiceData, setVoiceData] = useState('');
  const [open, setOpen] = useState(false)
  const getCryptoData = () => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&page=1&sparkline=false`)
      .then((response) => {
        setCryptoList(response.data);
      })
  }

  const getSingleCrypto = (id) => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=en&market_data=true`)
      .then((response) => {
        console.log(response.data)
        setSingleCrypto(response.data)
        openModal()
      })
  }

  useEffect(() => {
    getCryptoData()
    // alanBtn({
    //   key: '0eb9d941dbc6729bd385ee5c9f9cbf5c2e956eca572e1d8b807a3e2338fdd0dc/stage',
    //   onCommand: (commandData) => {
    //     setVoiceData(commandData.data.toLowerCase())
    //     getSingleCrypto()
    //     setOpen(true)
    //   }
    // });
  }, [])

  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }
  return (
    <div className='app-body'>
      <h1>Crypto Tracker</h1>
      <CryptoList
        cryptoList={cryptoList}
        getSingleCrypto={getSingleCrypto}
      />
      <ModalExampleModal
        setOpen={openModal}
        closeModal={closeModal}
        open={open}
        singleCrypto={singleCrypto}
      />
    </div>
  );
}

export default App;
