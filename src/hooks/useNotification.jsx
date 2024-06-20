import { useCallback, useEffect, useState } from "react";
import Notification from "../components/Notification";

const transition = {
    zlide: 'slide',
    zoom: 'zoom'
}

const useNotification = (position = 'top-right', transition = 'slide') => {
    const [notifications, setNotifications] = useState([]);
    const [animationClass, setAnimationClass] = useState('');


    const triggerNotification = useCallback((notificationProps) => {

        const id = Date.now();
        const enterClass = `notification-enter-${notificationProps.animation || 'fade'}`;
        const exitClass = `notification-exit-${notificationProps.animation || 'fade'}`;

        setAnimationClass(enterClass)

        const timer = setTimeout(() => {
            setAnimationClass(exitClass)
            setTimeout(() => {
                closeNotification(id, exitClass)
            }, 500)
        }, notificationProps.duration)

        const newNotification = {
            ...notificationProps,
            id,
            enterClass,
            exitClass,
            timer,
        }

        setNotifications(prev => [...prev, newNotification])
    }, [])

    const closeNotification = (id, exitClass) => {
        setNotifications(prev => prev.map(notification => {
            if (notification.id === id) {
                return { ...notification, exitClass, isExiting: true }
            }
            return notification
        }))

        setTimeout(() => {
            setNotifications(notification => notification.filter(notification => notification.id !== id))
        }, 500)
    }

    useEffect(() => {
        return () => {
            notifications.forEach(notification => clearTimeout(notification.timer))
        }
    }, [])

    const NotificationComponent = notifications.length ? (
        <div className={`${position}`}>
            {
                notifications.map(notification => {
                    return (<div key={notification.id} className={notification.isExiting ? notification.exitClass : notification.enterClass}>
                        <Notification {...notification} onClose={() => closeNotification(notification.id, notification.exitClass)} />
                    </div>)
                })
            }
        </div>
    ) : null

    return [NotificationComponent, triggerNotification];
}

export default useNotification;