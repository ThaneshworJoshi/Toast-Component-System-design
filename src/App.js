import './App.css';
import useNotification from './hooks/useNotification';

function App() {
  const [NotificationComponent, triggerNotification] = useNotification('top-left');

  const showNotification = (type) => {
    triggerNotification({
      type,
      message: "File send successfully",
      duration: 3000,
      // animation: 'fade',
      animation: 'zoom'
    })
  }

  return (
    <div>
      <h1>Notification Component System Design</h1>

      <button onClick={() => showNotification('success')}>Success !</button>
      <button onClick={() => showNotification('error')}>Error !</button>
      {NotificationComponent}
    </div>
  );
}

export default App;
