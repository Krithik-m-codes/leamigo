"use client";
import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface TicketType {
    name: string;
    price: number;
    ageRange: string;
}

const BookingPanel: React.FC = () => {
    const [tickets, setTickets] = useState({
        adult: 3,
        youth: 2,
        children: 4,
    });

    const ticketTypes: TicketType[] = [
        { name: 'Adult', price: 282.00, ageRange: '18+ years' },
        { name: 'Youth', price: 168.00, ageRange: '13-17 years' },
        { name: 'Children', price: 80.00, ageRange: '0-12 years' },
    ];

    const handleTicketChange = (type: keyof typeof tickets, value: number) => {
        setTickets(prev => ({ ...prev, [type]: Math.max(0, value) }));
    };

    const totalPrice = ticketTypes.reduce((sum, ticket) => {
        const count = tickets[ticket.name.toLowerCase() as keyof typeof tickets];
        return sum + ticket.price * count;
    }, 0);

    return (
        <div className="max-w-[22rem] mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">From $1,200</h2>

            <div className="mb-6 rounded-lg">
                <div className=" border p-3 rounded-md">
                    <div className="flex items-center">
                        <Calendar className="mr-2 " size={20} />
                        <div>
                            <p className="font-semibold">From</p>
                            <p className="text-sm text-gray-600">February 05 ~ March 14</p>
                        </div>
                    </div>
                </div>
                <div className=" border p-3 rounded-md">
                    <div className="flex items-center">
                        <Clock className="mr-2" size={20} />
                        <div>
                            <p className="font-semibold ">Time</p>
                            <p className="text-sm text-gray-600">Choose time</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="font-bold mb-4">Tickets</h3>
            <div className="space-y-4 mb-6">
                {ticketTypes.map((ticket) => (
                    <div key={ticket.name} className="flex justify-between items-center">
                        <div>
                            <p className=" font-normal">{ticket.name} ({ticket.ageRange})</p>
                            <p className="text-gray-600 font-semibold">${ticket.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                className="w-8 h-8 rounded-full  flex items-center justify-center"
                                onClick={() => handleTicketChange(ticket.name.toLowerCase() as keyof typeof tickets, tickets[ticket.name.toLowerCase() as keyof typeof tickets] - 1)}
                            >
                                -
                            </button>
                            <span>{tickets[ticket.name.toLowerCase() as keyof typeof tickets]}</span>
                            <button
                                className="w-8 h-8 rounded-full flex items-center justify-center"
                                onClick={() => handleTicketChange(ticket.name.toLowerCase() as keyof typeof tickets, tickets[ticket.name.toLowerCase() as keyof typeof tickets] + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="font-bold mb-4">Add Extra</h3>
            <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Add Service per booking
                    </label>
                    <span>$40</span>
                </div>
                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Add Service per person
                    </label>
                    <span>$40</span>
                </div>
                <p className="text-sm text-gray-600">Adult: $17.00 - Youth: $14.00</p>
            </div>

            <div className="flex justify-between items-center mb-6 px-4">
                <h3 className="font-semibold text-base">Total:</h3>
                <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full bg-orange-500 text-white py-5 rounded-md font-semibold">
                Book Now
            </button>
        </div>
    );
};

export default BookingPanel;