import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { MdClose } from 'react-icons/md';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Arial',
    headerBgColor: '#424890',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#424890',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const Chat = ({ handleClose }) => {
    return (
        <div className='fixed bottom-1 right-1'>
            <ThemeProvider theme={theme}>
                <ChatBot
                    steps={[
                        {
                            id: '1',
                            message: 'Hello, How can I help you?',
                            trigger: '2',
                        },
                        {
                            id: '2',
                            options: [
                                { value: 1, label: 'Courses', trigger: '3' },
                                { value: 2, label: 'Contact', trigger: '4' },
                                { value: 3, label: 'About', trigger: '5' },
                            ],
                        },
                        {
                            id: '3',
                            message: 'We offer various courses, you can check them out on our courses page',
                            trigger: '2',
                        },
                        {
                            id: '4',
                            message: 'You can email us at progyaneducations@gmail.com',
                            trigger: '2',
                        },
                        {
                            id: '5',
                            message: 'We are a company that offers various courses, you can check them out on our about page',
                            trigger: '2',
                        },
                    ]}
                />
            </ThemeProvider>
            <button className='right-0 text-white jover:text-gray-400 bg-red-500 p-3 mt-0 w-full text-xl text-gray-600' onClick={handleClose}>
                {/* <MdClose /> */}
                CLOSE
            </button>
        </div>
    );
};

export default Chat;
