import { useCallback, useEffect, useState } from "react";
import Notification from "../components/Notification";

const transition = {
    zlide: 'slide',
    zoom: 'zoom'
}

const useNotification = (position = 'top-right', transition = 'slide') => {
    const [notification, setNotification] = useState(null);
    const [animationClass, setAnimationClass] = useState('');

    let timer;

    const triggerNotification = useCallback((notificationProps) => {
        clearTimeout(timer)

        const enterClass = `notification-enter-${notificationProps.animation || 'fade'}`;
        const exitClass = `notification-exit-${notificationProps.animation || 'fade'}`;

        setAnimationClass(enterClass)
        setNotification(notificationProps)


        timer = setTimeout(() => {
            setAnimationClass(exitClass)
            setTimeout(() => {
                setNotification(null)

            }, 500)
        }, notificationProps.duration)
    }, [])

    const closeNotification = () => {
        setNotification(null)
    }

    useEffect(() => {
        return clearTimeout(timer)
    }, [])

    const NotificationComponent = notification ? (
        <div className={`${position} ${animationClass}`}>
            <Notification {...notification} onClose={closeNotification} />
        </div>
    ) : null

    return [NotificationComponent, triggerNotification];
}

export default useNotification;