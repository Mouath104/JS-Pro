# Hotel Management System
This is a simple Hotel Management System written in JavaScript. It allows you to manage and book rooms in a hotel.

## Usage
The Hotel Management System allows you to:

* Create a new Room object, which represents a room in the hotel.
* Create a new SleepingRoom object, which represents a sleeping room in the hotel.
* Create a new RoomWithView object, which represents a room with a view in the hotel.
* Create a new Hotel object, which represents the hotel itself.
* List all booked rooms in the hotel.

## Examples
* To create a new Room object, you can use the following code:<br>
`let r1 = new Room(4, "104A", 500, true);`

* To create a new SleepingRoom object, you can use the following code:<br>
`let slr1 = new SleepingRoom(5, 4, "A105", 5000, true);`

* To create a new RoomWithView object, you can use the following code:<br>
`let RWV = new RoomWithView(4, "5A104", 1004, "Sea", 2, true);`

* To create a new Hotel object, you can use the following code:<br>
`let r1 = new Room(4, "104A", 500, true);<br>
let r2 = new Room(4, "102C", 600, true);<br>
let r3 = new Room(4, "104N", 400, false);<br>
let r4 = new Room(5, "105A", 550, true);<br>
let rooms = [r1, r2, r3, r4];<br>
let H1 = new Hotel("Chicago", 4, 1, 3, rooms);`<br>

* To list all booked rooms in the hotel, you can use the following code:<br>

`H1.listBooked();`

