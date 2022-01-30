import React from 'react'
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.message}>
            <div className={styles.messageAvaField}>
                <img className={styles.messageAva} src={props.avatar}/>
            </div>
            <div className={styles.messageBody}>
                <div className={styles.messageName}> {props.name}</div>
                <div className={styles.messageText}> {props.message}</div>
                <div className={styles.messageTime}> {props.time}</div>


            </div>
        </div>
    )
}

export default Message
