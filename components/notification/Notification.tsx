
'use client'
import React, {  useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import NotificationContext from "@/Context/notificationContext";

interface PropsType {
    message: string
    Status : string
}
interface Content {
    content: PropsType
}

export const Notification = ({content}: Content) => {
    console.log("see the content", content)
//   const notificationCtx = useContext(NotificationContext);

    useEffect(() => {
        if (content.Status === 'error') {
            toast.error(content.message, {
                position: "top-right",
                autoClose: 30000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                toastId: 'error1',
                className: 'toast-position'
            });
        } else if (content.Status === 'success') {
            toast.success(content.message, {
                position: "top-right",
                autoClose: 30000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                toastId: 'success1',
                className: 'toast-position'
            });
        }

        // // Clear message and status after 5 seconds
        // const timer = setTimeout(() => {
        //   notificationCtx.hideNotification(); // Function to clear message and status
        // }, 5000);
        // return () => clearTimeout(timer); // Cleanup the timer
    }, [content.Status, content.message]); // Run effect on status or message change

    // if (content.status === 'none') {
    //     return null;
    // }

    return (
        <div className='toast-position'>
            <ToastContainer />
        </div>
    );
}
