import React from 'react';
import './TicketItem.scss';
import ticket from '../../assets/icons/ticket.svg';
export default function TicketItem({ title, time, place, content = [], price, ...rest }) {
    return (
        <div className='ticket-item' data-aos="fade-right" {...rest}>
            <div className="ticket-item__circle">
            </div>
            <div className="ticket-item__info">
                <h3>{title}</h3>
                <p className='time'>Thời gian diễn ra: <span>{time}</span></p>
                <p className="place">Địa điểm: <span>{place}</span></p>
                <div className="content">
                    {content.map(e => <p key={e}>{e}</p>)}
                </div>
                <div className="price">
                    <img src={ticket} alt="ticket_icon" />
                    <p>{price}</p>
                </div>
                <div className="button">
                    <p>ĐẶT VÉ TẠI ĐÂY</p>
                </div>
            </div>
        </div>
    );
}
