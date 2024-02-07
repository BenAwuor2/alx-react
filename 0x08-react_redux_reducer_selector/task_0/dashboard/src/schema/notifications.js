import * as notificationData from "../../../../notifications.json";

export const getAllNotificationsByUser = (userId) => {
 return notificationData.filter((notification) => {
    return notification.author.id === userId;
}).map ((notification) => notification.context);
};