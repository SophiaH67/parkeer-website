import React from 'react';
import { parkingslot } from './interfaces'

let refreshFunction = () => { };

export function refresh(): void {
  refreshFunction();
}

export function setRefreshFunction(func: () => void) {
  refreshFunction = func;
}

export const addParkingSlot = (parkingSlot: parkingslot) => {
    let parkingSlots = getParkingSlots();
    parkingSlots.push(parkingSlot);
    localStorage.setItem('parkingSlots', JSON.stringify(parkingSlots));
    refresh();
}

export const getParkingSlots = ():parkingslot[] => {
    let parkingSlotsString = localStorage.getItem('parkingSlots');
    if (parkingSlotsString === null) parkingSlotsString = "[]";
    let parkingSlots: parkingslot[] = JSON.parse(parkingSlotsString);
    parkingSlots = parkingSlots.filter(parkingSlot => parkingSlot.endTime > new Date().getTime());
    return parkingSlots;
}

export const removeParkingSlot = (id: number):void => {
    let parkingSlots = getParkingSlots();
    parkingSlots = parkingSlots.filter(parkingSlot => parkingSlot.id !== id)
    localStorage.setItem('parkingSlots', JSON.stringify(parkingSlots));
    refresh();
}