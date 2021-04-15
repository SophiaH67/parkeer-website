import React from 'react';
import { parkingslot } from './interfaces'

export const addParkingSlot = (parkingSlot: parkingslot) => {
    let parkingSlots = getParkingSlots();
    parkingSlots.push(parkingSlot);
    localStorage.setItem('parkingSlots', JSON.stringify(parkingSlots));
}

export const getParkingSlots = ():parkingslot[] => {
    let parkingSlots = localStorage.getItem('parkingSlots');
    if (parkingSlots === null) parkingSlots = "[]";
    return JSON.parse(parkingSlots);
}

export const removeParkingSlot = (id: number):void => {
    let parkingSlots = getParkingSlots();
    parkingSlots = parkingSlots.filter(parkingSlot => parkingSlot.id !== id)
    localStorage.setItem('parkingSlots', JSON.stringify(parkingSlots));
}