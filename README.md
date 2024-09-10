# EventNow

**EventNow** is an event management and ticket booking platform designed to streamline the planning and attending of events. The platform offers a comprehensive solution for both event organizers and attendees, simplifying tasks such as event creation, ticket sales, and attendee management.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [User Roles](#user-roles)
  - [Super Admin](#super-admin)
  - [General User](#general-user)
  - [Organization Account](#organization-account)
- [Event Management](#event-management)
- [Contact](#contact)

## Features

- User management for both Super Admins and general users
- Ticket booking with secure payment options using PayHere Sandbox
- QR code-based attendance confirmation
- Real-time event updates and notifications
- Comprehensive organization management system for event teams
- Marketing campaigns, including community posts and social media sharing
- Event dashboard with sales, attendance, and revenue reports

## Installation

### Prerequisites

- Node.js
- NPM (or Yarn)
- AWS Cognito or Firebase Authentication for user management
- PayHere Sandbox for payment processing

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/eventnow.git](https://github.com/ruchithx/EventsNow.git
    ```

2. Navigate to the project directory:
    ```bash
    cd eventnow
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Configure environment variables for AWS Cognito or Firebase, and the PayHere payment gateway.

5. Run the application:
    ```bash
    npm start
    ```

## Usage

Once installed, the platform provides an interface for users to:

- Create, manage, and promote events
- Purchase event tickets securely
- Receive real-time notifications for event updates
- Manage event attendance using QR codes

## User Roles

### Super Admin

- Manage and approve event organizations
- Control event approvals and manage comments
- Whitelist or blacklist users
- View and manage event reports and payments

### General User

- Sign up using email or social media accounts (Google, Facebook, X, Apple ID)
- Register for events, buy tickets, and receive confirmation emails with QR codes
- Receive notifications and reminders for upcoming events

### Organization Account

- Manage event teams and assign permissions
- Organize payouts and manage event dashboards
- Create and manage host pages for events

## Event Management

Organizers can create and manage events with options to:

- Set ticket prices, event descriptions, and perks
- Use a customizable host page or static HTML uploads
- Manage event attendance using a QR code scanner
- Send marketing updates and post in the community section

## Contact

For any questions or inquiries, please contact:

- **Mentor:** Sandun Isuru Niraj - [SandunN@99x.io](mailto:SandunN@99x.io)
