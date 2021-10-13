import React from 'react';
import messageHOC from './HOC';

//interface UserMessage{
//  name: string;
//  message: string;
//}

//const Message = (props: UserMessage): any => {
//  return (
//    <p>{props.name}, {props.message}</p>
//  );
//}

const data= (props: any): any => {
  return (
    <p>{props.name}, {props.message}</p>
  );
}

const Message = messageHOC(data)

export default Message;
