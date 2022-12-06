import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import imgAdd from '../assets/add-icon.svg';
import BudgetModal from "./BudgetModal";
import WalletList from "./WalletList";

function AccountContainer(props) {
    const [isBudgetOpen, setIsBudgetOpen] = useState(false);
    const [walletList, setWalletList] = useState([])
    const [currentWallet, setCurrentWallet] = useState(null)
    const {currentUser, setCurrentUser, accounts, setAccounts} = props;

    const listWallets = currentUser?.wallets || []

    // finding current wallet

    useEffect(() => {
        if (listWallets.length > 0){
            const selectedWallet = listWallets.find((wallet) => wallet.isCurrentAccount);
            setCurrentWallet(selectedWallet);
        }
    }, [walletList, accounts])

    
    function OpenBudgetModal(){
        setIsBudgetOpen(true);
        
    }


    return(
        <div className="AccountContainer">
            <button className="AddAccountButton" onClick={OpenBudgetModal}>
                    <img src={imgAdd}/>
                 Account
            </button>
            {isBudgetOpen && <BudgetModal walletList={walletList} setWalletList={setWalletList} setIsBudgetOpen={setIsBudgetOpen} currentUser={currentUser} accounts={accounts} setAccounts={setAccounts} currentWallet={currentWallet} setCurrentWallet={setCurrentWallet}/>}
            <WalletList currentUser={currentUser} listWallets={listWallets} currentWallet={currentWallet} setCurrentWallet={setCurrentWallet} accounts={accounts} setAccounts={setAccounts} />
            
        </div>
    )
}

export default AccountContainer