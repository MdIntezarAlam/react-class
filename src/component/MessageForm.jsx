import { useState } from 'react'; //Using useState
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState('');  //Using useState
  const { chatId, creds } = props; //Array Destructring

  //This function is handleOnchange
  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };
  //This function is handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault(); //Thsi is for Browser Default

    //new var for removing whitespace
    const text = value.trim(); // This is For removes whitespace from both sides of a string. 

    // Using condition if length is grater than zero ,message will be send
    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }
    setValue(''); //We r using setvalue as Empty
  };

  //This function is Uploding Images
  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };
  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send messages....."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false} //we can not upload Multiple File
        id="upload-button"
        style={{ display: 'none' }} //styling
        onChange={handleUpload.bind(this)} //This is For Uploding File on the Chat Box
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};
export default MessageForm;