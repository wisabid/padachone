import React from 'react';
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
 
// ReactDOM.render(
//   <MessengerCustomerChat
//     pageId="<PAGE_ID>"
//     appId="<APP_ID>"
//     htmlRef="<REF_STRING>"
//   />,
//   document.getElementById('demo')
// );

const FbChat = () => {
    return (
        <MessengerCustomerChat
            pageId="1037204483143215"
            appId="1036936539848081"
            htmlRef="<REF_STRING>"
        />
    )
}

export default FbChat;