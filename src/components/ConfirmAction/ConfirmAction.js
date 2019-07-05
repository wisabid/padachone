import React, { useContext, useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UserContext } from '../../store/context/userContext';
import DialogModal from '../Modal';

const ConfirmAction = (props) => {
    const {setModal} = useContext(UserContext);
    const initialState = props.modalconfig;
    const [modalConfig, setModalConfig] = useState(initialState)
    const handlePrimary = () => {
        setModalConfig({...modalConfig, loading : true})
        props.handlePrimary(() => {
            setModal({show : false, name : ''});
        });        
    }

    const handleSecondary = () => {
      props.handleSecondary(() => {
        setModalConfig(initialState)
      });
      
    }
    const createMarkup = (markup) => {
        // return <div>{{__html: markup}}</div>
        var escapeEl = document.createElement('div');
        escapeEl.innerHTML = markup;
        return escapeEl.textContent;
    }
    return (
        <DialogModal 
            {...props} 
            error={modalConfig.error}
            title={modalConfig.title} 
            description={modalConfig.description} 
            primaryButton={modalConfig.primaryButton?modalConfig.primaryButton:null} 
            handlePrimaryAction={() => handlePrimary()}
            secondaryButton={modalConfig.secondaryButton}
            handleSecondaryAction={() => handleSecondary()}
            loading={modalConfig.loading}
            htmlmarkup={createMarkup(props.message)}>
        </DialogModal>
    )
}

export default ConfirmAction;