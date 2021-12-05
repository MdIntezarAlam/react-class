import { ChatEngine } from 'react-chat-engine' //Using Chat Engine From Chatengine.
import ChatFeed from './component/ChatFeed'
import './App.css'
import LoginForm from './component/LoginForm'

const App = () => {
   if (!localStorage.getItem('username')) return <LoginForm />

   return (
      <ChatEngine height="100vh"
         projectID="a9b281bd-170f-476d-8816-e1242717d294"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
   );
}
export default App;
