# Notification Page Challenge

## Overview

This project involves building a notifications page that closely follows the provided design. The objective is to create an intuitive and responsive interface with functionality that distinguishes between "unread" and "read" notifications and provides a mechanism to mark all notifications as read.

![Overview](/public/overview.png)

## Features

The page should include the following key features:

### Unread vs. Read Notifications

Unread notifications should be visually distinct from read notifications, allowing users to easily differentiate them.

### Mark All as Read

Implement a "Mark all as read" button that will mark all unread notifications as read and set the unread notifications count to zero.

### Responsive Layout

The interface should adapt to different screen sizes, ensuring an optimal layout across devices, from mobile phones to desktops.

### Interactive States

Implement hover and focus states for all interactive elements (e.g., buttons, links, and notification items) to enhance user experience.

## Getting Started

Follow these steps to get the project up and running locally:

### Clone the repository

```bash
git clone <https://github.com/ImranParthib/Frontend-Mentor.git>
cd <notification-page>
```

### Install dependencies

Make sure you have Node.js installed, then run:

```bash
npm install
```

### Run the development server

Start the development server by running:

```bash
npm run dev
```

This will open the app in your browser, typically at `http://localhost:5173/`.

## Technologies Used

- **React**: For building the user interface and handling state.
- **CSS (Tailwind CSS)**: For styling the components and making the interface responsive.
- **Prop-Types**: For type-checking the props passed to components.

## Features Implemented

- **Notifications display**: Each notification can either be marked as "read" or "unread" with distinct visual styles.
- **Mark All as Read**: A button to mark all notifications as read, which will also update the notification count.
- **Responsive Design**: The page layout adjusts for different screen sizes, ensuring a good user experience on mobile, tablet, and desktop devices.
- **Interactive Elements**: Hover and focus states are applied to buttons and clickable elements for better user interaction.

## Usage

Once you have the app running, you can interact with the notifications as follows:

- **Read/Unread Notifications**: New notifications are marked in blue. Once marked as read, they turn gray.
- **Mark All as Read**: Click the "Mark all as read" button to mark all notifications as read and reset the unread count.
- **Responsive Design**: Resize the browser window or use device emulation tools to see the design adjust for mobile, tablet, and desktop.

## Future Improvements

- **Persist Notifications**: Add functionality to persist notification states (e.g., using local storage or backend integration).
- **User Authentication**: Allow different users to view their respective notifications.
- **Advanced Filtering**: Add functionality to filter notifications by read/unread status.

## Support

If you have any questions or need support, feel free to reach out.[ImranParthib](https://www.linkedin.com/in/imranparthib/)
