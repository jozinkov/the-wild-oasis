# The Wild Oasis

The Wild Oasis is a hotel management application that is designed to manage hotel operations including sales statistics, cabin management, user management, booking management. It integrates authentication, database storage, and dark mode features.

## Deployed Version

Visit the application at [https://thewildoasis-lgope.netlify.app](https://thewildoasis-lgope.netlify.app)

## Demo Account

You can access the application with following demo account:

- Email Address : **dacov54375@edectus.com**
- Password : **12345678**

## Features

- Authentication + Authorization Creating new users

  - Users of the application are hotel employees.
  - Users can upload their avatar, and change their name and password.

- Cabins

  - A table view of all cabins, showing the cabin photo, name, capacity, price, and current discount.
  - Users can update or delete existing cabins, and add new cabins.

- Bookings

  - A table view of all bookings, showing arrival and departure dates, status, paid amount, cabin and guest details.
  - Booking statuses: "unconfirmed" (booked), "checked in", or "checked out".
  - Booking details also include: the number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price.

- Check In/Out

  - Users can delete, check-in, or check out a booking.
  - If a booking is still not paid when guests arrive, users need to accept payment and then confirm that payment has been received.
  - On check-in, the guest should have the ability to add breakfast for the entire stay, if they hadn't already.

- Guests

  - Guest data contain full name, email, national ID, nationality, and a country flag.

- Dashboard

  - Overview of the last 7, 30, or 90 days:
    - A list of guests checking in and out on the current day. Users can perform these tasks here.
    - Statistics on recent bookings, sales, check-ins, and occupancy rate.
    - A chart showing both "total" sales and "extras" sales (only breakfast at the moment).
    - A chart showing statistics on stay durations.

- Settings

  - Users able to define a few application settings: breakfast price, min and max nights per booking, max guests per booking.

- App dark mode

## Technology Used

- **React**: JavaScript library for building UI

- **Supabase**: An open-source database infrastructure.

- **@tanstack/react-query**: A library for fetching, caching, synchronizing and updating server state.

- **date-fns**: JavaScript date utility library for manipulating dates.

- **react-router-dom**: Library for client and server side routing in React applications.

- **recharts**: Charting library for React.

- **styled-components**: CSS in JavaScript library for styling React components.

- **react-hot-toast**: Customizable toast notification library for React.

- **react-icons**: Collection of popular icons for React.

- **react-hook-form**: React hooks for form state management and validation.

## License

MIT License
