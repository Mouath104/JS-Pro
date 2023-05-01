class Room{
    floorNum //num
    roomNum //string
    price //num
    #isBooked //boolen

    constructor(fn,rn,pr,ib){
        this.floorNum=fn
        this.roomNum=rn
        if(pr!=-1){
            this.price=pr
        }
        this.#isBooked=ib
    }
}




class Hotel{
    Address //string
    NumberOfRooms //num
    #minFloor //num
    #maxFloor //num

    constructor(adress,nor,minf,maxf){
        this.Address=adress
        this.NumberOfRooms=nor
        this.#minFloor=minf
        this.#maxFloor=maxf
    }
    set setMinf(minf){
        this.#minFloor=minf
    }
    set setMaxf(maxf){
        this.#maxFloor=maxf
    }
    get getMinf(){
        return this.#minFloor
    }
    get getMaxf(){
        return this.#maxFloor
    }
}
let r1=new Room(4,"5",-2,true)
console.log(r1.price)
// let h1=new Hotel("Tokyo",7,3,4)
// console.log(h1.getMinf)
// console.log(h1.getMaxf)