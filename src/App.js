import './App.css';
import useNotification from './hooks/useNotification';

function App() {
  const [NotificationComponent, triggerNotification] = useNotification('top-left');

  const showNotification = (type) => {
    triggerNotification({
      type,
      message: "File send successfully",
      duration: 3000,
      animation: 'fade',
      // animation: 'zoom'
    })
  }

  return (
    <div className='container'>
      <h1 className='title'>Notification Component System Design</h1>

    <div className='btn-wrapper'>
      <button className='success-btn btn' onClick={() => showNotification('success')}>Success !</button>
      <button className='error-btn btn' onClick={() => showNotification('error')}>Error !</button>
      <button className='info-btn btn' onClick={() => showNotification('info')}>Info !</button>
      <button className='warning-btn btn' onClick={() => showNotification('warning')}>Warning !</button>
    </div>
      {NotificationComponent}
    </div>
  );
}

export default App;
