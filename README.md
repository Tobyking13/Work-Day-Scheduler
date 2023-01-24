# Toby King - Work Day Scheduler

## Description

I have created an application that allows you to set reminders for each hour of the working day such as important meetings or deadlines etc. The application highlights the current hour of the day & allows the user to delete each input hour by hour. All this information is stored in local storage so the next time the application is launched the information is retrieved and the user can resume from where they left off.

This application was made primarily using jQuery to manipulate the DOM. I also used moment.js to get information about the date and time. This application is split into 2 sections;

The first section uses moment.js to get information about the date and time. This is then displayed on the jumbotron. There is also a function that compares the hour of each day to the current hour and if it is greater than, will turn the hour rows green, less than will turn the hour rows grey and equal to the current hour, will turn the hour row red. Using setInterval() this application will update every minute for the date and time code functions and every second for the time function.

Secondly, this application allows the user to save information on the textareas of each row. There is a function that will loop through each row and any value stored in them will be saved to local storage in this format: "hour09: "user input"". This function will store information for each hour. Another function will recall that saved information and store it in a global object that contains strings of the user input for each hour. Finally, there is a third function that will take that information and send it to the DOM using jquery. Using this system of 3 functions allows the application to update previously stored information if there is nothing to display nothing and allows the user to write over or create new information. 

Finally, there are a couple of buttons. Save button which stores the user input and a delete button which will delete the user input for that specific hour. This also deletes the user input stored in local storage so it won't be retrieved the next time the application is loaded. 

Very happy with the outcome of this, I want to implement this functionality further by automatically storing user input in local storage without the need to press the save button. I also want to implement a date picker so the user can set a schedule for multiple days rather than the current date which this app is currently limited to.



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

https://tobyking13.github.io/Work-Day-Scheduler/

## Usage

![Toby King Work Day Scheduler](./images/screenshot-scheduler.png "Toby King Work Day Scheduler" )
Screenshot of the webpage live on Github pages.

## Credits

N/A

## License

N/A

## Badges

N/A

## Features

* Tells the local time and date at the top of the aplication.
* Highlights the current hour on the scheduler. Green represents hours of the day in the future and grey represents past hours.
* Allows the user to write their schedule for each hour of the working day. 
* The application will store the user schedule information so next time the application is loaded, the schedule will show up.
* Functionality to delete the users schedule.

## How to Contribute

N/A

## Tests

N/A