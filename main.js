class Room{
    floorNum //num
    roomNum //string
    price //num
    #isBooked=false //boolen

    constructor(floorNum,roomNum,price,isBooked){
        this.floorNum=floorNum
        this.roomNum=roomNum
        if(price!=-1){
            this.price=price
        }
        this.#isBooked=isBooked
    }

    printRoom() {
        console.log(`[${this.#isBooked? "Booked":"Available"}] ${this.roomNum} Room with ${this.floorNum} floors Costs ${this.price}$`)
    }
    book(){
        console.log(this.#isBooked? "Booked":"Available")
    }
    isBooked(){
        return this.#isBooked
    }
    SetRStatus(status){
        this.#isBooked=status
    }
}

// let r1= new Room(4,"104A",500,false)
// r1.printRoom()

class SleepingRoom extends Room{
    personCapacity //num
    constructor(personCapacity,floorNum,roomNum,price,status){
        super(floorNum,roomNum,price)
        this.personCapacity=personCapacity
        this.SetRStatus(status)
    }
}
// let slr1= new SleepingRoom(5,4,"A105",5000,true)
// slr1.book()
class RoomWithView extends Room{
    view //srting
    numberOfBeds //num
    constructor(floorNum,roomNum,price,view,numberOfBeds,status){
        super(floorNum,roomNum,price)
        this.view=view
        this.numberOfBeds=numberOfBeds
        this.SetRStatus(status)
    }
}

// let RWV = new RoomWithView(4,"5A104",1004,"Sea",2,true)
// RWV.book()
// console.log(RWV.view)

class Hotel{
    Address //string
    NumberOfRooms //num
    #minFloor //num
    #maxFloor //num
    rooms //Array of Rooms

    constructor(Address,NumberOfRooms,minFloor,maxFloor,rooms){
        this.Address=Address
        this.NumberOfRooms=NumberOfRooms
        this.#minFloor=minFloor
        this.#maxFloor=maxFloor
        this.rooms=rooms
    }
    setMinf(minf){
        this.#minFloor=minf
    }
    setMaxf(maxf){
        this.#maxFloor=maxf
    }
    getMinf(){
        return this.#minFloor
    }
    getMaxf(){
        return this.#maxFloor
    }
    printAdvertisment(){
        return `Welcome to ${this.Address} hotel, It consists of ${this.NumberOfRooms} Rooms` //to be honest, i don't know what do you mean by minFloor and maxFloor
    }
    listBooked(){
        for (let i=0;i<this.rooms.length;i++){
            if(this.rooms[i].isBooked()){
                console.log(this.rooms[i].roomNum) 
            }       
        }
    }
}

let r1=new Room(4,"104A",500,true)
let r2=new Room(4,"102C",600,true)
let r3=new Room(4,"104N",400,false)
let r4=new Room(5,"105A",550,true)

let rooms=[r1,r2,r3,r4]

let H1=new Hotel("Chicgo",4,1,3,rooms)

H1.listBooked()